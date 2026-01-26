/**
 * Site Settings Schema for Sanity CMS
 * 
 * Singleton document for global site configuration only.
 * Page content has moved to dedicated page schemas.
 */

export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    __experimental_actions: ['update', 'publish'], // Singleton pattern
    groups: [
        { name: 'general', title: 'General' },
        { name: 'hero', title: 'Homepage Hero' },
        { name: 'footer', title: 'Footer & Navigation' },
        { name: 'seo', title: 'Global SEO' }
    ],
    fields: [
        // General settings
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            initialValue: 'Branfern',
            description: 'Used in copyright footer and meta tags (e.g., "Branfern").',
            group: 'general'
        },
        {
            name: 'email',
            title: 'Contact Email',
            type: 'string',
            description: 'Public email displayed in footer and on contact page.',
            group: 'general'
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            description: 'Public phone number.',
            group: 'general'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'Physical location text (e.g., "Mawanella, Sri Lanka").',
            group: 'general'
        },
        {
            name: 'timezone',
            title: 'Timezone',
            type: 'string',
            initialValue: 'IST (GMT +5:30)',
            description: 'Displayed on the Brand Review calendar booking step.',
            group: 'general'
        },

        // Homepage Hero Section (Kept here as it's the main entry point)
        {
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            description: 'Main large title on homepage (e.g., "BRANFERN").',
            group: 'hero'
        },
        {
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'string',
            description: 'Smaller text below title (e.g., "design studio").',
            group: 'hero'
        },
        {
            name: 'heroBackgroundImage',
            title: 'Hero Background Image',
            type: 'image', // Fallback
            description: 'Fallback background if no slides are active.',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string'
                }
            ],
            group: 'hero'
        },
        {
            name: 'heroImages',
            title: 'Hero Carousel Images',
            type: 'array',
            description: 'Add multiple images to create the hero background carousel.',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string'
                        },
                        {
                            name: 'caption',
                            title: 'Caption',
                            type: 'string',
                            description: 'Overrides main subtitle if set.'
                        }
                    ]
                }
            ],
            group: 'hero'
        },

        // Footer & Navigation
        {
            name: 'footerOverlayTitle',
            title: 'Footer Overlay Text 1',
            type: 'string',
            initialValue: 'We Design',
            description: 'First line of the large footer overlay (e.g., "We Design").',
            group: 'footer'
        },
        {
            name: 'footerOverlaySubtitle',
            title: 'Footer Overlay Text 2',
            type: 'string',
            initialValue: 'Everything',
            description: 'Second line of the large footer overlay (e.g., "Everything").',
            group: 'footer'
        },
        {
            name: 'footerHoverPlaceholder',
            title: 'Footer Hover Placeholder',
            type: 'string',
            initialValue: 'Hover over a category',
            description: 'Text shown in the rectangle when no category is hovered.',
            group: 'footer'
        },
        {
            name: 'footerWorkingHeading',
            title: 'Footer Working/Social Heading',
            type: 'string',
            initialValue: 'Get in Touch',
            description: 'Heading above social icons column.',
            group: 'footer'
        },
        {
            name: 'footerContactsHeading',
            title: 'Footer Contact Heading',
            type: 'string',
            initialValue: 'Contact Us',
            description: 'Heading above email address.',
            group: 'footer'
        },
        {
            name: 'footerLocationHeading',
            title: 'Footer Location Heading',
            type: 'string',
            initialValue: 'Location',
            description: 'Heading above location text.',
            group: 'footer'
        },
        {
            name: 'footerScrollTopText',
            title: 'Scroll Top Text',
            type: 'string',
            initialValue: 'Scroll Up',
            description: 'Label next to the scroll-to-top arrow.',
            group: 'footer'
        },
        {
            name: 'navHomeLabel',
            title: 'Nav: Home Label',
            type: 'string',
            initialValue: 'HOME',
            group: 'footer'
        },
        {
            name: 'navBrandReviewLabel',
            title: 'Nav: Brand Review Label',
            type: 'string',
            initialValue: 'BRAND REVIEW',
            group: 'footer'
        },
        {
            name: 'navAboutLabel',
            title: 'Nav: About Label',
            type: 'string',
            initialValue: 'ABOUT',
            group: 'footer'
        },
        {
            name: 'navWorkLabel',
            title: 'Nav: Work Label',
            type: 'string',
            initialValue: 'WORK',
            group: 'footer'
        },
        {
            name: 'navContactLabel',
            title: 'Nav: Contact Label',
            type: 'string',
            initialValue: 'CONTACT',
            group: 'footer'
        },

        // SEO
        {
            name: 'seoDefaultTitle',
            title: 'Default SEO Title',
            type: 'string',
            description: 'Fallback browser title (e.g., "Branfern - Design Studio").',
            group: 'seo'
        },
        {
            name: 'seoDefaultDescription',
            title: 'Default SEO Description',
            type: 'text',
            rows: 3,
            description: 'Fallback search engine description.',
            group: 'seo'
        },
        {
            name: 'seoDefaultImage',
            title: 'Default SEO Share Image',
            type: 'image',
            description: 'Fallback image for social sharing if a page has none.',
            group: 'seo'
        }
    ],
    preview: {
        prepare() {
            return {
                title: 'Site Settings'
            };
        }
    }
};
