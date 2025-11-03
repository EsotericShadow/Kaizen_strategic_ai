'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AnimatedHero() {
  const heroRef = useRef<HTMLElement>(null);
  const headingMainRef = useRef<HTMLDivElement>(null);
  const headingSubRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Animate decorative badge - subtle floating only (no rotation)
      if (badgeRef.current) {
        gsap.to(badgeRef.current, {
          y: '+=20',
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }

      // Stagger animation for main heading
      if (headingMainRef.current) {
        const lines = headingMainRef.current.querySelectorAll('h1');
        gsap.fromTo(
          lines,
          {
            opacity: 0,
            y: 50,
            x: -50,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.3,
          }
        );
      }

      // Animate subtitle heading - comes from right
      if (headingSubRef.current) {
        const lines = headingSubRef.current.querySelectorAll('h2');
        gsap.fromTo(
          lines,
          {
            opacity: 0,
            y: 50,
            x: 50,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.8,
          }
        );
      }

      // Animate tagline
      if (taglineRef.current) {
        gsap.fromTo(
          taglineRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            delay: 1.4,
          }
        );
      }

      // Animate button with scale and fade
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            delay: 1.8,
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section d-flex justify-content-center align-items-center" id="hero" ref={heroRef}>
      {/* Animated decorative badge */}
      <div
        ref={badgeRef}
        className="hero-badge-animated"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(calc(-50% - 64px), calc(-50% - 64px))',
          width: '1000px',
          maxWidth: '90vw',
          height: 'auto',
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <Image
          src="/images/brand/asset_warped_line_badge.webp"
          alt=""
          width={1000}
          height={1000}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <div className="hero-heading-wrapper">
              <div className="hero-heading-main" ref={headingMainRef}>
                <h1 className="text-white">Continuous</h1>
                <h1 className="text-white">Improvement</h1>
              </div>
              <div className="hero-heading-subtitle" ref={headingSubRef}>
                <h2 className="text-white">Work less,</h2>
                <h2 className="text-white">Achieve more</h2>
              </div>
            </div>
            <h6 className="text-center" ref={taglineRef}>
              Pioneering practical AI for Northern BC businesses
            </h6>

            <div className="text-center mt-4 pt-2" ref={buttonRef}>
              <Link href="/services" className="btn custom-btn btn-lg">
                View Our Services
              </Link>
            </div>

            <div className="text-center mt-3 hero-evergreen-note" style={{ marginTop: 'calc(1rem - 48px)' }}>
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
