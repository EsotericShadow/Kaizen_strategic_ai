import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources | Implementation Guides & Tools | Northern Cascadia Institute',
  description: 'Free AI governance resources, implementation guides, toolkits, and practical tools from the Northern Cascadia Institute. Helpful resources for implementing NC-AI standards and ISO 42001-aligned AI governance.',
  keywords: [
    'AI governance resources',
    'AI governance implementation guides',
    'AI governance toolkits',
    'ISO 42001 implementation',
    'AI risk management tools',
    'AI governance templates',
    'AI governance best practices',
    'NC-AI resources',
    'AI governance Northern BC',
    'free AI governance tools',
  ].join(', '),
  openGraph: {
    title: 'Resources | Implementation Guides & Tools | Northern Cascadia Institute',
    description: 'Free AI governance resources and implementation guides for Northern BC.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://kaizenstrategic.ai/nci/resources',
  },
};

export default function ResourcesPage() {
  return (
    <>
      <header className="nci-header d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10 col-12 text-center">
              <nav aria-label="breadcrumb" className="nci-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/nci">Northern Cascadia Institute</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Resources
                  </li>
                </ol>
              </nav>
              <h1 className="nci-title">Resources</h1>
              <h2 className="nci-subtitle">Implementation Guides & Tools</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="nci-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <div className="nci-content-box">
                <h3 className="nci-heading">Implementation Resources</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute provides practical resources to help organizations implement AI governance standards. These guides, toolkits, and templates are designed to make AI governance accessible and actionable for smaller organizations, remote communities, and regional businesses.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">NC-AI-001 Implementation Guide</h3>
                <p className="nci-text">
                  <strong>Getting Started with NC-AI-001: AI Risk Register Template</strong>
                </p>
                <p className="nci-text">
                  A step-by-step guide to implementing the NC-AI-001 AI Risk Register Template in your organization:
                </p>
                <ol className="nci-list" style={{ listStyle: 'decimal', paddingLeft: '1.5rem' }}>
                  <li><strong>Assess Your AI Usage:</strong> Identify all AI systems, tools, and processes in your organization</li>
                  <li><strong>Review Risk Categories:</strong> Review the 8 risk categories in NC-AI-001 to understand which apply to your context</li>
                  <li><strong>Customize the Template:</strong> Adapt the 28 pre-populated risks to your specific systems and use cases</li>
                  <li><strong>Score Your Risks:</strong> Use the 5x5 impact and likelihood matrix to assess each identified risk</li>
                  <li><strong>Prioritize Actions:</strong> Focus on high-impact, high-likelihood risks first</li>
                  <li><strong>Develop Mitigation Strategies:</strong> Create control strategies for identified risks</li>
                  <li><strong>Document and Review:</strong> Maintain your risk register and review regularly (quarterly recommended)</li>
                </ol>
                <p className="nci-text-small mt-2">
                  <Link href="/nci/nc-ai-001">Download NC-AI-001: AI Risk Register Template</Link>
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Quick Reference Guides</h3>
                <div className="nci-grid">
                  <div className="nci-grid-item">
                    <h4>AI Risk Assessment Quick Start</h4>
                    <p>A one-page checklist for conducting your first AI risk assessment using NC-AI-001.</p>
                  </div>
                  <div className="nci-grid-item">
                    <h4>Risk Scoring Matrix</h4>
                    <p>Quick reference guide for the 5x5 impact and likelihood scoring system.</p>
                  </div>
                  <div className="nci-grid-item">
                    <h4>Control Strategy Examples</h4>
                    <p>Common mitigation approaches for each of the 8 risk categories.</p>
                  </div>
                  <div className="nci-grid-item">
                    <h4>Review Checklist</h4>
                    <p>Quarterly and annual review checklist for maintaining your AI risk register.</p>
                  </div>
                </div>
                <p className="nci-text-small mt-3" style={{ fontStyle: 'italic' }}>
                  <strong>Note:</strong> Quick reference guides are currently in development and will be available soon.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Best Practices</h3>
                <p className="nci-text">
                  <strong>Implementing AI Governance in Smaller Organizations</strong>
                </p>
                <ul className="nci-list">
                  <li><strong>Start Small:</strong> Begin with one AI system or use case, then expand</li>
                  <li><strong>Focus on High-Impact Risks:</strong> Prioritize risks that could significantly impact your operations or stakeholders</li>
                  <li><strong>Document Everything:</strong> Maintain clear records of your risk assessments and mitigation strategies</li>
                  <li><strong>Regular Reviews:</strong> Schedule quarterly reviews to update your risk register</li>
                  <li><strong>Involve Your Team:</strong> Include staff who use AI systems in the risk assessment process</li>
                  <li><strong>Align with ISO 42001:</strong> Use NC-AI standards as a stepping stone toward ISO 42001 compliance</li>
                  <li><strong>Seek Support:</strong> Reach out to governance@kaizenstrategic.ai for questions or guidance</li>
                </ul>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Case Studies</h3>
                <p className="nci-text">
                  Real-world examples of organizations implementing NC-AI standards and AI governance frameworks:
                </p>
                <ul className="nci-list">
                  <li>Small business AI risk assessment case study</li>
                  <li>Municipal government AI governance implementation</li>
                  <li>Indigenous organization data sovereignty and AI governance</li>
                  <li>Regional nonprofit AI compliance journey</li>
                </ul>
                <p className="nci-text-small mt-2" style={{ fontStyle: 'italic' }}>
                  <strong>Note:</strong> Case studies are currently in development. If you&apos;ve implemented NC-AI standards and would like to share your experience, please contact us.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Tools & Templates</h3>
                <p className="nci-text">
                  Additional tools and templates to support AI governance implementation:
                </p>
                <ul className="nci-list">
                  <li>AI System Inventory Template</li>
                  <li>Risk Assessment Worksheet</li>
                  <li>Mitigation Action Plan Template</li>
                  <li>Review Meeting Agenda Template</li>
                  <li>Stakeholder Communication Template</li>
                </ul>
                <p className="nci-text-small mt-2" style={{ fontStyle: 'italic' }}>
                  <strong>Note:</strong> Additional tools and templates are in development. Check back soon for updates.
                </p>
              </div>

              <div className="nci-content-box nci-alert">
                <h3 className="nci-heading">Need Help?</h3>
                <p className="nci-text">
                  If you need assistance implementing NC-AI standards or have questions about AI governance:
                </p>
                <p className="nci-contact mt-3">
                  <strong>Email:</strong> <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a><br />
                  <strong>Standards:</strong> <Link href="/nci/standards">View All NC-AI Standards</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

