import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Instagram, Music, MessageCircle, Linkedin } from 'lucide-react';
import { getSocialLinks, getSiteSettings } from '../lib/sanity';
import './HamburgerMenu.css';

// Default navigation links (static - not fetched from Sanity)
const navigationLinks = [
  { label: 'Work', path: '/work' },
  { label: 'Brand Review', path: '/brand-review' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' }
];

// Icon mapping for social platforms
const getIconComponent = (platform) => {
  const icons = {
    'Instagram': Instagram,
    'TikTok': Music,
    'WhatsApp': MessageCircle,
    'LinkedIn': Linkedin,
  };
  return icons[platform] || Instagram;
};

const HamburgerMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [socialLinks, setSocialLinks] = useState([]);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [socialsData, settingsData] = await Promise.all([
          getSocialLinks(),
          getSiteSettings()
        ]);

        if (socialsData) setSocialLinks(socialsData);
        if (settingsData) setSettings(settingsData);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    }
    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNavClick = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="hamburger-menu-overlay">
      <button className="menu-close-btn" onClick={onClose}>
        <X size={32} />
      </button>

      <div className="menu-content">
        <div className="menu-left">
          <nav className="menu-nav">
            {navigationLinks.map((link, index) => (
              <button
                key={index}
                className="menu-nav-item"
                onClick={() => handleNavClick(link.path)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="menu-right">
          <div className="menu-section">
            <h3 className="menu-section-title">Social</h3>
            <div className="menu-social-links">
              {socialLinks.length > 0 ? (
                socialLinks.map((link) => {
                  const IconComponent = getIconComponent(link.platform);
                  return (
                    <a
                      key={link._id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu-social-item"
                    >
                      <IconComponent size={18} />
                      <span>{link.platform}</span>
                    </a>
                  );
                })
              ) : (
                // Fallback social links
                <>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="menu-social-item">
                    <Instagram size={18} />
                    <span>Instagram</span>
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="menu-social-item">
                    <Music size={18} />
                    <span>TikTok</span>
                  </a>
                  <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="menu-social-item">
                    <MessageCircle size={18} />
                    <span>WhatsApp</span>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="menu-social-item">
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="menu-section">
            <h3 className="menu-section-title">Email</h3>
            <a href={`mailto:${settings?.email || 'branfern@gmail.com'}`} className="menu-contact-item">
              {settings?.email || 'branfern@gmail.com'}
            </a>
          </div>

          <div className="menu-section">
            <h3 className="menu-section-title">Location</h3>
            <p className="menu-location-item">{settings?.location || 'Mawanella, Sri Lanka'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;