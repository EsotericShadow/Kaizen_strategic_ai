import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 'digital-strategy',
    title: 'Digital Strategy Consulting',
    description: 'We build your complete online presence. Strategy and execution for how you look, what you say, and how customers find you online.',
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'We integrate AI and automation into your existing processes. Eliminate repetitive work, automate workflows, and save time.',
  },
  {
    id: 'web-development',
    title: 'Website/App Development',
    description: 'We build responsive websites and applications that integrate with your business operations and work for your customers.',
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'We design and build custom software solutions for your specific business needs. Internal tools and customer-facing applications.',
  },
];

export default function ServicesSection() {
  return (
    <section className="explore-section section-padding" id="services">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-5">Our Services</h2>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-4">
              <div className="custom-block service-card">
                <Link href={`/services/${service.id}`}>
                  <div className="service-card-content">
                    <h5 className="service-card-title mb-3">{service.title}</h5>
                    <p className="service-card-description mb-0">{service.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

