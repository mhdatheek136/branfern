const image = (src, alt) => ({ src, alt });

export const services = [
  {
    _id: "service-1",
    pillarNumber: "01",
    heading: "Strategy",
    description:
      "Positioning, audit work, naming, and brand architecture that gives your business a clearer direction.",
    image: image("/content/projects/project-1.svg", "Strategy service artwork"),
    cards: [
      {
        title: "Brand Audits",
        description:
          "We map what is working, what is unclear, and where your brand is leaking trust or momentum.",
      },
      {
        title: "Positioning",
        description:
          "We distill a sharper market angle and message system that your whole team can use.",
      },
      {
        title: "Architecture",
        description:
          "We organize offerings, sub-brands, and touchpoints into a system that scales cleanly.",
      },
    ],
  },
  {
    _id: "service-2",
    pillarNumber: "02",
    heading: "Identity",
    description:
      "Flexible visual systems with rules, assets, and applications that stay coherent as you grow.",
    image: image("/content/projects/project-2.svg", "Identity service artwork"),
    cards: [
      {
        title: "Visual Language",
        description:
          "Logos, typography, color, layout, and image direction built as a usable system.",
      },
      {
        title: "Launch Assets",
        description:
          "Campaign-ready rollouts for print, packaging, social, and internal adoption.",
      },
      {
        title: "Brand Toolkits",
        description:
          "Straightforward guidance your team can actually use without relying on a designer every day.",
      },
    ],
  },
  {
    _id: "service-3",
    pillarNumber: "03",
    heading: "Presence",
    description:
      "Digital touchpoints, content systems, and conversion paths that connect the brand to action.",
    image: image("/content/projects/project-3.svg", "Presence service artwork"),
    cards: [
      {
        title: "Web Direction",
        description:
          "Homepage narratives, offer structure, and page systems designed to convert more clearly.",
      },
      {
        title: "Content Systems",
        description:
          "Editorial patterns and reusable templates that keep publishing lightweight and consistent.",
      },
      {
        title: "Social Rollout",
        description:
          "Post templates, campaign hooks, and content rhythm that make your presence easier to maintain.",
      },
    ],
  },
];
