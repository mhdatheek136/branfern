/**
 * Brand Review Booking Schema for Sanity CMS
 * 
 * Stores form submissions from the Brand Review page
 */

export default {
    name: 'brandReviewBooking',
    title: 'Brand Review Booking',
    type: 'document',
    fields: [
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string'
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company Name',
            type: 'string'
        },
        {
            name: 'instagram',
            title: 'Instagram ID',
            type: 'string'
        },
        {
            name: 'service',
            title: 'Selected Service',
            type: 'string'
        },
        {
            name: 'budget',
            title: 'Budget Range',
            type: 'string'
        },
        {
            name: 'hearAbout',
            title: 'How They Heard About Us',
            type: 'string'
        },
        {
            name: 'referrer',
            title: 'Referrer',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Booking Date',
            type: 'date'
        },
        {
            name: 'timeSlot',
            title: 'Time Slot',
            type: 'string'
        },
        {
            name: 'notes',
            title: 'Additional Notes',
            type: 'text'
        },
        {
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime'
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Confirmed', value: 'confirmed' },
                    { title: 'Completed', value: 'completed' },
                    { title: 'Cancelled', value: 'cancelled' }
                ]
            },
            initialValue: 'pending'
        }
    ],
    preview: {
        select: {
            firstName: 'firstName',
            lastName: 'lastName',
            company: 'company',
            date: 'date',
            status: 'status'
        },
        prepare({ firstName, lastName, company, date, status }) {
            return {
                title: `${firstName} ${lastName}${company ? ` (${company})` : ''}`,
                subtitle: `${date || 'No date'} - ${status}`
            };
        }
    },
    orderings: [
        {
            title: 'Submission Date (Newest)',
            name: 'submittedAtDesc',
            by: [{ field: 'submittedAt', direction: 'desc' }]
        }
    ]
};
