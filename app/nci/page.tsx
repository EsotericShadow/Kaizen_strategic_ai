import Link from 'next/link';
import Image from 'next/image';

export default function NCIPage() {
  return (
    <>
      <header className="nci-header d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10 col-12 text-center">
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, var(--nci-primary) 0%, var(--nci-secondary) 100%)',
                  borderRadius: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--nci-white)',
                  fontSize: '48px',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  marginBottom: '1.5rem',
                }}>
                  NCI
                </div>
              </div>
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
              <div className="nci-content-box nci-alert">
                <h3 className="nci-heading">Incorporation Status</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute is in the process of incorporating as a <strong>BC Nonprofit Society</strong> with charitable purposes. We are currently in the pre-incorporation phase, preparing Articles of Incorporation and organizational structure. Once incorporated, we will be recognized as a public interest organization focused on advancing AI governance standards for Northern BC.
                </p>
                <p className="nci-text-small mt-3">
                  <strong>Legal Status:</strong> Pre-Incorporation (BC Society Act)<br />
                  <strong>Tax Status:</strong> Charitable registration pending (CRA)
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Mission</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute of AI Governance develops practical, accessible AI governance standards and frameworks that work for Northern BC and beyond. We focus on tools aligned with international standards like ISO 42001, designed specifically for smaller organizations, remote communities, and regional businesses.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Geographic Scope</h3>
                <p className="nci-text">
                  Our focus is Northern British Columbia, specifically Regional Districts 5 (Peace River), 6 (Bulkley-Nechako), 7 (Fraser-Fort George boundary), 8 (Fraser-Fort George), 9 (Kitimat-Stikine), 10 (Skeena-Queen Charlotte), and surrounding areas. We acknowledge the unique geographic and economic context of the North, including lower population density, resource-based economies, and the importance of Indigenous sovereignty and data rights.
                </p>
                <p className="nci-text-small mt-2">
                  <strong>Primary Service Communities:</strong> Terrace, Kitimat, Prince Rupert, Smithers, and surrounding regional districts<br />
                  <strong>Indigenous Territories:</strong> Tsimshian, Gitxsan, Wet&apos;suwet&apos;en First Nations and others in the region
                </p>
              </div>

              <div className="nci-content-box nci-alert">
                <h3 className="nci-heading">Founding Principles</h3>
                <p className="nci-text">
                  NCI is founded on five core principles:
                </p>
                <ol className="nci-list" style={{ listStyle: 'decimal', paddingLeft: '1.5rem' }}>
                  <li><strong>Self-Determination Comes First:</strong> Northern communities have the right to articulate their own standards before external regulation arrives</li>
                  <li><strong>Governance Begins Local:</strong> AI governance must start where impact will be felt: on the ground, with our own context</li>
                  <li><strong>Indigenous Nations are Equal Pillars:</strong> Indigenous governments are sovereigns, not stakeholders—equal partners in standards creation</li>
                  <li><strong>Northern BC Culture is a Valid Context:</strong> The North is a distinct cultural region worthy of its own frameworks</li>
                  <li><strong>The North Must Not Wait for Permission:</strong> We begin architecting standards now, interfacing with international systems on our terms</li>
                </ol>
                <p className="nci-text-small mt-2">
                  <Link href="/nci/founding-principles">Read the complete Founding Principles Declaration</Link>
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Consultation Whitepaper</h3>
                <p className="nci-text">
                  Before developing standards, we&apos;re consulting with stakeholders to understand needs, build consensus, and establish principles. Our consultation whitepaper, &ldquo;Why Does Northern BC Need Its Own AI Governance Lens?&rdquo; presents the foundational case for regional standards.
                </p>
                <p className="nci-text">
                  <strong>This is the first public output from NCI—consultation before standards.</strong> We invite feedback from Indigenous governments, municipalities, businesses, and community organizations.
                </p>
                <p className="nci-text-small mt-2">
                  <Link href="/nci/consultation-whitepaper">Read the Consultation Whitepaper</Link>
                </p>
              </div>

              <div className="nci-content-box nci-alert">
                <h3 className="nci-heading">Board Recruitment</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute is seeking <strong>2 additional board members</strong> to join our initial board of directors. We are looking for individuals with expertise in:
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
                  <strong>Board Structure:</strong> 3-5 members with roles including Chair, Vice-Chair, Secretary, and Treasurer. Board meetings will be held quarterly, with additional meetings as needed.
                </p>
                <p className="nci-text">
                  <strong>Time Commitment:</strong> Quarterly board meetings, participation in standards review, and strategic planning. Estimated 4-8 hours per month.
                </p>
                <p className="nci-contact mt-3">
                  <strong>Interested in joining the board?</strong><br />
                  Email: <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a>
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
                  <li>Public interest advocacy for AI governance</li>
                  <li>Education and resources for smaller organizations</li>
                </ul>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Standards Development Process</h3>
                <p className="nci-text">
                  All NCI standards follow a transparent public comment process:
                </p>
                <ol className="nci-list">
                  <li><strong>Draft Publication:</strong> Standards published as &ldquo;Draft for Public Comment&rdquo;</li>
                  <li><strong>Public Comment Period:</strong> Open invitation to Indigenous governments, municipalities, corporations, professional associations, and academic institutions</li>
                  <li><strong>Board Review:</strong> All comments reviewed by the board of directors</li>
                  <li><strong>Revision:</strong> Standards updated based on stakeholder feedback</li>
                  <li><strong>Final Publication:</strong> Published as official NCI standards</li>
                </ol>
                <p className="nci-text-small mt-2">
                  This process ensures our standards reflect the needs and perspectives of Northern BC stakeholders.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">NC-AI Standards Series</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute develops and publishes practical AI governance standards and risk management templates aligned with ISO 42001:2023. Our standards are designed for smaller organizations, remote communities, and regional businesses.
                </p>
                <div className="nci-standard-card">
                  <h4>NC-AI-001: AI Risk Register Template</h4>
                  <p>Version 1.0 • Published Q4 2025 • Status: Draft for Public Comment</p>
                  <p>A comprehensive AI risk management template with 28 pre-populated risks across 8 categories, aligned with ISO 42001:2023.</p>
                  <div className="mt-3">
                    <Link href="/nci/standards" className="nci-btn me-3">
                      View All Standards
                    </Link>
                    <Link href="/nci/nc-ai-001" className="nci-btn" style={{ background: 'transparent', border: '2px solid var(--nci-primary)', color: 'var(--nci-primary)' }}>
                      View NC-AI-001
                    </Link>
                  </div>
                </div>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Membership</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute operates with a <strong>stakeholder-based membership</strong> model. Membership is open to:
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
                  <strong>Membership Benefits:</strong> Participation in standards development, voting on major organizational decisions, access to NCI resources and events, and public comment privileges on standards.
                </p>
                <p className="nci-text-small mt-2">
                  Membership details and application process will be available upon incorporation.
                </p>
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
                <p className="nci-text-small mt-3" style={{ fontStyle: 'italic' }}>
                  <strong>Land Acknowledgment:</strong> The Northern Cascadia Institute operates on the traditional territories of the Tsimshian, Gitxsan, and Wet&apos;suwet&apos;en First Nations.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Financial Structure</h3>
                <p className="nci-text">
                  As a nonprofit organization, the Northern Cascadia Institute operates with diversified revenue streams:
                </p>
                <ul className="nci-list">
                  <li>Grants and funding (public interest/public benefit)</li>
                  <li>Event revenue (Annual Summit)</li>
                  <li>Donations and sponsorships</li>
                  <li>Resource licensing (optional)</li>
                  <li>Professional services (standards consulting)</li>
                </ul>
                <p className="nci-text-small mt-2">
                  All revenue supports our mission of advancing AI governance standards for Northern BC. Financial reporting will be available upon incorporation.
                </p>
              </div>

              <div className="nci-content-box" style={{ borderTop: '1px solid var(--nci-border)', paddingTop: '2rem', marginTop: '1rem' }}>
                <h3 className="nci-heading">Organizational Independence</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute of AI Governance is an <strong>independent nonprofit organization</strong> currently in the process of incorporation as a BC Nonprofit Society. NCI operates with complete independence in governance, decision-making, and standards development.
                </p>
                <p className="nci-text">
                  NCI maintains separate governance, finances, and decision-making from any commercial entity. Our standards are developed through transparent public consultation and multi-stakeholder participation.
                </p>
                <p className="nci-text-small mt-2" style={{ fontStyle: 'italic' }}>
                  <strong>Note:</strong> Kaizen Strategic AI is one of the early contributors to NCI&apos;s formation, but NCI operates independently as a standards-setting organization. For commercial AI consulting services, visit <Link href="/">Kaizen Strategic AI</Link>.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Contact & Feedback</h3>
                <p className="nci-text">
                  We welcome feedback on our standards, partnerships, and organizational development. For inquiries about incorporation, board positions, membership, or standards, please contact:
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

