'use client';

import { useState, useEffect } from 'react';

interface Comment {
  id: number;
  name: string;
  organization: string | null;
  email: string | null;
  comment: string;
  created_at: string;
}

interface CommentsSectionProps {
  standardId: string;
}

export default function CommentsSection({ standardId }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    comment: '',
  });

  // Fetch comments on mount
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch('/api/nci/comments');
      const data = await response.json();
      if (data.comments) {
        setComments(data.comments);
      }
    } catch (err) {
      console.error('Error fetching comments:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/nci/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit comment');
      }

      setSubmitted(true);
      setFormData({ name: '', organization: '', email: '', comment: '' });
      
      // Refresh comments after a moment (though new comment won't show until approved)
      setTimeout(() => {
        fetchComments();
      }, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit comment');
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="nci-content-box">
      <h3 className="nci-heading">Public Comments</h3>
      
      {/* Comments List */}
      <div className="mb-4">
        {loading ? (
          <p className="nci-text">Loading comments...</p>
        ) : comments.length === 0 ? (
          <p className="nci-text">No comments yet. Be the first to share your feedback.</p>
        ) : (
          <div className="nci-comments-list">
            {comments.map((comment) => (
              <div key={comment.id} className="nci-comment-item">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <strong className="nci-comment-author">{comment.name}</strong>
                    {comment.organization && (
                      <span className="nci-comment-org">, {comment.organization}</span>
                    )}
                  </div>
                  <span className="nci-comment-date">{formatDate(comment.created_at)}</span>
                </div>
                <p className="nci-comment-text">{comment.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Comment Form */}
      <div className="nci-comment-form">
        <h4 className="mb-3">Submit Your Comment</h4>
        
        {submitted && (
          <div className="alert alert-success" role="alert">
            Thank you for your comment! It has been submitted and will be reviewed before being published.
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="organization" className="form-label">
                Organization
              </label>
              <input
                type="text"
                className="form-control"
                id="organization"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              />
            </div>
          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email (optional - will not be displayed)
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Comment <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              id="comment"
              rows={5}
              required
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            />
          </div>

          <button type="submit" className="nci-btn" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit Comment'}
          </button>
        </form>
      </div>
    </div>
  );
}

