'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Instagram, Music, MessageCircle, Linkedin, X, ChevronUp } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

const getIconComponent = (iconName) => {
  const icons = {
    Instagram,
    Music,
    MessageCircle,
    Linkedin,
  };

  return icons[iconName] || Instagram;
};

const Footer = ({
  showDockedRectangle = false,
  settings = null,
  socialLinks = [],
  designCategories = [],
  projects = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRectangleClick = () => {
    if (showDockedRectangle) {
      setIsExpanded((current) => !current);
    }
  };

  const handleClose = () => {
    setIsExpanded(false);
    setHoveredCategory(null);
  };

  const getProjectForCategory = (category) => {
    const matchingProject = projects.find((project) =>
      project.tags?.some((tag) => tag.toLowerCase().includes(category.toLowerCase())),
    );

    return matchingProject || projects[0];
  };

  return (
    <>
      {isExpanded && (
        <div className="design-categories-overlay" onClick={handleClose}>
          <div className="categories-panel-new" onClick={(event) => event.stopPropagation()}>
            <button className="close-btn-new" onClick={handleClose}>
              <X size={20} />
            </button>

            <div className="expanded-title">
              <span>{settings?.footerOverlayTitle || 'We Design'}</span>
              <span className="bullet">&bull;</span>
              <span>{settings?.footerOverlaySubtitle || 'Everything'}</span>
            </div>

            <div className="categories-grid">
              {designCategories.map((category, index) => (
                <button
                  key={`${category}-${index}`}
                  className={`category-btn ${hoveredCategory === category ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {category} +
                </button>
              ))}
            </div>

            <div className="preview-container">
              {hoveredCategory ? (
                <div className="preview-content">
                  <ProjectVisual
                    project={getProjectForCategory(hoveredCategory)}
                    width={900}
                    height={560}
                    imageClassName="preview-image"
                    fallbackClassName="preview-fallback"
                  />
                  <div className="preview-overlay">
                    <span className="preview-label">{getProjectForCategory(hoveredCategory)?.name || hoveredCategory}</span>
                  </div>
                </div>
              ) : (
                <div className="preview-placeholder">
                  <span>{settings?.footerHoverPlaceholder || 'Hover over a category'}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-container">
            <div className="footer-col footer-col-left">
              <img
                src="/content/paparhoof/branding/emblem.svg"
                alt={`${settings?.companyName || 'Paper Hoof'} emblem`}
                className="footer-brand-mark"
              />
            </div>

            <div className="footer-divider-vertical"></div>

            <div className="footer-col footer-col-middle">
              <img
                src="/content/paparhoof/branding/wordmark-horizontal.svg"
                alt={settings?.companyName || 'Paper Hoof'}
                className="footer-wordmark-logo"
              />
            </div>

            <div className="footer-divider-vertical"></div>

            <div className="footer-col footer-col-right">
              <div className="footer-contact-section">
                <h3 className="footer-contact-heading">{settings?.footerWorkingHeading || 'Get in Touch'}</h3>
                <div className="footer-social-icons">
                  {socialLinks.map((link, index) => {
                    const IconComponent = getIconComponent(link.iconName || link.platform);
                    return (
                      <a
                        key={link._id || index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-icon"
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="footer-contact-section">
                <h3 className="footer-contact-heading">{settings?.footerContactsHeading || 'Contact Us'}</h3>
                <a href={`mailto:${settings?.email || 'hello@branfern.com'}`} className="footer-contact-link">
                  {settings?.email || 'hello@branfern.com'}
                </a>
              </div>

              <div className="footer-contact-section">
                <h3 className="footer-contact-heading">{settings?.footerLocationHeading || 'Location'}</h3>
                <p className="footer-contact-text">{settings?.location || 'Mawanella, Sri Lanka'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider-horizontal"></div>

        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <div className="footer-dock-zone">
              {showDockedRectangle ? (
                <div className="footer-docked-rectangle" onClick={handleRectangleClick}>
                  <span>{settings?.footerOverlayTitle || 'We Design'}</span>
                  <span className="bullet">&bull;</span>
                  <span>{settings?.footerOverlaySubtitle || 'Everything'}</span>
                  <ChevronUp className="arrow-icon-footer" size={20} />
                </div>
              ) : (
                <div className="footer-dock-placeholder"></div>
              )}
            </div>

            <nav className="footer-nav">
              <Link href="/" className="footer-nav-link">{settings?.navHomeLabel || 'HOME'}</Link>
              <Link href="/work" className="footer-nav-link">{settings?.navWorkLabel || 'WORK'}</Link>
              <Link href="/about" className="footer-nav-link">{settings?.navAboutLabel || 'ABOUT'}</Link>
              <Link href="/contact" className="footer-nav-link">{settings?.navContactLabel || 'CONTACT'}</Link>
              <button className="footer-scroll-top" onClick={scrollToTop}>
                {settings?.footerScrollTopText || 'Scroll Up'}
              </button>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
