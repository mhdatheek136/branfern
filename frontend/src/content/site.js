const image = (src, alt, caption = "") => ({ src, alt, caption });

export const siteSettings = {
  companyName: "Paper Hoof",
  email: "hello@branfern.com",
  location: "Mawanella, Sri Lanka",
  timezone: "Asia/Colombo (GMT +5:30)",
  seoDefaultTitle: "Paper Hoof",
  seoDefaultDescription: "Paper Hoof builds identity systems, campaign visuals, and digital presence with editorial clarity.",
  seoDefaultImage: image(
    "/content/hero/slide-brand.svg",
    "Paper Hoof placeholder hero artwork",
  ),
  footerOverlayTitle: "We Design",
  footerOverlaySubtitle: "Everything",
  footerHoverPlaceholder: "Preview a category",
  footerWorkingHeading: "Get in Touch",
  footerContactsHeading: "Contact Us",
  footerLocationHeading: "Location",
  footerScrollTopText: "Scroll Up",
  navHomeLabel: "HOME",
  navBrandReviewLabel: "BRAND REVIEW",
  navAboutLabel: "ABOUT",
  navWorkLabel: "WORK",
  navContactLabel: "CONTACT",
  brandReviewDuration: 120,
};

export const socialLinks = [
  {
    _id: "instagram",
    platform: "Instagram",
    iconName: "Instagram",
    url: "https://instagram.com/branfern",
  },
  {
    _id: "whatsapp",
    platform: "WhatsApp",
    iconName: "MessageCircle",
    url: "https://wa.me/94770000000",
  },
  {
    _id: "linkedin",
    platform: "LinkedIn",
    iconName: "Linkedin",
    url: "https://linkedin.com/company/branfern",
  },
];

export const designCategories = [
  { _id: "branding", name: "BRANDING" },
  { _id: "identity", name: "IDENTITY" },
  { _id: "food-chain", name: "FOOD CHAIN" },
  { _id: "institution", name: "INSTITUTION" },
  { _id: "system", name: "SYSTEM" },
  { _id: "sports", name: "SPORTS" },
  { _id: "social-media", name: "SOCIAL MEDIA" },
  { _id: "vehicle", name: "VEHICLE" },
  { _id: "cinema", name: "CINEMA" },
  { _id: "automotive", name: "AUTOMOTIVE" },
  { _id: "digital-presence", name: "DIGITAL PRESENCE" },
  { _id: "uiux", name: "UI/UX" },
];

export const showreelSlides = [
  {
    _id: "slide-burrowed",
    title: "BURROWED",
    subtitle: "a literary magazine",
    image: image("/content/hero/slide-brand.svg", "Burrowed placeholder composition"),
  },
  {
    _id: "slide-burger-hot",
    title: "BURGER HOT",
    subtitle: "identity, packaging, and launch rollout",
    image: image("/content/hero/slide-motion.svg", "Burger Hot placeholder composition"),
  },
  {
    _id: "slide-paper-hoof",
    title: "PAPER HOOF",
    subtitle: "design systems for brands that need traction and clarity",
    image: image("/content/hero/slide-systems.svg", "Paper Hoof placeholder composition"),
  },
];

export const formOptions = {
  serviceOptions: [
    "Identity Direction",
    "Brand Review",
    "Digital Presence",
    "Campaign Rollout",
    "Full Transformation",
    "Other",
  ],
  budgetOptions: [
    "Under $2,000",
    "$2,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000+",
  ],
  hearAboutOptions: [
    "Instagram",
    "Referral",
    "Previous Client",
    "LinkedIn",
    "Google Search",
    "Other",
  ],
  referrerOptions: [
    "Friend or Colleague",
    "Client",
    "Partner",
    "Social Media",
    "Other",
  ],
  timeSlots: [
    "7:30 PM - 8:30 PM",
    "8:30 PM - 9:30 PM",
    "9:30 PM - 10:30 PM",
  ],
  sessionDuration: 120,
};
