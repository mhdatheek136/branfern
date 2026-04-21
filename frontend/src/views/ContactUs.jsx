import React from 'react';
import Link from 'next/link';
import { Instagram, Music, MessageCircle, Linkedin, Mail, MapPin } from 'lucide-react';

const getIconComponent = (platform) => {
  const icons = {
    Instagram,
    TikTok: Music,
    WhatsApp: MessageCircle,
    LinkedIn: Linkedin,
  };

  return icons[platform] || Instagram;
};

const ContactUs = ({ settings = null, socialLinks = [], pageData = {} }) => {
  return (
    <div className="contact-us-page">
      <section className="contact-hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">{pageData.heroTitle || 'Contact Us'}</h1>
            <div className="hero-contact-details">
              <div className="contact-detail-item">
                <Mail size={20} className="contact-icon" />
                <a
                  href={`mailto:${settings?.email || 'hello@branfern.com'}`}
                  className="contact-link"
                >
                  {settings?.email || 'hello@branfern.com'}
                </a>
              </div>
              <div className="contact-detail-item">
                <MapPin size={20} className="contact-icon" />
                <span className="contact-text">
                  {settings?.location || 'Mawanella, Sri Lanka'}
                </span>
              </div>
            </div>
            <p className="hero-description">
              {pageData.heroDescription ||
                'Whether you are exploring a rebrand, seeking strategic direction, or simply curious about working together, we are here to listen.'}
            </p>
          </div>
          <div className="hero-right">
            <div className="hero-social-section">
              <h3 className="social-heading">{pageData.socialHeading || 'Follow Us'}</h3>
              <div className="hero-social-links">
                {socialLinks.length > 0 ? (
                  socialLinks.map((link) => {
                    const IconComponent = getIconComponent(link.platform);
                    return (
                      <a
                        key={link._id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-social-link"
                      >
                        <IconComponent size={24} />
                        <span>{link.platform}</span>
                      </a>
                    );
                  })
                ) : (
                  <>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                      <Instagram size={24} />
                      <span>Instagram</span>
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                      <Music size={24} />
                      <span>TikTok</span>
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="marquee-container">
          <div className="marquee">
            <span className="marquee-text">
              {(pageData.marqueeText || 'Ready to move with us * ').repeat(6)}
            </span>
            <span className="marquee-text">
              {(pageData.marqueeText || 'Ready to move with us * ').repeat(6)}
            </span>
          </div>
        </div>

        <div className="cta-container">
          <Link href="/brand-review" className="contact-cta-button">
            {pageData.ctaButtonText || 'Get in Touch'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
