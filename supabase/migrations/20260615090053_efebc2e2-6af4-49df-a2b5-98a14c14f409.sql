-- Remove overly permissive SELECT policy exposing all emails/phones to any authenticated user
DROP POLICY IF EXISTS "Only authenticated users can read waitlist" ON public.waitlist;

-- Revoke SELECT from anon/authenticated so the table is not exposed via the Data API / GraphQL
REVOKE SELECT ON public.waitlist FROM anon;
REVOKE SELECT ON public.waitlist FROM authenticated;

-- Service role retains full access for backend/admin use
GRANT ALL ON public.waitlist TO service_role;

-- Keep INSERT open for the public waitlist form
GRANT INSERT ON public.waitlist TO anon, authenticated;