import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NC-AI-001 AI Risk Register Template | ISO 42001:2023 Aligned | Free Download | PDF, CSV, MD Formats',
  description: 'Download NC-AI-001 AI Risk Register Template free. Comprehensive AI risk management template with 28 pre-populated risks across 8 categories (security, operational, strategic, compliance, financial, reputational, technical, human), fully aligned with ISO 42001:2023. Available in PDF, Markdown, CSV, and DOCX formats. Designed for smaller organizations, remote communities, and regional businesses in Northern BC.',
  keywords: [
    'NC-AI-001',
    'AI risk register template',
    'AI risk register template ISO 42001',
    'ISO 42001 template',
    'ISO 42001:2023 template',
    'ISO/IEC 42001 template',
    'AI risk management template',
    'AI governance template',
    'AI risk assessment template',
    'free AI risk register',
    'AI risk register download',
    'AI risk register PDF',
    'AI risk register CSV',
    'AI risk register template free',
    'AI compliance template',
    'AI risk framework',
    'AI risk categories',
    'AI security risks',
    'AI operational risks',
    'AI strategic risks',
    'AI compliance risks',
    'AI financial risks',
    'AI reputational risks',
    'AI technical risks',
    'AI human risks',
    'small business AI risk management',
    'AI risk register for small organizations',
    'remote community AI governance',
    'regional AI standards',
    'AI risk management Northern BC',
    'AI governance Northern BC',
    'Northern Cascadia Institute',
    'NC-AI standards',
    '28 AI risks',
    'AI risk register 8 categories',
    'AI risk mitigation template',
    'AI risk identification',
    'AI risk documentation',
    'AI risk assessment tool',
    'AI governance framework',
    'AI standards template',
  ].join(', '),
  openGraph: {
    title: 'NC-AI-001 AI Risk Register Template | ISO 42001:2023 Aligned | Free Download',
    description: 'Free AI risk register template aligned with ISO 42001:2023. 28 pre-populated risks across 8 categories. Available in multiple formats.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://kaizenstrategic.ai/nci/nc-ai-001',
  },
};

import CommentsSection from './components/CommentsSection';

export default function NCAI001Page() {
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
                    NC-AI-001
                  </li>
                </ol>
              </nav>
              <h1 className="nci-title">NC-AI-001</h1>
              <h2 className="nci-subtitle">AI Risk Register Template</h2>
              <p className="nci-meta">Version 1.0 • Published Q4 2025 • Status: Draft for Public Comment</p>
            </div>
          </div>
        </div>
      </header>

      <section className="nci-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <div className="nci-content-box">
                <h3 className="nci-heading">Overview</h3>
                <p className="nci-text">
                  NC-AI-001 is the first published standard from the Northern Cascadia Institute of AI Governance. This AI Risk Register Template provides a comprehensive, ISO 42001-compliant framework for identifying, assessing, and managing AI-related risks in your organization.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">What&apos;s Included</h3>
                <ul className="nci-list">
                  <li><strong>28 Pre-Populated Risks</strong> across 8 major categories</li>
                  <li><strong>Risk Scoring Framework</strong> with 5x5 impact and likelihood matrices</li>
                  <li><strong>ISO 42001 Alignment</strong> covering Clause 6.1.2 and Annex A.2</li>
                  <li><strong>Step-by-Step Instructions</strong> for implementation</li>
                  <li><strong>Control Strategies</strong> with example mitigation approaches</li>
                  <li><strong>Review Checklist</strong> for ongoing assessment</li>
                </ul>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Risk Categories</h3>
                <div className="nci-grid">
                  <div className="nci-grid-item">
                    <h4>Bias and Fairness</h4>
                    <p>4 risks: Algorithmic bias, unfair treatment, data representativeness, stereotype reinforcement</p>
                  </div>
                  <div className="nci-grid-item">
                    <h4>Security and Privacy</h4>
                    <p>5 risks: Unauthorized access, data breaches, poisoning attacks, IP theft, access controls</p>
                  </div>
                  <div className="nci-grid-item">
                    <h4>Transparency and Explainability</h4>
                    <p>4 risks: Lack of explainability, black box decisions, inadequate communication, documentation failures</p>
                  </div>
                  <div className="nci-grid-item">
                    <h4>Data Quality and Integrity</h4>
                    <p>4 risks: Poor training data, incomplete coverage, provenance issues, model drift</p>
                  </div>
                  <div className="nci-grid-item">
                    <h4>Regulatory Compliance</h4>
                    <p>4 risks: Non-compliance, insufficient documentation, cross-jurisdictional challenges, IP infringement</p>
                  </div>
                  <div className="nci-grid-item">
                    <h4>Operational Risks</h4>
                    <p>4 risks: System failures, degraded performance, inadequate oversight, workflow disruption</p>
                  </div>
                  <div className="nci-grid-item">
                    <h4>Human Impact and Safety</h4>
                    <p>4 risks: Safety risks, psychological harm, employment displacement, misinformation</p>
                  </div>
                  <div className="nci-grid-item">
                    <h4>Third-Party and Vendor</h4>
                    <p>4 risks: Vendor breaches, lock-in, compliance issues, unclear responsibilities</p>
                  </div>
                </div>
              </div>

              <div className="nci-content-box nci-alert">
                <h3 className="nci-heading">Open for Public Comment</h3>
                <p className="nci-text">
                  NC-AI-001 v1.0 is published as &ldquo;Draft for Public Comment&rdquo; and is open for feedback. The Institute invites input from:
                </p>
                <ul className="nci-list">
                  <li>Indigenous governments and communities</li>
                  <li>Municipal governments</li>
                  <li>Businesses and organizations</li>
                  <li>Professional associations</li>
                  <li>Academic institutions</li>
                </ul>
                <p className="nci-text">
                  <strong>Feedback deadline:</strong> TBD<br />
                  <strong>Contact:</strong> <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a>
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Download</h3>
                <p className="nci-text">
                  NC-AI-001 is available free of charge in multiple formats. Download directly from this website:
                </p>
                <div className="nci-download-grid">
                  <div className="nci-download-item">
                    <h4>Complete Package (ZIP)</h4>
                    <p>All files in one convenient download</p>
                    <a href="/nci/nc-ai-001/NC-AI-001-Publication-Package.zip" className="nci-btn" download>
                      Download ZIP
                    </a>
                  </div>
                  <div className="nci-download-item">
                    <h4>PDF</h4>
                    <p>Professional printable format</p>
                    <a href="/nci/nc-ai-001/NC-AI-001-Complete-Template.pdf" className="nci-btn" download>
                      Download PDF
                    </a>
                  </div>
                  <div className="nci-download-item">
                    <h4>Markdown (.md)</h4>
                    <p>Primary template format for version control</p>
                    <a href="/nci/nc-ai-001/NC-AI-001-Complete-Template.md" className="nci-btn" download>
                      Download MD
                    </a>
                  </div>
                  <div className="nci-download-item">
                    <h4>Word (.docx)</h4>
                    <p>Editable document format</p>
                    <a href="/nci/nc-ai-001/NC-AI-001-Complete-Template.docx" className="nci-btn" download>
                      Download DOCX
                    </a>
                  </div>
                  <div className="nci-download-item">
                    <h4>CSV (.csv)</h4>
                    <p>Spreadsheet-compatible format for Excel</p>
                    <a href="/nci/nc-ai-001/NC-AI-001-Risk-Data.csv" className="nci-btn" download>
                      Download CSV
                    </a>
                  </div>
                  <div className="nci-download-item">
                    <h4>README</h4>
                    <p>User guide and instructions</p>
                    <a href="/nci/nc-ai-001/NC-AI-001-README.pdf" className="nci-btn" download>
                      Download README
                    </a>
                  </div>
                </div>
                <p className="nci-text-small mt-3">
                  <strong>Note:</strong> Also available on <a href="https://github.com/EsotericShadow/nc-ai-templates" target="_blank" rel="noopener noreferrer">GitHub</a> for version control and contribution.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">License</h3>
                <p className="nci-text">
                  This template is released to the <strong>Public Domain</strong>. You are free to:
                </p>
                <ul className="nci-list">
                  <li>Use for any purpose</li>
                  <li>Modify and adapt</li>
                  <li>Share and redistribute</li>
                  <li>Commercial use</li>
                </ul>
                <p className="nci-text-small">
                  Attribution appreciated but not required.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Citation</h3>
                <p className="nci-text">
                  <strong>Academic/Formal:</strong><br />
                  Northern Cascadia Institute of AI Governance. (2026). NC-AI-001: AI Risk Register Template v1.0. Kaizen Strategic AI.
                </p>
                <p className="nci-text">
                  <strong>Informal:</strong><br />
                  NC-AI-001: AI Risk Register Template v1.0, Northern Cascadia Institute, 2026
                </p>
              </div>

              {/* Public Comments Section */}
              <CommentsSection standardId="nc-ai-001" />

              <div className="nci-content-box">
                <h3 className="nci-heading">Support</h3>
                <p className="nci-text">
                  For questions, feedback, or support regarding NC-AI-001, please contact:
                </p>
                <p className="nci-contact">
                  <strong>Email:</strong> <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

