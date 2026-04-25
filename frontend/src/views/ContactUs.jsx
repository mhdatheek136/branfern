import React from 'react';
import Link from 'next/link';

const ContactUs = ({ pageData = {} }) => {
  return (
    <div className="contact-us-page">
      <section className="contact-hero">
        <div className="hero-container">
          <div className="hero-left">
            <span className="hero-eyebrow">{pageData.heroEyebrow || 'We are here for you'}</span>
            <h1 className="hero-title">{pageData.heroTitle || 'Contact Us'}</h1>
            <p className="hero-description">
              {pageData.heroDescription ||
                'Whether you are exploring a rebrand, seeking strategic direction, or simply curious about working together, we are here to listen.'}
            </p>
          </div>
          <div className="hero-right">
            <div className="hero-contact-display">
              <span className="contact-display-text">{pageData.heroDisplayText || 'CONTACT US'}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-main-copy">
          <p className="contact-main-label">{pageData.introLabel || 'We are here for you'}</p>
          <h2 className="contact-main-heading">{pageData.formHeading || 'Fill out the form below'}</h2>
        </div>

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
            {pageData.ctaButtonText || 'Contact Us'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
