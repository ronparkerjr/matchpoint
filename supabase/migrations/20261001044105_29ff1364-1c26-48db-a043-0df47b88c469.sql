DROP POLICY IF EXISTS "Authenticated users can view index snapshots" ON public.seo_index_snapshots;
DROP POLICY IF EXISTS "Authenticated users can view keyword snapshots" ON public.seo_keyword_snapshots;

CREATE POLICY "Admins can view index snapshots"
ON public.seo_index_snapshots
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view keyword snapshots"
ON public.seo_keyword_snapshots
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;