import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content?: string;
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Understanding AI Risk Management for Small Businesses',
    excerpt: 'Based on NC-AI-001 framework and ISO 42001:2023 alignment. Learn how to identify and document AI risks across 8 categories — from security and privacy to operational and strategic risks. Practical framework designed specifically for smaller organizations in Northern BC.',
    date: '2025-01-14',
    category: 'AI Governance',
    content: `# Understanding AI Risk Management for Small Businesses

Based on the NC-AI-001 framework and ISO 42001:2023 alignment, this guide helps Northern BC businesses identify and manage AI-related risks.

## The Framework

NC-AI-001 provides a comprehensive AI Risk Register Template with 28 pre-populated risks across 8 categories:

1. **Security and Privacy** - Unauthorized access, data breaches, model theft
2. **Operational Risks** - System failures, integration issues, performance degradation
3. **Strategic Risks** - Market changes, competitive disadvantage, missed opportunities
4. **Compliance Risks** - Regulatory violations, privacy law non-compliance
5. **Financial Risks** - Cost overruns, ROI failures, budget constraints
6. **Reputational Risks** - Negative publicity, brand damage, customer loss
7. **Technical Risks** - Model bias, data quality issues, scalability problems
8. **Human Risks** - Skill gaps, change management, job displacement concerns

## Getting Started

For small businesses in Northern BC, start with the Markdown format of NC-AI-001. The template is designed specifically for smaller organizations that don't have dedicated risk management teams.

## Key Takeaways

- AI risk management doesn't have to be complicated
- Start with identifying your top 5-10 highest-priority risks
- Document mitigation strategies that fit your business size
- Review and update your risk register quarterly

The NC-AI-001 template is available free of charge from the Northern Cascadia Institute of AI Governance.`,
  },
  {
    id: '2',
    title: 'Digital Strategy for Northern BC: What You Need to Know',
    excerpt: 'The complete framework for building your digital presence in Northern BC. From brand identity and messaging to SEO, social media, and Google Business Profile optimization. Real deliverables: strategy documents, assets, and actionable plans that fit businesses from Terrace to Smithers.',
    date: '2025-01-09',
    category: 'Digital Strategy',
    content: `# Digital Strategy for Northern BC: What You Need to Know

A comprehensive guide to building your digital presence in Northern BC, from Terrace to Smithers.

## What Digital Strategy Includes

Digital Strategy Consulting at Kaizen Strategic AI delivers complete planning and documentation:

### Brand Identity
- Logo concepts and final brand assets
- Color palette and typography guidelines
- Brand voice and messaging framework

### Content Strategy
- Copy for website and marketing materials
- Social media content plans
- Email templates and messaging

### Online Presence
- Google My Business / Google Business Profile optimization strategy
- SEO strategy and local search plans
- Digital advertising campaign frameworks

## Real Deliverables

When you invest in Digital Strategy Consulting, you receive:
- PDF strategy documents you can execute
- Ready-to-use brand assets (images, logos, copy)
- Complete plans for building your website
- Campaign frameworks for social media and advertising
- SEO strategy tailored to Northern BC markets

## Pricing

- **Package**: $1,250 - Includes multiple strategy sessions and all deliverables
- **Individual Sessions**: $125/hour - For ongoing strategy work

## Why It Matters for Northern BC

Our digital strategy framework understands:
- Local market dynamics in Terrace, Kitimat, Prince Rupert, and Smithers
- The importance of local search and Google Business Profile
- Regional business needs and customer behaviors
- Seasonal considerations for Northern BC businesses

Build a cohesive digital presence that actually works for your business and your customers.`,
  },
  {
    id: '3',
    title: 'Automation That Works: Real Examples from Northern BC',
    excerpt: 'Research shows AI users save 100 hours per year and see 30%+ productivity increases. Real automation examples: Zapier email chains, AI-generated form responses, automated expense tracking, predictive maintenance for industrial operations. Northern BC businesses are seeing 15-30% efficiency gains.',
    date: '2025-01-04',
    category: 'AI Integration',
    content: `# Automation That Works: Real Examples from Northern BC

Research-backed insights on AI automation that delivers real results for Northern BC businesses.

## The Numbers

Based on research from our October 23rd, 2025 AI & Business Presentation:
- **Time Savings**: AI users save an average of 100 hours per year
- **Productivity**: 30%+ overall productivity increase when teams use AI
- **Task Speed**: 40% faster completion when aided by AI systems
- **ROI**: Every $1 spent on AI delivers an estimated $3.70 in return

## Real Automation Examples

### Email Automation
- **Zapier email chains**: Automate follow-up sequences, lead nurturing, customer communications
- **AI-generated form responses**: Auto-response forms with contextually appropriate emails
- **Automated triage**: Route and prioritize emails based on content and urgency

### Financial Automation
- **Automated expense tracking**: Capture receipts, categorize expenses, generate reports for human review
- **Invoice processing**: Extract data from invoices, match to purchase orders
- **Payroll automation**: Calculate hours, process payroll, generate reports

### Industrial Applications
- **Predictive maintenance**: IoT sensors analyze equipment data to forecast repairs (saves 20-30% on maintenance costs)
- **Equipment monitoring**: Monitor machinery health to predict failures before they happen
- **Supply chain optimization**: Real-time inventory and logistics management

## Northern BC Success Stories

Local businesses are seeing:
- **15-30% efficiency gains** from automation
- **10-20 hours/month saved** through process optimization
- **Measurable improvements** in customer response times
- **Reduced operational costs** through predictive maintenance

## Getting Started

The AI Technology Stack for Northern BC includes three tiers:

1. **DIY Tools** ($0-$20/month): ChatGPT, Zapier, Canva - Start here to prove concept
2. **Custom Solutions** ($20-50/month): RAG systems, custom chatbots, automated reporting
3. **Industrial Scale** (Custom pricing): IoT sensor networks, computer vision, edge AI

Start small, prove value, then scale. Automation that works fits your business, not the other way around.`,
  },
];

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const articleKeywords: { [key: string]: string[] } = {
    '1': [
      'AI risk management',
      'AI governance Northern BC',
      'NC-AI-001',
      'ISO 42001',
      'AI risk assessment',
      'small business AI risks',
    ],
    '2': [
      'digital strategy Northern BC',
      'digital strategy Terrace BC',
      'brand identity Northern BC',
      'SEO strategy Northern BC',
      'Google Business Profile',
    ],
    '3': [
      'AI automation Northern BC',
      'Zapier automation',
      'AI productivity',
      'AI efficiency',
      'automation examples',
      'AI implementation',
    ],
  };

  return {
    title: `${article.title} | AI Articles Northern BC | Kaizen Strategic AI`,
    description: `${article.excerpt} Expert AI insights and guides for Northern BC businesses.`,
    keywords: [
      ...articleKeywords[id] || [],
      'AI articles Northern BC',
      'AI guides',
      'AI consulting',
    ].join(', '),
    alternates: {
      canonical: `https://kaizenstrategic.ai/articles/${id}`,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  return (
    <>
      <header className="site-header d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10 col-12 mb-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Homepage</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/articles">Articles</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {article.title}
                  </li>
                </ol>
              </nav>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <span className="badge bg-secondary">{article.category}</span>
                <span className="text-white">
                  {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <h2 className="text-white">{article.title}</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="topics-detail-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <div className="custom-block">
                <div className="service-card-content">
                  <div className="article-content">
                    {article.content ? (
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: article.content
                            .split('\n')
                            .map((line) => {
                              if (line.startsWith('# ')) {
                                return `<h3>${line.substring(2)}</h3>`;
                              }
                              if (line.startsWith('## ')) {
                                return `<h4>${line.substring(3)}</h4>`;
                              }
                              if (line.startsWith('### ')) {
                                return `<h5>${line.substring(4)}</h5>`;
                              }
                              if (line.startsWith('- **')) {
                                const match = line.match(/- \*\*(.*?)\*\* - (.*)/);
                                if (match) {
                                  return `<p><strong>${match[1]}</strong> - ${match[2]}</p>`;
                                }
                                return `<p>${line.replace(/- \*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`;
                              }
                              if (line.startsWith('- ')) {
                                return `<p>${line.substring(2)}</p>`;
                              }
                              if (line.trim() === '') {
                                return '<br />';
                              }
                              return `<p>${line}</p>`;
                            })
                            .join('')
                        }} 
                      />
                    ) : (
                      <p>{article.excerpt}</p>
                    )}
                  </div>
                  <div className="mt-4">
                    <Link href="/articles" className="btn custom-btn">
                      Back to Articles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

