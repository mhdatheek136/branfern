'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

const Navbar = ({ onMenuClick, settings = null }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (event) => {
    if (pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-left">
          <Link href="/" className="logo-container" onClick={handleLogoClick} aria-label={settings?.companyName || 'Paper Hoof'}>
            <img
              src="/content/paparhoof/branding/wordmark-horizontal-with-logo.svg"
              alt={settings?.companyName || 'Paper Hoof'}
              className="navbar-wordmark"
            />
          </Link>
        </div>
        <div className="navbar-right">
          <Link href="/brand-review" className="brand-review-btn">
            Brand Review
          </Link>
          <button className="hamburger-btn" onClick={onMenuClick} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
