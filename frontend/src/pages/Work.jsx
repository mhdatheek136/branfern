import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllProjects, getPageWork, urlFor } from '../lib/sanity';
import SEO from '../components/SEO';
import '../components/RecentProjects.css';
import './Work.css';

const Work = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [projectsData, pageContent] = await Promise.all([
          getAllProjects(),
          getPageWork()
        ]);
        if (projectsData) setProjects(projectsData);
        if (pageContent) setPageData(pageContent);
      } catch (error) {
        console.error('Error fetching work page data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleProjectClick = (slug) => {
    navigate(`/work/${slug}`);
  };

  const getImageUrl = (image, width = 800, height = 600) => {
    if (!image) return null;
    return urlFor(image).width(width).height(height).fit('crop').url();
  };

  if (loading) {
    return (
      <div className="work-page">
        <section className="work-hero">
          <div className="work-hero-container">
            <div className="work-hero-content">
              <h1 className="work-hero-title">Our Work</h1>
              <div className="work-hero-divider-gradient"></div>
              <p className="work-hero-description">Loading...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="work-page">
      <SEO
        title={pageData?.seoTitle}
        description={pageData?.seoDescription}
        image={pageData?.seoImage}
      />

      {/* Hero Section */}
      <section className="work-hero">
        <div className="hero-gradient-overlay"></div>
        <div className="work-hero-container">
          <div className="work-hero-content">
            <h1 className="work-hero-title">{pageData?.heroTitle || 'Our Work'}</h1>
            <div className="work-hero-divider-gradient"></div>
            <p className="work-hero-description">
              {pageData?.heroDescription || "Branfern's ambition is to operate at the intersection of design, systems, and culture. We aim to build holistic brand ecosystems where strategy, identity, and experience work as one. Our work is not to follow the industry's pace, but to define our own: thoughtful, rigorous, and sustainable."}
            </p>
          </div>
          <div className="work-hero-right">
            <div className="work-display">
              <span className="work-text">{pageData?.heroDisplayText || 'WORK'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="work-projects-section">
        <div className="work-projects-container">
          <h2 className="work-section-title">{pageData?.projectsSectionTitle || 'RECENT PROJECTS'}</h2>

          {projects.length === 0 ? (
            <p className="no-projects">{pageData?.noProjectsText || 'No projects available yet.'}</p>
          ) : (
            <div className="work-projects-grid">
              {/* Featured Project - Large */}
              {projects[0] && (
                <div
                  className="work-project-card featured"
                  onClick={() => handleProjectClick(projects[0].slug)}
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
                </div>
              )}

              {/* Small Projects - Right Side */}
              {projects[1] && (
                <div
                  className="work-project-card small"
                  onClick={() => handleProjectClick(projects[1].slug)}
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
                </div>
              )}

              {projects[2] && (
                <div
                  className="work-project-card small"
                  onClick={() => handleProjectClick(projects[2].slug)}
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
                </div>
              )}

              {/* Bottom Row - Remaining Projects */}
              {projects.slice(3).map((project) => (
                <div
                  key={project._id}
                  className="work-project-card medium"
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
                        <span key={index} className="project-tag">{tag}</span>
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Work;