import Link from 'next/link';

export default function NCIPage() {
  return (
    <>
      <header className="nci-header d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10 col-12 text-center">
              <h1 className="nci-title">Northern Cascadia Institute</h1>
              <h2 className="nci-subtitle">of AI Governance</h2>
              <p className="nci-tagline">Regional AI governance standards for Northern BC and beyond</p>
            </div>
          </div>
        </div>
      </header>

      <section className="nci-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <div className="nci-content-box">
                <h3 className="nci-heading">Mission</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute of AI Governance develops practical, accessible AI governance standards and frameworks that work for Northern BC and beyond. We focus on tools aligned with international standards like ISO 42001, designed specifically for smaller organizations, remote communities, and regional businesses.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Geographic Scope</h3>
                <p className="nci-text">
                  Our focus is Northern British Columbia, specifically the region north of Prince George. We acknowledge the unique geographic and economic context of the North, including lower population density, resource-based economies, and the importance of Indigenous sovereignty and data rights.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Our Work</h3>
                <ul className="nci-list">
                  <li>Development of regional AI governance standards (NC-AI series)</li>
                  <li>Practical tools aligned with ISO 42001:2023</li>
                  <li>Annual AI & Technology Summit</li>
                  <li>Community engagement and stakeholder consultation</li>
                  <li>Partnership with Indigenous governments and communities</li>
                </ul>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Current Standards</h3>
                <div className="nci-standard-card">
                  <h4>NC-AI-001: AI Risk Register Template</h4>
                  <p>Version 1.0 • Published Q4 2025 • Status: Draft for Public Comment</p>
                  <p>A comprehensive AI risk management template with 28 pre-populated risks across 8 categories, aligned with ISO 42001:2023.</p>
                  <Link href="/nci/nc-ai-001" className="nci-btn">
                    View Standard
                  </Link>
                </div>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Annual AI & Technology Summit</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute hosts an Annual AI & Technology Summit in late summer/early fall. The summit brings together business leaders, government officials, Indigenous representatives, and technology experts to discuss AI governance and digital strategy in Northern BC.
                </p>
                <Link href="/nci/summit" className="nci-btn">
                  Learn More About the Summit
                </Link>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Indigenous Partnership</h3>
                <p className="nci-text">
                  We recognize and respect Indigenous sovereignty and data rights. The Institute acknowledges the jurisdiction of Indigenous governments over AI governance on their territories. Future versions of our standards will include multi-language support for Indigenous languages.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Contact & Feedback</h3>
                <p className="nci-text">
                  We welcome feedback on our standards and partnerships with organizations throughout Northern BC. For inquiries, please contact:
                </p>
                <p className="nci-contact">
                  <strong>Email:</strong> <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a><br />
                  <strong>Website:</strong> <Link href="/">kaizenstrategic.ai</Link>
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Relationship to Kaizen Strategic AI</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute was initiated by Kaizen Strategic AI, a Terrace-based digital strategy consultancy. Kaizen Strategic AI operates separately as a for-profit business providing AI integration and digital strategy services. The Institute operates independently as a standards-setting organization focused on regional AI governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

