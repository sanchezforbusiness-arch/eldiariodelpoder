CREATE TABLE public.club_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  role text not null,
  phone text,
  about text
);
GRANT INSERT ON public.club_applications TO anon;
GRANT INSERT ON public.club_applications TO authenticated;
GRANT ALL ON public.club_applications TO service_role;
ALTER TABLE public.club_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a club application" ON public.club_applications FOR INSERT TO anon, authenticated WITH CHECK (true);