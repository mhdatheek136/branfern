import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/content';

const RecentProjects = ({ projects = [] }) => {
  const getImageUrl = (image) => {
    if (!image) {
      return null;
    }

    return urlFor(image).width(800).height(600).fit('crop').url();
  };

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
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/work/${project.slug}`}
              className="project-card"
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
                    <span key={index} className="project-tag !my-[4px] !mx-[4px] !py-[4px] !px-[4px] !rounded">
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
