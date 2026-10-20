import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const SITE_ORIGIN = "https://www.matchpointpickleballclub.com";

const TRACKED_PATHS = [
  "/pickleball-lessons-columbus",
  "/pickleball-leagues-columbus",
  "/indoor-pickleball-courts-columbus",
  "/pickleball-gahanna-oh",
  "/pickleball-reynoldsburg-oh",
  "/pickleball-new-albany-oh",
  "/pickleball-westerville-oh",
  "/pickleball-pickerington-oh",
  "/pickleball-dublin-oh",
];

const lovableApiKey = Deno.env.get("LOVABLE_API_KEY");
const connectionApiKey = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
const gscHeaders = {
  Authorization: `Bearer ${lovableApiKey}`,
  "X-Connection-Api-Key": connectionApiKey ?? "",
};

type SiteEntry = { siteUrl: string; permissionLevel?: string };

function coversTarget(siteUrl: string, target: URL) {
  if (siteUrl.startsWith("sc-domain:")) {
    const domain = siteUrl.slice("sc-domain:".length).toLowerCase();
    const host = target.hostname.toLowerCase();
    return host === domain || host.endsWith(`.${domain}`);
  }
  try {
    return target.href.startsWith(new URL(siteUrl).href);
  } catch {
    return false;
  }
}

async function gsc(path: string, init?: RequestInit) {
  const response = await fetch(`${GATEWAY}${path}`, {
    ...init,
    headers: { ...gscHeaders, ...(init?.body ? { "Content-Type": "application/json" } : {}) },
  });
  if (!response.ok) {
    const body = await response.text();
    console.error(`Search Console request failed [${response.status}] ${path}: ${body}`);
    throw new Error(`[${response.status}]: ${body}`);
  }
  return response.json();
}

async function resolveSiteUrl(selectedSiteUrl?: string) {
  const { siteEntry = [] } = (await gsc("/webmasters/v3/sites")) as { siteEntry?: SiteEntry[] };
  const target = new URL(SITE_ORIGIN);
  const matches = siteEntry.filter(
    (entry) => entry.permissionLevel !== "siteUnverifiedUser" && coversTarget(entry.siteUrl, target),
  );
  if (selectedSiteUrl) {
    const selected = matches.find((entry) => entry.siteUrl === selectedSiteUrl);
    if (!selected) throw new Error("The selected Search Console property is not verified for this site");
    return { status: "selected" as const, siteUrl: selected.siteUrl };
  }
  if (matches.length === 0) throw new Error("No verified Search Console property covers this site");
  if (matches.length === 1) return { status: "selected" as const, siteUrl: matches[0].siteUrl };
  return { status: "selection_required" as const, candidates: matches.map((m) => m.siteUrl) };
}

/** Monday (UTC) of the week that just completed, as YYYY-MM-DD. */
function lastCompletedWeekStart(now = new Date()) {
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const dow = (d.getUTCDay() + 6) % 7; // 0 = Monday
  d.setUTCDate(d.getUTCDate() - dow - 7);
  return d.toISOString().slice(0, 10);
}

function addDays(iso: string, days: number) {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) throw new Error("Backend credentials are not configured");

    const supabase = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false } });
    const suppliedToken = req.headers.get("x-cron-secret");
    const { data: tokenRows, error: tokenError } = await supabase
      .from("seo_tracker_tokens")
      .select("token")
      .limit(10);
    const tokenIsValid = Boolean(
      suppliedToken && !tokenError && tokenRows?.some((row) => row.token === suppliedToken),
    );
    if (!tokenIsValid) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!lovableApiKey || !connectionApiKey) {
      throw new Error("Search Console credentials are not configured");
    }

    let selectedSiteUrl: string | undefined;
    if (req.method === "POST") {
      const body = await req.json().catch(() => ({}));
      if (typeof body?.selectedSiteUrl === "string") selectedSiteUrl = body.selectedSiteUrl;
    }

    const resolution = await resolveSiteUrl(selectedSiteUrl);
    if (resolution.status === "selection_required") {
      return new Response(JSON.stringify(resolution), {
        status: 409,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const siteUrl = resolution.siteUrl;

    const weekStart = lastCompletedWeekStart();
    const startDate = weekStart;
    const endDate = addDays(weekStart, 6);

    const indexRows: Record<string, unknown>[] = [];
    const keywordRows: Record<string, unknown>[] = [];
    const errors: string[] = [];

    for (const path of TRACKED_PATHS) {
      const pageUrl = `${SITE_ORIGIN}${path}`;

      // 1. Indexing status
      try {
        const inspection = await gsc("/v1/urlInspection/index:inspect", {
          method: "POST",
          body: JSON.stringify({ inspectionUrl: pageUrl, siteUrl }),
        });
        const index = inspection?.inspectionResult?.indexStatusResult ?? {};
        indexRows.push({
          page_url: pageUrl,
          site_url: siteUrl,
          week_start: weekStart,
          verdict: index.verdict ?? null,
          coverage_state: index.coverageState ?? null,
          robots_txt_state: index.robotsTxtState ?? null,
          indexing_state: index.indexingState ?? null,
          google_canonical: index.googleCanonical ?? null,
          user_canonical: index.userCanonical ?? null,
          last_crawl_time: index.lastCrawlTime ?? null,
          is_indexed: index.verdict === "PASS",
          raw: inspection?.inspectionResult ?? null,
        });
      } catch (e) {
        errors.push(`inspect ${path}: ${(e as Error).message}`);
      }

      // 2. Local keyword rankings for that page
      try {
        const analytics = await gsc(
          `/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
          {
            method: "POST",
            body: JSON.stringify({
              startDate,
              endDate,
              dimensions: ["query"],
              rowLimit: 25,
              dimensionFilterGroups: [
                { filters: [{ dimension: "page", operator: "equals", expression: pageUrl }] },
              ],
            }),
          },
        );
        for (const row of analytics?.rows ?? []) {
          keywordRows.push({
            page_url: pageUrl,
            site_url: siteUrl,
            week_start: weekStart,
            query: row.keys?.[0] ?? "",
            clicks: row.clicks ?? 0,
            impressions: row.impressions ?? 0,
            ctr: row.ctr ?? 0,
            position: row.position ?? null,
          });
        }
      } catch (e) {
        errors.push(`searchAnalytics ${path}: ${(e as Error).message}`);
      }
    }

    if (indexRows.length) {
      const { error } = await supabase
        .from("seo_index_snapshots")
        .upsert(indexRows, { onConflict: "page_url,week_start" });
      if (error) errors.push(`db index snapshots: ${error.message}`);
    }
    if (keywordRows.length) {
      const { error } = await supabase
        .from("seo_keyword_snapshots")
        .upsert(keywordRows, { onConflict: "page_url,query,week_start" });
      if (error) errors.push(`db keyword snapshots: ${error.message}`);
    }

    return new Response(
      JSON.stringify({
        status: "ok",
        siteUrl,
        weekStart,
        pagesInspected: indexRows.length,
        keywordsTracked: keywordRows.length,
        errors,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (error) {
    const message = (error as Error).message ?? "Unknown error";
    console.error("seo-weekly-tracker failed:", message);
    return new Response(JSON.stringify({ error: "Weekly SEO tracking failed", details: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
