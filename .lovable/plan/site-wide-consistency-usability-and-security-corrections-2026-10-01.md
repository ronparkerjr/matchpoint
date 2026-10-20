# Site-wide consistency, usability, and security corrections

## Goal
Make the public site read as one current, trustworthy club website; remove stale or contradictory material; improve navigation and accessibility; and close confirmed security gaps without changing the established brand.

## Content and flow
- Rewrite pre-opening/future-tense copy on About, FAQ, leagues, and the homepage into accurate present-tense language.
- Remove stale homepage news and expired promotional duplication; keep current Fall 2026 leagues and tournaments aligned with the supplied schedule.
- Replace unsupported superlatives with the defensible facts already used elsewhere: 38 indoor courts, #7 nationally, #1 in Ohio, and the named Dink award.
- Correct the corporate membership court statistic so courts and golf simulators are not combined inaccurately.
- Clarify unfinished pages and streams rather than implying missing content is current; retain real existing honoree videos and records.
- Fill missing page-specific search titles and descriptions, and keep sitemap entries aligned with public pages.

## Navigation and accessibility
- Add a skip-to-content link and a consistent main-content target across public pages.
- Make desktop dropdowns fully usable by keyboard and close them predictably; prevent background scrolling behind the mobile menu.
- Give the homepage and account screens proper page headings and clear paths back to the main site.
- Improve popup focus management, restore focus when closed, and remove the React warning it currently triggers.
- Connect form errors to their fields for screen readers and standardize button behavior.
- Preserve existing mobile layouts while checking representative phone and desktop views for overlap and dead ends.

## Security
- Restrict SEO tracking records to administrators instead of every signed-in account.
- Require an administrator or trusted scheduled caller to run the weekly SEO tracker.
- Add real server-side bot-token verification to email forms when configured, plus abuse throttling so the mail service cannot be used as an open relay.
- Keep user roles isolated and server-validated; verify all existing access policies after the changes.
- Apply safe dependency updates for reported vulnerabilities, then rescan dependencies and the backend.

## Verification
- Check every registered page loads, has a useful title and heading, and produces no new runtime errors.
- Test navigation, the mobile menu, popup dismissal, protected admin behavior, forms, downloads, and representative external registration links.
- Run the existing automated tests, regenerate the sitemap, and confirm the final build, backend linter, and security scans are clean or clearly document any remaining third-party-only warning.

## Items that require owner-supplied content
- Do not invent October Member/Employee of the Month winners or tournament results. Keep verified July/June records and label archives honestly until new details are supplied.
- Keep the established public support email and phone; use role-specific contacts only where the site already assigns them.
