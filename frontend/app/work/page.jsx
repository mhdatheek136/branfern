import Work from '../../src/views/Work';
import { workPage } from '../../src/content/pages';
import { getAllProjects, getPageWork } from '../../src/lib/content';

export const metadata = {
  title: workPage.seoTitle,
  description: workPage.seoDescription,
};

export default async function WorkPage() {
  const [pageData, projects] = await Promise.all([
    getPageWork(),
    getAllProjects(),
  ]);

  return <Work pageData={pageData} projects={projects} />;
}
