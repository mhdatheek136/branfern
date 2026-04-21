import BrandReview from '../../src/views/BrandReview';
import { brandReviewPage } from '../../src/content/pages';
import { getFormOptions, getPageBrandReview, getSiteSettings } from '../../src/lib/content';

export const metadata = {
  title: brandReviewPage.seoTitle,
  description: brandReviewPage.seoDescription,
};

export default async function BrandReviewPage() {
  const [pageData, settings, formOptions] = await Promise.all([
    getPageBrandReview(),
    getSiteSettings(),
    getFormOptions(),
  ]);

  return (
    <BrandReview
      pageData={pageData}
      settings={settings}
      formOptions={formOptions}
    />
  );
}
