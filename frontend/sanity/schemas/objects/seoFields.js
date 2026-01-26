/**
 * Shared SEO Fields
 * Exported as a standard array to be spread (...) into document fields.
 * This ensures consistent field names and descriptions across all pages.
 */
export default [
    {
        name: 'seoTitle',
        title: 'SEO Title',
        type: 'string',
        description: 'Override the browser tab title. Defaults to page title or "Branfern". (Max 60 chars)',
        group: 'seo'
    },
    {
        name: 'seoDescription',
        title: 'SEO Description',
        type: 'text',
        rows: 3,
        description: 'Description for search engines and social shares. Defaults to page summary. (Max 160 chars)',
        group: 'seo'
    },
    {
        name: 'seoImage',
        title: 'SEO Share Image',
        type: 'image',
        description: 'Image used for social sharing cards. Defaults to main image or site default.',
        group: 'seo',
        options: {
            hotspot: true
        }
    }
];
