'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  stagger?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  stagger = 0,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const elements = sectionRef.current?.querySelectorAll(
        '.animated-child, h2, h3, h4, h5, p, .service-card, .custom-block'
      );

      if (!elements || elements.length === 0) {
        // Animate the section itself if no children
        const fromProps: gsap.TweenVars = {
          opacity: 0,
        };

        const toProps: gsap.TweenVars = {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          delay,
        };

        switch (direction) {
          case 'up':
            fromProps.y = 80;
            break;
          case 'down':
            fromProps.y = -80;
            break;
          case 'left':
            fromProps.x = 80;
            break;
          case 'right':
            fromProps.x = -80;
            break;
        }

        gsap.fromTo(sectionRef.current, fromProps, {
          ...toProps,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none',
          },
        });
      } else {
        // Animate children with stagger
        const fromProps: gsap.TweenVars = {
          opacity: 0,
        };

        const toProps: gsap.TweenVars = {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: stagger || 0.1,
          delay,
        };

        switch (direction) {
          case 'up':
            fromProps.y = 60;
            break;
          case 'down':
            fromProps.y = -60;
            break;
          case 'left':
            fromProps.x = 60;
            break;
          case 'right':
            fromProps.x = -60;
            break;
        }

        gsap.fromTo(elements, fromProps, {
          ...toProps,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [direction, delay, stagger]);

  return (
    <div ref={sectionRef as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </div>
  );
}
