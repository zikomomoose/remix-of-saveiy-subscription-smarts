CREATE TABLE public.ios_waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  source_page text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.ios_waitlist TO anon, authenticated;
GRANT ALL ON public.ios_waitlist TO service_role;

ALTER TABLE public.ios_waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join iOS waitlist"
ON public.ios_waitlist
FOR INSERT
TO anon, authenticated
WITH CHECK (
  email IS NOT NULL
  AND length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND source_page IS NOT NULL
  AND length(source_page) BETWEEN 1 AND 255
);