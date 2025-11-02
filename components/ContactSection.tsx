'use client';

export default function ContactSection() {
  return (
    <section className="contact-section section-padding section-bg" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center">
            <h2 className="mb-5">Get in touch</h2>
          </div>

          <div className="col-lg-5 col-12 mb-4 mb-lg-0">
            <iframe
              className="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38869.842149328045!2d-128.6054478!3d54.5161117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5489f6d8b0f0b0b1%3A0x9b3b9b3b9b3b9b3b!2sTerrace%2C%20BC!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kaizen Strategic AI Location"
            ></iframe>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg- mb-md-0 ms-auto">
            <h4 className="mb-3">Head Office</h4>
            <p>Terrace, BC, Canada</p>
            <p>Northern British Columbia</p>

            <hr />

            <p className="d-flex align-items-center mb-1">
              <span className="me-2">Email</span>
              <a href="mailto:info@kaizenstrategic.ai" className="site-footer-link">
                info@kaizenstrategic.ai
              </a>
            </p>

            <p className="d-flex align-items-center">
              <span className="me-2">Location</span>
              <span>Terrace, BC</span>
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mx-auto">
            <h4 className="mb-3">Service Area</h4>
            <p>Primary focus: Terrace, Kitimat, Prince Rupert, Smithers</p>
            <p>Remote services available across Canada</p>

            <hr />

            <p className="d-flex align-items-center mb-1">
              <span className="me-2">Hours</span>
              <span>Monday - Friday: 9 AM - 5 PM PST</span>
            </p>

            <p className="d-flex align-items-center">
              <span className="me-2">Response</span>
              <span>Within 2 hours</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

