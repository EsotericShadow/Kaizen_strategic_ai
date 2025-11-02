import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Services Northern BC | AI Integration & Digital Strategy Services | Terrace, Kitimat, Prince Rupert',
  description: 'Complete AI services for Northern BC businesses. AI integration, automation, digital strategy, custom software development, and website/app development. Serving Terrace, Kitimat, Prince Rupert, and Smithers.',
  keywords: [
    'AI services Northern BC',
    'AI integration services',
    'AI automation services',
    'digital strategy Northern BC',
    'AI consulting services',
    'custom software development Northern BC',
    'AI implementation',
    'AI Terrace BC',
    'AI Kitimat BC',
    'AI Prince Rupert BC',
  ].join(', '),
  alternates: {
    canonical: 'https://kaizenstrategic.ai/services',
  },
};

const services = [
  {
    id: 'digital-strategy',
    title: 'Digital Strategy Consulting',
    description: 'We map your business, find the bottlenecks, and build a plan. Clear and practical.',
    badge: 14,
  },
  {
    id: 'ai-integration',
    title: 'AI Integration & Development',
    description: 'We automate the repetitive work so your team can focus on what matters. Built to work with what you already have.',
    badge: 30,
  },
  {
    id: 'process-optimization',
    title: 'Process Optimization',
    description: 'Fix what you have before adding new. Make current systems work better, then integrate smart tools.',
    badge: 20,
  },
];

export default function ServicesPage() {
  return (
    <>
      <header className="site-header d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Homepage</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    All Services
                  </li>
                </ol>
              </nav>
              <h2 className="text-white">Our Services</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center">
              <h3 className="mb-4">Popular Services</h3>
            </div>

            <div className="col-lg-8 col-12 mt-3 mx-auto">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="custom-block mb-5"
                >
                  <div className="d-flex flex-column">
                    <div className="mb-3">
                      <h5 className="mb-2">{service.title}</h5>
                      <p className="mb-3">{service.description}</p>
                      <Link
                        href={`/services/${service.id}`}
                        className="btn custom-btn"
                      >
                        Learn More
                      </Link>
                    </div>
                    <span className="badge bg-strategy rounded-pill align-self-end">
                      {service.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center">
              <h3 className="mb-4">Ready to get started?</h3>
              <p className="mb-4">
                Let&apos;s talk about what takes too much time in your business. We&apos;ll show you how to fix it.
              </p>
              <Link href="/contact" className="btn custom-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

