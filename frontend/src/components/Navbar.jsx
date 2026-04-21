'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
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
          <Link href="/" className="logo-container" onClick={handleLogoClick}>
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="8" y="12" width="16" height="12" fill="currentColor" />
                <path d="M12 8 L16 4 L20 8" stroke="currentColor" strokeWidth="2" />
                <circle cx="16" cy="18" r="2" fill="var(--bg-cream)" className="logo-eye" />
              </svg>
            </div>
            <span className="logo-text">Branfern</span>
          </Link>
        </div>
        <div className="navbar-right">
          <Link href="/brand-review" className="brand-review-btn">
            Brand Review
          </Link>
          <button className="hamburger-btn" onClick={onMenuClick}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
