import HomePageContent from '../src/components/HomePageContent';
import { getRecentProjects, getShowreelSlides } from '../src/lib/content';

export default async function HomePage() {
  const [slides, recentProjects] = await Promise.all([
    getShowreelSlides(),
    getRecentProjects(6),
  ]);

  return <HomePageContent slides={slides} recentProjects={recentProjects} />;
}
