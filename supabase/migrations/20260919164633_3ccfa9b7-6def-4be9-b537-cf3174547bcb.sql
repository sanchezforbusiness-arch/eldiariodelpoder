CREATE TABLE public.newsletter_ediciones (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  numero int NOT NULL,
  fecha date NOT NULL,
  titulo text NOT NULL,
  entradilla text NOT NULL,
  contenido jsonb NOT NULL,
  imagen_social text,
  publicada boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.newsletter_ediciones TO anon;
GRANT SELECT ON public.newsletter_ediciones TO authenticated;
GRANT ALL ON public.newsletter_ediciones TO service_role;

ALTER TABLE public.newsletter_ediciones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Ediciones publicadas visibles para todos"
ON public.newsletter_ediciones
FOR SELECT
TO anon, authenticated
USING (publicada = true);

CREATE INDEX newsletter_ediciones_fecha_idx ON public.newsletter_ediciones (fecha DESC);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_newsletter_ediciones_updated_at
BEFORE UPDATE ON public.newsletter_ediciones
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();