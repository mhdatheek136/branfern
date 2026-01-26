import React, { useState, useEffect } from 'react';
import { Instagram, Music, MessageCircle, Linkedin, ArrowUp, X, ChevronUp } from 'lucide-react';
import { getDesignCategories, getRecentProjects, getSocialLinks, getSiteSettings, urlFor } from '../lib/sanity';
import './Footer.css';


// Icon mapping for social platforms
const getIconComponent = (iconName) => {
  const icons = {
    'Instagram': Instagram,
    'Music': Music,
    'MessageCircle': MessageCircle,
    'Linkedin': Linkedin
  };
  return icons[iconName] || Instagram;
};

const Footer = ({ showDockedRectangle = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [designCategories, setDesignCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);
  const [settings, setSettings] = useState(null);

  // Fetch data from Sanity
  useEffect(() => {
    async function fetchData() {
      try {
        const [categoriesData, projectsData, socialsData, settingsData] = await Promise.all([
          getDesignCategories(),
          getRecentProjects(6),
          getSocialLinks(),
          getSiteSettings()
        ]);

        if (categoriesData) setDesignCategories(categoriesData.map(c => c.name));
        if (projectsData) setProjects(projectsData);
        if (socialsData) setSocialLinks(socialsData);
        if (settingsData) setSettings(settingsData);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      }
    }
    fetchData();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRectangleClick = () => {
    if (showDockedRectangle) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleClose = () => {
    setIsExpanded(false);
    setHoveredCategory(null);
  };

  const getProjectForCategory = (category) => {
    const matchingProject = projects.find(p =>
      p.tags?.some(tag => tag.toLowerCase().includes(category.toLowerCase()))
    );
    return matchingProject || projects[0];
  };

  const getImageUrl = (image) => {
    if (!image) return null;
    return urlFor(image).width(400).height(300).fit('crop').url();
  };

  return (
    <>
      {/* Expanded Overlay from Footer */}
      {isExpanded && (
        <div className="design-categories-overlay" onClick={handleClose}>
          <div
            className="categories-panel-new"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn-new" onClick={handleClose}>
              <X size={20} />
            </button>

            <div className="expanded-title">
              <span>{settings?.footerOverlayTitle || 'We Design'}</span>
              <span className="bullet">•</span>
              <span>{settings?.footerOverlaySubtitle || 'Everything'}</span>
            </div>

            <div className="categories-grid">
              {designCategories.map((category, index) => (
                <button
                  key={index}
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
        {/* Main Footer Block */}
        <div className="footer-main">
          <div className="footer-container">
            {/* Left Column - Oversized Brand Mark */}
            <div className="footer-col footer-col-left">
              <div className="footer-brand-mark">
                <svg viewBox="0 0 400 400" fill="none" className="brand-mark-svg">
                  <rect x="80" y="140" width="240" height="180" fill="currentColor" />
                  <path d="M140 100 L200 40 L260 100" stroke="currentColor" strokeWidth="24" />
                  <circle cx="200" cy="230" r="30" fill="var(--bg-cream)" />
                </svg>
              </div>
            </div>

            {/* Vertical Divider 1 */}
            <div className="footer-divider-vertical"></div>

            {/* Middle Column - Branfern Wordmark */}
            <div className="footer-col footer-col-middle">
              <h2 className="footer-wordmark">{settings?.companyName || 'Branfern'}</h2>
            </div>

            {/* Vertical Divider 2 */}
            <div className="footer-divider-vertical"></div>

            {/* Right Column - Contact Info */}
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
                <a href={`mailto:${settings?.email || 'branfern@gmail.com'}`} className="footer-contact-link">
                  {settings?.email || 'branfern@gmail.com'}
                </a>
              </div>

              <div className="footer-contact-section">
                <h3 className="footer-contact-heading">{settings?.footerLocationHeading || 'Location'}</h3>
                <p className="footer-contact-text">{settings?.location || 'Mawanella, Sri Lanka'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="footer-divider-horizontal"></div>


        {/* Bottom Navigation Strip */}
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            {/* Zone A - Docking Area */}
            <div className="footer-dock-zone">
              {showDockedRectangle ? (
                <div className="footer-docked-rectangle" onClick={handleRectangleClick}>
                  <span>{settings?.footerOverlayTitle || 'We Design'}</span>
                  <span className="bullet">•</span>
                  <span>{settings?.footerOverlaySubtitle || 'Everything'}</span>
                  <ChevronUp className="arrow-icon-footer" size={20} />
                </div>
              ) : (
                <div className="footer-dock-placeholder"></div>
              )}
            </div>

            {/* Zone B - Navigation Links */}
            <nav className="footer-nav">
              <a href="/" className="footer-nav-link">{settings?.navHomeLabel || 'HOME'}</a>
              <a href="/brand-review" className="footer-nav-link">{settings?.navBrandReviewLabel || 'BRAND REVIEW'}</a>
              <a href="/about" className="footer-nav-link">{settings?.navAboutLabel || 'ABOUT'}</a>
              <a href="/work" className="footer-nav-link">{settings?.navWorkLabel || 'WORK'}</a>
              <a href="/contact" className="footer-nav-link">{settings?.navContactLabel || 'CONTACT'}</a>
            </nav>

            {/* Zone C - Scroll to Top */}
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