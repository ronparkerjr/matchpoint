import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { resolve, relative } from "node:path";
import { createHash } from "node:crypto";

function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}
const errors = [];
for (const file of [...files("src").filter((p) => /\.(tsx?|css)$/.test(p) && !/\.(test|spec)\./.test(p)), resolve("index.html")]) {
  const source = readFileSync(file, "utf8");
  if (/__l5e|\.asset\.json|oceanbay-junkremoval\.com|fonts\.googleapis\.com|fonts\.gstatic\.com|matchpointpickleballclub\.com\/(?:images|videos|downloads)/.test(source)) {
    errors.push(`${relative(".", file)}: nonlocal owned media dependency`);
  }
  for (const [, path] of source.matchAll(/["'](\/(?:images|videos|downloads|fonts)\/[^"'\r\n]+)["']/g)) {
    if (!existsSync(resolve("public", path.slice(1)))) errors.push(`Missing public${path}`);
  }
}
if (!existsSync("public/media-manifest.json")) {
  errors.push("Media import has not completed: public/media-manifest.json missing");
} else {
  const manifest = JSON.parse(readFileSync("public/media-manifest.json", "utf8"));
  for (const asset of manifest.assets) {
    if (!existsSync(asset.path) || statSync(asset.path).size !== asset.bytes) {
      errors.push(`Missing/incomplete imported media: ${asset.path}`);
    } else if (createHash("sha256").update(readFileSync(asset.path)).digest("hex") !== asset.sha256) {
      errors.push(`Imported media checksum mismatch: ${asset.path}`);
    }
  }
}
if (existsSync("public/fonts/fonts.css") && /url\(["']?https?:/i.test(readFileSync("public/fonts/fonts.css", "utf8"))) {
  errors.push("Font stylesheet contains a remote font URL");
}
let total = 0;
for (const file of files("public")) {
  const size = statSync(file).size;
  total += size;
  if (size >= 95 * 1024 * 1024) errors.push(`File exceeds the 95 MiB budget: ${relative(".", file)}`);
}
if (total > 950_000_000) errors.push(`Site exceeds the 950 MB media budget: ${total} bytes`);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Standalone media verified; public size ${(total / 1_000_000).toFixed(1)} MB. Third-party embeds retained.`);
}
