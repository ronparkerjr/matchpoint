// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://www.matchpointpickleballclub.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/our-facility", changefreq: "monthly", priority: "0.8" },
  { path: "/memberships", changefreq: "weekly", priority: "0.9" },
  { path: "/memberships/drop-in", changefreq: "monthly", priority: "0.6" },
  { path: "/memberships/elite", changefreq: "monthly", priority: "0.6" },
  { path: "/memberships/elite-couple", changefreq: "monthly", priority: "0.6" },
  { path: "/memberships/elite-family", changefreq: "monthly", priority: "0.6" },
  
  { path: "/memberships/silver-sneakers", changefreq: "monthly", priority: "0.6" },
  { path: "/memberships/silver-sneakers-plus", changefreq: "monthly", priority: "0.6" },
  { path: "/memberships/tier-1-serve", changefreq: "monthly", priority: "0.6" },
  { path: "/memberships/tier-2-drive", changefreq: "monthly", priority: "0.6" },
  { path: "/memberships/off-peak-unlimited", changefreq: "monthly", priority: "0.6" },
  { path: "/memberships/badminton-member", changefreq: "monthly", priority: "0.6" },
  { path: "/memberships/table-tennis-member", changefreq: "monthly", priority: "0.6" },
  { path: "/corp-memberships", changefreq: "monthly", priority: "0.7" },
  { path: "/faq", changefreq: "monthly", priority: "0.7" },
  { path: "/leagues", changefreq: "weekly", priority: "0.8" },
  { path: "/programs", changefreq: "weekly", priority: "0.9" },
  { path: "/pickleball", changefreq: "monthly", priority: "0.8" },
  { path: "/pickleball-instruction", changefreq: "monthly", priority: "0.8" },
  { path: "/lee-whitwell-clinics", changefreq: "weekly", priority: "0.8" },
  { path: "/reserve-a-court", changefreq: "weekly", priority: "0.8" },
  { path: "/player-showcase", changefreq: "monthly", priority: "0.5" },
  { path: "/table-tennis", changefreq: "monthly", priority: "0.7" },
  { path: "/badminton", changefreq: "monthly", priority: "0.7" },
  { path: "/trackman-golf", changefreq: "monthly", priority: "0.7" },
  { path: "/playsight", changefreq: "monthly", priority: "0.6" },
  { path: "/photos", changefreq: "monthly", priority: "0.5" },
  { path: "/videos", changefreq: "weekly", priority: "0.6" },
  { path: "/event-results", changefreq: "weekly", priority: "0.6" },
  { path: "/private-events", changefreq: "monthly", priority: "0.7" },
  { path: "/sponsors", changefreq: "monthly", priority: "0.5" },
  { path: "/ortho-alliance", changefreq: "monthly", priority: "0.5" },
  { path: "/employment", changefreq: "monthly", priority: "0.6" },
  { path: "/announcements", changefreq: "weekly", priority: "0.6" },
  { path: "/preferred-hotels", changefreq: "monthly", priority: "0.6" },
  { path: "/contact-us", changefreq: "monthly", priority: "0.7" },
  { path: "/member-of-the-month", changefreq: "monthly", priority: "0.5" },
  { path: "/employee-of-the-month", changefreq: "monthly", priority: "0.5" },
  { path: "/nominate-a-member", changefreq: "monthly", priority: "0.4" },
  { path: "/nominate-an-employee", changefreq: "monthly", priority: "0.4" },
  { path: "/become-a-sponsor", changefreq: "monthly", priority: "0.5" },
  { path: "/sponsorship-deck", changefreq: "monthly", priority: "0.5" },
];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
