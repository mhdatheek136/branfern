'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import HamburgerMenu from './HamburgerMenu';
import DesignCategories from './DesignCategories';
import Footer from './Footer';

const SiteShell = ({
  children,
  settings,
  socialLinks,
  designCategories,
  previewProjects,
}) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDocked, setIsDocked] = useState(false);
  const isHomePage = pathname === '/';

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      setScrollPosition(pos);

      const footer = document.querySelector('.footer');
      const footerTop = footer?.offsetTop || 99999;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = footerTop - viewportHeight + 100;

      setIsDocked(pos >= scrollThreshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleMenuToggle = () => {
    setIsMenuOpen((current) => {
      const nextOpen = !current;
      document.body.style.overflow = nextOpen ? 'hidden' : 'auto';
      return nextOpen;
    });
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="App">
      <Navbar onMenuClick={handleMenuToggle} />

      {isHomePage && (
        <DesignCategories
          scrollPosition={scrollPosition}
          isHomePage={true}
          isDocked={isDocked}
          designCategories={designCategories}
          projects={previewProjects}
        />
      )}

      {children}

      <Footer
        showDockedRectangle={!isHomePage || (isHomePage && scrollPosition > 1500)}
        settings={settings}
        socialLinks={socialLinks}
        designCategories={designCategories}
        projects={previewProjects}
      />

      <HamburgerMenu
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
        settings={settings}
        socialLinks={socialLinks}
      />
    </div>
  );
};

export default SiteShell;
