import seoFields from './objects/seoFields';

export default {
    name: 'pageAbout',
    title: 'Page: About Us',
    type: 'document',
    __experimental_actions: ['update', 'publish'], // Singleton
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'showreel', title: 'Showreel Section' },
        { name: 'philosophy', title: 'Philosophy Section' },
        { name: 'team', title: 'Team Section' },
        { name: 'marquee', title: 'Marquee / CTA' },
        { name: 'seo', title: 'SEO' }
    ],
    fields: [
        // Hero
        {
            name: 'heroEyebrow',
            title: 'Hero Eyebrow',
            type: 'string',
            initialValue: 'About Branfern',
            description: 'Small text appearing above the main title (e.g. "About the Studio").',
            group: 'hero'
        },
        {
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            initialValue: 'We design the systems that power your brand.',
            description: 'The main effective headline of the page.',
            group: 'hero'
        },
        {
            name: 'heroDisplayText',
            title: 'Display Text',
            type: 'string',
            initialValue: 'ABOUT US',
            description: 'Big decorative typography (e.g. "ABOUT US" or "STUDIO").',
            group: 'hero'
        },

        // Showreel
        {
            name: 'showreelPlaceholder',
            title: 'Showreel Placeholder Text',
            type: 'string',
            initialValue: 'BRANFERN SHOWREEL',
            description: 'Text shown when the video is loading or paused.',
            group: 'showreel'
        },

        // Philosophy
        {
            name: 'philosophyEyebrow',
            title: 'Philosophy Eyebrow',
            type: 'string',
            initialValue: 'Our Philosophy',
            description: 'Small label above the philosophy section.',
            group: 'philosophy'
        },
        {
            name: 'philosophyHeading',
            title: 'Philosophy Heading',
            type: 'string',
            initialValue: 'Brand as Action',
            description: 'Main heading for the philosophy content.',
            group: 'philosophy'
        },
        {
            name: 'philosophyDescription',
            title: 'Philosophy Description',
            type: 'text',
            rows: 5,
            initialValue: "We believe a brand is not what you say, but what you do. It's the cumulative experience of every interaction, every product, every conversation. Our work is rooted in systems thinking: building frameworks that scale, evolve, and remain coherent across digital, physical, and human touchpoints.",
            description: 'The core philosophy statement text.',
            group: 'philosophy'
        },

        // Team (Team members are managed in separate 'teamMember' schema)
        {
            name: 'teamEyebrow',
            title: 'Team Eyebrow',
            type: 'string',
            initialValue: 'The Team',
            group: 'team'
        },
        {
            name: 'teamHeading',
            title: 'Team Heading',
            type: 'string',
            initialValue: 'The Branfern Collective',
            group: 'team'
        },
        {
            name: 'teamDescription',
            title: 'Team Description',
            type: 'text',
            rows: 3,
            initialValue: "We're a small, considered team of designers, strategists, and makers based in Sri Lanka. We work with brands that value thoughtful design and are committed to building something meaningful.",
            description: 'Introductory text about the team structure/values.',
            group: 'team'
        },

        // Marquee / CTA
        {
            name: 'marqueeText',
            title: 'Marquee Text',
            type: 'string',
            initialValue: 'READY TO MOVE WITH US • ',
            description: 'Repeated scrolling text. Include a separator like " • " at the end.',
            group: 'marquee'
        },
        {
            name: 'ctaButtonText',
            title: 'CTA Button Text',
            type: 'string',
            initialValue: 'Contact Us',
            description: 'Label for the main call-to-action button.',
            group: 'marquee'
        },

        // SEO
        ...seoFields
    ]
}
