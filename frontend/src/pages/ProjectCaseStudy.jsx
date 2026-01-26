import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, Plus } from 'lucide-react';
import { getProjectBySlug, urlFor } from '../lib/sanity';
import SEO from '../components/SEO';
import { PortableText } from '@portabletext/react';
import './ProjectCaseStudy.css';

const ProjectCaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        const data = await getProjectBySlug(projectId);
        if (data) {
          setProject(data);
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProject();
  }, [projectId]);

  const getImageUrl = (image, width = 1400, height = 800) => {
    if (!image) return null;
    return urlFor(image).width(width).height(height).fit('crop').url();
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Portable Text components for rich text rendering
  const portableTextComponents = {
    block: {
      normal: ({ children }) => <p className="content-paragraph">{children}</p>,
      h2: ({ children }) => <h2 className="content-heading">{children}</h2>,
      h3: ({ children }) => <h3 className="content-subheading">{children}</h3>,
      blockquote: ({ children }) => <blockquote className="content-quote">{children}</blockquote>,
    },
  };

  if (loading) {
    return (
      <div className="case-study-page">
        <section className="case-study-hero">
          <div className="case-study-hero-container">
            <div className="hero-left">
              <h1 className="case-study-title">Loading...</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="case-study-page">
        <section className="case-study-hero">
          <div className="case-study-hero-container">
            <div className="hero-left">
              <h1 className="case-study-title">Project Not Found</h1>
              <p className="case-study-short-desc">The requested project could not be found.</p>
              <button onClick={() => navigate('/work')} className="back-button">
                ← Back to Work
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="case-study-page">
      <SEO
        title={project.seoTitle || project.name}
        description={project.seoDescription || project.shortDescription}
        image={project.seoImage || project.mainImage}
      />

      {/* Hero Section */}
      <section className="case-study-hero">
        <div className="case-study-hero-container">
          <div className="hero-left">
            <h1 className="case-study-title">{project.name}</h1>
            <div className="case-study-gradient-divider"></div>
            <div className="case-study-meta">
              {project.date && (
                <>
                  <span className="meta-date">{formatDate(project.date)}</span>
                  <span className="meta-separator">•</span>
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

      {/* Sticky About Button */}
      <button
        className="sticky-about-button"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <span>About the project</span>
        {isDrawerOpen ? <X size={20} /> : <Plus size={20} />}
      </button>

      {/* Left Drawer */}
      <div className={`project-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="drawer-content">
          <h3 className="drawer-title">About the Project</h3>
          <div className="drawer-text">
            {project.fullDescription ? (
              <PortableText
                value={project.fullDescription}
                components={portableTextComponents}
              />
            ) : (
              <p>{project.shortDescription}</p>
            )}
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className={`case-study-content ${isDrawerOpen ? 'drawer-open' : ''}`}>
        <div className="content-container">
          {/* Gallery Images */}
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

          {/* Content Sections */}
          {project.contentSections?.map((section) => (
            <React.Fragment key={section._key}>
              {section.sectionType === 'text' && (
                <div className="content-text-block">
                  {section.heading && (
                    <h2 className="content-heading">{section.heading}</h2>
                  )}
                  {section.content && (
                    <PortableText
                      value={section.content}
                      components={portableTextComponents}
                    />
                  )}
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
                    {section.content && (
                      <PortableText
                        value={section.content}
                        components={portableTextComponents}
                      />
                    )}
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
                    {section.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="gallery-item">
                        <img
                          src={getImageUrl(img, 800, 600)}
                          alt={img.alt || `Gallery image ${imgIndex + 1}`}
                          className="gallery-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Fallback if no content sections - show main image */}
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

      {/* Project Navigation */}
      <section className="project-navigation">
        <div className="nav-container">
          {project.prevProject && (
            <div
              className="nav-item prev"
              onClick={() => navigate(`/work/${project.prevProject.slug}`)}
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
            </div>
          )}
          {project.nextProject && (
            <div
              className="nav-item next"
              onClick={() => navigate(`/work/${project.nextProject.slug}`)}
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
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectCaseStudy;