'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NCINavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg nci-navbar">
      <div className="container">
        <Link className="navbar-brand" href="/nci">
          <span className="nci-brand-text">Northern Cascadia Institute</span>
          <span className="nci-brand-subtext">of AI Governance</span>
        </Link>

        <div className="d-lg-none ms-auto me-4">
          <Link href="/nci" className="navbar-icon bi-house"></Link>
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
              <Link className={`nav-link ${pathname === '/nci' ? 'active' : ''}`} href="/nci">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname?.includes('/nc-ai-001') ? 'active' : ''}`} href="/nci/nc-ai-001">
                NC-AI-001
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname?.includes('/summit') ? 'active' : ''}`} href="/nci/summit">
                Annual Summit
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Kaizen Strategic AI
              </Link>
            </li>
          </ul>

          <div className="d-none d-lg-block">
            <Link href="/nci" className="navbar-icon bi-house"></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

