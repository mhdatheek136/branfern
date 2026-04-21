const image = (src, alt, caption = "") => ({ src, alt, caption });

export const siteSettings = {
  companyName: "Branfern",
  email: "hello@branfern.com",
  location: "Mawanella, Sri Lanka",
  timezone: "Asia/Colombo (GMT +5:30)",
  seoDefaultTitle: "Branfern",
  seoDefaultDescription: "We design the systems that power your brand.",
  seoDefaultImage: image(
    "/content/hero/slide-brand.svg",
    "Branfern brand system hero artwork",
  ),
  footerOverlayTitle: "We Design",
  footerOverlaySubtitle: "Everything",
  footerHoverPlaceholder: "Hover over a category",
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
    _id: "linkedin",
    platform: "LinkedIn",
    iconName: "Linkedin",
    url: "https://linkedin.com/company/branfern",
  },
  {
    _id: "whatsapp",
    platform: "WhatsApp",
    iconName: "MessageCircle",
    url: "https://wa.me/94770000000",
  },
];

export const designCategories = [
  { _id: "branding", name: "BRANDING" },
  { _id: "identity", name: "IDENTITY" },
  { _id: "retail", name: "RETAIL" },
  { _id: "hospitality", name: "HOSPITALITY" },
  { _id: "systems", name: "SYSTEMS" },
  { _id: "sports", name: "SPORTS" },
  { _id: "social", name: "SOCIAL MEDIA" },
  { _id: "vehicle", name: "VEHICLE" },
  { _id: "digital", name: "DIGITAL PRESENCE" },
  { _id: "uiux", name: "UI/UX" },
];

export const showreelSlides = [
  {
    _id: "slide-brand",
    title: "BRANFERN",
    subtitle: "Design systems for brands that need traction and clarity.",
    image: image("/content/hero/slide-brand.svg", "Branfern hero artwork"),
  },
  {
    _id: "slide-motion",
    title: "IDENTITY IN MOTION",
    subtitle: "Built to work across digital, physical, and human touchpoints.",
    image: image("/content/hero/slide-motion.svg", "Motion identity artwork"),
  },
  {
    _id: "slide-systems",
    title: "SYSTEMS THAT SCALE",
    subtitle: "Strategy, visuals, and rollout assets from one coherent system.",
    image: image("/content/hero/slide-systems.svg", "Systems artwork"),
  },
];

export const formOptions = {
  serviceOptions: [
    "Brand Strategy",
    "Visual Identity",
    "Digital Presence",
    "Full Rebrand",
    "Brand Audit",
    "Other",
  ],
  budgetOptions: [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
  ],
  hearAboutOptions: [
    "Google Search",
    "Social Media",
    "Referral",
    "Previous Client",
    "Industry Event",
    "Other",
  ],
  referrerOptions: [
    "Direct Search",
    "Friend or Colleague",
    "Client",
    "Partner Agency",
    "Other",
  ],
  timeSlots: [
    "7:30 PM - 8:30 PM",
    "8:30 PM - 9:30 PM",
    "9:30 PM - 10:30 PM",
  ],
  sessionDuration: 120,
};
