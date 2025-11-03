-- Neon DB Schema for NCI Comments
-- Run this in your Neon database to create the comments table

CREATE TABLE IF NOT EXISTS nci_comments (
  id SERIAL PRIMARY KEY,
  standard_id VARCHAR(50) NOT NULL,
  name VARCHAR(255) NOT NULL,
  organization VARCHAR(255),
  email VARCHAR(255),
  comment TEXT NOT NULL,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_standard_approved ON nci_comments(standard_id, approved);
CREATE INDEX IF NOT EXISTS idx_created_at ON nci_comments(created_at DESC);

-- Enable Row Level Security (optional, for additional security)
ALTER TABLE nci_comments ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read approved comments
CREATE POLICY "Anyone can view approved comments"
  ON nci_comments
  FOR SELECT
  USING (approved = true);

-- Policy: Anyone can insert comments (they'll be unapproved by default)
CREATE POLICY "Anyone can insert comments"
  ON nci_comments
  FOR INSERT
  WITH CHECK (true);

