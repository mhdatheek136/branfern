/**
 * Showreel Slide Schema for Sanity CMS
 * 
 * Hero carousel slides on the homepage
 */

export default {
    name: 'showreelSlide',
    title: 'Showreel Slide',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Slide Image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required(),
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text'
                }
            ]
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number'
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'image'
        }
    }
};
