export default {
    name: 'pageBrandReview',
    title: 'Page: Brand Review',
    type: 'document',
    __experimental_actions: ['update', 'publish'], // Singleton
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'form_steps', title: 'Form Steps & Labels' },
        { name: 'form_placeholders', title: 'Form Placeholders' },
        { name: 'form_buttons', title: 'Form Buttons & Messages' },
        { name: 'seo', title: 'SEO' }
    ],
    fields: [
        // Hero
        {
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            initialValue: 'Brand Review',
            description: 'Main page heading.',
            group: 'hero'
        },
        {
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'text',
            rows: 6,
            description: 'Variable {duration} will be replaced by the session duration number (e.g. 120).',
            initialValue: "Our Brand Review is a {duration}-minute strategic session where we step back, assess, and understand your brand as a whole, its story, structure, presence, and potential. Rather than surface-level feedback, we offer considered direction rooted in design thinking, systems, and long-term brand health.",
            group: 'hero'
        },
        {
            name: 'sessionDuration',
            title: 'Session Duration (minutes)',
            type: 'number',
            description: 'Duration in minutes. Used to calculate {duration} in text.',
            initialValue: 120,
            group: 'hero'
        },
        {
            name: 'unitText',
            title: 'Time Unit Text',
            type: 'string',
            initialValue: 'MINUTES',
            description: 'Label below the duration number (e.g., "MINUTES").',
            group: 'hero'
        },

        // Form Labels
        { name: 'stepsTitle', title: 'Steps Title Template', type: 'string', initialValue: 'Step {current} of {total}', description: 'Progress text. {current} and {total} are placeholders.', group: 'form_steps' },
        { name: 'labelService', title: 'Label: Select Service', type: 'string', initialValue: 'Select Service', description: 'Label for Service dropdown', group: 'form_steps' },
        { name: 'labelBudget', title: 'Label: Budget', type: 'string', initialValue: "What's Your Budget", description: 'Label for Budget dropdown', group: 'form_steps' },
        { name: 'labelHearAbout', title: 'Label: Hear About', type: 'string', initialValue: 'How Did You Hear Us', description: 'Label for Source dropdown', group: 'form_steps' },
        { name: 'labelReferrer', title: 'Label: Referrer', type: 'string', initialValue: 'Who Referred Us', description: 'Label for Referrer dropdown', group: 'form_steps' },
        { name: 'labelFirstName', title: 'Label: First Name', type: 'string', initialValue: 'First Name', description: 'Label for first name input', group: 'form_steps' },
        { name: 'labelLastName', title: 'Label: Last Name', type: 'string', initialValue: 'Last Name', description: 'Label for last name input', group: 'form_steps' },
        { name: 'labelEmail', title: 'Label: Email', type: 'string', initialValue: 'Email', description: 'Label for email input', group: 'form_steps' },
        { name: 'labelPhone', title: 'Label: Phone', type: 'string', initialValue: 'Phone', description: 'Label for phone input', group: 'form_steps' },
        { name: 'labelCompany', title: 'Label: Company Name', type: 'string', initialValue: 'Company Name', description: 'Label for company input', group: 'form_steps' },
        { name: 'labelInstagram', title: 'Label: Instagram ID', type: 'string', initialValue: 'Instagram ID', description: 'Label for Instagram input', group: 'form_steps' },
        { name: 'labelDate', title: 'Label: Reserve a Date', type: 'string', initialValue: 'Reserve a Date', description: 'Label for calendar section', group: 'form_steps' },
        { name: 'labelNotes', title: 'Label: Extra Notes', type: 'string', initialValue: 'Anything you like us to know', description: 'Label for notes textarea', group: 'form_steps' },

        // SEO
        {
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            description: 'Browser tab title.',
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
        },

        // Form Placeholders
        { name: 'placeholderService', title: 'Placeholder: Service', type: 'string', initialValue: 'Choose the service from dropdown', group: 'form_placeholders' },
        { name: 'placeholderBudget', title: 'Placeholder: Budget', type: 'string', initialValue: 'Choose your budget from dropdown', group: 'form_placeholders' },
        { name: 'placeholderHearAbout', title: 'Placeholder: Hear About', type: 'string', initialValue: 'Choose from dropdown', group: 'form_placeholders' },
        { name: 'placeholderReferrer', title: 'Placeholder: Referrer', type: 'string', initialValue: 'Choose the person from dropdown', group: 'form_placeholders' },
        { name: 'placeholderFirstName', title: 'Placeholder: First Name', type: 'string', initialValue: 'Type your first name here', group: 'form_placeholders' },
        { name: 'placeholderLastName', title: 'Placeholder: Last Name', type: 'string', initialValue: 'Type your last name here', group: 'form_placeholders' },
        { name: 'placeholderEmail', title: 'Placeholder: Email', type: 'string', initialValue: 'Type your email here', group: 'form_placeholders' },
        { name: 'placeholderPhone', title: 'Placeholder: Phone', type: 'string', initialValue: 'Type your phone number here', group: 'form_placeholders' },
        { name: 'placeholderCompany', title: 'Placeholder: Company', type: 'string', initialValue: 'Type your company name here', group: 'form_placeholders' },
        { name: 'placeholderInstagram', title: 'Placeholder: Instagram', type: 'string', initialValue: 'Type your Instagram username', group: 'form_placeholders' },
        { name: 'placeholderNotes', title: 'Placeholder: Notes', type: 'string', initialValue: 'Type here', group: 'form_placeholders' },

        // Buttons & Messages
        { name: 'btnNext', title: 'Button: Next', type: 'string', initialValue: 'Next', group: 'form_buttons' },
        { name: 'btnBack', title: 'Button: Back', type: 'string', initialValue: 'Back', group: 'form_buttons' },
        { name: 'btnSubmit', title: 'Button: Submit', type: 'string', initialValue: 'Submit', group: 'form_buttons' },
        { name: 'btnSubmitting', title: 'Button: Submitting State', type: 'string', initialValue: 'Submitting...', group: 'form_buttons' },
        { name: 'successMessage', title: 'Success Alert Message', type: 'text', rows: 2, initialValue: 'Thank you for booking a Brand Review session. We will contact you shortly.', group: 'form_buttons' }
    ]
}
