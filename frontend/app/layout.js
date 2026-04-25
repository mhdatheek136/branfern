import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import SiteShell from '../src/components/SiteShell';
import { siteSettings as defaultSettings } from '../src/content/site';
import {
  getDesignCategories,
  getRecentProjects,
  getSiteSettings,
  getSocialLinks,
} from '../src/lib/content';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-editorial',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: {
    default: defaultSettings.seoDefaultTitle,
    template: '%s',
  },
  description: defaultSettings.seoDefaultDescription,
  icons: {
    icon: '/content/paparhoof/branding/favicon.svg',
  },
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
      <body className={`${inter.variable} ${cormorant.variable}`}>
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
