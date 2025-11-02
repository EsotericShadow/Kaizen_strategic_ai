'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (pathname !== '/') {
      window.location.href = `/#${targetId}`;
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image 
            src="/images/brand/kaizen_logo.svg" 
            alt="Kaizen Strategic AI" 
            width={90}
            height={90}
            style={{ display: 'inline-block' }}
          />
        </Link>

        <div className="d-lg-none ms-auto me-4">
          <Link href="#contact" className="navbar-icon bi-person smoothscroll" onClick={(e) => handleScroll(e, 'contact')}></Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-lg-5 me-lg-auto">
            <li className="nav-item">
              <Link className="nav-link click-scroll" href="/" onClick={(e) => handleScroll(e, 'hero')}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link click-scroll" href="/" onClick={(e) => handleScroll(e, 'services')}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link click-scroll" href="/" onClick={(e) => handleScroll(e, 'how-it-works')}>
                How it works
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                Resources
              </a>
              <ul className="dropdown-menu dropdown-menu-light">
                <li>
                  <Link className="dropdown-item" href="/" onClick={(e) => {
                    handleScroll(e, 'faqs');
                    setIsOpen(false);
                  }}>
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/tools">
                    Tools
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/events">
                    Events
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/articles">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/careers">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/services">
                    All Services
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/nci">
                NCI
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link click-scroll" href="/" onClick={(e) => handleScroll(e, 'contact')}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="d-none d-lg-block">
            <Link href="#contact" className="navbar-icon bi-person smoothscroll" onClick={(e) => handleScroll(e, 'contact')}></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

