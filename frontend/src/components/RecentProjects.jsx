import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecentProjects, urlFor } from '../lib/sanity';
import './RecentProjects.css';

const RecentProjects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getRecentProjects(6);
        if (data) {
          setProjects(data);
        }
      } catch (error) {
        console.error('Error fetching recent projects:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const handleProjectClick = (slug) => {
    navigate(`/work/${slug}`);
  };

  const getImageUrl = (image) => {
    if (!image) return null;
    return urlFor(image).width(800).height(600).fit('crop').url();
  };

  if (loading) {
    return (
      <section id="recent-projects" className="recent-projects-section">
        <div className="container">
          <h2 className="section-title">RECENT PROJECTS</h2>
          <div className="projects-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="project-card loading-skeleton">
                <div className="project-image-wrapper skeleton"></div>
                <div className="project-info">
                  <div className="skeleton-text"></div>
                  <div className="skeleton-text small"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
            <div
              key={project._id}
              className="project-card"
              onClick={() => handleProjectClick(project.slug)}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;