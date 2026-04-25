import React from 'react';
import Link from 'next/link';
import ProjectVisual from './ProjectVisual';

const RecentProjects = ({ projects = [] }) => {
  if (!projects.length) {
    return (
      <section id="recent-projects" className="recent-projects-section">
        <div className="container">
          <h2 className="section-title">RECENT PROJECTS</h2>
          <p className="no-projects">No projects available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="recent-projects" className="recent-projects-section">
      <div className="container">
        <h2 className="section-title">RECENT PROJECTS</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Link
              key={project._id}
              href={`/work/${project.slug}`}
              className={`project-card ${index === 0 ? 'featured' : ''}`}
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
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
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
      </div>
    </section>
  );
};

export default RecentProjects;
