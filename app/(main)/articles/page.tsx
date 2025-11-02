import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Articles & Guides Northern BC | AI Risk Management, Digital Strategy, Automation | Kaizen Strategic AI',
  description: 'Expert AI articles and guides for Northern BC businesses. Learn about AI risk management, digital strategy, automation, and AI integration. Practical insights from Kaizen Strategic AI.',
  keywords: [
    'AI articles Northern BC',
    'AI guides Northern BC',
    'AI risk management',
    'AI governance articles',
    'digital strategy guides',
    'AI automation guides',
    'AI business articles',
  ].join(', '),
  alternates: {
    canonical: 'https://kaizenstrategic.ai/articles',
  },
};

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Understanding AI Risk Management for Small Businesses',
    excerpt: 'Based on NC-AI-001 framework and ISO 42001:2023 alignment. Learn how to identify and document AI risks across 8 categories — from security and privacy to operational and strategic risks. Practical framework designed specifically for smaller organizations in Northern BC.',
    date: '2025-01-14',
    category: 'AI Governance',
  },
  {
    id: '2',
    title: 'Digital Strategy for Northern BC: What You Need to Know',
    excerpt: 'The complete framework for building your digital presence in Northern BC. From brand identity and messaging to SEO, social media, and Google Business Profile optimization. Real deliverables: strategy documents, assets, and actionable plans that fit businesses from Terrace to Smithers.',
    date: '2025-01-09',
    category: 'Digital Strategy',
  },
  {
    id: '3',
    title: 'Automation That Works: Real Examples from Northern BC',
    excerpt: 'Research shows AI users save 100 hours per year and see 30%+ productivity increases. Real automation examples: Zapier email chains, AI-generated form responses, automated expense tracking, predictive maintenance for industrial operations. Northern BC businesses are seeing 15-30% efficiency gains.',
    date: '2025-01-04',
    category: 'AI Integration',
  },
];

export default function ArticlesPage() {
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
                  <li className="breadcrumb-item active" aria-current="page">
                    Articles
                  </li>
                </ol>
              </nav>
              <h2 className="text-white">Articles</h2>
              <p className="text-white">Insights and guides for Northern BC businesses</p>
            </div>
          </div>
        </div>
      </header>

      <section className="topics-detail-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              {articles.length === 0 ? (
                <div className="custom-block text-center">
                  <p>Articles coming soon. Check back for insights and guides on AI, digital strategy, and technology for Northern BC businesses.</p>
                </div>
              ) : (
                <div className="row">
                  {articles.map((article) => (
                    <div key={article.id} className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-4">
                      <div className="custom-block service-card">
                        <div className="service-card-content">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <span className="badge bg-secondary">{article.category}</span>
                            <span className="text-small text-muted">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                          <h5 className="service-card-title mb-3">{article.title}</h5>
                          <p className="service-card-description mb-3">{article.excerpt}</p>
                          <Link href={`/articles/${article.id}`} className="btn custom-btn">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

