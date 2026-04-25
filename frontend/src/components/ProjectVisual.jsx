import React from 'react';
import { urlFor } from '../lib/content';

const defaultArtDirection = {
  background: '#FFFDF7',
  foreground: '#202423',
};

const ProjectVisual = ({
  project,
  width = 1200,
  height = 900,
  imageClassName = 'project-image',
  fallbackClassName = '',
}) => {
  if (!project) {
    return null;
  }

  if (project.mainImage) {
    return (
      <img
        src={urlFor(project.mainImage).width(width).height(height).fit('crop').url()}
        alt={project.mainImage.alt || project.name}
        className={imageClassName}
      />
    );
  }

  const artDirection = {
    ...defaultArtDirection,
    ...(project.artDirection || {}),
  };

  return (
    <div
      className={`project-visual-fallback ${fallbackClassName}`.trim()}
      style={{
        '--art-background': artDirection.background,
        '--art-foreground': artDirection.foreground,
      }}
    >
      {artDirection.eyebrow && (
        <span className="project-visual-eyebrow">{artDirection.eyebrow}</span>
      )}
      <span className="project-visual-wordmark">{artDirection.wordmark || project.name}</span>
      {artDirection.tone && (
        <span className="project-visual-tone">{artDirection.tone}</span>
      )}
    </div>
  );
};

export default ProjectVisual;
