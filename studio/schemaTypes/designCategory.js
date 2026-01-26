/**
 * Design Category Schema for Sanity CMS
 * 
 * Categories shown in footer's "We Design Everything" panel
 */

export default {
    name: 'designCategory',
    title: 'Design Category',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Category Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number'
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'order'
        },
        prepare({ title, subtitle }) {
            return {
                title,
                subtitle: subtitle ? `Order: ${subtitle}` : ''
            };
        }
    }
};
