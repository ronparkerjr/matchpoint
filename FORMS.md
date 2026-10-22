# Website form delivery

All first-party forms use native HTTPS POST to FormSubmit for
`rjparkerjr@gmail.com`. The shared ContactForm appears on the homepage and Contact
Us page; NominationForm appears on the member and employee nomination pages.
CourtReserve embeds and outbound registration/booking links remain with their
providers; this repository cannot change the recipient for those third-party
systems.

Fields retain their original layout. Contact email includes name, email, message,
explicit Yes/No newsletter consent, form type and source page. Nomination email
also includes the nominee name and the existing member/employee subject. The
visitor's `email` field lets FormSubmit set Reply-To. Newsletter consent is an
email notification only; it does not subscribe anyone to a mailing list.

Client-side schema validation prevents invalid submission. Valid forms navigate
to FormSubmit's verification/response page. Default reCAPTCHA remains enabled,
and a hidden honeypot adds spam filtering. No private credentials, Supabase,
custom server or new package dependency is needed. There is no local success
message or success analytics event that could incorrectly imply delivery.

## Activation and delivery verification

After deployment, submit a clearly marked test from each form placement and
complete any provider verification. FormSubmit sends an activation email to
`rjparkerjr@gmail.com` on first use. The recipient must follow the activation link
before email delivery can be considered active. Follow any further activation
requests for the site/forms. Resubmit tests after activation and check the inbox
and spam folder for the complete fields, correct subjects and working Reply-To.
The initial activation-triggering submission is not proof of message delivery.

Code-level validation and payload tests do not prove inbox delivery. Until the
activation and actual inbox checks are complete, report delivery as unverified.
Official setup: https://formsubmit.co/ and https://formsubmit.co/documentation.
