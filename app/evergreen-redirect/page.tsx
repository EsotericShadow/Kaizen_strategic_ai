'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function EvergreenRedirect() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // After 5 seconds, redirect automatically
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://kaizenstrategic.ai';
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, []);

  const handleContinue = () => {
    window.location.href = 'https://kaizenstrategic.ai';
  };

  const handleClose = () => {
    setShowModal(false);
    // Still redirect after closing
    setTimeout(() => {
      window.location.href = 'https://kaizenstrategic.ai';
    }, 500);
  };

  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        {showModal && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '20px',
            }}
            onClick={handleClose}
          >
            <div
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid rgba(128, 208, 199, 0.35)',
                borderRadius: '0',
                padding: '40px',
                maxWidth: '600px',
                width: '100%',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: '0',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ×
              </button>

              <h2
                style={{
                  color: '#fff',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  fontFamily: 'Bricolage Grotesque, sans-serif',
                }}
              >
                We&apos;ve Evolved
              </h2>

              <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
                Evergreen Web Solutions has pivoted and evolved into{' '}
                <strong style={{ color: '#fff' }}>Kaizen Strategic AI</strong>.
              </p>

              <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
                We&apos;ve moved from custom web development to AI-driven digital strategy, helping Northern BC businesses
                integrate practical AI solutions that amplify human potential.
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '15px',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  onClick={handleContinue}
                  style={{
                    backgroundColor: 'rgba(128, 208, 199, 0.9)',
                    color: '#000',
                    border: 'none',
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    flex: 1,
                    minWidth: '150px',
                  }}
                >
                  Continue to Kaizen Strategic AI
                </button>
                <button
                  onClick={handleClose}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#ccc',
                    border: '1px solid rgba(128, 208, 199, 0.35)',
                    padding: '12px 24px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    flex: 1,
                    minWidth: '150px',
                  }}
                >
                  Close
                </button>
              </div>

              <p
                style={{
                  color: '#888',
                  fontSize: '12px',
                  marginTop: '20px',
                  textAlign: 'center',
                  fontStyle: 'italic',
                }}
              >
                Redirecting automatically in 5 seconds...
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

