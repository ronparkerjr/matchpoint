# Standalone club media

This extends the image repair so the website's owned media is served from this
repository rather than Lovable or the old gallery host. Third-party YouTube,
Facebook and PlaySight embeds, and booking/form services, remain external by the
owner's explicit choice. They do not use the old Lovable website.

## Local files

- Recovered artwork and all local graphics: `public/images/`.
- All 159 gallery photographs: `public/images/gallery/`, preserving filenames and
  order; optimized JPEGs with a maximum 1920px dimension.
- Five recovered feature videos: `public/videos/features/`. Full-duration H.264
  video/AAC audio copies, up to 1280px on either dimension at 30fps, CRF 25, with
  fast-start playback. This includes the hero, employee/member spotlights and the
  archived Amy clip. An unusable extra phone audio/metadata track is omitted;
  the first playable audio track is retained.
- Existing instructor and sponsor videos remain in `public/videos/`.
- Membership and sponsorship PDFs: `public/downloads/`.
- Bebas Neue and Inter fonts, their weights/subsets and stylesheet: `public/fonts/`.
- Both fonts' original Open Font License/copyright notices are included there.
- Social-preview images now point to media on the GitHub Pages host too.

All runtime paths use the existing Vite deployment base `/matchpoint/` where
appropriate. No `.asset.json` imports or Lovable asset proxies remain in source.
The font stylesheet and gallery no longer request files from external asset hosts.

## Integrity and size

`public/media-manifest.json` records imported file paths, byte sizes, SHA-256
hashes, original-source provenance, and video probe/duration data. Original URLs
in the manifest are audit information, not runtime dependencies. Large videos
are web-optimized because their originals exceed GitHub's per-file limit.

`scripts/check-media.mjs` runs before builds. It rejects remaining owned-media
remote references, missing/incomplete imported files, files at or above 95 MiB,
and a public directory over 950 MB. The safety margin is below GitHub Pages'
1 GB site limit. The import validates images/PDFs/fonts and checks that video
durations remain within 0.25 seconds of the originals. Builds use committed files
only; the one-time importer is not a build/deployment dependency.

Import result: 181 recorded assets, including 159 gallery images, 5 videos, 6
artwork/poster images, 1 membership PDF, 9 font files and 1 font stylesheet. The
public directory is approximately 760.3 MB before the small license/documentation
additions. All 9 tests, TypeScript, production build and 56 route entry documents
passed in GitHub Actions. The prebuild check also verifies imported-file hashes.

## Original import

`scripts/media-sources.json` identifies the original club assets and external
gallery files. `scripts/localize-media.py` is a one-time migration utility, not a
website service. The branch-only import workflow was removed after successful
import and validation. The remaining validation workflow is read-only and uses
the committed media; it never downloads from the old asset hosts.

Official size references:
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github
