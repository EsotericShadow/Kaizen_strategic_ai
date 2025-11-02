import Link from 'next/link';

export default function CareersPage() {
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
                    Careers
                  </li>
                </ol>
              </nav>
              <h2 className="text-white">Careers</h2>
              <p className="text-white">Join us in moving the North forward through Digital Strategy</p>
            </div>
          </div>
        </div>
      </header>

      <section className="topics-detail-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <div className="custom-block mb-5">
                <h3 className="mb-4">No Open Positions</h3>
                <p className="mb-4">
                  We&apos;re not currently hiring, but we&apos;re always interested in connecting with talented people who share our mission of moving the North forward through Digital Strategy.
                </p>
                <p className="mb-4">
                  If you&apos;re passionate about AI, digital strategy, and helping Northern BC businesses succeed, we&apos;d love to hear from you. Send us your information and we&apos;ll keep it on file for future opportunities.
                </p>
                <div className="service-benefits-box">
                  <h5 className="mb-3">What We&apos;re Looking For</h5>
                  <ul className="service-features-list">
                    <li>Experience with AI integration and automation</li>
                    <li>Digital strategy and consulting background</li>
                    <li>Understanding of Northern BC business landscape</li>
                    <li>Strong communication and client relationship skills</li>
                    <li>Passion for continuous improvement and learning</li>
                  </ul>
                </div>
              </div>

              <div className="custom-block">
                <h3 className="mb-4">Get in Touch</h3>
                <p className="mb-4">
                  Even though we&apos;re not hiring right now, we welcome inquiries from potential future team members. Send us a note introducing yourself and what interests you about working with Kaizen Strategic AI.
                </p>
                <div className="service-benefits-box">
                  <p className="mb-0">
                    <strong>Email:</strong> <a href="mailto:info@kaizenstrategic.ai">info@kaizenstrategic.ai</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

