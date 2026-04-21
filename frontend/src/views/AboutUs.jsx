'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { urlFor } from '../lib/content';

const AboutUs = ({ pageData = {}, teamMembers = [], services = [] }) => {
  const [activeCarousel, setActiveCarousel] = useState(() =>
    Object.fromEntries(services.map((_, index) => [index, 0])),
  );

  const handleCarouselNext = (pillarIndex, cardsLength) => {
    setActiveCarousel((prev) => ({
      ...prev,
      [pillarIndex]: (prev[pillarIndex] + 1) % cardsLength,
    }));
  };

  const handleCarouselPrev = (pillarIndex, cardsLength) => {
    setActiveCarousel((prev) => ({
      ...prev,
      [pillarIndex]: (prev[pillarIndex] - 1 + cardsLength) % cardsLength,
    }));
  };

  const getImageUrl = (image, width = 800, height = 600) => {
    if (!image) {
      return null;
    }

    return urlFor(image).width(width).height(height).fit('crop').url();
  };

  return (
    <div className="about-us-page">
      <section className="about-hero">
        <div className="hero-container">
          <div className="hero-left">
            <span className="hero-eyebrow">{pageData.heroEyebrow || 'About Branfern'}</span>
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
            <div className="showreel-content">
              <span className="showreel-placeholder">
                {pageData.showreelPlaceholder || 'BRANFERN SHOWREEL'}
              </span>
            </div>
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

      {services.map((service, pillarIndex) => (
        <section key={service._id} className="pillar-section">
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

            {service.image && (
              <div className="pillar-showreel">
                <img
                  src={getImageUrl(service.image, 1400, 220)}
                  alt={service.image?.alt || service.heading}
                  className="pillar-image"
                />
              </div>
            )}

            {service.cards && service.cards.length > 0 && (
              <div className="pillar-carousel">
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${(activeCarousel[pillarIndex] || 0) * 100}%)` }}
                >
                  {service.cards.map((card, index) => (
                    <div key={index} className="carousel-card">
                      <span className="card-bullet">&bull;</span>
                      <h4 className="card-title">{card.title}</h4>
                      <p className="card-description">{card.description}</p>
                    </div>
                  ))}
                </div>
                <div className="carousel-controls">
                  <button
                    onClick={() => handleCarouselPrev(pillarIndex, service.cards.length)}
                    className="carousel-btn"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div className="carousel-dots">
                    {service.cards.map((_, index) => (
                      <span
                        key={index}
                        className={`dot ${(activeCarousel[pillarIndex] || 0) === index ? 'active' : ''}`}
                      ></span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleCarouselNext(pillarIndex, service.cards.length)}
                    className="carousel-btn"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="team-section">
        <div className="team-container">
          <span className="section-eyebrow">{pageData.teamEyebrow || 'The Team'}</span>
          <h2 className="section-heading">
            {pageData.teamHeading || 'The Branfern Collective'}
          </h2>
          <p className="team-description">
            {pageData.teamDescription ||
              "We're a small, considered team of designers, strategists, and makers based in Sri Lanka. We work with brands that value thoughtful design and are committed to building something meaningful."}
          </p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member._id} className="team-member">
                <div className="team-image-container">
                  {member.image && (
                    <img
                      src={getImageUrl(member.image, 300, 300)}
                      alt={member.image?.alt || member.name}
                      className="team-image"
                    />
                  )}
                  {member.instagramUrl && (
                    <a
                      href={member.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-overlay"
                    >
                      <span>Instagram</span>
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>
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
