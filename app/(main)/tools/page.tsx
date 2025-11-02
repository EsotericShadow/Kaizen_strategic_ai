'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  link?: string;
  external?: boolean;
  comingSoon?: boolean;
}

const tools: Tool[] = [
  {
    id: 'ai-risk-register',
    title: 'AI Risk Register Template',
    description: 'NC-AI-001: Comprehensive AI risk management template with 28 pre-populated risks, aligned with ISO 42001:2023. Available in multiple formats.',
    category: 'AI Governance',
    link: '/nci/nc-ai-001',
    external: false,
  },
  // Add more tools here as they're created
];

const categories = ['All', 'AI Governance', 'Business Tools', 'Calculators', 'Templates'];

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredTools = selectedCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  return (
    <>
      <header className="site-header d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10 col-12 mb-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Homepage</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Tools
                  </li>
                </ol>
              </nav>
              <h2 className="text-white">Free Tools</h2>
              <p className="text-white">Business and AI tools to help Northern BC businesses work smarter</p>
            </div>
          </div>
        </div>
      </header>

      <section className="topics-detail-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              {/* Category Filter */}
              <div className="mb-5">
                <div className="d-flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`btn ${selectedCategory === category ? 'custom-btn' : 'custom-border-btn'}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tools Grid */}
              {filteredTools.length === 0 ? (
                <div className="custom-block text-center">
                  <p>More tools coming soon. Check back for free business and AI tools designed for Northern BC businesses.</p>
                </div>
              ) : (
                <div className="row">
                  {filteredTools.map((tool) => (
                    <div key={tool.id} className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-4">
                      <div className="custom-block service-card">
                        <div className="service-card-content">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <span className="badge bg-secondary">{tool.category}</span>
                            {tool.comingSoon && (
                              <span className="badge bg-warning text-dark">Coming Soon</span>
                            )}
                          </div>
                          <h5 className="service-card-title mb-3">{tool.title}</h5>
                          <p className="service-card-description mb-3">{tool.description}</p>
                          {tool.link && !tool.comingSoon ? (
                            tool.external ? (
                              <a href={tool.link} className="btn custom-btn" target="_blank" rel="noopener noreferrer">
                                Use Tool
                              </a>
                            ) : (
                              <Link href={tool.link} className="btn custom-btn">
                                View Tool
                              </Link>
                            )
                          ) : tool.comingSoon ? (
                            <button className="btn custom-border-btn" disabled>
                              Coming Soon
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Info Box */}
              <div className="custom-block mt-5">
                <h3 className="mb-4">About Our Tools</h3>
                <p className="mb-4">
                  We create free tools to help Northern BC businesses work smarter. All tools are designed with practical, real-world use cases in mind.
                </p>
                <p className="mb-0">
                  Have an idea for a tool that would help your business? <Link href="/contact">Get in touch</Link> and let us know.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

