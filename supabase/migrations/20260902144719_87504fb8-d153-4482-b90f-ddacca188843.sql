CREATE TABLE public.translations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lang text NOT NULL,
  source_hash text NOT NULL,
  source_text text NOT NULL,
  translated_text text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (lang, source_hash)
);

CREATE INDEX translations_lang_hash_idx ON public.translations (lang, source_hash);

GRANT SELECT ON public.translations TO anon;
GRANT SELECT ON public.translations TO authenticated;
GRANT ALL ON public.translations TO service_role;

ALTER TABLE public.translations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Translations are publicly readable"
ON public.translations FOR SELECT TO anon, authenticated USING (true);