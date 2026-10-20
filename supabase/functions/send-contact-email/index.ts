import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isString = (v: unknown, max: number) =>
  typeof v === "string" && v.trim().length > 0 && v.length <= max;

const encoder = new TextEncoder();

async function hash(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return new Response(
        JSON.stringify({ error: "Invalid request." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { firstName, lastName, email, message, newsletter, subject, recaptchaToken } = body as Record<string, unknown>;

    if (
      !isString(firstName, 100) ||
      !isString(lastName, 100) ||
      !isString(email, 255) ||
      !isString(message, 5000) ||
      !EMAIL_RE.test(String(email).trim())
    ) {
      return new Response(
        JSON.stringify({ error: "Please check your input and try again." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const recaptchaSecret = Deno.env.get("RECAPTCHA_SECRET_KEY");
    if (recaptchaSecret) {
      if (!isString(recaptchaToken, 4096)) {
        return new Response(JSON.stringify({ error: "Please complete the security check." }), {
          status: 403,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const verification = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        body: new URLSearchParams({ secret: recaptchaSecret, response: String(recaptchaToken) }),
      });
      const result = await verification.json();
      if (!result.success || typeof result.score !== "number" || result.score < 0.5) {
        return new Response(JSON.stringify({ error: "Security check failed. Please try again." }), {
          status: 403,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) throw new Error("Backend credentials are not configured");
    const supabase = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false } });
    const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const fingerprint = await hash(`${forwarded}:${String(email).trim().toLowerCase()}`);
    const { data: recent } = await supabase
      .from("form_submission_limits")
      .select("submitted_at")
      .eq("fingerprint", fingerprint)
      .maybeSingle();
    if (recent && Date.now() - new Date(recent.submitted_at).getTime() < 60_000) {
      return new Response(JSON.stringify({ error: "Please wait a minute before sending another message." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json", "Retry-After": "60" },
      });
    }

    const safeFirst = escapeHtml(String(firstName).trim());
    const safeLast = escapeHtml(String(lastName).trim());
    const safeEmail = escapeHtml(String(email).trim());
    const safeMessage = escapeHtml(String(message));
    const newsletterYes = newsletter === true || newsletter === "true";
    const formSubject = isString(subject, 100) ? escapeHtml(String(subject).trim()) : "Contact Form Submission";
    const emailSubject = `New ${formSubject} from ${String(firstName).trim()} ${String(lastName).trim()}`.slice(0, 200);

    // Send notification email to operations team
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Match Point Columbus <noreply@matchpointpickleballclub.com>",
        to: ["support@matchpointpickleballclub.com"],
        subject: emailSubject,
        text: `New ${formSubject}\n\nName: ${String(firstName).trim()} ${String(lastName).trim()}\nEmail: ${String(email).trim()}\nNewsletter Opt-in: ${newsletterYes ? "Yes" : "No"}\n\nMessage:\n${String(message)}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #c8a96e;">New ${formSubject}</h2>
            <p><strong>Name:</strong> ${safeFirst} ${safeLast}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Newsletter Opt-in:</strong> ${newsletterYes ? "Yes" : "No"}</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 16px; border-radius: 4px;">${safeMessage}</p>
          </div>
        `,
      }),
    });

    if (!notificationRes.ok) {
      const errBody = await notificationRes.text();
      console.error(`Resend notification error [${notificationRes.status}]:`, errBody);
      return new Response(
        JSON.stringify({ error: "Failed to send message. Please try again." }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    await supabase.from("form_submission_limits").upsert({ fingerprint, submitted_at: new Date().toISOString() });

    // Send confirmation email to the submitter
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Match Point Columbus <noreply@matchpointpickleballclub.com>",
        to: [String(email).trim()],
        subject: "We received your message — Match Point Columbus",
        text: `Thanks for reaching out, ${String(firstName).trim()}!\n\nWe've received your message and will get back to you as soon as possible.\n\nYour message:\n${String(message)}\n\n---\nMatch Point Columbus • 350 McCormick Blvd, Columbus, OH 43213\n614-569-2556`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #c8a96e;">Thanks for reaching out, ${safeFirst}!</h2>
            <p>We've received your message and will get back to you as soon as possible.</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Your message:</strong></p>
            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 16px; border-radius: 4px;">${safeMessage}</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            <p style="color: #888; font-size: 13px;">
              Match Point Columbus &bull; 350 McCormick Blvd, Columbus, OH 43213<br/>
              <a href="tel:614-569-2556" style="color: #888;">614-569-2556</a>
            </p>
          </div>
        `,
      }),
    });

    if (!confirmationRes.ok) {
      const errBody = await confirmationRes.text();
      console.error(`Resend confirmation error [${confirmationRes.status}]:`, errBody);
      // Notification already sent; treat as success for the user.
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
