export default {
    name: 'pageWork',
    title: 'Page: Work',
    type: 'document',
    __experimental_actions: ['update', 'publish'], // Singleton
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'content', title: 'Content Labels' },
        { name: 'seo', title: 'SEO' }
    ],
    fields: [
        {
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            initialValue: 'Our Work',
            description: 'Main page heading.',
            group: 'hero'
        },
        {
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'text',
            rows: 5,
            initialValue: "Branfern's ambition is to operate at the intersection of design, systems, and culture. We aim to build holistic brand ecosystems where strategy, identity, and experience work as one. Our work is not to follow the industry's pace, but to define our own: thoughtful, rigorous, and sustainable.",
            description: 'Introduction paragraph shown at the top of the Work page.',
            group: 'hero'
        },
        {
            name: 'heroDisplayText',
            title: 'Hero Display Text',
            type: 'string',
            initialValue: 'WORK',
            description: 'Large decorative text on the right side.',
            group: 'hero'
        },
        {
            name: 'projectsSectionTitle',
            title: 'Projects Section Title',
            type: 'string',
            initialValue: 'RECENT PROJECTS',
            description: 'Heading displayed above the project grid.',
            group: 'content'
        },
        {
            name: 'noProjectsText',
            title: 'No Projects Message',
            type: 'string',
            initialValue: 'No projects available yet.',
            description: 'Fallback text shown if no projects are published.',
            group: 'content'
        },
        // SEO
        {
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            description: 'Browser tab title (e.g., "Work | Branfern").',
            group: 'seo'
        },
        {
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'text',
            rows: 3,
            description: 'Search engine description used for this page.',
            group: 'seo'
        },
        {
            name: 'seoImage',
            title: 'SEO Share Image',
            type: 'image',
            description: 'Social share image for this specific page.',
            group: 'seo'
        }
    ]
}
