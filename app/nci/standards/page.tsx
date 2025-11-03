import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NC-AI Standards Series | AI Governance Standards Northern BC | Northern Cascadia Institute',
  description: 'Browse NC-AI standards and risk templates for AI governance. Northern Cascadia Institute develops practical, ISO 42001-aligned standards for Northern BC businesses, municipalities, and organizations.',
  keywords: [
    'NC-AI standards',
    'AI governance standards',
    'AI risk templates',
    'AI governance templates',
    'ISO 42001 standards',
    'AI standards Northern BC',
    'AI risk register templates',
    'AI governance frameworks',
    'NC-AI-001',
    'AI standards series',
    'regional AI standards',
    'AI governance Northern BC',
  ].join(', '),
  openGraph: {
    title: 'NC-AI Standards Series | Northern Cascadia Institute',
    description: 'AI governance standards and risk templates for Northern BC and beyond.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://kaizenstrategic.ai/nci/standards',
  },
};

export default function StandardsPage() {
  const standards = [
    {
      id: 'nc-ai-001',
      title: 'NC-AI-001',
      subtitle: 'AI Risk Register Template',
      version: '1.0',
      status: 'Draft for Public Comment',
      publishedDate: 'Q4 2025',
      description: 'A comprehensive AI risk management template with 28 pre-populated risks across 8 categories, fully aligned with ISO 42001:2023. Designed for smaller organizations, remote communities, and regional businesses.',
      categories: [
        'Bias and Fairness',
        'Security and Privacy',
        'Transparency and Explainability',
        'Data Quality and Integrity',
        'Regulatory Compliance',
        'Operational Risks',
        'Human Impact and Safety',
        'Third-Party and Vendor',
      ],
      href: '/nci/nc-ai-001',
    },
  ];

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
                    Standards
                  </li>
                </ol>
              </nav>
              <h1 className="nci-title">NC-AI Standards Series</h1>
              <h2 className="nci-subtitle">AI Governance Standards and Risk Templates</h2>
              <p className="nci-tagline">Practical, ISO 42001-aligned standards for Northern BC and beyond</p>
            </div>
          </div>
        </div>
      </header>

      <section className="nci-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <div className="nci-content-box">
                <h3 className="nci-heading">About the NC-AI Standards Series</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute develops and publishes the NC-AI (Northern Cascadia - Artificial Intelligence) standards series, a collection of practical AI governance standards and risk management templates aligned with international frameworks like ISO 42001:2023.
                </p>
                <p className="nci-text">
                  Our standards are designed specifically for smaller organizations, remote communities, and regional businesses that need practical, accessible AI governance tools. Each standard includes templates, guidelines, and implementation resources.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Published Standards</h3>
                {standards.map((standard) => (
                  <div key={standard.id} className="nci-standard-card" style={{ marginBottom: '2rem' }}>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h4 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--nci-primary)', marginBottom: '0.5rem' }}>
                          {standard.title}
                        </h4>
                        <h5 style={{ fontSize: '20px', fontWeight: 400, color: 'var(--nci-text)', marginBottom: '0.25rem' }}>
                          {standard.subtitle}
                        </h5>
                        <p className="nci-text-small" style={{ marginBottom: '0' }}>
                          Version {standard.version} • Published {standard.publishedDate} • Status: <strong>{standard.status}</strong>
                        </p>
                      </div>
                      <Link href={standard.href} className="nci-btn">
                        View Standard
                      </Link>
                    </div>
                    <p className="nci-text" style={{ marginBottom: '1rem' }}>
                      {standard.description}
                    </p>
                    <div>
                      <p className="nci-text-small" style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
                        Risk Categories:
                      </p>
                      <div className="nci-grid" style={{ marginTop: '0.5rem' }}>
                        {standard.categories.map((category, index) => (
                          <div key={index} className="nci-grid-item">
                            <h6 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--nci-primary)', marginBottom: '0.25rem' }}>
                              {category}
                            </h6>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="nci-content-box nci-alert">
                <h3 className="nci-heading">Standards in Development</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute is actively developing additional standards in the NC-AI series. Future standards will cover:
                </p>
                <ul className="nci-list">
                  <li>AI Governance Framework Implementation Guide</li>
                  <li>AI Ethics and Bias Assessment Templates</li>
                  <li>Data Governance for AI Systems</li>
                  <li>AI Procurement and Vendor Management Standards</li>
                  <li>AI Incident Response and Reporting Templates</li>
                </ul>
                <p className="nci-text-small mt-2">
                  Standards are developed through our transparent public comment process. Interested stakeholders are encouraged to participate.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">How to Use NC-AI Standards</h3>
                <ol className="nci-list" style={{ listStyle: 'decimal', paddingLeft: '1.5rem' }}>
                  <li><strong>Review the Standard:</strong> Download and review the complete standard document</li>
                  <li><strong>Assess Your Needs:</strong> Identify which risk categories and templates apply to your organization</li>
                  <li><strong>Customize:</strong> Adapt templates to your specific context and requirements</li>
                  <li><strong>Implement:</strong> Integrate standards into your existing governance frameworks</li>
                  <li><strong>Review and Update:</strong> Regularly review and update your AI risk management based on standards</li>
                </ol>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Providing Feedback</h3>
                <p className="nci-text">
                  All NC-AI standards are published for public comment before finalization. We welcome feedback from:
                </p>
                <ul className="nci-list">
                  <li>Indigenous governments and communities</li>
                  <li>Municipal governments</li>
                  <li>Business organizations</li>
                  <li>Professional associations</li>
                  <li>Academic institutions</li>
                  <li>Individual contributors</li>
                </ul>
                <p className="nci-contact mt-3">
                  <strong>Submit Feedback:</strong><br />
                  Email: <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

