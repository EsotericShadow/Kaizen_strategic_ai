import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Benefit {
  value: string;
  description: string;
}

interface Pricing {
  package?: string;
  packageDescription?: string;
  hourly?: string;
  hourlyDescription?: string;
}

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  benefits: Benefit[];
  pricing?: Pricing;
}

const services: { [key: string]: ServiceDetail } = {
  'digital-strategy': {
    id: 'digital-strategy',
    title: 'Digital Strategy Consulting',
    subtitle: 'Your Complete Digital Strategy',
    description: 'Strategy and planning for your online presence',
    longDescription: `We plan your complete digital strategy. Multiple strategy sessions where we sit down and hash out the specifics of what you have. We work on the strategy in the background and meet to review everything and create a series of clear documents.

Deliverables include brand identity, graphic design assets, copy and brand messaging, social media strategy, digital advertising plans, Google My Business/Google Business Profile optimization strategy, and SEO strategy. You get the strategy documents, images, copy, and plans to build your website, run campaigns, and manage your online presence.`,
    image: '',
    features: [
      'Brand identity and graphic design assets',
      'Copy and brand messaging',
      'Social media strategy and content plans',
      'Digital advertising strategy and campaign plans',
      'Google My Business/Google Business Profile optimization strategy',
      'SEO strategy and local search plans',
      'Complete strategy documentation (PDFs, assets, plans)',
    ],
    benefits: [
      {
        value: 'Clear strategy documents',
        description: 'Complete plans you can execute',
      },
      {
        value: 'Ready-to-use assets',
        description: 'Images, copy, and brand materials',
      },
    ],
    pricing: {
      package: '$1,250',
      packageDescription: 'Includes multiple strategy sessions, complete documentation, and all deliverables',
      hourly: '$125/hour',
      hourlyDescription: 'Individual strategy sessions',
    },
  },
  'ai-integration': {
    id: 'ai-integration',
    title: 'AI Integration',
    subtitle: 'AI-Powered Process Automation',
    description: 'Integrate AI into your processes',
    longDescription: `We integrate AI and automation into your existing processes. Zapier email automation, auto-response forms with AI-generated emails, automated expense tracking reports for human review. Process documentation and workflow diagrams included if needed.

Process optimization is bundled into the AI package. We refine existing systems before integrating new solutions. Built for Northern BC businesses.`,
    image: '',
    features: [
      'Zapier email chains and automation',
      'Auto-response forms with AI-generated emails',
      'Automated expense tracking and reporting',
      'Process documentation and workflow diagrams (if needed)',
      'Integration with your existing systems',
      'Custom AI solutions for your specific processes',
    ],
    benefits: [
      {
        value: '10-20 hours/month saved',
        description: 'Time back in your day',
      },
      {
        value: '15-30% efficiency gains',
        description: 'Measurable improvement',
      },
    ],
  },
  'web-development': {
    id: 'web-development',
    title: 'Website/App Development',
    subtitle: 'Clean, Functional Digital Experiences',
    description: 'Responsive websites and applications',
    longDescription: `We build responsive websites and applications that integrate with your business operations and work for your customers. Mobile-first design, optimized performance, and business operations integration.

SEO optimization, local search configuration, and analytics setup. Modern, brutalist aesthetic aligned with your brand.`,
    image: '',
    features: [
      'Responsive website and app development',
      'Mobile-first design',
      'Integration with business operations',
      'SEO and local search optimization',
      'Analytics setup and performance monitoring',
      'Modern, brutalist aesthetic',
    ],
    benefits: [
      {
        value: 'Business operations integration',
        description: 'Works with your existing systems',
      },
      {
        value: 'Modern, reliable systems',
        description: 'Built for Northern BC businesses',
      },
    ],
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services[params.slug];
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const serviceKeywords: { [key: string]: string[] } = {
    'digital-strategy': [
      'digital strategy Northern BC',
      'digital strategy Terrace BC',
      'brand identity Northern BC',
      'SEO strategy Northern BC',
      'social media strategy',
      'Google Business Profile optimization',
    ],
    'ai-integration': [
      'AI integration Northern BC',
      'AI automation Northern BC',
      'Zapier automation',
      'AI workflow automation',
      'process automation',
      'AI process optimization',
    ],
    'web-development': [
      'website development Northern BC',
      'app development Northern BC',
      'responsive website design',
      'business website development',
    ],
    'custom-software': [
      'custom software Northern BC',
      'custom software development',
      'business software solutions',
      'operational software development',
    ],
  };

  return {
    title: `${service.title} Northern BC | AI Services ${service.subtitle} | Terrace, Kitimat, Prince Rupert`,
    description: `${service.longDescription.substring(0, 155)}... AI and digital strategy services for Northern BC businesses in Terrace, Kitimat, Prince Rupert, and Smithers.`,
    keywords: [
      ...serviceKeywords[params.slug] || [],
      'AI Northern BC',
      'AI Terrace BC',
      'AI Kitimat BC',
      'AI Prince Rupert BC',
      'AI Smithers BC',
      'AI consulting',
      'AI services',
    ].join(', '),
    alternates: {
      canonical: `https://kaizenstrategic.ai/services/${params.slug}`,
  },
};
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <header className="site-header d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 col-12 mb-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Homepage</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/services">Services</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {service.title}
                  </li>
                </ol>
              </nav>
              <h2 className="text-white">{service.subtitle}</h2>
            </div>

          </div>
        </div>
      </header>

      <section className="topics-detail-section section-padding" id="service-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 m-auto">
              <h3 className="mb-4">{service.title}</h3>
              
              {/* Benefits Highlight */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="service-benefits-box mb-5">
                  <h5 className="mb-3">What You Get</h5>
                  <div className="row">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className="benefit-item">
                          <strong>{benefit.value}</strong>
                          <p className="text-small mb-0">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <p className="mb-4">{service.longDescription}</p>

              {/* Pricing */}
              {service.pricing && (
                <div className="quality-signals mb-5">
                  <h5 className="mb-3">Pricing</h5>
                  <div className="row">
                    {service.pricing.package && (
                      <div className="col-md-6 mb-3">
                        <strong>{service.pricing.package}</strong>
                        <p className="text-small mb-0">{service.pricing.packageDescription}</p>
                      </div>
                    )}
                    {service.pricing.hourly && (
                      <div className="col-md-6 mb-3">
                        <strong>{service.pricing.hourly}</strong>
                        <p className="text-small mb-0">{service.pricing.hourlyDescription}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Communication Standards */}
              <div className="quality-signals mb-5">
                <h5 className="mb-3">Communication Standards</h5>
                <div className="row">
                  <div className="col-md-4 mb-2">
                    <strong>Transparent communication</strong>
                  </div>
                  <div className="col-md-4 mb-2">
                    <strong>Regular progress updates</strong>
                  </div>
                  <div className="col-md-4 mb-2">
                    <strong>Client education and documentation</strong>
                  </div>
                </div>
              </div>

              <h4 className="mt-5 mb-3">What We Do</h4>
              <ul className="service-features-list">
                {service.features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-5 text-center">
                <Link href="/contact" className="btn custom-btn btn-lg">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12 text-center">
              <h4 className="mb-4">Get Updates</h4>
              <p className="mb-4">Get notified when we share new tools and insights for Northern BC businesses.</p>
              <form className="custom-form subscribe-form" action="#" method="post" role="form">
                <div className="row">
                  <div className="col-lg-8 col-12 mx-auto">
                    <input
                      type="email"
                      name="subscribe-email"
                      id="subscribe-email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control mb-3"
                      placeholder="Email Address"
                      required
                    />
                    <button type="submit" className="btn custom-btn w-100">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

