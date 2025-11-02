import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Annual AI & Technology Summit Northern BC | Northern Cascadia Institute | Terrace, BC 2025',
  description: 'Annual AI & Technology Summit hosted by Northern Cascadia Institute in Terrace, BC. Bringing together business leaders, government officials, and technology experts for AI governance and digital strategy discussions.',
  keywords: [
    'AI summit Northern BC',
    'AI conference Northern BC',
    'AI technology summit',
    'AI governance summit',
    'Northern BC AI event',
    'Terrace BC AI summit',
  ].join(', '),
  alternates: {
    canonical: 'https://kaizenstrategic.ai/nci/summit',
  },
};

export default function SummitPage() {
  return (
    <>
      <header className="nci-header d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10 col-12 text-center">
              <nav aria-label="breadcrumb" className="nci-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/nci">Northern Cascadia Institute</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Annual AI & Technology Summit
                  </li>
                </ol>
              </nav>
              <h1 className="nci-title">Annual AI & Technology Summit</h1>
              <h2 className="nci-subtitle">Northern Cascadia Institute</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="nci-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <div className="nci-content-box">
                <h3 className="nci-heading">About the Summit</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute of AI Governance hosts an Annual AI & Technology Summit bringing together business leaders, government officials, Indigenous representatives, and technology experts to discuss AI governance and digital strategy in Northern BC.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Summit Details</h3>
                <div className="nci-standard-card">
                  <p><strong>Date:</strong> Late summer/early fall 2025</p>
                  <p><strong>Duration:</strong> Full day (8 hours)</p>
                  <p><strong>Location:</strong> Terrace, BC (venue TBD)</p>
                  <p><strong>Target Audience:</strong> Business leaders, decision makers, and tech professionals</p>
                  <p><strong>Expected Attendance:</strong> 100-150 people</p>
                </div>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Event Structure</h3>
                <ul className="nci-list">
                  <li><strong>Morning Keynote:</strong> &ldquo;The Future of AI in Northern BC&rdquo;</li>
                  <li><strong>Guest Speakers:</strong> Invited tech leaders and industry experts</li>
                  <li><strong>Panel Discussions:</strong> AI implementation challenges and solutions</li>
                  <li><strong>Breakout Sessions:</strong> Industry-specific AI applications</li>
                  <li><strong>Networking Lunch:</strong> Business connections and partnerships</li>
                  <li><strong>Afternoon Workshops:</strong> Hands-on AI tool demonstrations</li>
                  <li><strong>Closing Keynote:</strong> Regional AI strategy and opportunities</li>
                </ul>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Summit Topics</h3>
                <ul className="nci-list">
                  <li>AI governance and risk management</li>
                  <li>Regional digital strategy</li>
                  <li>Indigenous data sovereignty</li>
                  <li>Business AI implementation</li>
                  <li>NC-AI standards development and feedback</li>
                </ul>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Registration</h3>
                <p className="nci-text">
                  Registration information will be available closer to the event date. For inquiries about the summit, please contact:
                </p>
                <p className="nci-contact">
                  <strong>Email:</strong> <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a>
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Hosted By</h3>
                <p className="nci-text">
                  The Annual AI & Technology Summit is hosted by the <strong>Northern Cascadia Institute of AI Governance</strong>. This is separate from Kaizen Strategic AI&apos;s quarterly informational events, which focus on business AI education and practical implementation.
                </p>
                <div className="mt-3">
                  <Link href="/nci" className="nci-btn me-3">
                    Learn About NCI
                  </Link>
                  <Link href="/events" className="nci-btn" style={{ background: 'transparent', border: '2px solid var(--nci-accent)', color: 'var(--nci-accent)' }}>
                    Kaizen Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

