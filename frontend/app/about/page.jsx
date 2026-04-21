import AboutUs from '../../src/views/AboutUs';
import { aboutPage } from '../../src/content/pages';
import { getPageAbout, getServices, getTeamMembers } from '../../src/lib/content';

export const metadata = {
  title: aboutPage.seoTitle,
  description: aboutPage.seoDescription,
};

export default async function AboutPage() {
  const [pageData, services, teamMembers] = await Promise.all([
    getPageAbout(),
    getServices(),
    getTeamMembers(),
  ]);

  return (
    <AboutUs
      pageData={pageData}
      services={services}
      teamMembers={teamMembers}
    />
  );
}
