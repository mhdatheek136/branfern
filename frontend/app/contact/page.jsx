import ContactUs from '../../src/views/ContactUs';
import { contactPage } from '../../src/content/pages';
import { getPageContact, getSiteSettings, getSocialLinks } from '../../src/lib/content';

export const metadata = {
  title: contactPage.seoTitle,
  description: contactPage.seoDescription,
};

export default async function ContactPage() {
  const [pageData, settings, socialLinks] = await Promise.all([
    getPageContact(),
    getSiteSettings(),
    getSocialLinks(),
  ]);

  return (
    <ContactUs
      pageData={pageData}
      settings={settings}
      socialLinks={socialLinks}
    />
  );
}
