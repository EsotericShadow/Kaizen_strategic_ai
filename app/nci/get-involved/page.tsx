import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Get Involved | Membership & Participation | Northern Cascadia Institute',
  description: 'Learn how to get involved with the Northern Cascadia Institute. Become a member, participate in standards development, volunteer opportunities, and board positions.',
  keywords: [
    'NCI membership',
    'get involved NCI',
    'AI governance participation',
    'NCI volunteer',
    'standards development participation',
    'NCI board positions',
    'join NCI',
  ].join(', '),
  openGraph: {
    title: 'Get Involved | Northern Cascadia Institute',
    description: 'Learn how to become a member, participate in standards development, or volunteer with NCI.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://kaizenstrategic.ai/nci/get-involved',
  },
};

export default function GetInvolvedPage() {
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
                    Get Involved
                  </li>
                </ol>
              </nav>
              <h1 className="nci-title">Get Involved</h1>
              <h2 className="nci-subtitle">Membership & Participation</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="nci-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <div className="nci-content-box">
                <h3 className="nci-heading">Ways to Get Involved</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute welcomes participation from a wide range of stakeholders. There are multiple ways to get involved, from becoming a member to participating in standards development or joining our board of directors.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Become a Member</h3>
                <p className="nci-text">
                  NCI operates with a <strong>stakeholder-based membership model</strong>. Membership is open to:
                </p>
                <ul className="nci-list">
                  <li>Indigenous governments and communities</li>
                  <li>Municipal governments</li>
                  <li>Business organizations</li>
                  <li>Professional associations</li>
                  <li>Academic institutions</li>
                  <li>Individual contributors</li>
                </ul>
                <p className="nci-text">
                  <strong>Membership Benefits:</strong>
                </p>
                <ul className="nci-list">
                  <li>Participation in standards development and review</li>
                  <li>Voting on major organizational decisions</li>
                  <li>Access to NCI resources and events</li>
                  <li>Public comment privileges on standards</li>
                  <li>Networking opportunities with other stakeholders</li>
                  <li>Early access to new standards and resources</li>
                </ul>
                <p className="nci-text">
                  <strong>How to Apply:</strong>
                </p>
                <p className="nci-text-small">
                  Membership details and application process will be available upon incorporation. Until then, if you&apos;re interested in becoming a member, please contact us to express your interest.
                </p>
                <p className="nci-contact mt-3">
                  <strong>Membership Inquiries:</strong><br />
                  Email: <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a>
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Participate in Standards Development</h3>
                <p className="nci-text">
                  All NC-AI standards are developed through a transparent <strong>public comment process</strong>. You don&apos;t need to be a member to participate:
                </p>
                <ol className="nci-list" style={{ listStyle: 'decimal', paddingLeft: '1.5rem' }}>
                  <li><strong>Review Draft Standards:</strong> When a standard is published for public comment, review the document and provide feedback</li>
                  <li><strong>Submit Comments:</strong> Email your feedback to governance@kaizenstrategic.ai or use the public comments section on each standard&apos;s page</li>
                  <li><strong>Participate in Review:</strong> The board reviews all comments and incorporates feedback into revised standards</li>
                  <li><strong>Stay Informed:</strong> Follow updates on standards development through our News page</li>
                </ol>
                <p className="nci-text">
                  <strong>Current Opportunities:</strong>
                </p>
                <ul className="nci-list">
                  <li><strong>NC-AI-001:</strong> Currently open for public comment. Submit feedback on the AI Risk Register Template.</li>
                </ul>
                <p className="nci-text-small mt-2">
                  <Link href="/nci/standards">View All Standards</Link> | <Link href="/nci/nc-ai-001">Submit Feedback on NC-AI-001</Link>
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Volunteer Opportunities</h3>
                <p className="nci-text">
                  As NCI grows, we will have opportunities for volunteers to contribute to our mission. Potential volunteer roles include:
                </p>
                <ul className="nci-list">
                  <li><strong>Standards Review:</strong> Help review and provide feedback on draft standards</li>
                  <li><strong>Research & Writing:</strong> Contribute to standards development, case studies, or implementation guides</li>
                  <li><strong>Event Support:</strong> Assist with organizing and running the Annual AI & Technology Summit</li>
                  <li><strong>Community Outreach:</strong> Help spread awareness about NCI and AI governance in Northern BC</li>
                  <li><strong>Translation & Language Services:</strong> Support multi-language standards development (Indigenous languages)</li>
                  <li><strong>Technical Support:</strong> Assist with website, documentation, or technical resources</li>
                </ul>
                <p className="nci-text">
                  <strong>Current Status:</strong> Volunteer opportunities will be available after incorporation. If you&apos;re interested in volunteering, please contact us to express your interest and we&apos;ll reach out when opportunities become available.
                </p>
                <p className="nci-contact mt-3">
                  <strong>Volunteer Inquiries:</strong><br />
                  Email: <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a>
                </p>
              </div>

              <div className="nci-content-box nci-alert">
                <h3 className="nci-heading">Join the Board of Directors</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute is currently seeking <strong>2 additional board members</strong> to complete our initial board of directors. Board members play a crucial role in:
                </p>
                <ul className="nci-list">
                  <li>Strategic direction and organizational oversight</li>
                  <li>Standards development and approval</li>
                  <li>Financial management and reporting</li>
                  <li>Stakeholder engagement and partnerships</li>
                </ul>
                <p className="nci-text">
                  <strong>We are looking for individuals with expertise in:</strong>
                </p>
                <ul className="nci-list">
                  <li>AI governance, ethics, or policy</li>
                  <li>Indigenous governance and data sovereignty</li>
                  <li>Municipal or regional government</li>
                  <li>Nonprofit governance and organizational development</li>
                  <li>Standards development and technical writing</li>
                  <li>Community engagement and stakeholder consultation</li>
                </ul>
                <p className="nci-text">
                  <strong>Time Commitment:</strong> 4-8 hours per month, including quarterly board meetings, participation in standards review, and strategic planning.
                </p>
                <p className="nci-contact mt-3">
                  <strong>Board Recruitment:</strong><br />
                  Email: <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a><br />
                  <span style={{ fontSize: '14px', color: 'var(--nci-text-light)' }}>
                    <Link href="/nci/about">Learn More About Governance</Link>
                  </span>
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Partnership Opportunities</h3>
                <p className="nci-text">
                  NCI welcomes partnerships with organizations that share our mission of advancing AI governance in Northern BC:
                </p>
                <ul className="nci-list">
                  <li><strong>Indigenous Governments:</strong> Partnerships focused on Indigenous data sovereignty and AI governance</li>
                  <li><strong>Municipal Governments:</strong> Collaboration on regional AI governance standards and implementation</li>
                  <li><strong>Academic Institutions:</strong> Research partnerships and knowledge sharing</li>
                  <li><strong>Professional Associations:</strong> Collaboration on industry-specific AI governance standards</li>
                  <li><strong>Business Organizations:</strong> Partnerships to develop practical, business-focused AI governance tools</li>
                </ul>
                <p className="nci-contact mt-3">
                  <strong>Partnership Inquiries:</strong><br />
                  Email: <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a>
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Contact</h3>
                <p className="nci-text">
                  For questions about getting involved, membership, volunteering, or partnerships:
                </p>
                <p className="nci-contact">
                  <strong>Email:</strong> <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a><br />
                  <strong>Website:</strong> <Link href="/nci">kaizenstrategic.ai/nci</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

