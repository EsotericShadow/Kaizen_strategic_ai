import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'News & Updates | Announcements | Northern Cascadia Institute',
  description: 'Latest news, announcements, press releases, and updates from the Northern Cascadia Institute. Standards publication updates, summit information, and incorporation progress.',
  keywords: [
    'NCI news',
    'Northern Cascadia Institute updates',
    'AI governance announcements',
    'NC-AI standards updates',
    'AI summit news',
    'NCI press releases',
    'AI governance Northern BC',
  ].join(', '),
  openGraph: {
    title: 'News & Updates | Northern Cascadia Institute',
    description: 'Latest news and announcements from NCI.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://kaizenstrategic.ai/nci/news',
  },
};

export default function NewsPage() {
  const updates = [
    {
      date: 'January 2025',
      category: 'Incorporation',
      title: 'NCI Incorporation Process Underway',
      content: 'The Northern Cascadia Institute has begun the incorporation process as a BC Nonprofit Society. Articles of Incorporation are being prepared, and we are working toward charitable status with the CRA. We expect to complete incorporation within the next 30-60 days.',
    },
    {
      date: 'Q4 2025',
      category: 'Standards',
      title: 'NC-AI-001 Published for Public Comment',
      content: 'NC-AI-001: AI Risk Register Template (Version 1.0) has been published as Draft for Public Comment. This comprehensive template includes 28 pre-populated risks across 8 categories, aligned with ISO 42001:2023. We invite feedback from Indigenous governments, municipalities, businesses, and stakeholders.',
    },
    {
      date: 'January 2025',
      category: 'Board',
      title: 'Board Recruitment: Seeking 2 Additional Members',
      content: 'NCI is currently seeking 2 additional board members to complete our initial board of directors. We are looking for individuals with expertise in AI governance, Indigenous governance, municipal government, nonprofit governance, standards development, or community engagement.',
    },
    {
      date: 'Late Summer/Early Fall 2025',
      category: 'Summit',
      title: 'Annual AI & Technology Summit 2025',
      content: 'Planning is underway for the inaugural Annual AI & Technology Summit in Terrace, BC. The full-day conference will bring together business leaders, government officials, Indigenous representatives, and technology experts to discuss AI governance and digital strategy in Northern BC. Registration details will be announced soon.',
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
                    News & Updates
                  </li>
                </ol>
              </nav>
              <h1 className="nci-title">News & Updates</h1>
              <h2 className="nci-subtitle">Announcements & Progress</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="nci-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <div className="nci-content-box">
                <h3 className="nci-heading">Latest Updates</h3>
                <p className="nci-text">
                  Stay informed about the latest developments at the Northern Cascadia Institute, including standards publications, summit announcements, board updates, and incorporation progress.
                </p>
              </div>

              {updates.map((update, index) => (
                <div key={index} className="nci-content-box" style={{ borderLeft: '4px solid var(--nci-accent)' }}>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="nci-text-small" style={{ 
                      background: 'var(--nci-primary)', 
                      color: 'var(--nci-white)', 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}>
                      {update.category}
                    </span>
                    <span className="nci-text-small" style={{ color: 'var(--nci-text-light)' }}>
                      {update.date}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--nci-primary)', marginBottom: '0.75rem' }}>
                    {update.title}
                  </h4>
                  <p className="nci-text" style={{ marginBottom: 0 }}>
                    {update.content}
                  </p>
                </div>
              ))}

              <div className="nci-content-box">
                <h3 className="nci-heading">Incorporation Progress</h3>
                <p className="nci-text">
                  <strong>Current Status: Pre-Incorporation</strong>
                </p>
                <ul className="nci-list">
                  <li><strong>Phase 1 (Pre-Incorporation):</strong> ✓ Articles of incorporation drafted | ✓ Organizational structure defined | ⏳ Legal review and revision | ⏳ Name search and reservation</li>
                  <li><strong>Phase 2 (Incorporation):</strong> ⏳ File Articles with BC Registry Services | ⏳ Obtain Certificate of Incorporation | ⏳ Register with CRA | ⏳ Apply for charitable status</li>
                  <li><strong>Phase 3 (Post-Incorporation):</strong> ⏳ First board meeting | ⏳ Adopt bylaws | ⏳ Establish bank account | ⏳ Set up financial systems</li>
                </ul>
                <p className="nci-text-small mt-2">
                  <strong>Timeline:</strong> We expect to complete Phase 1 within the next 30 days, and Phase 2 within 30-60 days after that.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Standards Publication Updates</h3>
                <p className="nci-text">
                  <strong>Published Standards:</strong>
                </p>
                <ul className="nci-list">
                  <li><strong>NC-AI-001:</strong> AI Risk Register Template (v1.0) - Published Q4 2025, Status: Draft for Public Comment</li>
                </ul>
                <p className="nci-text">
                  <strong>Standards in Development:</strong>
                </p>
                <ul className="nci-list">
                  <li>AI Governance Framework Implementation Guide</li>
                  <li>AI Ethics and Bias Assessment Templates</li>
                  <li>Data Governance for AI Systems</li>
                  <li>AI Procurement and Vendor Management Standards</li>
                  <li>AI Incident Response and Reporting Templates</li>
                </ul>
                <p className="nci-text-small mt-2">
                  <Link href="/nci/standards">View All Standards</Link>
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Summit Updates</h3>
                <p className="nci-text">
                  <strong>Annual AI & Technology Summit 2025</strong>
                </p>
                <ul className="nci-list">
                  <li><strong>Date:</strong> Late summer/early fall 2025 (exact date TBD)</li>
                  <li><strong>Location:</strong> Terrace, BC (venue TBD)</li>
                  <li><strong>Status:</strong> Planning in progress</li>
                  <li><strong>Registration:</strong> Will open closer to event date</li>
                </ul>
                <p className="nci-text">
                  <Link href="/nci/summit">Learn More About the Summit</Link>
                </p>
              </div>

              <div className="nci-content-box nci-alert">
                <h3 className="nci-heading">Stay Connected</h3>
                <p className="nci-text">
                  To receive updates about NCI news, standards publications, and events:
                </p>
                <p className="nci-contact mt-3">
                  <strong>Email:</strong> <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a><br />
                  <strong>Website:</strong> <Link href="/nci">kaizenstrategic.ai/nci</Link>
                </p>
                <p className="nci-text-small mt-2">
                  <em>Note: Email newsletter signup will be available after incorporation.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

