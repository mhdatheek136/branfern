export default {
    name: 'formOptions',
    title: 'Brand Review Form Options',
    type: 'document',
    __experimental_actions: ['update', 'publish'], // Singleton
    fields: [
        {
            name: 'serviceOptions',
            title: 'Service Options',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: [
                'Brand Strategy',
                'Visual Identity',
                'Digital Presence',
                'Full Rebrand',
                'Brand Audit',
                'Other'
            ]
        },
        {
            name: 'budgetOptions',
            title: 'Budget Options',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: [
                'Under $5,000',
                '$5,000 - $10,000',
                '$10,000 - $25,000',
                '$25,000 - $50,000',
                '$50,000+'
            ]
        },
        {
            name: 'hearAboutOptions',
            title: 'Hear About Options',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: [
                'Google Search',
                'Social Media',
                'Referral',
                'Previous Client',
                'Industry Event',
                'Other'
            ]
        },
        {
            name: 'referrerOptions',
            title: 'Referrer Options',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: [
                'Direct Search',
                'Friend/Colleague',
                'Client',
                'Partner Agency',
                'Other'
            ]
        },
        {
            name: 'timeSlots',
            title: 'Time Slots',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: [
                '7:30 PM - 8:30 PM',
                '8:30 PM - 9:30 PM',
                '9:30 PM - 10:30 PM'
            ]
        }
    ]
}
