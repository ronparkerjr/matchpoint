CREATE TABLE public.seo_tracker_tokens (
  token text PRIMARY KEY,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT ALL ON public.seo_tracker_tokens TO service_role;

ALTER TABLE public.seo_tracker_tokens ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role manages SEO tracker tokens"
ON public.seo_tracker_tokens
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

DO $$
DECLARE
  generated_token text := gen_random_uuid()::text || gen_random_uuid()::text;
  secured_command text;
BEGIN
  INSERT INTO public.seo_tracker_tokens (token) VALUES (generated_token);
  secured_command := format($command$
    select net.http_post(
      url:='https://anfxeqaalvoobejvjxjd.supabase.co/functions/v1/seo-weekly-tracker',
      headers:=%L::jsonb,
      body:=concat('{"time": "', now(), '"}')::jsonb
    ) as request_id;
  $command$, jsonb_build_object('Content-Type', 'application/json', 'x-cron-secret', generated_token)::text);
  PERFORM cron.unschedule(1);
  PERFORM cron.schedule('seo-weekly-tracker', '0 8 * * 1', secured_command);
END
$$;