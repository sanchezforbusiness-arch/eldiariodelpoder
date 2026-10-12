DROP POLICY IF EXISTS "Anyone can submit a club application" ON public.club_applications;
CREATE POLICY "Anyone can submit a valid club application"
ON public.club_applications FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(btrim(name)) BETWEEN 1 AND 200
  AND char_length(email) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(btrim(role)) BETWEEN 1 AND 200
  AND (phone IS NULL OR char_length(phone) <= 50)
  AND (about IS NULL OR char_length(about) <= 5000)
);