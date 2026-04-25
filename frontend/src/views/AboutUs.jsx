'use client';

import React from 'react';
import Link from 'next/link';

const AboutUs = ({ pageData = {}, teamMembers = [], services = [] }) => {
  return (
    <div className="about-us-page">
      <section className="about-hero">
        <div className="hero-container">
          <div className="hero-left">
            <span className="hero-eyebrow">{pageData.heroEyebrow || 'About Paper Hoof'}</span>
            <h1 className="hero-title">
              {pageData.heroTitle || 'We design the systems that power your brand.'}
            </h1>
          </div>
          <div className="hero-right">
            <div className="hero-about-display">
              <span className="about-text">{pageData.heroDisplayText || 'ABOUT US'}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="showreel-section">
        <div className="showreel-container">
          <div className="showreel-frame">
            <img
              src="/content/paparhoof/branding/emblem.svg"
              alt="Paper Hoof emblem"
              className="showreel-emblem"
            />
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="philosophy-container">
          <span className="section-eyebrow">{pageData.philosophyEyebrow || 'Our Philosophy'}</span>
          <h2 className="section-heading">
            {pageData.philosophyHeading || 'Brand as Action'}
          </h2>
          <p className="philosophy-description">
            {pageData.philosophyDescription ||
              'We believe a brand is not what you say, but what you do. Our work is rooted in systems thinking: building frameworks that scale, evolve, and remain coherent across digital, physical, and human touchpoints.'}
          </p>
        </div>
      </section>

      {services.map((service) => (
        <section key={service._id} className={`pillar-section accent-${service.accent || 'truck-grey'}`}>
          <div className="pillar-divider"></div>
          <div className="pillar-container">
            <div className="pillar-content">
              <div className="pillar-left">
                <h3 className="pillar-label">{service.pillarNumber}</h3>
                <h2 className="pillar-heading">{service.heading}</h2>
              </div>
              <div className="pillar-right">
                <p className="pillar-description">{service.description}</p>
              </div>
            </div>
            <div className={`pillar-showreel accent-${service.accent || 'truck-grey'}`}>
              <div className="pillar-showreel-copy">
                <span className="pillar-showreel-label">{service.heading}</span>
                <h3 className="pillar-showreel-title">{service.cards?.[0]?.title || service.heading}</h3>
              </div>
            </div>

            <div className="pillar-cards">
              {service.cards?.map((card, index) => (
                <article key={`${service._id}-${index}`} className="pillar-card">
                  <span className="card-bullet"></span>
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-description">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="team-section">
        <div className="team-container">
          <span className="section-eyebrow">{pageData.teamEyebrow || 'The Team'}</span>
          <h2 className="section-heading">
            {pageData.teamHeading || 'The Paper Hoof Collective'}
          </h2>
          <p className="team-description">
            {pageData.teamDescription ||
              "We're a small, considered team of designers, strategists, and makers based in Sri Lanka. We work with brands that value thoughtful design and are committed to building something meaningful."}
          </p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member._id} className="team-member">
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ready-section">
        <div className="ready-marquee-container">
          <div className="ready-marquee">
            <span className="ready-marquee-text">
              {(pageData.marqueeText || 'READY TO MOVE WITH US * ').repeat(4)}
            </span>
            <span className="ready-marquee-text">
              {(pageData.marqueeText || 'READY TO MOVE WITH US * ').repeat(4)}
            </span>
          </div>
        </div>
        <div className="ready-cta">
          <Link href="/contact" className="ready-button">{pageData.ctaButtonText || 'Contact Us'}</Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
