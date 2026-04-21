import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/content';

const Work = ({ projects = [], pageData = {} }) => {
  const getImageUrl = (image, width = 800, height = 600) => {
    if (!image) {
      return null;
    }

    return urlFor(image).width(width).height(height).fit('crop').url();
  };

  return (
    <div className="work-page">
      <section className="work-hero">
        <div className="hero-gradient-overlay"></div>
        <div className="work-hero-container">
          <div className="work-hero-content">
            <h1 className="work-hero-title">{pageData.heroTitle || 'Our Work'}</h1>
            <div className="work-hero-divider-gradient"></div>
            <p className="work-hero-description">
              {pageData.heroDescription ||
                'Branfern operates at the intersection of design, systems, and culture. We build holistic brand ecosystems where strategy, identity, and experience work as one.'}
            </p>
          </div>
          <div className="work-hero-right">
            <div className="work-display">
              <span className="work-text">{pageData.heroDisplayText || 'WORK'}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work-projects-section">
        <div className="work-projects-container">
          <h2 className="work-section-title">{pageData.projectsSectionTitle || 'RECENT PROJECTS'}</h2>

          {projects.length === 0 ? (
            <p className="no-projects">{pageData.noProjectsText || 'No projects available yet.'}</p>
          ) : (
            <div className="work-projects-grid">
              {projects[0] && (
                <Link
                  href={`/work/${projects[0].slug}`}
                  className="work-project-card featured"
                >
                  <div className="project-image-wrapper">
                    {projects[0].mainImage && (
                      <img
                        src={getImageUrl(projects[0].mainImage, 1200, 800)}
                        alt={projects[0].mainImage?.alt || projects[0].name}
                        className="project-image"
                      />
                    )}
                    <div className="project-tags">
                      {projects[0].tags?.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">{projects[0].name}</h3>
                    <p className="project-category">{projects[0].category}</p>
                  </div>
                </Link>
              )}

              {projects[1] && (
                <Link
                  href={`/work/${projects[1].slug}`}
                  className="work-project-card small"
                >
                  <div className="project-image-wrapper">
                    {projects[1].mainImage && (
                      <img
                        src={getImageUrl(projects[1].mainImage)}
                        alt={projects[1].mainImage?.alt || projects[1].name}
                        className="project-image"
                      />
                    )}
                    <div className="project-tags">
                      {projects[1].tags?.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">{projects[1].name}</h3>
                    <p className="project-category">{projects[1].category}</p>
                  </div>
                </Link>
              )}

              {projects[2] && (
                <Link
                  href={`/work/${projects[2].slug}`}
                  className="work-project-card small"
                >
                  <div className="project-image-wrapper">
                    {projects[2].mainImage && (
                      <img
                        src={getImageUrl(projects[2].mainImage)}
                        alt={projects[2].mainImage?.alt || projects[2].name}
                        className="project-image"
                      />
                    )}
                    <div className="project-tags">
                      {projects[2].tags?.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">{projects[2].name}</h3>
                    <p className="project-category">{projects[2].category}</p>
                  </div>
                </Link>
              )}

              {projects.slice(3).map((project) => (
                <Link
                  key={project._id}
                  href={`/work/${project.slug}`}
                  className="work-project-card medium"
                >
                  <div className="project-image-wrapper">
                    {project.mainImage && (
                      <img
                        src={getImageUrl(project.mainImage)}
                        alt={project.mainImage?.alt || project.name}
                        className="project-image"
                      />
                    )}
                    <div className="project-tags">
                      {project.tags?.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-category">{project.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Work;
