/**
 * Service Pillar Schema for Sanity CMS
 * 
 * Represents the three pillars: Digital, Physical, Human
 */

export default {
    name: 'service',
    title: 'Service Pillar',
    type: 'document',
    fields: [
        {
            name: 'pillarNumber',
            title: 'Pillar Number',
            type: 'string',
            options: {
                list: [
                    { title: '01', value: '01' },
                    { title: '02', value: '02' },
                    { title: '03', value: '03' }
                ]
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'e.g., Digital, Physical, Human',
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4
        },
        {
            name: 'image',
            title: 'Pillar Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text'
                }
            ]
        },
        {
            name: 'cards',
            title: 'Service Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'serviceCard',
                    title: 'Service Card',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string'
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'description'
                        }
                    }
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'pillarNumber',
            media: 'image'
        },
        prepare({ title, subtitle, media }) {
            return {
                title: `${subtitle} - ${title}`,
                media
            };
        }
    }
};
