import React, { useState, useEffect } from 'react';
import { getShowreelSlides, getSiteSettings, urlFor } from '../lib/sanity';
import './Hero.css';

// Fallback data for when Sanity data isn't loaded yet
const fallbackSlides = [
  { _id: '1', title: 'BRANFERN', subtitle: 'design studio', image: null }
];

const Hero = () => {
  const [slides, setSlides] = useState(fallbackSlides);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch slides and settings from Sanity
  useEffect(() => {
    async function fetchData() {
      try {
        console.log('[Hero] Fetching hero data...');
        const [slidesData, settingsData] = await Promise.all([
          getShowreelSlides(),
          getSiteSettings()
        ]);

        console.log('[Hero] Slides data:', slidesData);
        console.log('[Hero] Settings data:', settingsData);

        let mergedSlides = [];

        // 1. Try Showreel Slides first
        if (slidesData && slidesData.length > 0) {
          mergedSlides = slidesData;
        }
        // 2. Fallback to Site Settings Hero Images
        else if (settingsData?.heroImages && settingsData.heroImages.length > 0) {
          mergedSlides = settingsData.heroImages.map((img, index) => ({
            _id: `hero-img-${index}`,
            image: img,
            title: settingsData.heroTitle || 'BRANFERN',
            subtitle: settingsData.heroSubtitle || img.caption || 'design studio'
          }));
        }
        // 3. Fallback to Site Settings Background Image (single slide)
        else if (settingsData?.heroBackgroundImage) {
          mergedSlides = [{
            _id: 'hero-bg',
            image: settingsData.heroBackgroundImage,
            title: settingsData.heroTitle || 'BRANFERN',
            subtitle: settingsData.heroSubtitle || 'design studio'
          }];
        }

        // Only update if we found something
        if (mergedSlides.length > 0) {
          setSlides(mergedSlides);
        } else {
          // Keep fallback or set empty? Using fallbackSlides default.
          console.warn('[Hero] No content found in Sanity, using fallback.');
        }

      } catch (error) {
        console.error('Error fetching hero data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Get image URL from Sanity image object
  const getImageUrl = (image) => {
    if (!image) return null;
    return urlFor(image).width(1400).height(583).fit('crop').url();
  };

  return (
    <section className="hero-section">
      <div className="showreel-carousel">
        {slides.map((slide, index) => (
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
            <div className="carousel-content">
              <h1 className="carousel-title">{slide.title}</h1>
              <p className="carousel-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
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