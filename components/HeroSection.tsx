'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero-section d-flex justify-content-center align-items-center" id="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <div className="hero-heading-wrapper">
              <div className="hero-heading-main">
                <h1 className="text-white">Continuous</h1>
                <h1 className="text-white">Improvement</h1>
              </div>
              <div className="hero-heading-subtitle">
                <h2 className="text-white">Work less,</h2>
                <h2 className="text-white">Achieve more</h2>
              </div>
            </div>
            <h6 className="text-center">Pioneering practical AI for Northern BC businesses</h6>

            <div className="text-center mt-4 pt-2">
              <Link href="/services" className="btn custom-btn btn-lg">
                View Our Services
              </Link>
            </div>

            <div className="text-center mt-3" style={{ marginTop: 'calc(1rem - 48px)' }}>
              <p className="text-white" style={{ fontSize: '14px', opacity: 0.7, fontStyle: 'italic' }}>
                Evolved from Evergreen Web Solutions — pivoting from custom web development to AI-driven digital strategy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

