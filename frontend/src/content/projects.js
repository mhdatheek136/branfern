const image = (src, alt, caption = "") => ({ src, alt, caption });
const paragraph = (text) => ({ type: "paragraph", text });

export const projects = [
  {
    _id: "project-burger-hot",
    order: 1,
    slug: "burger-hot",
    name: "Burger Hot",
    category: "Food Chain",
    tags: ["Branding", "Identity", "UI/UX"],
    date: "2026-03-06",
    location: "Sri Lanka",
    shortDescription:
      "A high-contrast food chain identity built to feel loud, legible, and campaign-ready across physical and digital touchpoints.",
    fullDescription: [
      paragraph(
        "Burger Hot turns fast-food energy into a sharper brand system. The work balances appetite appeal with a disciplined identity language that can stretch from signage to digital launch assets.",
      ),
      paragraph(
        "The visual system uses bold contrast, concise tagging, and product-first imagery so every application lands with speed and clarity.",
      ),
    ],
    mainImage: image("/content/paparhoof/screens/frame-4.png", "Burger Hot preview"),
    seoTitle: "Burger Hot | Paper Hoof",
    seoDescription: "Food-chain identity and rollout system by Paper Hoof.",
    gallery: [
      image("/content/paparhoof/screens/frame-4.png", "Burger Hot identity preview"),
      image("/content/paparhoof/screens/we-design-everything-expansion.png", "Burger Hot overlay preview"),
    ],
    contentSections: [
      {
        id: "challenge",
        sectionType: "text",
        heading: "Focus",
        content: [
          paragraph(
            "Build a brand that feels immediate and memorable while remaining systemized enough to work across menus, digital promotions, and store graphics.",
          ),
        ],
      },
      {
        id: "system",
        sectionType: "gallery",
        heading: "System Signals",
        images: [
          image("/content/paparhoof/screens/frame-4.png", "Burger Hot feature panel"),
          image("/content/paparhoof/screens/home-page.png", "Burger Hot on home page"),
        ],
      },
    ],
  },
  {
    _id: "project-odera",
    order: 2,
    slug: "odera",
    name: "Odera",
    category: "Supermarket",
    tags: ["Branding", "System", "Digital Presence"],
    date: "2026-03-18",
    location: "Sri Lanka",
    shortDescription:
      "A supermarket identity system structured for clarity, trust, and quick recognition across shelf, signage, and promotional touchpoints.",
    fullDescription: [
      paragraph(
        "Odera is positioned as a disciplined retail system rather than a decorative identity. The work focuses on wayfinding, hierarchy, and repeatable communication blocks.",
      ),
      paragraph(
        "The result is a brand that feels calm and organized while still carrying enough character for campaign work and social rollouts.",
      ),
    ],
    artDirection: {
      background: "#FFFDF7",
      foreground: "#01360A",
      eyebrow: "Supermarket",
      wordmark: "ODERA",
      tone: "Retail structure",
    },
    seoTitle: "Odera | Paper Hoof",
    seoDescription: "Retail identity and supermarket rollout system by Paper Hoof.",
    gallery: [
      image("/content/paparhoof/screens/work-page.png", "Odera in the project grid"),
      image("/content/paparhoof/screens/about-us.png", "Odera-style system showcase"),
    ],
    contentSections: [
      {
        id: "challenge",
        sectionType: "text",
        heading: "Focus",
        content: [
          paragraph(
            "Create a flexible supermarket identity that feels professional, navigable, and ready for large-format rollout without visual clutter.",
          ),
        ],
      },
    ],
  },
  {
    _id: "project-yaloo",
    order: 3,
    slug: "yaloo",
    name: "Yaloo",
    category: "Tourism",
    tags: ["Identity", "Social Media", "Digital Presence"],
    date: "2026-03-22",
    location: "Sri Lanka",
    shortDescription:
      "A tourism-facing identity shaped to feel welcoming, lightweight, and adaptable across destination storytelling and promotional media.",
    fullDescription: [
      paragraph(
        "Yaloo is designed to travel well across digital touchpoints. The system leans on clear typography, modular image spaces, and a lighter tone of voice.",
      ),
      paragraph(
        "It is built to support destination campaigns, social publishing, and hospitality-adjacent brand moments without losing coherence.",
      ),
    ],
    artDirection: {
      background: "#FFF093",
      foreground: "#202423",
      eyebrow: "Tourism",
      wordmark: "YALOO",
      tone: "Travel identity",
    },
    seoTitle: "Yaloo | Paper Hoof",
    seoDescription: "Tourism identity and digital rollout by Paper Hoof.",
    gallery: [
      image("/content/paparhoof/screens/work-page.png", "Yaloo in the project grid"),
      image("/content/paparhoof/screens/contact-us.png", "Campaign tone reference"),
    ],
    contentSections: [
      {
        id: "system",
        sectionType: "text",
        heading: "System Signals",
        content: [
          paragraph(
            "The design direction prioritizes approachable typography, soft contrast, and layouts that allow photography and destination copy to lead.",
          ),
        ],
      },
    ],
  },
  {
    _id: "project-woodland-publishing",
    order: 4,
    slug: "woodland-publishing",
    name: "Woodland Publishing",
    category: "Publishing",
    tags: ["Branding", "System", "Cinema"],
    date: "2026-03-28",
    location: "Sri Lanka",
    shortDescription:
      "A publishing identity that favors editorial rhythm, typographic restraint, and a clear system for long-form visual storytelling.",
    fullDescription: [
      paragraph(
        "Woodland Publishing is framed as a slower, more considered brand. The identity system uses controlled spacing, serif moments, and quiet compositional balance.",
      ),
      paragraph(
        "It is suited to covers, internal collateral, and digital presentation where the hierarchy needs to feel refined instead of loud.",
      ),
    ],
    artDirection: {
      background: "#FFF093",
      foreground: "#202423",
      eyebrow: "Publishing",
      wordmark: "WOODLAND",
      tone: "Editorial world",
    },
    seoTitle: "Woodland Publishing | Paper Hoof",
    seoDescription: "Publishing identity system by Paper Hoof.",
    gallery: [
      image("/content/paparhoof/screens/work-page.png", "Woodland Publishing in the grid"),
      image("/content/paparhoof/screens/about-us.png", "Publishing mood reference"),
    ],
    contentSections: [
      {
        id: "approach",
        sectionType: "text",
        heading: "Approach",
        content: [
          paragraph(
            "The system is organized around editorial calm: strong titles, quiet surfaces, and enough flexibility to support print and digital publishing formats.",
          ),
        ],
      },
    ],
  },
  {
    _id: "project-burrowed",
    order: 5,
    slug: "burrowed",
    name: "Burrowed",
    category: "Magazine",
    tags: ["Identity", "Digital Presence", "UI/UX"],
    date: "2026-04-02",
    location: "Sri Lanka",
    shortDescription:
      "A literary magazine identity with an editorial serif hero, deep navy framing, and a measured digital presentation system.",
    fullDescription: [
      paragraph(
        "Burrowed centers on a strong editorial masthead and a restrained surface system. The visual language pairs literary softness with clear interface logic.",
      ),
      paragraph(
        "It demonstrates how Paper Hoof handles serif-led identities without sacrificing structure or usability.",
      ),
    ],
    mainImage: image("/content/paparhoof/screens/hero-content.png", "Burrowed hero panel"),
    artDirection: {
      background: "#173755",
      foreground: "#FFFDF7",
      eyebrow: "Magazine",
      wordmark: "BURROWED",
      tone: "a literary magazine",
    },
    seoTitle: "Burrowed | Paper Hoof",
    seoDescription: "Editorial magazine identity by Paper Hoof.",
    gallery: [
      image("/content/paparhoof/screens/hero-content.png", "Burrowed title treatment"),
      image("/content/paparhoof/screens/frame-799.png", "Burrowed project card"),
    ],
    contentSections: [
      {
        id: "identity",
        sectionType: "text",
        heading: "Identity Language",
        content: [
          paragraph(
            "Burrowed uses a high-contrast masthead, minimal accent cues, and structured spacing to make the editorial experience feel premium and legible.",
          ),
        ],
      },
    ],
  },
  {
    _id: "project-dhch",
    order: 6,
    slug: "dhch",
    name: "DHCH",
    category: "Institution",
    tags: ["Institution", "System", "Digital Presence"],
    date: "2026-04-09",
    location: "Sri Lanka",
    shortDescription:
      "An institutional identity system designed for clarity, authority, and repeatable communications across public-facing touchpoints.",
    fullDescription: [
      paragraph(
        "DHCH is treated as a system-first brand. The work emphasizes confidence, consistency, and a visual structure that can scale beyond a single campaign moment.",
      ),
      paragraph(
        "It is designed to support institutional messaging with clean hierarchy and practical rollout logic.",
      ),
    ],
    artDirection: {
      background: "#FFF093",
      foreground: "#202423",
      eyebrow: "Institution",
      wordmark: "DHCH",
      tone: "Institutional clarity",
    },
    seoTitle: "DHCH | Paper Hoof",
    seoDescription: "Institutional identity and communications system by Paper Hoof.",
    gallery: [
      image("/content/paparhoof/screens/work-page.png", "DHCH in the project grid"),
      image("/content/paparhoof/screens/contact-us.png", "Institutional system reference"),
    ],
    contentSections: [
      {
        id: "focus",
        sectionType: "text",
        heading: "Focus",
        content: [
          paragraph(
            "Develop a reliable institutional visual system that feels serious, accessible, and ready for ongoing communications.",
          ),
        ],
      },
    ],
  },
];
