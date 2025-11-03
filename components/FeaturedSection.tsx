'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.service-card');

      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="featured-section" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block service-card">
              <div className="service-card-content">
                <h5 className="service-card-title mb-3">AI Events</h5>
                <p className="service-card-description mb-3">
                  Quarterly workshops and an annual AI Summit for Northern BC businesses. Learn practical AI applications, network with local business leaders, and stay ahead of technology trends.
                </p>
                <Link href="/events" className="btn custom-btn">
                  View Events
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="custom-block service-card custom-block-featured">
              <div className="service-card-content">
                <h5 className="service-card-title mb-3">Northern Cascadia Institute</h5>
                <p className="service-card-description mb-3">
                  Regional AI governance standards for Northern BC. NC-AI-001 AI Risk Register Template now open for public comment. Annual AI & Technology Summit hosted by NCI.
                </p>
                <Link href="/nci" className="btn custom-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

