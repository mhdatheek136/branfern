/**
 * Sanity Client Configuration
 * 
 * This file exports the Sanity client for fetching content
 * and an image URL builder for optimized image delivery.
 */

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Hardcoded config for reliability (env vars can be flaky in Vite)
const config = {
  projectId: 'u22yvmqh',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
};

console.log('[Sanity] Initializing client with config:', config);

// Sanity client for read operations (public, can be used client-side)
export const sanityClient = createClient(config);

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

/**
 * Generate optimized image URL from Sanity image reference
 * @param {Object} source - Sanity image object with asset reference
 * @returns {Object} - Image URL builder instance for chaining
 * 
 * @example
 * // Basic usage
 * urlFor(project.mainImage).url()
 * 
 * // With transformations
 * urlFor(project.mainImage).width(800).height(600).fit('crop').url()
 */
export function urlFor(source) {
  if (!source) return null;
  return builder.image(source);
}

// ============================================
// GROQ Queries for all content types
// ============================================

/**
 * Fetch all projects for the Work page grid
 */
export async function getAllProjects() {
  const query = `*[_type == "project"] | order(order asc, _createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    category,
    tags,
    mainImage,
    shortDescription
  }`;
  console.log('[Sanity] Fetching all projects...');
  const result = await sanityClient.fetch(query);
  console.log('[Sanity] getAllProjects result:', result);
  return result;
}

/**
 * Fetch recent projects for homepage (limit 6)
 */
export async function getRecentProjects(limit = 6) {
  const query = `*[_type == "project"] | order(_createdAt desc)[0...${limit}] {
    _id,
    name,
    "slug": slug.current,
    category,
    tags,
    mainImage
  }`;
  console.log('[Sanity] Fetching recent projects...');
  const result = await sanityClient.fetch(query);
  console.log('[Sanity] getRecentProjects result:', result);
  return result;
}

/**
 * Fetch a single project by slug with full details
 */
export async function getProjectBySlug(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    category,
    tags,
    mainImage,
    shortDescription,
    fullDescription,
    date,
    location,
    seoTitle,
    seoDescription,
    seoImage,
    gallery[] {
      asset,
      alt,
      caption
    },
    contentSections[] {
      _key,
      sectionType,
      heading,
      content,
      image {
        asset,
        alt,
        caption
      },
      images[] {
        asset,
        alt,
        caption
      }
    },
    "prevProject": *[_type == "project" && _createdAt < ^._createdAt] | order(_createdAt desc)[0] {
      name,
      "slug": slug.current,
      mainImage
    },
    "nextProject": *[_type == "project" && _createdAt > ^._createdAt] | order(_createdAt asc)[0] {
      name,
      "slug": slug.current,
      mainImage
    }
  }`;
  return sanityClient.fetch(query, { slug });
}

/**
 * Fetch showreel slides for Hero component
 */
export async function getShowreelSlides() {
  const query = `*[_type == "showreelSlide"] | order(order asc) {
    _id,
    title,
    subtitle,
    image
  }`;
  console.log('[Sanity] Fetching showreel slides...');
  const result = await sanityClient.fetch(query);
  console.log('[Sanity] getShowreelSlides result:', result);
  return result;
}

/**
 * Fetch all team members
 */
export async function getTeamMembers() {
  const query = `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    image,
    instagramUrl
  }`;
  return sanityClient.fetch(query);
}

/**
 * Fetch all service pillars (Digital, Physical, Human)
 */
export async function getServices() {
  const query = `*[_type == "service"] | order(pillarNumber asc) {
    _id,
    pillarNumber,
    heading,
    description,
    image,
    cards[] {
      title,
      description
    }
  }`;
  return sanityClient.fetch(query);
}

/**
 * Fetch design categories for footer
 */
export async function getDesignCategories() {
  const query = `*[_type == "designCategory"] | order(order asc) {
    _id,
    name
  }`;
  return sanityClient.fetch(query);
}

/**
 * Fetch social media links
 */
export async function getSocialLinks() {
  const query = `*[_type == "socialLink"] | order(order asc) {
    _id,
    platform,
    url,
    iconName
  }`;
  return sanityClient.fetch(query);
}

/**
 * Fetch site settings (singleton)
 */
export async function getSiteSettings() {
  const query = `*[_type == "siteSettings"][0] {
    companyName,
    email,
    phone,
    location,
    timezone,
    heroTitle,
    heroSubtitle,
    heroBackgroundImage,
    heroImages,
    footerOverlayTitle,
    footerOverlaySubtitle,
    footerHoverPlaceholder,
    footerWorkingHeading,
    footerContactsHeading,
    footerLocationHeading,
    footerScrollTopText,
    navHomeLabel,
    navBrandReviewLabel,
    navAboutLabel,
    navWorkLabel,
    navContactLabel,
    seoDefaultTitle,
    seoDefaultDescription,
    seoDefaultImage
  }`;
  console.log('[Sanity] Fetching site settings...');
  const result = await sanityClient.fetch(query);
  console.log('[Sanity] getSiteSettings result:', result);
  return result;
}

/**
 * Fetch About Page Content
 */
export async function getPageAbout() {
  const query = `*[_type == "pageAbout"][0]`;
  return sanityClient.fetch(query);
}

/**
 * Fetch Contact Page Content
 */
export async function getPageContact() {
  const query = `*[_type == "pageContact"][0]`;
  return sanityClient.fetch(query);
}

/**
 * Fetch Work Page Content
 */
export async function getPageWork() {
  const query = `*[_type == "pageWork"][0]`;
  return sanityClient.fetch(query);
}

/**
 * Fetch Brand Review Page Content
 */
export async function getPageBrandReview() {
  const query = `*[_type == "pageBrandReview"][0]`;
  return sanityClient.fetch(query);
}

/**
 * Fetch form options for Brand Review page
 */
export async function getFormOptions() {
  const query = `*[_type == "formOptions"][0] {
    serviceOptions,
    budgetOptions,
    hearAboutOptions,
    referrerOptions,
    timeSlots,
    sessionDuration
  }`;
  return sanityClient.fetch(query);
}

/**
 * Fetch navigation links
 */
export async function getNavigationLinks() {
  const query = `*[_type == "navigationLink"] | order(order asc) {
    _id,
    label,
    path
  }`;
  return sanityClient.fetch(query);
}
/**
 * Sanity client for write operations (requires token)
 */
export const writeClient = createClient({
  ...config,
  token: import.meta.env.VITE_SANITY_WRITE_TOKEN,
  useCdn: false // Always disable CDN for writes
});

/**
 * Create a new brand review booking
 */
export async function createBooking(data) {
  if (!import.meta.env.VITE_SANITY_WRITE_TOKEN) {
    throw new Error('Missing VITE_SANITY_WRITE_TOKEN. Cannot submit form.');
  }

  const doc = {
    _type: 'brandReviewBooking',
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    company: data.company,
    instagram: data.instagram,
    service: data.service,
    budget: data.budget,
    hearAbout: data.hearAbout,
    referrer: data.referrer,
    date: data.date, // Format: YYYY-MM-DD
    timeSlot: data.timeSlot,
    notes: data.notes,
    submittedAt: new Date().toISOString(),
    status: 'pending'
  };

  console.log('[Sanity] Creating booking document...', doc);
  return writeClient.create(doc);
}
