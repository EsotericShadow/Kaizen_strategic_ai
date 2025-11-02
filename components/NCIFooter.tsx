import Link from 'next/link';

export default function NCIFooter() {
  return (
    <footer className="nci-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0">
            <h6 className="nci-footer-title">Northern Cascadia Institute</h6>
            <p className="nci-footer-text">
              Regional AI governance standards for Northern BC and beyond.
            </p>
          </div>

          <div className="col-lg-3 col-md-3 col-6">
            <h6 className="nci-footer-title">Resources</h6>
            <ul className="nci-footer-links">
              <li>
                <Link href="/nci" className="nci-footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/nci/nc-ai-001" className="nci-footer-link">
                  NC-AI-001
                </Link>
              </li>
              <li>
                <Link href="/events" className="nci-footer-link">
                  Summit & Events
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 col-6">
            <h6 className="nci-footer-title">Contact</h6>
            <p className="nci-footer-text">
              <a href="mailto:governance@kaizenstrategic.ai" className="nci-footer-link">
                governance@kaizenstrategic.ai
              </a>
            </p>
            <p className="nci-footer-text-small">
              <Link href="/" className="nci-footer-link">
                Kaizen Strategic AI
              </Link>
            </p>
          </div>
        </div>

        <div className="row mt-4 pt-4 border-top border-light">
          <div className="col-12 text-center">
            <p className="nci-footer-copyright">
              Copyright © {new Date().getFullYear()} Northern Cascadia Institute of AI Governance. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

