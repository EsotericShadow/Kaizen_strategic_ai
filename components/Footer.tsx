import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 mb-4 pb-2">
            <Link className="navbar-brand mb-2" href="/">
              <Image 
                src="/images/brand/kaizen_logo.svg" 
                alt="Kaizen Strategic AI" 
                width={90}
                height={90}
                style={{ display: 'inline-block' }}
              />
            </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <h6 className="site-footer-title mb-3">Resources</h6>
            <ul className="site-footer-links">
              <li className="site-footer-link-item">
                <Link href="/" className="site-footer-link">
                  Home
                </Link>
              </li>
              <li className="site-footer-link-item">
                <Link href="/#how-it-works" className="site-footer-link">
                  How it works
                </Link>
              </li>
              <li className="site-footer-link-item">
                <Link href="/#faqs" className="site-footer-link">
                  FAQs
                </Link>
              </li>
              <li className="site-footer-link-item">
                <Link href="/#contact" className="site-footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
            <h6 className="site-footer-title mb-3">Information</h6>
            <p className="text-white d-flex align-items-center mb-1">
              <i className="bi bi-envelope me-2" style={{ fontSize: '16px' }}></i>
              <a href="mailto:info@kaizenstrategic.ai" className="site-footer-link">
                info@kaizenstrategic.ai
              </a>
            </p>
            <p className="text-white d-flex align-items-center">
              <i className="bi bi-geo-alt me-2" style={{ fontSize: '16px' }}></i>
              <span>Terrace, BC, Canada</span>
            </p>
          </div>

          <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
            <p className="copyright-text mt-lg-5 mt-4">
              Copyright © {new Date().getFullYear()} Kaizen Strategic AI. All rights reserved.
              <br />
              <br />
              Moving the North forward through Digital Strategy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

