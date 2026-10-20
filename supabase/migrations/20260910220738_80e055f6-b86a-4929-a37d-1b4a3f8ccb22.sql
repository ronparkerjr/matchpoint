CREATE TABLE IF NOT EXISTS public.preapproved_admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT ALL ON public.preapproved_admins TO service_role;
GRANT SELECT ON public.preapproved_admins TO authenticated;

ALTER TABLE public.preapproved_admins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view preapproved admins"
ON public.preapproved_admins FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

INSERT INTO public.preapproved_admins (email) VALUES ('nazmun@cellaxs.com')
ON CONFLICT (email) DO NOTHING;

CREATE OR REPLACE FUNCTION public.grant_admin_for_preapproved()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.email_confirmed_at IS NOT NULL
     AND EXISTS (
       SELECT 1 FROM public.preapproved_admins p
       WHERE lower(p.email) = lower(NEW.email)
     ) THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;

    INSERT INTO public.staff_profiles (user_id, email, approved)
    VALUES (NEW.id, NEW.email, true)
    ON CONFLICT DO NOTHING;

    UPDATE public.staff_profiles SET approved = true WHERE user_id = NEW.id;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created_grant_preapproved_admin ON auth.users;
CREATE TRIGGER on_auth_user_created_grant_preapproved_admin
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.grant_admin_for_preapproved();

DROP TRIGGER IF EXISTS on_auth_user_confirmed_grant_preapproved_admin ON auth.users;
CREATE TRIGGER on_auth_user_confirmed_grant_preapproved_admin
AFTER UPDATE OF email_confirmed_at ON auth.users
FOR EACH ROW
WHEN (old.email_confirmed_at IS NULL AND new.email_confirmed_at IS NOT NULL)
EXECUTE FUNCTION public.grant_admin_for_preapproved();