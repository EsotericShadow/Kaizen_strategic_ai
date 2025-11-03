import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions | Northern Cascadia Institute',
  description: 'Frequently asked questions about the Northern Cascadia Institute, NC-AI standards, AI governance, membership, board positions, and organizational structure.',
  keywords: [
    'NCI FAQ',
    'Northern Cascadia Institute FAQ',
    'AI governance FAQ',
    'NC-AI standards FAQ',
    'AI governance questions',
    'NCI membership FAQ',
    'AI risk management FAQ',
    'ISO 42001 FAQ',
  ].join(', '),
  openGraph: {
    title: 'FAQ | Northern Cascadia Institute',
    description: 'Frequently asked questions about NCI, standards, and AI governance.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://kaizenstrategic.ai/nci/faq',
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: 'About NCI',
      questions: [
        {
          q: 'What is the Northern Cascadia Institute?',
          a: 'The Northern Cascadia Institute of AI Governance is a BC Nonprofit Society (currently in pre-incorporation) that develops practical, accessible AI governance standards and frameworks for Northern BC and beyond. We focus on tools aligned with ISO 42001:2023, designed specifically for smaller organizations, remote communities, and regional businesses.',
        },
        {
          q: 'What is NCI\'s legal status?',
          a: 'NCI is currently in the pre-incorporation phase, preparing Articles of Incorporation as a BC Nonprofit Society. We are applying for charitable status with the CRA. Once incorporated, NCI will be recognized as a public interest organization focused on advancing AI governance standards.',
        },
        {
          q: 'Where is NCI located?',
          a: 'NCI is based in Terrace, BC, and serves Northern British Columbia (the region north of Prince George), including Terrace, Kitimat, Prince Rupert, and Smithers. We operate on the traditional territories of the Tsimshian, Gitxsan, and Wet\'suwet\'en First Nations.',
        },
        {
          q: 'How is NCI related to Kaizen Strategic AI?',
          a: 'NCI was initiated by Kaizen Strategic AI, but operates independently as a standards-setting organization. NCI maintains separate governance, finances, and decision-making. Kaizen Strategic AI may provide administrative support, but NCI\'s focus is on public interest standards development, while Kaizen provides commercial AI consulting services.',
        },
      ],
    },
    {
      category: 'NC-AI Standards',
      questions: [
        {
          q: 'What are NC-AI standards?',
          a: 'NC-AI (Northern Cascadia - Artificial Intelligence) standards are a series of practical AI governance standards and risk management templates aligned with ISO 42001:2023. They are designed for smaller organizations, remote communities, and regional businesses that need accessible AI governance tools.',
        },
        {
          q: 'What is NC-AI-001?',
          a: 'NC-AI-001 is the first published standard in the NC-AI series. It is an AI Risk Register Template with 28 pre-populated risks across 8 categories (Bias and Fairness, Security and Privacy, Transparency, Data Quality, Regulatory Compliance, Operational Risks, Human Impact, and Third-Party/Vendor). It is currently in Draft for Public Comment status.',
        },
        {
          q: 'How do I use NC-AI standards?',
          a: 'You can download NC-AI standards free of charge from our website. Each standard includes templates, guidelines, and implementation instructions. Start by reviewing the standard, assessing your needs, customizing templates to your context, and implementing the framework. See our Resources page for detailed implementation guides.',
        },
        {
          q: 'Are NC-AI standards free?',
          a: 'Yes, all NC-AI standards are released to the Public Domain and are free to use, modify, and share. Attribution is appreciated but not required.',
        },
        {
          q: 'How do I provide feedback on standards?',
          a: 'Standards are published for public comment before finalization. You can submit feedback via email to governance@kaizenstrategic.ai or through the public comments section on each standard\'s page. We welcome input from Indigenous governments, municipalities, businesses, professional associations, and academic institutions.',
        },
      ],
    },
    {
      category: 'Membership & Board',
      questions: [
        {
          q: 'How do I become a member?',
          a: 'NCI operates with a stakeholder-based membership model. Membership is open to Indigenous governments, municipalities, business organizations, professional associations, academic institutions, and individual contributors. Membership details and application process will be available upon incorporation.',
        },
        {
          q: 'What are the benefits of membership?',
          a: 'Members can participate in standards development, vote on major organizational decisions, access NCI resources and events, and have public comment privileges on standards. Membership provides a voice in shaping AI governance standards for Northern BC.',
        },
        {
          q: 'How do I join the board?',
          a: 'NCI is currently seeking 2 additional board members. We are looking for individuals with expertise in AI governance, Indigenous governance, municipal government, nonprofit governance, standards development, or community engagement. Time commitment is 4-8 hours per month with quarterly board meetings. Contact governance@kaizenstrategic.ai for more information.',
        },
        {
          q: 'What is the time commitment for board members?',
          a: 'Board members commit approximately 4-8 hours per month, including quarterly board meetings, participation in standards review, and strategic planning. Additional meetings may be scheduled as needed for special projects or strategic decisions.',
        },
      ],
    },
    {
      category: 'Implementation & Usage',
      questions: [
        {
          q: 'Do I need to be ISO 42001 certified to use NC-AI standards?',
          a: 'No, NC-AI standards are designed to be accessible and can be used independently. However, they are aligned with ISO 42001:2023 and can serve as a stepping stone toward ISO 42001 compliance if that is your goal.',
        },
        {
          q: 'Are NC-AI standards mandatory?',
          a: 'No, NC-AI standards are voluntary. They are provided as practical tools to help organizations implement AI governance. Organizations can choose to adopt them based on their needs and context.',
        },
        {
          q: 'Can I modify NC-AI standards for my organization?',
          a: 'Yes, NC-AI standards are released to the Public Domain, so you are free to modify and adapt them to your specific needs. We recommend maintaining alignment with the core principles while customizing templates and processes to fit your context.',
        },
        {
          q: 'What size organizations can use NC-AI standards?',
          a: 'NC-AI standards are specifically designed for smaller organizations, remote communities, and regional businesses. They are practical and accessible, avoiding the complexity often associated with enterprise-level frameworks. However, organizations of any size can benefit from using them.',
        },
      ],
    },
    {
      category: 'Summit & Events',
      questions: [
        {
          q: 'When is the Annual AI & Technology Summit?',
          a: 'The Annual AI & Technology Summit is scheduled for late summer/early fall 2025 in Terrace, BC. The exact date and venue will be announced closer to the event. The summit brings together business leaders, government officials, Indigenous representatives, and technology experts.',
        },
        {
          q: 'How do I register for the summit?',
          a: 'Registration information will be available closer to the event date. For inquiries about the summit, please contact governance@kaizenstrategic.ai.',
        },
        {
          q: 'What is the difference between NCI\'s Annual Summit and Kaizen\'s quarterly events?',
          a: 'NCI\'s Annual Summit is a full-day conference focused on AI governance, standards development, and regional strategy. Kaizen Strategic AI\'s quarterly events are informational workshops focused on business AI education and practical implementation. They serve different purposes and audiences.',
        },
      ],
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
                    FAQ
                  </li>
                </ol>
              </nav>
              <h1 className="nci-title">Frequently Asked Questions</h1>
              <h2 className="nci-subtitle">Common Questions About NCI</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="nci-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="nci-content-box">
                  <h3 className="nci-heading">{category.category}</h3>
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="mb-4" style={{ borderBottom: '1px solid var(--nci-border)', paddingBottom: '1.5rem' }}>
                      <h4 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--nci-primary)', marginBottom: '0.75rem' }}>
                        {faq.q}
                      </h4>
                      <p className="nci-text" style={{ marginBottom: 0 }}>
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              ))}

              <div className="nci-content-box nci-alert">
                <h3 className="nci-heading">Still Have Questions?</h3>
                <p className="nci-text">
                  If you don&apos;t see your question answered here, please contact us:
                </p>
                <p className="nci-contact mt-3">
                  <strong>Email:</strong> <a href="mailto:governance@kaizenstrategic.ai">governance@kaizenstrategic.ai</a><br />
                  <strong>Resources:</strong> <Link href="/nci/resources">Implementation Guides</Link><br />
                  <strong>Standards:</strong> <Link href="/nci/standards">View All Standards</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

