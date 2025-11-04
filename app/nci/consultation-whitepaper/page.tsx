import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Consultation Whitepaper: Why Does Northern BC Need Its Own AI Governance Lens? | Northern Cascadia Institute',
  description: 'A consultation whitepaper establishing the foundational case for regional AI governance standards in Northern BC. Why generic frameworks don\'t fit, and what makes Northern BC unique.',
  keywords: [
    'AI governance Northern BC',
    'regional AI standards',
    'AI governance consultation',
    'Northern BC AI risks',
    'Indigenous data sovereignty',
    'small business AI governance',
  ].join(', '),
  openGraph: {
    title: 'Consultation Whitepaper | Northern Cascadia Institute',
    description: 'Why Northern BC needs its own AI governance lens.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://kaizenstrategic.ai/nci/consultation-whitepaper',
  },
};

export default function ConsultationWhitepaperPage() {
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
                    Consultation Whitepaper
                  </li>
                </ol>
              </nav>
              <h1 className="nci-title">Consultation Whitepaper</h1>
              <h2 className="nci-subtitle">Why Does Northern BC Need Its Own AI Governance Lens?</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="nci-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <div className="nci-content-box">
                <h3 className="nci-heading">Executive Summary</h3>
                <p className="nci-text">
                  This whitepaper presents the case for regional AI governance standards specifically designed for Northern British Columbia. We argue that generic frameworks developed in urban centers, provincial capitals, or international standards bodies do not adequately address the unique contexts, risks, and governance structures of Northern BC.
                </p>
                <p className="nci-text">
                  <strong>Key Question:</strong> Why does Northern BC need its own AI governance lens?
                </p>
                <p className="nci-text">
                  <strong>Answer:</strong> Because Northern BC has distinct economic, cultural, governance, and technological contexts that require regionally-tailored standards. Generic frameworks assume contexts that don&apos;t exist in the North.
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">The Problem: Generic Frameworks Don&apos;t Fit</h3>
                
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--nci-primary)', marginTop: '1.5rem', marginBottom: '1rem' }}>
                  Urban Assumptions vs. Northern Reality
                </h4>
                
                <div className="nci-grid" style={{ marginBottom: '2rem' }}>
                  <div className="nci-grid-item">
                    <h5 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '0.75rem' }}>Generic Frameworks Assume:</h5>
                    <ul className="nci-list" style={{ fontSize: '14px' }}>
                      <li>Large organizations with compliance teams</li>
                      <li>High-speed internet and reliable connectivity</li>
                      <li>Access to specialized AI expertise</li>
                      <li>Urban economic models</li>
                      <li>Centralized governance</li>
                      <li>English-only considerations</li>
                    </ul>
                  </div>
                  <div className="nci-grid-item">
                    <h5 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '0.75rem' }}>Northern BC Reality:</h5>
                    <ul className="nci-list" style={{ fontSize: '14px' }}>
                      <li>Small organizations (5-50 employees)</li>
                      <li>Remote locations, connectivity challenges</li>
                      <li>Limited local AI expertise</li>
                      <li>Resource-based economies</li>
                      <li>Multiple overlapping jurisdictions</li>
                      <li>Multi-language considerations</li>
                    </ul>
                  </div>
                </div>

                <h4 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--nci-primary)', marginTop: '1.5rem', marginBottom: '1rem' }}>
                  The Gap This Creates
                </h4>
                <p className="nci-text">
                  When organizations in Northern BC try to use generic AI governance frameworks:
                </p>
                <ul className="nci-list">
                  <li><strong>They don&apos;t fit:</strong> Templates assume large corporations, not 10-person businesses</li>
                  <li><strong>They&apos;re too complex:</strong> Designed for compliance teams, not business owners</li>
                  <li><strong>They miss local risks:</strong> Resource extraction AI, remote infrastructure, Indigenous data sovereignty</li>
                  <li><strong>They ignore local governance:</strong> Don&apos;t account for Indigenous sovereignty, regional decision-making</li>
                  <li><strong>They&apos;re inaccessible:</strong> Require expertise and resources many Northern BC organizations don&apos;t have</li>
                </ul>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">What Makes Northern BC Unique</h3>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--nci-primary)', marginBottom: '1rem' }}>
                    1. Economic Context
                  </h4>
                  <ul className="nci-list">
                    <li><strong>Resource-Based Economies:</strong> Mining, forestry, energy sectors have unique AI applications, long-term project cycles, multi-generational knowledge transfer</li>
                    <li><strong>Small Business Dominance:</strong> Most organizations are 5-50 employees, need practical accessible tools, can&apos;t afford expensive consultants</li>
                    <li><strong>Remote and Isolated:</strong> Limited connectivity, different data sovereignty requirements, supply chain challenges, local expertise is critical</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--nci-primary)', marginBottom: '1rem' }}>
                    2. Cultural Context
                  </h4>
                  <ul className="nci-list">
                    <li><strong>Distinct Regional Identity:</strong> Northern BC has its own culture and way of life, strong community connections, intergenerational knowledge transfer</li>
                    <li><strong>Relationship with Land and Resources:</strong> Long-term relationship with territory, resource stewardship responsibilities, environmental considerations, cultural knowledge embedded in place</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--nci-primary)', marginBottom: '1rem' }}>
                    3. Governance Context
                  </h4>
                  <ul className="nci-list">
                    <li><strong>Multiple Overlapping Jurisdictions:</strong> Municipal governments, regional districts, <strong>Indigenous governments (sovereign nations)</strong>, provincial government, federal government</li>
                    <li><strong>Indigenous Sovereignty:</strong> Indigenous nations have jurisdiction over their territories, data sovereignty and Indigenous data rights, traditional knowledge protection, co-governance models</li>
                    <li><strong>Regional Autonomy:</strong> Regional decision-making authority, community-driven solutions, local expertise and knowledge, Northern BC-specific policies and programs</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--nci-primary)', marginBottom: '1rem' }}>
                    4. AI Risk Context
                  </h4>
                  <ul className="nci-list">
                    <li><strong>Different Risk Profiles:</strong> Resource extraction AI risks, remote infrastructure AI risks, small organization AI risks, Indigenous data sovereignty risks, community impact risks</li>
                    <li><strong>Unique Applications:</strong> AI in resource extraction and processing, AI in remote infrastructure management, AI in small business operations, AI in Indigenous governance and services, AI in community services</li>
                  </ul>
                </div>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">The Solution: Regional Standards</h3>
                <p className="nci-text">
                  Regional standards provide:
                </p>
                <ul className="nci-list">
                  <li><strong>Practical, Accessible Tools:</strong> Designed for small organizations, no expensive consultants required, step-by-step implementation guides, real-world examples from Northern BC contexts</li>
                  <li><strong>Regionally-Tailored Risk Assessment:</strong> Resource extraction AI risks, remote infrastructure considerations, small business contexts, Indigenous data sovereignty requirements</li>
                  <li><strong>Local Governance Integration:</strong> Respects Indigenous sovereignty, accounts for multiple jurisdictions, supports regional decision-making, community-driven development</li>
                  <li><strong>Alignment with International Standards:</strong> Works WITH ISO 42001, not replacing it, provides regional implementation guidance, bridges global standards and local needs</li>
                </ul>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Our Approach: Consultation First</h3>
                <p className="nci-text">
                  <strong>This whitepaper is the first step.</strong> Before publishing standards, we&apos;re:
                </p>
                <ol className="nci-list" style={{ listStyle: 'decimal', paddingLeft: '1.5rem' }}>
                  <li><strong>Consulting with stakeholders:</strong> Indigenous governments, municipalities, regional districts, business organizations, professional associations, academic institutions, community organizations</li>
                  <li><strong>Building consensus:</strong> What are the real AI risks in Northern BC? What governance gaps exist? What tools are needed? How should standards be developed?</li>
                  <li><strong>Establishing principles:</strong> Founding principles, core values and approaches, governance structure, development process</li>
                  <li><strong>Then developing standards:</strong> Based on consultation feedback, reflecting regional needs, co-developed with stakeholders, practical and accessible</li>
                </ol>
              </div>

              <div className="nci-content-box nci-alert">
                <h3 className="nci-heading">Questions for Consultation</h3>
                <p className="nci-text">
                  We invite feedback on:
                </p>
                <ol className="nci-list" style={{ listStyle: 'decimal', paddingLeft: '1.5rem' }}>
                  <li><strong>Do you agree that Northern BC needs its own AI governance lens?</strong> Why or why not? What specific gaps do you see?</li>
                  <li><strong>What are the biggest AI risks in your organization/community?</strong> Resource extraction? Data sovereignty? Small business operations? Remote infrastructure? Community services?</li>
                  <li><strong>What governance tools do you need?</strong> Risk assessment templates? Implementation guides? Policy templates? Training resources?</li>
                  <li><strong>How should standards be developed?</strong> Who should be involved? What process should be followed? How should Indigenous sovereignty be respected?</li>
                  <li><strong>What would make standards useful for you?</strong> Format (PDF, Word, online tool)? Complexity level? Examples and case studies? Training and support?</li>
                </ol>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">How to Participate</h3>
                <p className="nci-text">
                  <strong>Provide Feedback:</strong>
                </p>
                <p className="nci-contact">
                  <strong>Email:</strong> <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a><br />
                  <strong>Subject:</strong> Consultation Whitepaper Feedback
                </p>
                <p className="nci-text-small mt-2">
                  Include: Your name and organization (if applicable), your role/relationship to Northern BC, answers to consultation questions, additional thoughts or concerns
                </p>
                <p className="nci-text mt-3">
                  <strong>Become a Co-Signer:</strong> If you agree with the founding principles and want to support this initiative, we&apos;re seeking co-signers of the Founding Principles Declaration.
                </p>
                <p className="nci-text-small">
                  <Link href="/nci/founding-principles">View Founding Principles Declaration</Link>
                </p>
              </div>

              <div className="nci-content-box">
                <h3 className="nci-heading">Related Documents</h3>
                <ul className="nci-list">
                  <li><Link href="/nci/founding-principles">Founding Principles Declaration</Link></li>
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

