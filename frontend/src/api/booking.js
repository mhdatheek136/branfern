/**
 * API Route for Brand Review Booking Submissions
 * 
 * This file handles form submissions from the Brand Review page
 * and creates booking documents in Sanity CMS.
 * 
 * Note: For Create React App, this won't work as a native API route.
 * You'll need to either:
 * 1. Use a serverless function (Vercel, Netlify, etc.)
 * 2. Set up a simple Express server
 * 3. Submit directly to Sanity from the client (less secure)
 * 
 * This file is provided as a reference for the server-side implementation.
 */

import { createClient } from '@sanity/client';

// Server-side Sanity client with write permissions
const sanityClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
    token: import.meta.env.SANITY_WRITE_TOKEN,
    useCdn: false,
});

/**
 * Create a booking document in Sanity
 * @param {Object} bookingData - Form data from the Brand Review page
 * @returns {Promise<Object>} - Created document
 */
export async function createBooking(bookingData) {
    const doc = {
        _type: 'brandReviewBooking',
        firstName: bookingData.firstName,
        lastName: bookingData.lastName,
        email: bookingData.email,
        phone: bookingData.phone,
        company: bookingData.company,
        instagram: bookingData.instagram,
        service: bookingData.service,
        budget: bookingData.budget,
        hearAbout: bookingData.hearAbout,
        referrer: bookingData.referrer,
        date: bookingData.date,
        timeSlot: bookingData.timeSlot,
        notes: bookingData.notes,
        submittedAt: new Date().toISOString(),
        status: 'pending',
    };

    return sanityClient.create(doc);
}

/**
 * Express/Serverless handler for POST requests
 * Uncomment and adapt based on your deployment platform
 */

// For Express.js:
// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }
//
//   try {
//     const booking = await createBooking(req.body);
//     return res.status(201).json({ success: true, id: booking._id });
//   } catch (error) {
//     console.error('Error creating booking:', error);
//     return res.status(500).json({ error: 'Failed to create booking' });
//   }
// }

// For Vercel/Next.js API routes:
// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const booking = await createBooking(req.body);
//       res.status(201).json({ success: true, id: booking._id });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to create booking' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }
