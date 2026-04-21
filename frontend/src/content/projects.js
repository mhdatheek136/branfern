const image = (src, alt, caption = "") => ({ src, alt, caption });
const paragraph = (text) => ({ type: "paragraph", text });
const quote = (text) => ({ type: "quote", text });

export const projects = [
  {
    _id: "project-northstar",
    order: 1,
    slug: "northstar-grocer",
    name: "Northstar Grocer",
    category: "Retail Identity",
    tags: ["Branding", "Retail", "Packaging"],
    date: "2026-02-04",
    location: "Colombo, Sri Lanka",
    shortDescription:
      "A modular retail identity for a premium neighborhood grocer with a growing private-label line.",
    fullDescription: [
      paragraph(
        "Northstar needed a system that felt premium without becoming distant. The goal was to make the store, packaging, and digital touchpoints feel part of one family.",
      ),
      paragraph(
        "We built a shelf-first identity with clear hierarchy, bold color zoning, and a packaging rhythm that could scale product by product.",
      ),
      quote(
        "The strongest retail brands do not shout. They help customers orient themselves quickly and trust what they pick up.",
      ),
    ],
    mainImage: image("/content/projects/project-1.svg", "Northstar Grocer hero artwork"),
    seoTitle: "Northstar Grocer | Branfern",
    seoDescription:
      "Retail identity and packaging system for Northstar Grocer by Branfern.",
    seoImage: image("/content/projects/project-1.svg", "Northstar Grocer SEO artwork"),
    gallery: [
      image("/content/projects/project-1.svg", "Northstar shelf system", "Storefront system study"),
      image("/content/projects/project-2.svg", "Northstar packaging", "Private label packaging samples"),
    ],
    contentSections: [
      {
        id: "challenge",
        sectionType: "text",
        heading: "The Challenge",
        content: [
          paragraph(
            "The previous identity looked polished in isolation but broke apart in-store. Signage, promotions, and packaging felt like separate brands.",
          ),
        ],
      },
      {
        id: "approach",
        sectionType: "textImage",
        heading: "Our Approach",
        content: [
          paragraph(
            "We designed a color-coded category system, a disciplined typographic scale, and repeatable label logic so every application felt familiar.",
          ),
        ],
        image: image("/content/projects/project-3.svg", "Northstar approach board"),
      },
      {
        id: "rollout",
        sectionType: "gallery",
        heading: "Rollout Highlights",
        images: [
          image("/content/projects/project-1.svg", "Northstar rollout one"),
          image("/content/projects/project-2.svg", "Northstar rollout two"),
          image("/content/projects/project-3.svg", "Northstar rollout three"),
        ],
      },
    ],
  },
  {
    _id: "project-harbor",
    order: 2,
    slug: "harbor-athletics",
    name: "Harbor Athletics",
    category: "Sports Brand",
    tags: ["Sports", "Identity", "Digital Presence"],
    date: "2026-01-12",
    location: "Dubai, UAE",
    shortDescription:
      "A sharper identity and launch kit for a training studio built around performance and community.",
    fullDescription: [
      paragraph(
        "Harbor Athletics wanted to look serious enough for athletes and open enough for everyday members.",
      ),
      paragraph(
        "We built a system around pace, repetition, and impact so the brand could move from signage to social without losing tension.",
      ),
    ],
    mainImage: image("/content/projects/project-2.svg", "Harbor Athletics hero artwork"),
    seoTitle: "Harbor Athletics | Branfern",
    seoDescription:
      "Sports identity and launch system for Harbor Athletics by Branfern.",
    seoImage: image("/content/projects/project-2.svg", "Harbor Athletics SEO artwork"),
    gallery: [image("/content/projects/project-2.svg", "Harbor Athletics campaign wall")],
    contentSections: [
      {
        id: "system",
        sectionType: "textImage",
        heading: "System Language",
        content: [
          paragraph(
            "The identity uses hard contrast, disciplined spacing, and a restrained color set that works across apparel, social cuts, and environmental graphics.",
          ),
        ],
        image: image("/content/projects/project-1.svg", "Harbor Athletics motion frames"),
      },
    ],
  },
  {
    _id: "project-kindred",
    order: 3,
    slug: "kindred-clinic",
    name: "Kindred Clinic",
    category: "Healthcare Rebrand",
    tags: ["Identity", "Systems", "Digital Presence"],
    date: "2025-12-03",
    location: "Kandy, Sri Lanka",
    shortDescription:
      "A calm, credible identity for a growing clinic balancing trust, warmth, and operational clarity.",
    fullDescription: [
      paragraph(
        "The clinic had strong word of mouth but an inconsistent public face. We simplified the message, refined the language, and built a usable visual system for staff.",
      ),
    ],
    mainImage: image("/content/projects/project-3.svg", "Kindred Clinic hero artwork"),
    seoTitle: "Kindred Clinic | Branfern",
    seoDescription:
      "Healthcare brand identity and patient-facing touchpoint system for Kindred Clinic.",
    seoImage: image("/content/projects/project-3.svg", "Kindred Clinic SEO artwork"),
    gallery: [image("/content/projects/project-3.svg", "Kindred Clinic patient guide")],
    contentSections: [
      {
        id: "voice",
        sectionType: "text",
        heading: "Voice and Clarity",
        content: [
          paragraph(
            "We translated medical expertise into a warmer, clearer communication system that felt human without losing authority.",
          ),
        ],
      },
    ],
  },
  {
    _id: "project-cedar",
    order: 4,
    slug: "cedar-house",
    name: "Cedar House",
    category: "Hospitality Identity",
    tags: ["Hospitality", "Branding", "Social Media"],
    date: "2025-10-18",
    location: "Ella, Sri Lanka",
    shortDescription:
      "A boutique hospitality brand built around quiet luxury, local texture, and editorial storytelling.",
    fullDescription: [
      paragraph(
        "Cedar House needed a quieter tone than the category norm. We moved away from generic luxury cues and built a more tactile, editorial identity.",
      ),
    ],
    mainImage: image("/content/projects/project-1.svg", "Cedar House hero artwork"),
    seoTitle: "Cedar House | Branfern",
    seoDescription:
      "Hospitality branding and digital storytelling system for Cedar House.",
    seoImage: image("/content/projects/project-1.svg", "Cedar House SEO artwork"),
    gallery: [image("/content/projects/project-2.svg", "Cedar House social rollout")],
    contentSections: [
      {
        id: "experience",
        sectionType: "textImage",
        heading: "Experience System",
        content: [
          paragraph(
            "We aligned menus, room collateral, and social templates so every guest touchpoint reflected the same quiet confidence.",
          ),
        ],
        image: image("/content/projects/project-2.svg", "Cedar House collateral"),
      },
    ],
  },
  {
    _id: "project-atlas",
    order: 5,
    slug: "atlas-auto",
    name: "Atlas Auto",
    category: "Automotive Campaign",
    tags: ["Vehicle", "Campaign", "Digital Presence"],
    date: "2025-08-29",
    location: "Doha, Qatar",
    shortDescription:
      "A campaign identity for an automotive distributor launching a more premium service experience.",
    fullDescription: [
      paragraph(
        "Atlas Auto needed a campaign system that felt aspirational without drifting away from the realities of after-sales service and trust.",
      ),
    ],
    mainImage: image("/content/projects/project-2.svg", "Atlas Auto hero artwork"),
    seoTitle: "Atlas Auto | Branfern",
    seoDescription:
      "Campaign identity and digital rollout for Atlas Auto by Branfern.",
    seoImage: image("/content/projects/project-2.svg", "Atlas Auto SEO artwork"),
    gallery: [image("/content/projects/project-2.svg", "Atlas Auto launch poster")],
    contentSections: [
      {
        id: "campaign",
        sectionType: "gallery",
        heading: "Campaign Components",
        images: [
          image("/content/projects/project-2.svg", "Atlas Auto landing page"),
          image("/content/projects/project-3.svg", "Atlas Auto service ad"),
        ],
      },
    ],
  },
  {
    _id: "project-signal",
    order: 6,
    slug: "signal-house",
    name: "Signal House",
    category: "Creative Studio Identity",
    tags: ["UI/UX", "Systems", "Identity"],
    date: "2025-06-15",
    location: "Remote",
    shortDescription:
      "A lean identity and website kit for a content-led creative studio rebuilding from the ground up.",
    fullDescription: [
      paragraph(
        "Signal House needed a fast, lightweight system they could operate without design bottlenecks. The work focused on clarity, pace, and a content-first hierarchy.",
      ),
    ],
    mainImage: image("/content/projects/project-3.svg", "Signal House hero artwork"),
    seoTitle: "Signal House | Branfern",
    seoDescription:
      "Creative studio identity and web system for Signal House.",
    seoImage: image("/content/projects/project-3.svg", "Signal House SEO artwork"),
    gallery: [image("/content/projects/project-1.svg", "Signal House homepage")],
    contentSections: [
      {
        id: "web",
        sectionType: "text",
        heading: "Website System",
        content: [
          paragraph(
            "We structured the site around repeatable sections so new case studies and service updates could be added without redesigning every page.",
          ),
        ],
      },
    ],
  },
];
