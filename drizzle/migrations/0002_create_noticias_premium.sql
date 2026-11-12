CREATE TABLE public.noticias (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  seccion text NOT NULL CHECK (seccion IN ('internacional','espana','politica','economia','empresas','cultura','sociedad','tecnologia','ciencia','deportes','opinion')),
  antetitulo text,
  titular text NOT NULL CHECK (char_length(titular) <= 110),
  subtitulo text NOT NULL,
  cuerpo text NOT NULL,
  autor text NOT NULL CHECK (autor IN ('alejandro','victor')),
  coautor text CHECK (coautor IN ('alejandro','victor')),
  fecha_publicacion timestamptz NOT NULL DEFAULT now(),
  fecha_actualizacion timestamptz NOT NULL DEFAULT now(),
  edicion date NOT NULL DEFAULT ((now() AT TIME ZONE 'Europe/Madrid')::date),
  imagen_url text,
  imagen_alt text,
  imagen_credito text,
  fuentes jsonb NOT NULL DEFAULT '[]'::jsonb,
  etiquetas text[] NOT NULL DEFAULT '{}',
  lugar text,
  es_premium boolean NOT NULL DEFAULT false,
  destacada boolean NOT NULL DEFAULT false,
  prioridad int NOT NULL DEFAULT 50,
  tiempo_lectura int,
  publicada boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);
CREATE INDEX noticias_publicada_fecha_idx ON public.noticias (publicada, fecha_publicacion DESC);
CREATE INDEX noticias_seccion_fecha_idx ON public.noticias (seccion, fecha_publicacion DESC);
CREATE INDEX noticias_edicion_idx ON public.noticias (edicion);
CREATE INDEX noticias_etiquetas_idx ON public.noticias USING gin (etiquetas);
GRANT SELECT ON public.noticias TO anon, authenticated;
GRANT ALL ON public.noticias TO service_role;
ALTER TABLE public.noticias ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published news are public" ON public.noticias FOR SELECT TO anon, authenticated USING (publicada = true);

CREATE TABLE public.suscripciones (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email text,
  plan text CHECK (plan IN ('mensual','anual','cortesia')),
  estado text NOT NULL DEFAULT 'pendiente' CHECK (estado IN ('activa','cancelada','pendiente')),
  inicio timestamptz DEFAULT now(),
  fin timestamptz,
  stripe_customer_id text,
  stripe_subscription_id text,
  created_at timestamptz DEFAULT now()
);
CREATE INDEX suscripciones_user_idx ON public.suscripciones (user_id);
GRANT SELECT ON public.suscripciones TO authenticated;
GRANT ALL ON public.suscripciones TO service_role;
ALTER TABLE public.suscripciones ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own subscription" ON public.suscripciones FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE FUNCTION public.tiene_premium_activo(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.suscripciones s WHERE s.user_id = _user_id AND s.estado = 'activa' AND (s.fin IS NULL OR s.fin > now()))
$$;
REVOKE ALL ON FUNCTION public.tiene_premium_activo(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.tiene_premium_activo(uuid) TO authenticated, service_role;

CREATE TABLE public.noticias_premium (
  noticia_id uuid PRIMARY KEY REFERENCES public.noticias(id) ON DELETE CASCADE,
  cuerpo text NOT NULL
);
GRANT SELECT ON public.noticias_premium TO authenticated;
GRANT ALL ON public.noticias_premium TO service_role;
ALTER TABLE public.noticias_premium ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Active subscribers read premium bodies" ON public.noticias_premium FOR SELECT TO authenticated USING (public.tiene_premium_activo(auth.uid()));

CREATE TABLE public.premium_solicitudes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  plan text,
  created_at timestamptz DEFAULT now()
);
GRANT INSERT ON public.premium_solicitudes TO anon, authenticated;
GRANT ALL ON public.premium_solicitudes TO service_role;
ALTER TABLE public.premium_solicitudes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can request premium access" ON public.premium_solicitudes FOR INSERT TO anon, authenticated
WITH CHECK (char_length(email) BETWEEN 3 AND 200 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND (plan IS NULL OR plan IN ('mensual','anual')));
CREATE FUNCTION public.limit_premium_requests() RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  PERFORM pg_advisory_xact_lock(hashtextextended('premium:' || lower(NEW.email), 0));
  IF (SELECT count(*) FROM public.premium_solicitudes WHERE lower(email) = lower(NEW.email) AND created_at > now() - interval '1 hour') >= 3 THEN
    RAISE EXCEPTION 'Too many premium requests' USING ERRCODE = 'P0001';
  END IF;
  NEW.created_at := now();
  RETURN NEW;
END;
$$;
REVOKE ALL ON FUNCTION public.limit_premium_requests() FROM PUBLIC;
CREATE TRIGGER limit_premium_requests_before_insert BEFORE INSERT ON public.premium_solicitudes FOR EACH ROW EXECUTE FUNCTION public.limit_premium_requests();

CREATE TABLE public.correcciones_solicitudes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  email text NOT NULL,
  url text NOT NULL,
  descripcion text NOT NULL,
  created_at timestamptz DEFAULT now()
);
GRANT INSERT ON public.correcciones_solicitudes TO anon, authenticated;
GRANT ALL ON public.correcciones_solicitudes TO service_role;
ALTER TABLE public.correcciones_solicitudes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can request a correction" ON public.correcciones_solicitudes FOR INSERT TO anon, authenticated
WITH CHECK (char_length(btrim(nombre)) BETWEEN 1 AND 120 AND char_length(email) BETWEEN 3 AND 200 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND char_length(url) BETWEEN 1 AND 2048 AND char_length(btrim(descripcion)) BETWEEN 10 AND 4000);
CREATE FUNCTION public.limit_correction_requests() RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  PERFORM pg_advisory_xact_lock(hashtextextended('correccion:' || lower(NEW.email), 0));
  IF (SELECT count(*) FROM public.correcciones_solicitudes WHERE lower(email) = lower(NEW.email) AND created_at > now() - interval '1 hour') >= 5 THEN
    RAISE EXCEPTION 'Too many correction requests' USING ERRCODE = 'P0001';
  END IF;
  NEW.created_at := now();
  RETURN NEW;
END;
$$;
REVOKE ALL ON FUNCTION public.limit_correction_requests() FROM PUBLIC;
CREATE TRIGGER limit_correction_requests_before_insert BEFORE INSERT ON public.correcciones_solicitudes FOR EACH ROW EXECUTE FUNCTION public.limit_correction_requests();