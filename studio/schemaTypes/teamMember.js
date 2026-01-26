/**
 * Team Member Schema for Sanity CMS
 */

export default {
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
            description: 'e.g., Co-Founder & Creative Director'
        },
        {
            name: 'image',
            title: 'Profile Photo',
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
            name: 'instagramUrl',
            title: 'Instagram URL',
            type: 'url'
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'text',
            rows: 3
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
            subtitle: 'role',
            media: 'image'
        }
    }
};
