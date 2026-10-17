CREATE TABLE public.solicitudes_patrocinio (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  nombre text NOT NULL,
  empresa text NOT NULL,
  cargo text,
  email text NOT NULL,
  web text,
  pais text NOT NULL,
  mercados text[] NOT NULL DEFAULT '{}',
  presupuesto text NOT NULL,
  objetivo text NOT NULL,
  origen text
);
GRANT INSERT ON public.solicitudes_patrocinio TO anon, authenticated;
GRANT ALL ON public.solicitudes_patrocinio TO service_role;
ALTER TABLE public.solicitudes_patrocinio ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a valid sponsorship request"
ON public.solicitudes_patrocinio FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(btrim(nombre)) BETWEEN 1 AND 120
  AND char_length(btrim(empresa)) BETWEEN 1 AND 120
  AND (cargo IS NULL OR char_length(cargo) <= 120)
  AND char_length(email) BETWEEN 3 AND 200
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(btrim(objetivo)) BETWEEN 10 AND 2000
  AND cardinality(mercados) BETWEEN 1 AND 22
  AND array_position(mercados, NULL) IS NULL
  AND char_length(pais) BETWEEN 1 AND 120
  AND char_length(presupuesto) BETWEEN 1 AND 120
  AND (web IS NULL OR char_length(web) <= 2048)
  AND (origen IS NULL OR char_length(origen) <= 4000)
);
CREATE FUNCTION public.limit_sponsorship_requests()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  PERFORM pg_advisory_xact_lock(hashtextextended(lower(NEW.email), 0));
  IF (SELECT count(*) FROM public.solicitudes_patrocinio
      WHERE lower(email) = lower(NEW.email) AND created_at > now() - interval '1 hour') >= 5 THEN
    RAISE EXCEPTION 'Too many sponsorship requests' USING ERRCODE = 'P0001';
  END IF;
  NEW.created_at := now();
  RETURN NEW;
END;
$$;
REVOKE ALL ON FUNCTION public.limit_sponsorship_requests() FROM PUBLIC;
CREATE TRIGGER limit_sponsorship_requests_before_insert
BEFORE INSERT ON public.solicitudes_patrocinio
FOR EACH ROW EXECUTE FUNCTION public.limit_sponsorship_requests();