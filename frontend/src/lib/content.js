import { aboutPage, brandReviewPage, contactPage, workPage } from "../content/pages";
import { projects } from "../content/projects";
import { services } from "../content/services";
import {
  designCategories,
  formOptions,
  showreelSlides,
  siteSettings,
  socialLinks,
} from "../content/site";
import { teamMembers } from "../content/team";

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function sortProjects(items) {
  return [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

function navProject(project) {
  if (!project) {
    return null;
  }

  return {
    slug: project.slug,
    name: project.name,
    mainImage: project.mainImage,
  };
}

function resolveImageSource(image) {
  if (!image) {
    return null;
  }

  if (typeof image === "string") {
    return image;
  }

  return image.src || image.url || null;
}

export function urlFor(image) {
  const src = resolveImageSource(image);
  const builder = {
    width() {
      return builder;
    },
    height() {
      return builder;
    },
    fit() {
      return builder;
    },
    url() {
      return src;
    },
  };

  return builder;
}

export async function getAllProjects() {
  return clone(sortProjects(projects));
}

export async function getRecentProjects(limit = 6) {
  return clone(sortProjects(projects).slice(0, limit));
}

export async function getProjectBySlug(slug) {
  const orderedProjects = sortProjects(projects);
  const index = orderedProjects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return null;
  }

  const project = orderedProjects[index];

  return clone({
    ...project,
    prevProject: navProject(orderedProjects[index - 1]),
    nextProject: navProject(orderedProjects[index + 1]),
  });
}

export async function getShowreelSlides() {
  return clone(showreelSlides);
}

export async function getTeamMembers() {
  return clone(teamMembers);
}

export async function getServices() {
  return clone(services);
}

export async function getDesignCategories() {
  return clone(designCategories);
}

export async function getSocialLinks() {
  return clone(socialLinks);
}

export async function getSiteSettings() {
  return clone(siteSettings);
}

export async function getPageAbout() {
  return clone(aboutPage);
}

export async function getPageContact() {
  return clone(contactPage);
}

export async function getPageWork() {
  return clone(workPage);
}

export async function getPageBrandReview() {
  return clone(brandReviewPage);
}

export async function getFormOptions() {
  return clone(formOptions);
}

export async function createBooking(data) {
  if (typeof window === "undefined") {
    throw new Error("Brand review submissions are only available in the browser.");
  }

  const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ").trim();
  const subjectSource = data.company || fullName || "New enquiry";
  const subject = `Brand Review Request - ${subjectSource}`;
  const bodyLines = [
    "Brand Review Request",
    "",
    `Service: ${data.service || "-"}`,
    `Budget: ${data.budget || "-"}`,
    `How they heard about Branfern: ${data.hearAbout || "-"}`,
    `Referrer: ${data.referrer || "-"}`,
    "",
    `First name: ${data.firstName || "-"}`,
    `Last name: ${data.lastName || "-"}`,
    `Email: ${data.email || "-"}`,
    `Phone: ${data.phone || "-"}`,
    `Company: ${data.company || "-"}`,
    `Instagram: ${data.instagram || "-"}`,
    "",
    `Preferred date: ${data.date || "-"}`,
    `Preferred time slot: ${data.timeSlot || "-"}`,
    "",
    "Notes:",
    data.notes || "-",
  ];

  const href = `mailto:${siteSettings.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    bodyLines.join("\n"),
  )}`;

  window.location.href = href;

  return {
    mode: "mailto",
    recipient: siteSettings.email,
  };
}
