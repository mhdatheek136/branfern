import seoFields from './objects/seoFields';

export default {
    name: 'pageContact',
    title: 'Page: Contact Us',
    type: 'document',
    __experimental_actions: ['update', 'publish'], // Singleton
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'social', title: 'Social Section' },
        { name: 'marquee', title: 'Marquee / CTA' },
        { name: 'seo', title: 'SEO' }
    ],
    fields: [
        // Hero
        {
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            initialValue: 'Contact Us',
            description: 'Main page heading.',
            group: 'hero'
        },
        {
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'text',
            rows: 4,
            initialValue: "Whether you're exploring a rebrand, seeking strategic direction, or simply curious about working together, we're here to listen. Reach out and let's start the conversation.",
            description: 'Subtitle / intro paragraph for the contact page.',
            group: 'hero'
        },

        // Social
        {
            name: 'socialHeading',
            title: 'Social Section Heading',
            type: 'string',
            initialValue: 'Follow Us',
            description: 'Heading displayed above the social links list.',
            group: 'social'
        },

        // Marquee
        {
            name: 'marqueeText',
            title: 'Marquee Text',
            type: 'string',
            initialValue: 'Ready to move with us • ',
            description: 'Scrolling text banner content.',
            group: 'marquee'
        },
        {
            name: 'ctaButtonText',
            title: 'CTA Button Text',
            type: 'string',
            initialValue: 'Get in Touch',
            description: 'Button label.',
            group: 'marquee'
        },

        ...seoFields
    ]
}
