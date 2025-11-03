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
                  Our focus is Northern British Columbia, specifically the region north of Prince George. We acknowledge the unique geographic and economic context of the North, including lower population density, resource-based economies, and the importance of Indigenous sovereignty and data rights.
                </p>
                <p className="nci-text-small mt-2">
                  <strong>Primary Service Area:</strong> Terrace, Kitimat, Prince Rupert, Smithers<br />
                  <strong>Indigenous Territories:</strong> Tsimshian, Gitxsan, Wet&apos;suwet&apos;en First Nations
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

              <div className="nci-content-box">
                <h3 className="nci-heading">Relationship to Kaizen Strategic AI</h3>
                <p className="nci-text">
                  The Northern Cascadia Institute was initiated by Kaizen Strategic AI, a Terrace-based digital strategy consultancy. While Kaizen Strategic AI operates separately as a for-profit business providing AI integration and digital strategy services, <strong>NCI operates independently</strong> as a standards-setting organization focused on regional AI governance.
                </p>
                <p className="nci-text">
                  <strong>Key Points:</strong>
                </p>
                <ul className="nci-list">
                  <li>NCI maintains separate governance, finances, and decision-making</li>
                  <li>Kaizen Strategic AI may provide administrative support and resources</li>
                  <li>NCI&apos;s public interest activities demonstrate Kaizen Strategic AI&apos;s commitment to responsible AI governance</li>
                  <li>Clear separation: NCI = public interest standards; Kaizen = commercial consulting services</li>
                </ul>
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

