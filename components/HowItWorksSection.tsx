'use client';

import { useEffect } from 'react';

export default function HowItWorksSection() {
  useEffect(() => {
    // Timeline scroll effect
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll('#vertical-scrollable-timeline li');
      const timelineContainer = document.getElementById('vertical-scrollable-timeline');
      
      if (!timelineContainer) return;

      const containerBottom = timelineContainer.getBoundingClientRect().bottom - window.innerHeight * 0.5;
      const progressBar = timelineContainer.querySelector<HTMLElement>('.inner');
      
      if (progressBar) {
        progressBar.style.height = `${Math.max(0, containerBottom)}px`;
      }

      timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > 0;
        
        if (isVisible) {
          item.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="timeline-section section-padding" id="how-it-works">
      <div className="section-overlay"></div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white mb-4">How does it work?</h2>
          </div>

          <div className="col-lg-10 col-12 mx-auto">
            <div className="timeline-container">
              <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
                <div className="list-progress">
                  <div className="inner"></div>
                </div>

                <li>
                  <h4 className="text-white mb-3">Discovery & Planning</h4>
                  <p className="text-white">
                    Initial consultation, deep process discovery, and current state mapping. Technical feasibility assessment and ROI analysis to prioritize implementation.
                  </p>
                  <div className="icon-holder">
                    <i className="bi-search"></i>
                  </div>
                </li>

                <li>
                  <h4 className="text-white mb-3">Implementation & Integration</h4>
                  <p className="text-white">
                    Refine existing systems first, then integrate custom AI solutions and automation. Following established Kaizen Method patterns for quality and reliability.
                  </p>
                  <div className="icon-holder">
                    <i className="bi-gear"></i>
                  </div>
                </li>

                <li>
                  <h4 className="text-white mb-3">Optimization & Continuous Improvement</h4>
                  <p className="text-white">
                    Performance monitoring, feedback collection, and ongoing refinement. Long-term support and continuous improvement.
                  </p>
                  <div className="icon-holder">
                    <i className="bi-graph-up-arrow"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 text-center mt-5">
            <p className="text-white">
              Want to learn more?
              <a href="#contact" className="btn custom-btn custom-border-btn ms-3">
                Get in Touch
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

