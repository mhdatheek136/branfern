/**
 * Sanity Schema Index
 * 
 * Export all schemas for use in Sanity Studio
 */

import project from './project';
import teamMember from './teamMember';
import service from './service';
import showreelSlide from './showreelSlide';
import siteSettings from './siteSettings';
import socialLink from './socialLink';
import designCategory from './designCategory';
import brandReviewBooking from './brandReviewBooking';
import formOptions from './formOptions';
import pageAbout from './pageAbout';
import pageContact from './pageContact';
import pageWork from './pageWork';
import pageBrandReview from './pageBrandReview';

export const schemaTypes = [
    // Documents
    project,
    teamMember,
    service,
    showreelSlide,
    socialLink,
    designCategory,
    brandReviewBooking,

    // Pages
    pageAbout,
    pageContact,
    pageWork,
    pageBrandReview,

    // Singletons
    siteSettings,
    formOptions,
];
