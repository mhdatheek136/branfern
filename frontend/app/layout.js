import './globals.css';
import SiteShell from '../src/components/SiteShell';
import { siteSettings as defaultSettings } from '../src/content/site';
import {
  getDesignCategories,
  getRecentProjects,
  getSiteSettings,
  getSocialLinks,
} from '../src/lib/content';

export const metadata = {
  title: defaultSettings.seoDefaultTitle,
  description: defaultSettings.seoDefaultDescription,
};

export default async function RootLayout({ children }) {
  const [settings, socialLinks, designCategories, previewProjects] = await Promise.all([
    getSiteSettings(),
    getSocialLinks(),
    getDesignCategories(),
    getRecentProjects(6),
  ]);

  return (
    <html lang="en">
      <body>
        <SiteShell
          settings={settings}
          socialLinks={socialLinks}
          designCategories={designCategories.map((category) => category.name)}
          previewProjects={previewProjects}
        >
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
