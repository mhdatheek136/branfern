'use client';

import React, { useEffect, useState } from 'react';
import { X, ChevronUp } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

const defaultCategories = [
  'BRANDING',
  'IDENTITY',
  'HOSPITALITY',
  'SYSTEMS',
  'SPORTS',
  'SOCIAL MEDIA',
  'VEHICLE',
  'DIGITAL PRESENCE',
  'UI/UX',
];

const DesignCategories = ({
  scrollPosition,
  isHomePage = false,
  isDocked = false,
  designCategories = defaultCategories,
  projects = [],
}) => {
  const [position, setPosition] = useState('hero');
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setIsNavbarScrolled(scrollPosition > 100);
  }, [scrollPosition]);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const footer = document.querySelector('.footer');
    if (!footer) {
      return;
    }

    const footerTop = footer.offsetTop;
    const viewportHeight = window.innerHeight;
    const scrollThreshold = footerTop - viewportHeight + 150;

    if (scrollPosition < 50) {
      setPosition('hero');
    } else if (scrollPosition >= scrollThreshold) {
      setPosition('docked');
    } else {
      setPosition('floating');
    }
  }, [scrollPosition, isHomePage]);

  const handleClose = () => {
    setIsExpanded(false);
    setHoveredCategory(null);
  };

  const getProjectForCategory = (category) => {
    const matchingProject = projects.find((project) =>
      project.tags?.some((tag) => tag.toLowerCase().includes(category.toLowerCase())),
    );

    return matchingProject || projects[0];
  };

  if (isExpanded) {
    return (
      <div className="design-categories-overlay" onClick={handleClose}>
        <div className="categories-panel-new" onClick={(event) => event.stopPropagation()}>
          <button className="close-btn-new" onClick={handleClose}>
            <X size={20} />
          </button>

          <div className="expanded-title">
            <span>We Design</span>
            <span className="bullet">&bull;</span>
            <span>Everything</span>
          </div>

          <div className="categories-grid">
            {designCategories.map((category, index) => (
              <button
                key={`${category}-${index}`}
                className={`category-btn ${hoveredCategory === category ? 'active' : ''}`}
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {category} +
              </button>
            ))}
          </div>

          <div className="preview-container">
            {hoveredCategory && getProjectForCategory(hoveredCategory) ? (
              <div className="preview-content">
                <ProjectVisual
                  project={getProjectForCategory(hoveredCategory)}
                  width={900}
                  height={560}
                  imageClassName="preview-image"
                  fallbackClassName="preview-fallback"
                />
                <div className="preview-overlay">
                  <span className="preview-label">{getProjectForCategory(hoveredCategory).name}</span>
                </div>
              </div>
            ) : (
              <div className="preview-placeholder">
                <span>Hover over a category</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (!isHomePage || isDocked) {
    return null;
  }

  const getFloatingTop = () => {
    if (isMobile) {
      return isNavbarScrolled ? 'calc(68px + 20px)' : 'calc(80px + 20px)';
    }

    return isNavbarScrolled ? 'calc(64px + 40px)' : 'calc(80px + 40px)';
  };

  return (
    <div
      className={`design-categories-trigger position-${position} ${isMobile ? 'mobile' : ''}`}
      style={{
        top:
          position === 'floating'
            ? getFloatingTop()
            : position === 'hero'
              ? isMobile ? '20px' : '40px'
              : 'auto',
        position: position === 'floating' ? 'fixed' : 'absolute',
      }}
      onClick={() => setIsExpanded(true)}
    >
      <span>We Design</span>
      <span className="bullet">&bull;</span>
      <span>Everything</span>
      <ChevronUp className="arrow-icon" size={20} />
    </div>
  );
};

export default DesignCategories;
