CREATE TABLE public.form_submission_limits (
  fingerprint text PRIMARY KEY,
  submitted_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT ALL ON public.form_submission_limits TO service_role;

ALTER TABLE public.form_submission_limits ENABLE ROW LEVEL SECURITY;