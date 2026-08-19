-- ==============================================================================
-- CO STAR MORTGAGES - SUPABASE DATABASE SCHEMA (PATH A: MULTI-SITE COMPATIBLE)
-- ==============================================================================
-- INSTRUCTIONS:
-- 1. Open your Supabase Dashboard: https://supabase.com/dashboard
-- 2. Go to the "SQL Editor" tab on the left sidebar.
-- 3. Click "New query", paste this entire script, and click "Run".
-- ==============================================================================

-- 1. Create the `leads` table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    site_id TEXT NOT NULL DEFAULT 'costar_mortgages',
    full_name TEXT,
    email TEXT,
    phone TEXT,
    loan_purpose TEXT,
    property_type TEXT,
    estimated_price TEXT,
    credit_score TEXT,
    refi_goal TEXT,
    current_rate TEXT,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'Not Done Yet'
);

-- 2. Create performance indexes
CREATE INDEX IF NOT EXISTS leads_site_id_idx ON public.leads (site_id);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON public.leads (created_at DESC);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 4. Security Policies:

-- A. Anyone on the website can submit a new borrower lead (INSERT)
CREATE POLICY "Allow public lead submissions" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- B. Allow reading leads for CRM dashboard (SELECT)
CREATE POLICY "Allow reading leads" 
ON public.leads 
FOR SELECT 
USING (true);

-- C. Allow updating lead status (UPDATE)
CREATE POLICY "Allow updating lead status" 
ON public.leads 
FOR UPDATE 
USING (true)
WITH CHECK (true);

-- D. Allow deleting leads (DELETE)
CREATE POLICY "Allow deleting leads" 
ON public.leads 
FOR DELETE 
USING (true);

-- ==============================================================================
-- Done! Your database is now ready for Co Star Mortgages.
-- ==============================================================================
