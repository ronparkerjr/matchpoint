"""One-time public media import. Builds never fetch these sources at runtime."""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.request import Request, urlopen
import hashlib
import io
import json
import re
import subprocess
import time

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SCRATCH = ROOT / ".media-import"
SCRATCH.mkdir(exist_ok=True)
SOURCES = json.loads((ROOT / "scripts/media-sources.json").read_text())
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"


def digest(path):
    result = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            result.update(chunk)
    return result.hexdigest()


def fetch(url, target):
    for attempt in range(4):
        try:
            with urlopen(Request(url, headers={"User-Agent": UA}), timeout=180) as response:
                with target.open("wb") as stream:
                    while chunk := response.read(1024 * 1024):
                        stream.write(chunk)
            return
        except Exception:
            if attempt == 3:
                raise
            time.sleep(2 ** attempt)


def import_asset(item):
    target = (ROOT / item["path"]).resolve()
    if not target.is_relative_to(ROOT / "public"):
        raise ValueError("Target must be beneath public/")
    target.parent.mkdir(parents=True, exist_ok=True)
    original = SCRATCH / (hashlib.sha256(item["url"].encode()).hexdigest() + target.suffix)
    fetch(item["url"], original)
    if item.get("expectedBytes") and original.stat().st_size != item["expectedBytes"]:
        raise ValueError(f"Unexpected original size: {item['path']}")
    record = {"path": item["path"], "source": item["url"], "sourceBytes": original.stat().st_size,
              "sourceSha256": digest(original), "kind": item["kind"]}
    if item["kind"] == "video":
        subprocess.run([
            "ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(original),
            "-map", "0:v:0", "-map", "0:a?", "-vf",
            "scale=w='min(1280,iw)':h='min(1280,ih)':force_original_aspect_ratio=decrease:force_divisible_by=2",
            "-r", "30", "-c:v", "libx264", "-preset", "medium", "-crf", "25",
            "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart",
            "-threads", "2", str(target),
        ], check=True)
        probe = json.loads(subprocess.check_output([
            "ffprobe", "-v", "error", "-show_entries", "format=duration:stream=codec_name,width,height",
            "-of", "json", str(target),
        ]))
        record["probe"] = probe
    elif item["kind"] == "gallery":
        with Image.open(original) as im:
            im = ImageOps.exif_transpose(im).convert("RGB")
            im.thumbnail((1920, 1920), Image.Resampling.LANCZOS)
            im.save(target, "JPEG", quality=88, optimize=True, progressive=True)
    else:
        data = original.read_bytes()
        if item["kind"] == "pdf" and not data.startswith(b"%PDF-"):
            raise ValueError("Source is not a PDF")
        if item["kind"] == "image":
            with Image.open(io.BytesIO(data)) as im:
                im.verify()
        target.write_bytes(data)
    if target.stat().st_size >= 95 * 1024 * 1024:
        raise ValueError(f"Media exceeds repository file budget: {target}")
    record.update(bytes=target.stat().st_size, sha256=digest(target))
    print(f"Imported {item['path']}: {record['sourceBytes']} -> {record['bytes']} bytes", flush=True)
    return record


with ThreadPoolExecutor(max_workers=2) as pool:
    records = list(pool.map(import_asset, SOURCES["assets"]))

# Keep the font families, weights and unicode coverage while making every font URL local.
font_dir = ROOT / "public/fonts"
font_dir.mkdir(exist_ok=True)
css_temp = SCRATCH / "fonts.css"
fetch(SOURCES["fontsCss"], css_temp)
css = css_temp.read_text()
for url in sorted(set(re.findall(r"url\((https://[^)]+)\)", css))):
    name = hashlib.sha256(url.encode()).hexdigest()[:20] + ".woff2"
    target = font_dir / name
    fetch(url, target)
    if target.read_bytes()[:4] not in [b"wOF2", b"wOFF", b"\x00\x01\x00\x00"]:
        raise ValueError("Source is not a supported web font")
    records.append(dict(path=str(target.relative_to(ROOT)), source=url, bytes=target.stat().st_size,
                        sha256=digest(target), kind="font"))
    css = css.replace(url, "./" + name)
if "https://" in css or "http://" in css:
    raise ValueError("Font stylesheet still contains a remote dependency")
stylesheet = font_dir / "fonts.css"
stylesheet.write_text(css)
records.append(dict(path="public/fonts/fonts.css", source=SOURCES["fontsCss"],
                    bytes=stylesheet.stat().st_size, sha256=digest(stylesheet), kind="stylesheet"))
manifest = {"version": 1, "assets": records,
            "notes": "Sources are provenance only. Runtime/builds use committed local files. Videos are web-optimized H.264/AAC; gallery images are capped at 1920px."}
(ROOT / "public/media-manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
total = sum(p.stat().st_size for p in (ROOT / "public").rglob("*") if p.is_file())
if total > 950_000_000:
    raise ValueError(f"Published media would exceed the 950 MB safety budget: {total}")
print(f"Verified {len(records)} imported assets; public size {total} bytes", flush=True)
