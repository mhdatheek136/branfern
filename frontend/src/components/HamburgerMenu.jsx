'use client';

import React from 'react';
import Link from 'next/link';
import { X, Instagram, Music, MessageCircle, Linkedin } from 'lucide-react';

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

  const navigationLinks = [
    { label: settings?.navHomeLabel || 'HOME', path: '/' },
    { label: settings?.navWorkLabel || 'WORK', path: '/work' },
    { label: settings?.navAboutLabel || 'ABOUT', path: '/about' },
    { label: settings?.navContactLabel || 'CONTACT', path: '/contact' },
    { label: settings?.navBrandReviewLabel || 'BRAND REVIEW', path: '/brand-review' },
  ];

  return (
    <div className="hamburger-menu-overlay">
      <button className="menu-close-btn" onClick={onClose}>
        <X size={32} />
      </button>

      <div className="menu-content">
        <div className="menu-left">
          <div className="menu-brand-block">
            <img
              src="/content/paparhoof/branding/wordmark-horizontal-with-logo.svg"
              alt={settings?.companyName || 'Paper Hoof'}
              className="menu-brand-wordmark"
            />
            <p className="menu-brand-copy">
              Paper Hoof builds identity systems, campaign visuals, and digital presence with editorial clarity.
            </p>
          </div>
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
              ) : null}
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
