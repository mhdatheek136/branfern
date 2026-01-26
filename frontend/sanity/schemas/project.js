/**
 * Project Schema for Sanity CMS
 * 
 * Represents portfolio projects/case studies with:
 * - Multiple images (gallery)
 * - Rich content sections (text + images)
 * - Full metadata
 */

/**
 * Project Schema for Sanity CMS
 * 
 * Represents portfolio projects/case studies.
 */

import seoFields from './objects/seoFields';

export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    groups: [
        { name: 'metadata', title: 'Metadata', default: true },
        { name: 'media', title: 'Media (Images)' },
        { name: 'content', title: 'Rich Content' },
        { name: 'seo', title: 'SEO & Sharing' }
    ],
    fields: [
        // Metadata
        {
            name: 'name',
            title: 'Project Name',
            type: 'string',
            description: 'Name of the client or project (e.g., "Fresh Foods Market").',
            group: 'metadata',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            description: 'Use the "Generate" button to create a URL-friendly name. (e.g., "fresh-foods-market")',
            group: 'metadata',
            options: {
                source: 'name',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            description: 'Primary industry or category (e.g., Food Chain, Supermarket, Tourism).',
            group: 'metadata'
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Keywords for filtering. Hit enter after each tag. (e.g., "Branding", "Web Design", "Logo").',
            group: 'metadata',
            options: {
                layout: 'tags'
            }
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            rows: 3,
            description: 'Brief summary shown on the Work index page. Keep it punchy (approx 20-30 words).',
            group: 'metadata'
        },
        {
            name: 'date',
            title: 'Project Date',
            type: 'date',
            description: 'When was this project launched?',
            group: 'metadata'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'Where is the client based? (e.g., "Colombo, Sri Lanka").',
            group: 'metadata'
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Numeric value to control sort order. Lower numbers appear first (e.g., 1, 2, 3).',
            group: 'metadata'
        },

        // Media
        {
            name: 'mainImage',
            title: 'Main Cover Image',
            type: 'image',
            description: 'The primary image shown on cards and the project header. High quality, landscape preferred.',
            group: 'media',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessibility. Describe the image (e.g., "Storefront logo sign").'
                }
            ]
        },
        {
            name: 'gallery',
            title: 'Image Gallery',
            type: 'array',
            description: 'Additional images for the case study gallery.',
            group: 'media',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        { name: 'alt', type: 'string', title: 'Alt Text' },
                        { name: 'caption', type: 'string', title: 'Caption (Optional)' }
                    ]
                }
            ]
        },

        // Content
        {
            name: 'fullDescription',
            title: 'Full Introduction',
            type: 'array',
            description: 'The main introductory text block at the top of the case study.',
            group: 'content',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'Quote', value: 'blockquote' }
                    ]
                }
            ]
        },
        {
            name: 'contentSections',
            title: 'Flexible Content Sections',
            description: 'Build your case study story using these modular sections.',
            group: 'content',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'contentSection',
                    title: 'Content Section',
                    fields: [
                        {
                            name: 'sectionType',
                            title: 'Section Type',
                            type: 'string',
                            description: 'Choose how to display this section.',
                            options: {
                                list: [
                                    { title: 'Text Only', value: 'text' },
                                    { title: 'Image Only', value: 'image' },
                                    { title: 'Text + Image Split', value: 'textImage' },
                                    { title: 'Image Grid/Gallery', value: 'gallery' }
                                ]
                            }
                        },
                        {
                            name: 'heading',
                            title: 'Section Heading (Optional)',
                            type: 'string',
                            description: 'A title for this specific section (e.g., "The Challenge").'
                        },
                        {
                            name: 'content',
                            title: 'Text Content',
                            type: 'array',
                            of: [{ type: 'block' }],
                            hidden: ({ parent }) => parent?.sectionType === 'image' || parent?.sectionType === 'gallery'
                        },
                        {
                            name: 'image',
                            title: 'Single Image',
                            type: 'image',
                            options: { hotspot: true },
                            hidden: ({ parent }) => parent?.sectionType !== 'image' && parent?.sectionType !== 'textImage'
                        },
                        {
                            name: 'images',
                            title: 'Gallery Images',
                            type: 'array',
                            of: [{ type: 'image', options: { hotspot: true } }],
                            hidden: ({ parent }) => parent?.sectionType !== 'gallery'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'heading',
                            subtitle: 'sectionType',
                            media: 'image'
                        },
                        prepare({ title, subtitle, media }) {
                            return {
                                title: title || 'Untitled Section',
                                subtitle: subtitle ? `Type: ${subtitle}` : 'No type selected',
                                media
                            };
                        }
                    }
                }
            ]
        },

        // SEO
        ...seoFields
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'category',
            media: 'mainImage'
        }
    },
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }]
        },
        {
            title: 'Created Date',
            name: 'createdDesc',
            by: [{ field: '_createdAt', direction: 'desc' }]
        }
    ]
};
