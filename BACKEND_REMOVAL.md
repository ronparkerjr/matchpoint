# Static website backend removal

This records the original removal. A later change configures the contact and
nomination forms for FormSubmit; see [current form setup](FORMS.md) for activation
and delivery verification. The original unavailable-form behavior below is
historical.

## Repository audit

Based on main at `55ba1af` (October 20, 2026). The initial Lovable upload was
`abbbf0d`; subsequent commits changed Vite configuration and the Pages workflow,
but did not remove the backend. No existing pull requests were found during review.

The only browser Supabase consumers were ContactForm, NominationForm, Auth,
Admin, and ResetPassword. No public navigation or sitemap entries linked to the
three account routes. Public page content comes from local files and external
embeds/links, rather than Supabase queries. The admin page checked user_roles and
displayed links to public pages; it did not edit public content.

## Result and feature loss

- Public pages, media, styling, links, form fields, and newsletter checkbox remain.
- Contact and both nomination forms show an unavailable notice and disabled submit
  button. Their submit handlers also prevent default submission. They make no
  email/backend request, emit no submission-success analytics, and show no success
  confirmation. Values stay only in the current component state.
- Sign-in, registration, password recovery/reset, and the admin dashboard are
  removed. `/auth`, `/admin`, and `/reset-password` now use the existing NotFound page.
- Removed the client, generated database types, preview auth storage broker,
  dependency, reCAPTCHA helper, backend config, migrations, and edge functions.
- The removed send-contact-email function handled Resend delivery, newsletter
  notification, and database-backed rate limiting. These are unavailable.
- The removed seo-weekly-tracker function collected internal Google Search Console
  snapshots using a server-validated rotating token. This operational reporting
  is unavailable in this static repository. No private SEO tables are exposed.
- npm is the canonical package manager. Removed stale Bun lockfiles; sitemap
  generation now uses a plain Node script, and Pages installs with `npm ci`.

## Later FormSubmit work

FormSubmit is not configured or contacted by this change. The intended recipient
is `rjparkerjr@gmail.com`. A later change must configure and activate delivery,
include nomination type/subject and newsletter consent accurately, decide spam
protection and error handling, verify real delivery, and then enable the buttons
and success reporting. Do not show a success message without confirmed submission.

## External state and deployment limits

Deleting repository source does not delete an existing hosted Supabase project,
its users/data/secrets, deployed edge functions, or externally scheduled jobs.
Those were not inspected or changed; an owner must audit/retire them separately.
The deleted definitions remain recoverable from Git history.

The live Pages site was inspected on October 22, 2026 and its browser console
confirmed `Error: supabaseUrl is required.` in the deployed main bundle. The
Supabase removal eliminates that startup dependency; it must be merged and
deployed before the live site changes.

Pages uses Vite base `/matchpoint/`. BrowserRouter now uses that same basename;
local images, video, downloads, manifest icons/start URL, and remaining plain
internal links also respect it. Postbuild generates entry documents for all 56
declared routes (including nearby-city pages), plus a 404 fallback, so valid
direct visits and refreshes do not depend on server SPA rewrites. These documents
are app entrypoints, not server-rendered content. Canonical SEO URLs still target
the existing custom domain. A future domain-root deployment must set Vite base
to `/` and rebuild.

## Local validation

- Production Vite build and sitemap generation passed. The build still warns
  about a JavaScript chunk larger than 500 kB.
- Vitest: 7 tests passed, including all three unavailable form variants, deployment
  asset path checks, and a full-app direct contact URL/navigation test at the Pages
  base. The app test also confirmed a pre-existing React fetchPriority warning.
- TypeScript app check (`tsc --noEmit -p tsconfig.app.json`) passed.
- Lint: 3 existing errors in unchanged `ui/command.tsx`, `ui/textarea.tsx`, and
  `tailwind.config.ts`, plus 7 existing fast-refresh warnings.
- npm installation reported 36 vulnerabilities (1 low, 6 moderate, 27 high,
  2 critical). Dependency security upgrades require separate review.
- The npm lockfile had drifted from the existing package manifest (including
  router, Helmet, React plugin, Autoprefixer, and Lovable tagger declarations).
  It is now synchronized; those manifest versions were not changed here.
- Browser screenshot verification of the repaired local build was unavailable:
  the bundled Playwright executable is missing and the in-app browser times out
  reaching the sandbox's local preview. The in-app browser did confirm the live
  startup error. Public content/styles were checked in the diff; form and routing
  behavior were exercised with React Testing Library. Production deployment still
  needs a browser check after approval.

The branch is for review only. No merge or production deployment is authorized
by this change.
