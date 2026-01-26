/**
 * Server-side Sanity Client
 * 
 * This client has write permissions and should ONLY be used in:
 * - API routes
 * - Server-side functions
 * 
 * NEVER import this file in client-side components!
 */

import { createClient } from '@sanity/client';

// Server-side client with write token for mutations
export const sanityServerClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
    token: import.meta.env.SANITY_WRITE_TOKEN,
    useCdn: false, // Don't use CDN for write operations
});

/**
 * Create a brand review booking in Sanity
 * @param {Object} bookingData - Form data from Brand Review page
 * @returns {Promise<Object>} - Created document
 */
export async function createBooking(bookingData) {
    const doc = {
        _type: 'brandReviewBooking',
        ...bookingData,
        submittedAt: new Date().toISOString(),
        status: 'pending',
    };

    return sanityServerClient.create(doc);
}
