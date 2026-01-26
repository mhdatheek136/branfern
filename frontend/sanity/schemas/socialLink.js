/**
 * Social Link Schema for Sanity CMS
 */

export default {
    name: 'socialLink',
    title: 'Social Link',
    type: 'document',
    fields: [
        {
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: {
                list: [
                    { title: 'Instagram', value: 'Instagram' },
                    { title: 'TikTok', value: 'TikTok' },
                    { title: 'WhatsApp', value: 'WhatsApp' },
                    { title: 'LinkedIn', value: 'LinkedIn' },
                    { title: 'Twitter', value: 'Twitter' },
                    { title: 'Facebook', value: 'Facebook' },
                    { title: 'YouTube', value: 'YouTube' },
                    { title: 'Behance', value: 'Behance' },
                    { title: 'Dribbble', value: 'Dribbble' }
                ]
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: Rule => Rule.required()
        },
        {
            name: 'iconName',
            title: 'Icon Name',
            type: 'string',
            description: 'Lucide icon name: Instagram, Music (TikTok), MessageCircle (WhatsApp), Linkedin, etc.'
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number'
        }
    ],
    preview: {
        select: {
            title: 'platform',
            subtitle: 'url'
        }
    }
};
