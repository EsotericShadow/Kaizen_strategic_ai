import { NextRequest, NextResponse } from 'next/server';
import { getSql } from '@/lib/db';

// GET - Retrieve all comments for NC-AI-001
export async function GET() {
  try {
    const sql = getSql();
    const comments = await sql`
      SELECT id, name, organization, email, comment, created_at, approved
      FROM nci_comments
      WHERE standard_id = 'nc-ai-001' AND approved = true
      ORDER BY created_at DESC
    `;

    return NextResponse.json({ comments }, { status: 200 });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

// POST - Submit a new comment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, organization, email, comment } = body;

    // Basic validation
    if (!name || !comment) {
      return NextResponse.json(
        { error: 'Name and comment are required' },
        { status: 400 }
      );
    }

    // Insert comment (initially not approved - requires moderation)
    const sql = getSql();
    const result = await sql`
      INSERT INTO nci_comments (standard_id, name, organization, email, comment, approved, created_at)
      VALUES ('nc-ai-001', ${name}, ${organization || null}, ${email || null}, ${comment}, false, NOW())
      RETURNING id
    `;

    const commentId = Array.isArray(result) && result.length > 0 && typeof result[0] === 'object' && 'id' in result[0] 
      ? (result[0] as { id: number }).id 
      : null;

    return NextResponse.json(
      { 
        message: 'Comment submitted successfully. It will be reviewed before being published.',
        id: commentId 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting comment:', error);
    return NextResponse.json(
      { error: 'Failed to submit comment' },
      { status: 500 }
    );
  }
}

