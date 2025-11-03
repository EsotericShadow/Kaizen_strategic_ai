# NCI Comments System Setup

## Overview
The NCI comments system allows visitors to submit public feedback on NC-AI-001, which is stored in Neon DB and displayed on the website after moderation.

## Setup Steps

### 1. Neon Database Setup

1. **Create a Neon Database**:
   - Go to https://console.neon.tech
   - Create a new project
   - Copy your connection string (starts with `postgresql://`)

2. **Run the Schema**:
   - In Neon's SQL Editor, run the SQL from `schema.sql`
   - This creates the `nci_comments` table

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```bash
DATABASE_URL=postgresql://username:password@host.neon.tech/database?sslmode=require
```

**For Vercel Deployment:**
- Go to your Vercel project settings
- Add `DATABASE_URL` as an environment variable
- Paste your Neon connection string

### 3. Install Dependencies

```bash
npm install
```

### 4. File Downloads

The NC-AI-001 files have been copied to `/public/nci/nc-ai-001/` and are available for direct download without GitHub.

## How It Works

1. **Comments are moderated**: New comments start as `approved = false`
2. **To approve comments**: Update the database directly or create an admin interface
3. **Only approved comments** are displayed on the website
4. **Email is optional** and never displayed publicly

## Moderation

To approve a comment, run this SQL in Neon:

```sql
UPDATE nci_comments 
SET approved = true 
WHERE id = <comment_id>;
```

Or approve all pending comments:

```sql
UPDATE nci_comments 
SET approved = true 
WHERE approved = false;
```

## Security Notes

- Comments are automatically set to `approved = false` on submission
- Email addresses are not displayed publicly
- Row Level Security (RLS) policies are set up in the schema
- All comments require moderation before appearing

