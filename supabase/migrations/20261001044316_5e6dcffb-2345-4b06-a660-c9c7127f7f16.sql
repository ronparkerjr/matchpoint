CREATE POLICY "Service role manages form submission limits"
ON public.form_submission_limits
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);