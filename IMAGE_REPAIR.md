# Image repair audit

Audited all 56 public routes on the GitHub Pages site on October 22, 2026.
The rendered pages referenced 228 distinct image URLs, including 159 externally
hosted gallery photos. The gallery was scrolled and remaining lazy images opened
to complete loading; none of its image requests produced a broken image.

Four rendered image URLs failed because they used Lovable's ` /__l5e/assets-v1/`
proxy path on github.io. The employee video poster used the same unavailable
proxy. The original five files were recovered unmodified from the club's existing
https://www.matchpointpickleballclub.com website:

- `public/images/anniversary-championship-flyer.jpg`: homepage and Programs promo.
- `public/images/cellaxs-logo-red.png`: featured and regular court thumbnails.
- `public/images/fronteras-logo.png`: Court 7 thumbnail.
- `public/images/cellaxs-logo-white.png`: sponsor card.
- `public/images/katie-ventre-employee-of-the-month-thumbnail.jpg`: employee poster.

The components now use the existing publicAsset helper so the files are served
locally beneath `/matchpoint/`, without hotlinking the old website. No artwork,
copy, layout, gallery content or sponsor branding was substituted.

All referenced local image files exist and raster images were decoded/verified
with Pillow. `scripts/check-images.mjs` now runs before production builds to catch
missing literal public image paths and active Lovable-only image references,
including imported image metadata. It is an offline source check; the externally
hosted gallery still depends on its existing host's availability.

The remaining Lovable video/PDF references are outside this image repair and
remain a separate migration task. This change does not hide image errors with
generic placeholders. Verify the restored images in a live browser after release.
