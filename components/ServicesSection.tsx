'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Service {
  id: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 'digital-strategy',
    title: 'Digital Strategy Consulting',
    description: 'We build your complete online presence. Strategy and execution for how you look, what you say, and how customers find you online.',
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'We integrate AI and automation into your existing processes. Eliminate repetitive work, automate workflows, and save time.',
  },
  {
    id: 'web-development',
    title: 'Website/App Development',
    description: 'We build responsive websites and applications that integrate with your business operations and work for your customers.',
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'We design and build custom software solutions for your specific business needs. Internal tools and customer-facing applications.',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.service-card');

      if (cards && cards.length > 0) {
        // Animate cards on scroll
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
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

        // Add hover animations
        cards.forEach((card) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.02,
              y: -5,
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="explore-section section-padding" id="services" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-5 animated-child">Our Services</h2>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-4">
              <div className="custom-block service-card">
                <Link href={`/services/${service.id}`}>
                  <div className="service-card-content">
                    <h5 className="service-card-title mb-3">{service.title}</h5>
                    <p className="service-card-description mb-0">{service.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

