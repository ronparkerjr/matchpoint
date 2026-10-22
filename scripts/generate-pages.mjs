import { readFileSync, mkdirSync, copyFileSync } from "node:fs";
import { resolve } from "node:path";

// GitHub Pages has no SPA rewrites. Give every declared public route an entry
// document so direct visits and refreshes return the app with HTTP 200.
const app = readFileSync("src/App.tsx", "utf8");
const cities = readFileSync("src/data/nearbyCities.ts", "utf8");
const routes = new Set([
  ...Array.from(app.matchAll(/<Route path="(\/[^"*]*)"/g), (m) => m[1]),
  ...Array.from(cities.matchAll(/path:\s*"(\/[^"*]*)"/g), (m) => m[1]),
]);
for (const route of routes) {
  if (route === "/") continue;
  const directory = resolve("dist", route.slice(1));
  mkdirSync(directory, { recursive: true });
  copyFileSync("dist/index.html", resolve(directory, "index.html"));
}
copyFileSync("dist/index.html", "dist/404.html");
console.log(`Pages entry documents written (${routes.size} routes)`);
