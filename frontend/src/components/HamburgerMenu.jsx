'use client';

import React from 'react';
import Link from 'next/link';
import { X, Instagram, Music, MessageCircle, Linkedin } from 'lucide-react';

const navigationLinks = [
  { label: 'Work', path: '/work' },
  { label: 'Brand Review', path: '/brand-review' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

const getIconComponent = (platform) => {
  const icons = {
    Instagram,
    TikTok: Music,
    WhatsApp: MessageCircle,
    LinkedIn: Linkedin,
  };

  return icons[platform] || Instagram;
};

const HamburgerMenu = ({ isOpen, onClose, socialLinks = [], settings = null }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="hamburger-menu-overlay">
      <button className="menu-close-btn" onClick={onClose}>
        <X size={32} />
      </button>

      <div className="menu-content">
        <div className="menu-left">
          <nav className="menu-nav">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="menu-nav-item"
                onClick={onClose}
              >
                {link.label}
              </Link>
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
            <a href={`mailto:${settings?.email || 'hello@branfern.com'}`} className="menu-contact-item">
              {settings?.email || 'hello@branfern.com'}
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
