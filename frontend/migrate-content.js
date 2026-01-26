
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'u22yvmqh',
    dataset: 'production',
    token: 'skYtBnYpu4ZBEx3TmCYutAwOowyaEolgJwTEcwy9jIzxTLS5rmgZtBGUUutiUsF0JFFsK8Rl2iPV7Qhv7u21at6iw8GWHPWklY1Tt1sOh9H0ZVdqbtONhZq7hMqjvhQyo1VnB4LzIKTP36WTotY4Ic5lm72ycPlgikcC4BQRfF3Sn6QWR4RM', // Auto-detected write token
    useCdn: false,
    apiVersion: '2024-01-01'
});

async function migrate() {
    console.log('Starting migration...');

    // 1. Fetch old settings
    const settings = await client.fetch('*[_type == "siteSettings"][0]');
    console.log('Found settings:', settings ? 'yes' : 'no');

    if (!settings) {
        console.error('No settings found to migrate.');
        return;
    }

    const transaction = client.transaction();

    // 2. Page About
    console.log('Preparing Page: About Us...');
    transaction.createOrReplace({
        _id: 'pageAbout',
        _type: 'pageAbout',
        heroTitle: settings.aboutHeroTitle || 'We design the systems that power your brand.',
        philosophy: settings.philosophy, // If undefined, will be omitted (desired)
        philosophyHeading: settings.philosophyHeading || 'Brand as Action',
        teamHeading: settings.teamHeading || 'The Branfern Collective',
        teamDescription: settings.teamDescription,
        // defaults
        heroEyebrow: 'About Branfern',
        heroDisplayText: 'ABOUT US',
        showreelPlaceholder: 'BRANFERN SHOWREEL',
        philosophyEyebrow: 'Our Philosophy',
        teamEyebrow: 'The Team',
        marqueeText: 'READY TO MOVE WITH US • ',
        ctaButtonText: 'Contact Us',
        // Preserve philosophy description default if missing
        philosophyDescription: settings.philosophy || "We believe a brand is not what you say, but what you do. It's the cumulative experience of every interaction, every product, every conversation. Our work is rooted in systems thinking: building frameworks that scale, evolve, and remain coherent across digital, physical, and human touchpoints."
    });

    // 3. Page Contact
    console.log('Preparing Page: Contact Us...');
    transaction.createOrReplace({
        _id: 'pageContact',
        _type: 'pageContact',
        heroDescription: settings.contactDescription || "Whether you're exploring a rebrand, seeking strategic direction, or simply curious about working together, we're here to listen. Reach out and let's start the conversation.",
        // defaults
        heroTitle: 'Contact Us',
        socialHeading: 'Follow Us',
        marqueeText: 'Ready to move with us • ',
        ctaButtonText: 'Get in Touch'
    });

    // 4. Page Work
    console.log('Preparing Page: Work...');
    transaction.createOrReplace({
        _id: 'pageWork',
        _type: 'pageWork',
        heroDescription: settings.workDescription || "Branfern's ambition is to operate at the intersection of design, systems, and culture. We aim to build holistic brand ecosystems where strategy, identity, and experience work as one. Our work is not to follow the industry's pace, but to define our own: thoughtful, rigorous, and sustainable.",
        // defaults
        heroTitle: 'Our Work',
        heroDisplayText: 'WORK',
        projectsSectionTitle: 'RECENT PROJECTS',
        noProjectsText: 'No projects available yet.'
    });

    // 5. Page Brand Review
    console.log('Preparing Page: Brand Review...');
    transaction.createOrReplace({
        _id: 'pageBrandReview',
        _type: 'pageBrandReview',
        heroTitle: 'Brand Review',
        heroDescription: settings.brandReviewDescription || "Our Brand Review is a {duration}-minute strategic session where we step back, assess, and understand your brand as a whole, its story, structure, presence, and potential. Rather than surface-level feedback, we offer considered direction rooted in design thinking, systems, and long-term brand health.",
        sessionDuration: settings.brandReviewDuration || 120,
        unitText: 'MINUTES',
        stepsTitle: 'Step {current} of {total}',

        // Form Labels
        labelService: 'Select Service',
        labelBudget: "What's Your Budget",
        labelHearAbout: 'How Did You Hear Us',
        labelReferrer: 'Who Referred Us',
        labelFirstName: 'First Name',
        labelLastName: 'Last Name',
        labelEmail: 'Email',
        labelPhone: 'Phone',
        labelCompany: 'Company Name',
        labelInstagram: 'Instagram ID',
        labelDate: 'Reserve a Date',
        labelNotes: 'Anything you like us to know',

        // Form Placeholders
        placeholderService: 'Choose the service from dropdown',
        placeholderBudget: 'Choose your budget from dropdown',
        placeholderHearAbout: 'Choose from dropdown',
        placeholderReferrer: 'Choose the person from dropdown',
        placeholderFirstName: 'Type your first name here',
        placeholderLastName: 'Type your last name here',
        placeholderEmail: 'Type your email here',
        placeholderPhone: 'Type your phone number here',
        placeholderCompany: 'Type your company name here',
        placeholderInstagram: 'Type your Instagram username',
        placeholderNotes: 'Type here',

        // Buttons
        btnNext: 'Next',
        btnBack: 'Back',
        btnSubmit: 'Submit',
        btnSubmitting: 'Submitting...',
        successMessage: 'Thank you for booking a Brand Review session. We will contact you shortly.'
    });

    // 6. Update Site Settings with Footer/Nav defaults
    console.log('Updating Site Settings defaults...');
    transaction.patch(settings._id, p => p.setIfMissing({
        footerOverlayTitle: 'We Design',
        footerOverlaySubtitle: 'Everything',
        footerHoverPlaceholder: 'Hover over a category',
        footerWorkingHeading: 'Get in Touch',
        footerContactsHeading: 'Contact Us',
        footerLocationHeading: 'Location',
        footerScrollTopText: 'Scroll Up',
        navHomeLabel: 'HOME',
        navBrandReviewLabel: 'BRAND REVIEW',
        navAboutLabel: 'ABOUT',
        navWorkLabel: 'WORK',
        navContactLabel: 'CONTACT'
    }));

    // Clean up old fields (already done, but safe to keep)
    transaction.patch(settings._id, p => p.unset([
        'aboutHeroTitle', 'philosophy', 'philosophyHeading',
        'teamHeading', 'teamDescription', 'contactDescription',
        'workDescription', 'brandReviewDescription', 'brandReviewDuration'
    ]));

    try {
        const res = await transaction.commit();
        console.log('Migration successful!', res.transactionId);
    } catch (err) {
        console.error('Migration failed:', err.message);
    }
}

migrate();
