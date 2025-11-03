import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Governance & Board | Northern Cascadia Institute of AI Governance',
  description: 'Learn about the Northern Cascadia Institute of AI Governance, our governance structure, board of directors, and organizational mission. BC nonprofit society focused on AI governance standards for Northern BC.',
  keywords: [
    'Northern Cascadia Institute',
    'NCI governance',
    'NCI board of directors',
    'AI governance nonprofit',
    'BC nonprofit society',
    'AI governance board',
    'Northern BC AI governance',
    'NCI about',
    'NCI organization',
    'AI governance organization',
  ].join(', '),
  openGraph: {
    title: 'About Northern Cascadia Institute | Governance & Board',
    description: 'Learn about NCI\'s governance structure, board, and organizational mission.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://kaizenstrategic.ai/nci/about',
  },
};

export default function AboutPage() {
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
                    About
                  </li>
                </ol>
              </nav>
              <h1 className="nci-title">About</h1>
              <h2 className="nci-subtitle">Governance & Organization</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="nci-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <div className="nci-content-box">
                <h3 className="nci-heading">Mission & Purpose</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute of AI Governance is a BC Nonprofit Society (currently in pre-incorporation) dedicated to developing practical, accessible AI governance standards and frameworks for Northern BC and beyond.
                </p>
                <p className="nci-text">
                  Our mission is to create tools aligned with international standards like ISO 42001:2023, designed specifically for smaller organizations, remote communities, and regional businesses. We focus on making AI governance practical, accessible, and relevant to the unique context of Northern BC.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Organizational Structure</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute operates under a <strong>board-directed governance model</strong> with an initial board of 3-5 members. The board is responsible for:
                </p>
                <ul className="nci-list">
                  <li>Strategic direction and organizational oversight</li>
                  <li>Standards development and approval</li>
                  <li>Financial management and reporting</li>
                  <li>Stakeholder engagement and partnerships</li>
                  <li>Community consultation and public comment processes</li>
                </ul>
                <p className="nci-text-small mt-2">
                  <strong>Legal Status:</strong> Pre-Incorporation (BC Society Act)<br />
                  <strong>Structure:</strong> Nonprofit Society with Charitable Purposes<br />
                  <strong>Tax Status:</strong> Charitable registration pending (CRA)
                </p>
              </div>

              <div className="nci-content-box nci-alert">
                <h3 className="nci-heading">Board of Directors</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute is currently forming its initial board of directors. We are seeking <strong>2 additional board members</strong> to join our founding board.
                </p>
                <p className="nci-text">
                  <strong>This page will display board member profiles once the board is fully formed.</strong> Board members will include:
                </p>
                <ul className="nci-list">
                  <li>Chair/President</li>
                  <li>Vice-Chair/Vice-President</li>
                  <li>Secretary</li>
                  <li>Treasurer</li>
                  <li>Member-at-Large (optional)</li>
                </ul>
                <p className="nci-text">
                  <strong>Interested in joining the board?</strong> We are looking for individuals with expertise in:
                </p>
                <ul className="nci-list">
                  <li>AI governance, ethics, or policy</li>
                  <li>Indigenous governance and data sovereignty</li>
                  <li>Municipal or regional government</li>
                  <li>Nonprofit governance and organizational development</li>
                  <li>Standards development and technical writing</li>
                  <li>Community engagement and stakeholder consultation</li>
                </ul>
                <p className="nci-contact mt-3">
                  <strong>Board Recruitment:</strong><br />
                  Email: <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a><br />
                  <span style={{ fontSize: '14px', color: 'var(--nci-text-light)' }}>
                    Time Commitment: 4-8 hours per month | Board meetings: Quarterly
                  </span>
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Governance Model</h3>
                <p className="nci-text">
                  NCI operates with a <strong>stakeholder-based membership model</strong>, where members include Indigenous governments, municipalities, business organizations, professional associations, academic institutions, and individual contributors.
                </p>
                <p className="nci-text">
                  <strong>Decision-Making Structure:</strong>
                </p>
                <ul className="nci-list">
                  <li><strong>Board Meetings:</strong> Minimum quarterly meetings</li>
                  <li><strong>Quorum:</strong> 50% + 1 of board members</li>
                  <li><strong>Voting:</strong> Majority rule, with special provisions for strategic decisions</li>
                  <li><strong>Standards Approval:</strong> Board review and approval after public comment period</li>
                </ul>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Geographic Focus</h3>
                <p className="nci-text">
                  Our primary focus is Northern British Columbia, specifically the region north of Prince George. We acknowledge the unique geographic and economic context of the North, including:
                </p>
                <ul className="nci-list">
                  <li>Lower population density</li>
                  <li>Resource-based economies</li>
                  <li>Indigenous sovereignty and data rights</li>
                  <li>Remote community needs</li>
                  <li>Regional business requirements</li>
                </ul>
                <p className="nci-text-small mt-2">
                  <strong>Primary Service Area:</strong> Terrace, Kitimat, Prince Rupert, Smithers<br />
                  <strong>Indigenous Territories:</strong> Tsimshian, Gitxsan, Wet&apos;suwet&apos;en First Nations
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Relationship to Kaizen Strategic AI</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute was initiated by Kaizen Strategic AI, a Terrace-based digital strategy consultancy. However, <strong>NCI operates independently</strong> as a standards-setting organization with:
                </p>
                <ul className="nci-list">
                  <li>Separate governance and decision-making</li>
                  <li>Independent financial management</li>
                  <li>Distinct organizational purpose (public interest vs. commercial services)</li>
                </ul>
                <p className="nci-text">
                  Kaizen Strategic AI may provide administrative support and resources, but NCI maintains complete operational independence. The relationship demonstrates Kaizen Strategic AI&apos;s commitment to responsible AI governance while ensuring NCI&apos;s standards remain focused on public interest rather than commercial objectives.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Contact</h3>
                <p className="nci-text">
                  For questions about governance, board membership, or organizational structure:
                </p>
                <p className="nci-contact">
                  <strong>Email:</strong> <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a><br />
                  <strong>Website:</strong> <Link href="/">kaizenstrategic.ai</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

