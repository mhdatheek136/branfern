'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Instagram, Music, MessageCircle, Linkedin, ArrowUp, X, ChevronUp } from 'lucide-react';
import { urlFor } from '../lib/content';

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

  const getImageUrl = (image) => {
    if (!image) {
      return null;
    }

    return urlFor(image).width(400).height(300).fit('crop').url();
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
                  {getProjectForCategory(hoveredCategory)?.mainImage && (
                    <img
                      src={getImageUrl(getProjectForCategory(hoveredCategory).mainImage)}
                      alt={hoveredCategory}
                      className="preview-image"
                    />
                  )}
                  <div className="preview-overlay">
                    <span className="preview-label">{hoveredCategory}</span>
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
              <div className="footer-brand-mark">
                <svg viewBox="0 0 400 400" fill="none" className="brand-mark-svg">
                  <rect x="80" y="140" width="240" height="180" fill="currentColor" />
                  <path d="M140 100 L200 40 L260 100" stroke="currentColor" strokeWidth="24" />
                  <circle cx="200" cy="230" r="30" fill="var(--bg-cream)" />
                </svg>
              </div>
            </div>

            <div className="footer-divider-vertical"></div>

            <div className="footer-col footer-col-middle">
              <h2 className="footer-wordmark">{settings?.companyName || 'Branfern'}</h2>
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
              <Link href="/brand-review" className="footer-nav-link">{settings?.navBrandReviewLabel || 'BRAND REVIEW'}</Link>
              <Link href="/about" className="footer-nav-link">{settings?.navAboutLabel || 'ABOUT'}</Link>
              <Link href="/work" className="footer-nav-link">{settings?.navWorkLabel || 'WORK'}</Link>
              <Link href="/contact" className="footer-nav-link">{settings?.navContactLabel || 'CONTACT'}</Link>
            </nav>

            <button className="footer-scroll-top" onClick={scrollToTop}>
              <ArrowUp size={20} />
              <span>{settings?.footerScrollTopText || 'Scroll Up'}</span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
