-- ============================================
-- Pintar Herbal Blog Database Schema
-- Run this in your Supabase SQL Editor
-- ============================================

-- 1. Create the posts table
CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content JSONB,
  excerpt TEXT,
  cover_image TEXT,
  author TEXT DEFAULT 'Tim Pintar Herbal',
  category TEXT DEFAULT 'Kesehatan',
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create index on slug for fast lookups
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);

-- 3. Create index on published + created_at for listing
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(published, created_at DESC);

-- 4. Auto-update updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_updated_at ON posts;
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- 5. Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- 6. Public can read published posts
CREATE POLICY "Public can read published posts"
  ON posts FOR SELECT
  USING (published = true);

-- 7. Service role can do everything (for admin API)
-- Note: Service role bypasses RLS by default, no policy needed

-- ============================================
-- Supabase Storage Setup (do this manually):
-- 1. Go to Supabase Dashboard > Storage
-- 2. Create a new bucket: "blog-images"
-- 3. Set it as PUBLIC
-- 4. Add policy: Allow authenticated uploads
-- ============================================
