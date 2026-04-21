'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Plus } from 'lucide-react';
import { urlFor } from '../lib/content';

function renderRichContent(blocks = []) {
  return blocks.map((block, index) => {
    if (typeof block === 'string') {
      return (
        <p key={index} className="content-paragraph">
          {block}
        </p>
      );
    }

    switch (block.type) {
      case 'heading':
        return (
          <h2 key={index} className="content-heading">
            {block.text}
          </h2>
        );
      case 'subheading':
        return (
          <h3 key={index} className="content-subheading">
            {block.text}
          </h3>
        );
      case 'quote':
        return (
          <blockquote key={index} className="content-quote">
            {block.text}
          </blockquote>
        );
      case 'paragraph':
      default:
        return (
          <p key={index} className="content-paragraph">
            {block.text}
          </p>
        );
    }
  });
}

const ProjectCaseStudy = ({ project }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const getImageUrl = (image, width = 1400, height = 800) => {
    if (!image) {
      return null;
    }

    return urlFor(image).width(width).height(height).fit('crop').url();
  };

  const formatDate = (dateString) => {
    if (!dateString) {
      return '';
    }

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  if (!project) {
    return (
      <div className="case-study-page">
        <section className="case-study-hero">
          <div className="case-study-hero-container">
            <div className="hero-left">
              <h1 className="case-study-title">Project Not Found</h1>
              <p className="case-study-short-desc">The requested project could not be found.</p>
              <Link href="/work" className="back-button">
                Back to Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="case-study-page">
      <section className="case-study-hero">
        <div className="case-study-hero-container">
          <div className="hero-left">
            <h1 className="case-study-title">{project.name}</h1>
            <div className="case-study-gradient-divider"></div>
            <div className="case-study-meta">
              {project.date && (
                <>
                  <span className="meta-date">{formatDate(project.date)}</span>
                  <span className="meta-separator">&bull;</span>
                </>
              )}
              {project.location && (
                <span className="meta-location">{project.location}</span>
              )}
            </div>
            <div className="case-study-tags">
              {project.tags?.map((tag, index) => (
                <span key={index} className="case-tag">{tag}</span>
              ))}
            </div>
            <p className="case-study-short-desc">{project.shortDescription}</p>
          </div>
        </div>
      </section>

      <button
        className="sticky-about-button"
        onClick={() => setIsDrawerOpen((current) => !current)}
      >
        <span>About the project</span>
        {isDrawerOpen ? <X size={20} /> : <Plus size={20} />}
      </button>

      <div className={`project-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="drawer-content">
          <h3 className="drawer-title">About the Project</h3>
          <div className="drawer-text">
            {project.fullDescription?.length > 0
              ? renderRichContent(project.fullDescription)
              : <p>{project.shortDescription}</p>}
          </div>
        </div>
      </div>

      <div className={`case-study-content ${isDrawerOpen ? 'drawer-open' : ''}`}>
        <div className="content-container">
          {project.gallery?.map((image, index) => (
            <div key={index} className="content-image-block">
              <img
                src={getImageUrl(image)}
                alt={image.alt || `${project.name} ${index + 1}`}
                className="content-image"
              />
              {image.caption && (
                <p className="image-caption">{image.caption}</p>
              )}
            </div>
          ))}

          {project.contentSections?.map((section, index) => (
            <React.Fragment key={section.id || index}>
              {section.sectionType === 'text' && (
                <div className="content-text-block">
                  {section.heading && (
                    <h2 className="content-heading">{section.heading}</h2>
                  )}
                  {section.content && renderRichContent(section.content)}
                </div>
              )}

              {section.sectionType === 'image' && section.image && (
                <div className="content-image-block">
                  <img
                    src={getImageUrl(section.image)}
                    alt={section.image.alt || section.heading || 'Project image'}
                    className="content-image"
                  />
                  {section.image.caption && (
                    <p className="image-caption">{section.image.caption}</p>
                  )}
                </div>
              )}

              {section.sectionType === 'textImage' && (
                <>
                  <div className="content-text-block">
                    {section.heading && (
                      <h2 className="content-heading">{section.heading}</h2>
                    )}
                    {section.content && renderRichContent(section.content)}
                  </div>
                  {section.image && (
                    <div className="content-image-block">
                      <img
                        src={getImageUrl(section.image)}
                        alt={section.image.alt || section.heading || 'Project image'}
                        className="content-image"
                      />
                    </div>
                  )}
                </>
              )}

              {section.sectionType === 'gallery' && section.images && (
                <div className="content-gallery-block">
                  {section.heading && (
                    <h2 className="content-heading">{section.heading}</h2>
                  )}
                  <div className="gallery-grid">
                    {section.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="gallery-item">
                        <img
                          src={getImageUrl(image, 800, 600)}
                          alt={image.alt || `Gallery image ${imageIndex + 1}`}
                          className="gallery-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}

          {(!project.contentSections || project.contentSections.length === 0) &&
            (!project.gallery || project.gallery.length === 0) &&
            project.mainImage && (
              <div className="content-image-block">
                <img
                  src={getImageUrl(project.mainImage)}
                  alt={project.mainImage.alt || project.name}
                  className="content-image"
                />
              </div>
            )}
        </div>
      </div>

      <section className="project-navigation">
        <div className="nav-container">
          {project.prevProject && (
            <Link
              href={`/work/${project.prevProject.slug}`}
              className="nav-item prev"
            >
              <div className="nav-image-wrapper">
                {project.prevProject.mainImage && (
                  <img
                    src={getImageUrl(project.prevProject.mainImage, 600, 400)}
                    alt={project.prevProject.name}
                    className="nav-project-image"
                  />
                )}
              </div>
              <div className="nav-content">
                <span className="nav-label">Previous Project</span>
                <h3 className="nav-project-name">{project.prevProject.name}</h3>
              </div>
            </Link>
          )}
          {project.nextProject && (
            <Link
              href={`/work/${project.nextProject.slug}`}
              className="nav-item next"
            >
              <div className="nav-image-wrapper">
                {project.nextProject.mainImage && (
                  <img
                    src={getImageUrl(project.nextProject.mainImage, 600, 400)}
                    alt={project.nextProject.name}
                    className="nav-project-image"
                  />
                )}
              </div>
              <div className="nav-content">
                <span className="nav-label">Next Project</span>
                <h3 className="nav-project-name">{project.nextProject.name}</h3>
              </div>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectCaseStudy;
