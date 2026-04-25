'use client';

import React, { useEffect, useState } from 'react';
import { urlFor } from '../lib/content';

const fallbackSlides = [
  {
    _id: 'fallback-slide',
    title: 'PAPER HOOF',
    subtitle: 'Design systems for brands that need traction and clarity.',
    image: null,
  },
];

const Hero = ({ slides = fallbackSlides }) => {
  const activeSlides = slides.length > 0 ? slides : fallbackSlides;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (activeSlides.length <= 1) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlides.length]);

  const getImageUrl = (image) => {
    if (!image) {
      return null;
    }

    return urlFor(image).width(1400).height(583).fit('crop').url();
  };

  return (
    <section className="hero-section">
      <div className="showreel-carousel">
        {activeSlides.map((slide, index) => (
          <div
            key={slide._id || index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            {slide.image && (
              <img
                src={getImageUrl(slide.image)}
                alt={slide.image?.alt || slide.title}
                className="carousel-image"
              />
            )}
            <div className="carousel-overlay" />
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {activeSlides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
