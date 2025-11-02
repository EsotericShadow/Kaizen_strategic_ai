import Link from 'next/link';

export default function FeaturedSection() {
  return (
    <section className="featured-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block service-card">
              <div className="service-card-content">
                <h5 className="service-card-title mb-3">AI Events</h5>
                <p className="service-card-description mb-3">
                  Quarterly workshops and an annual AI Summit for Northern BC businesses. Learn practical AI applications, network with local business leaders, and stay ahead of technology trends.
                </p>
                <Link href="/events" className="btn custom-btn">
                  View Events
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="custom-block service-card custom-block-featured">
              <div className="service-card-content">
                <h5 className="service-card-title mb-3">Northern Cascadia Institute</h5>
                <p className="service-card-description mb-3">
                  Regional AI governance standards for Northern BC. NC-AI-001 AI Risk Register Template now open for public comment. Annual AI & Technology Summit hosted by NCI.
                </p>
                <Link href="/nci" className="btn custom-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

