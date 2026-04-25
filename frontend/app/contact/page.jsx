import ContactUs from '../../src/views/ContactUs';
import { contactPage } from '../../src/content/pages';
import { getPageContact } from '../../src/lib/content';

export const metadata = {
  title: contactPage.seoTitle,
  description: contactPage.seoDescription,
};

export default async function ContactPage() {
  const pageData = await getPageContact();

  return <ContactUs pageData={pageData} />;
}
