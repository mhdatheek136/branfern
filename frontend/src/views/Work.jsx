import React from 'react';
import Link from 'next/link';
import ProjectVisual from '../components/ProjectVisual';

const Work = ({ projects = [], pageData = {} }) => {
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
                'Paper Hoof operates at the intersection of design, systems, and culture. We build identity worlds where strategy, visuals, and experience move as one.'}
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
              {projects.map((project, index) => (
                <Link
                  key={project._id}
                  href={`/work/${project.slug}`}
                  className={`work-project-card ${index === 0 ? 'featured' : 'medium'}`}
                >
                  <div className="project-image-wrapper">
                    <ProjectVisual
                      project={project}
                      width={1400}
                      height={1000}
                      imageClassName="project-image"
                      fallbackClassName="project-visual-card"
                    />
                    <div className="project-tags">
                      {project.tags?.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="project-tag">{tag}</span>
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
