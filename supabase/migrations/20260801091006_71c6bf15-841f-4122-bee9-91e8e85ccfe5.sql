CREATE TABLE public.seo_index_snapshots (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_url TEXT NOT NULL,
  site_url TEXT NOT NULL,
  week_start DATE NOT NULL,
  verdict TEXT,
  coverage_state TEXT,
  robots_txt_state TEXT,
  indexing_state TEXT,
  google_canonical TEXT,
  user_canonical TEXT,
  last_crawl_time TIMESTAMPTZ,
  is_indexed BOOLEAN,
  raw JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (page_url, week_start)
);

CREATE TABLE public.seo_keyword_snapshots (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_url TEXT NOT NULL,
  site_url TEXT NOT NULL,
  week_start DATE NOT NULL,
  query TEXT NOT NULL,
  clicks NUMERIC NOT NULL DEFAULT 0,
  impressions NUMERIC NOT NULL DEFAULT 0,
  ctr NUMERIC NOT NULL DEFAULT 0,
  position NUMERIC,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (page_url, query, week_start)
);

CREATE INDEX idx_seo_index_snapshots_week ON public.seo_index_snapshots (week_start DESC);
CREATE INDEX idx_seo_keyword_snapshots_week ON public.seo_keyword_snapshots (week_start DESC);
CREATE INDEX idx_seo_keyword_snapshots_page ON public.seo_keyword_snapshots (page_url);

GRANT SELECT ON public.seo_index_snapshots TO authenticated;
GRANT SELECT ON public.seo_keyword_snapshots TO authenticated;
GRANT ALL ON public.seo_index_snapshots TO service_role;
GRANT ALL ON public.seo_keyword_snapshots TO service_role;

ALTER TABLE public.seo_index_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_keyword_snapshots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view index snapshots"
ON public.seo_index_snapshots FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can view keyword snapshots"
ON public.seo_keyword_snapshots FOR SELECT TO authenticated USING (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_seo_index_snapshots_updated_at
BEFORE UPDATE ON public.seo_index_snapshots
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_seo_keyword_snapshots_updated_at
BEFORE UPDATE ON public.seo_keyword_snapshots
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();