import { notFound } from 'next/navigation';
import ProjectCaseStudy from '../../../src/views/ProjectCaseStudy';
import { getProjectBySlug } from '../../../src/lib/content';

export async function generateMetadata({ params }) {
  const { projectId } = await params;
  const project = await getProjectBySlug(projectId);

  if (!project) {
    return {
      title: 'Project Not Found | Branfern',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: project.seoTitle || `${project.name} | Branfern`,
    description: project.seoDescription || project.shortDescription,
  };
}

export default async function ProjectPage({ params }) {
  const { projectId } = await params;
  const project = await getProjectBySlug(projectId);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
