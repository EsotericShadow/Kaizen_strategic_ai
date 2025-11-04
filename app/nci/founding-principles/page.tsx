import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Founding Principles | Northern Cascadia Institute of AI Governance',
  description: 'The founding principles of the Northern Cascadia Institute: self-determination, local governance, Indigenous sovereignty, Northern BC culture, and the right to set our own standards before external regulation.',
  keywords: [
    'NCI founding principles',
    'AI governance self-determination',
    'Indigenous data sovereignty',
    'Northern BC AI governance',
    'regional AI standards',
    'AI governance principles',
  ].join(', '),
  openGraph: {
    title: 'Founding Principles | Northern Cascadia Institute',
    description: 'The foundational principles that guide NCI\'s work in regional AI governance.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://kaizenstrategic.ai/nci/founding-principles',
  },
};

export default function FoundingPrinciplesPage() {
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
                    Founding Principles
                  </li>
                </ol>
              </nav>
              <h1 className="nci-title">Founding Principles</h1>
              <h2 className="nci-subtitle">The Foundation of NCI</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="nci-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <div className="nci-content-box">
                <h3 className="nci-heading">Preamble</h3>
                <p className="nci-text" style={{ fontStyle: 'italic', fontSize: '18px' }}>
                  The Northern Cascadia Institute of AI Governance is founded on the principle that Northern British Columbia has the right to articulate its own AI governance standards before external regulation arrives. We believe that AI governance in the North must not be a downstream compliance reaction to standards authored elsewhere—it must be authored here, by the people who live with the consequences.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Core Principles</h3>
                
                <div style={{ marginBottom: '3rem' }}>
                  <h4 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--nci-primary)', marginBottom: '1rem' }}>
                    1. Self-Determination Comes First
                  </h4>
                  <p className="nci-text">
                    Northern communities have the right to articulate their own standards before external regulation arrives. AI governance in the North must not be a downstream compliance reaction to standards authored elsewhere. It must be authored here, by the people that live with the consequences.
                  </p>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                  <h4 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--nci-primary)', marginBottom: '1rem' }}>
                    2. Governance Begins Local
                  </h4>
                  <p className="nci-text">
                    AI will affect daily life, labour patterns, public services, water, land, industry, resource extraction, medical access, education—the things that Northern British Columbia understands differently than Vancouver, Ottawa, or Silicon Valley. We choose to start governance where impact will be felt: on the ground, with our own context.
                  </p>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                  <h4 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--nci-primary)', marginBottom: '1rem' }}>
                    3. Indigenous Nations are Equal Pillars in Standards Creation
                  </h4>
                  <p className="nci-text">
                    Indigenous governments are not stakeholders. They are sovereigns. Standards cannot be legitimate without equal place for Indigenous law, Indigenous data rights, and Indigenous methodologies—at the table, not in the footnotes.
                  </p>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                  <h4 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--nci-primary)', marginBottom: '1rem' }}>
                    4. Northern BC Culture is a Valid Context for AI Risk
                  </h4>
                  <p className="nci-text">
                    AI governance cannot pretend everywhere is the same. The North has its own economic model, its own relationship with land, its own multi-generational industrial cycle. The North is not &ldquo;edge case Canada.&rdquo; It is a distinct cultural region worthy of its own frameworks.
                  </p>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                  <h4 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--nci-primary)', marginBottom: '1rem' }}>
                    5. The North Must Not Wait for Permission
                  </h4>
                  <p className="nci-text">
                    We do not need to wait for Ottawa or ISO to tell us what is allowed. We begin architecting standards now, and we will interface with ISO, IEEE, provincial, federal, and Indigenous legal systems on our terms.
                  </p>
                </div>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">What Makes Northern BC Unique</h3>
                
                <div className="nci-grid" style={{ marginTop: '1.5rem' }}>
                  <div className="nci-grid-item">
                    <h4>Economic Context</h4>
                    <ul className="nci-list" style={{ marginTop: '0.5rem' }}>
                      <li>Resource-based economies</li>
                      <li>Multi-generational cycles</li>
                      <li>Remote communities</li>
                      <li>Small organizations</li>
                    </ul>
                  </div>
                  <div className="nci-grid-item">
                    <h4>Cultural Context</h4>
                    <ul className="nci-list" style={{ marginTop: '0.5rem' }}>
                      <li>Distinct regional identity</li>
                      <li>Strong communities</li>
                      <li>Intergenerational knowledge</li>
                      <li>Relationship with land</li>
                    </ul>
                  </div>
                  <div className="nci-grid-item">
                    <h4>Governance Context</h4>
                    <ul className="nci-list" style={{ marginTop: '0.5rem' }}>
                      <li>Multiple jurisdictions</li>
                      <li>Indigenous sovereignty</li>
                      <li>Regional autonomy</li>
                      <li>Community-driven</li>
                    </ul>
                  </div>
                  <div className="nci-grid-item">
                    <h4>AI Risk Context</h4>
                    <ul className="nci-list" style={{ marginTop: '0.5rem' }}>
                      <li>Resource extraction risks</li>
                      <li>Remote infrastructure</li>
                      <li>Small org needs</li>
                      <li>Data sovereignty</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="nci-content-box nci-alert">
                <h3 className="nci-heading">Declaration</h3>
                <p className="nci-text">
                  We declare that:
                </p>
                <ol className="nci-list" style={{ listStyle: 'decimal', paddingLeft: '1.5rem' }}>
                  <li>Northern BC has the right to set its own AI governance standards before external regulation arrives</li>
                  <li>We are free to govern ourselves as we see fit, respecting all jurisdictions (municipal, Indigenous, provincial, federal)</li>
                  <li>Indigenous communities and governments must be respected and included as equal partners, not just stakeholders</li>
                  <li>Northern BC&apos;s unique culture and way of life require their own respect regarding AI governance</li>
                  <li>We will begin architecting standards now, and interface with international, provincial, and federal systems on our terms</li>
                </ol>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Co-Signatories</h3>
                <p className="nci-text">
                  <strong>Founding Petitioner:</strong> Gabriel Lacroix, Founder
                </p>
                <p className="nci-text">
                  <strong>Co-Signatories:</strong> To be added as partnerships are established
                </p>
                <p className="nci-text">
                  We are seeking co-signers from Indigenous governments, municipalities, business organizations, academic institutions, and community leaders who share these principles. If you would like to co-sign this declaration, please contact us.
                </p>
                <p className="nci-contact mt-3">
                  <strong>Express Interest in Co-Signing:</strong><br />
                  Email: <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a>
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Related Documents</h3>
                <ul className="nci-list">
                  <li><Link href="/nci/consultation-whitepaper">Consultation Whitepaper: Why Does Northern BC Need Its Own AI Governance Lens?</Link></li>
                  <li><Link href="/nci/about">About NCI</Link></li>
                  <li><Link href="/nci/standards">NC-AI Standards Series</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

