import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve, relative } from "node:path";

function sources(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) return sources(path);
    return /\.(tsx?|css)$/.test(path) && !/\.(test|spec)\./.test(path) ? [path] : [];
  });
}

const errors = [];
const images = new Set();
for (const file of sources("src")) {
  const source = readFileSync(file, "utf8");
  for (const [, path] of source.matchAll(/["'](\/images\/[^"'\r\n]+)["']/g)) {
    images.add(path);
    if (!existsSync(resolve("public", path.slice(1)))) {
      errors.push(`${relative(".", file)}: missing public${path}`);
    }
  }
  if (/\/__l5e\/[^"'\s]+\.(?:png|jpe?g|webp|gif|svg)/i.test(source)) {
    errors.push(`${relative(".", file)}: image still depends on a Lovable-only URL`);
  }
  for (const [, asset] of source.matchAll(/from\s+["']@\/(assets\/[^"']+\.asset\.json)["']/g)) {
    const metadata = JSON.parse(readFileSync(resolve("src", asset), "utf8"));
    if (metadata.content_type?.startsWith("image/") && metadata.url?.startsWith("/__l5e/")) {
      errors.push(`${relative(".", file)}: imported image ${asset} depends on Lovable`);
    }
  }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Image references checked (${images.size} local images; no active Lovable image URLs)`);
}
