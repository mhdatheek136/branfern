# Content Structure

This project now uses local content files instead of Sanity.

## Where to edit things

- `src/content/site.js`
  Site-wide settings like email, location, hero slides, design categories, social links, and form options.

- `src/content/pages.js`
  Page copy for `About`, `Work`, `Contact`, and `Brand Review`.

- `src/content/projects.js`
  All portfolio projects and case study content.

- `src/content/services.js`
  The three service pillars shown on the About page.

- `src/content/team.js`
  Team members shown on the About page.

## How to add a project

1. Add or replace images in `public/content/projects/`.
2. Add a new project object in `src/content/projects.js`.
3. Give it a unique `_id`, `slug`, and `order`.
4. Set `mainImage` to a file in `/content/projects/...`.
5. Add `gallery` and `contentSections` only if you need a richer case study.

## Project shape

```js
{
  _id: "project-example",
  order: 7,
  slug: "example-project",
  name: "Example Project",
  category: "Brand Identity",
  tags: ["Branding", "Retail"],
  date: "2026-04-21",
  location: "Colombo, Sri Lanka",
  shortDescription: "One-line summary for cards and SEO fallback.",
  fullDescription: [
    { type: "paragraph", text: "Longer intro for the case study drawer." },
  ],
  mainImage: { src: "/content/projects/example.svg", alt: "Example project hero" },
  gallery: [
    { src: "/content/projects/example-detail.svg", alt: "Detail image", caption: "Optional caption" },
  ],
  contentSections: [
    {
      id: "challenge",
      sectionType: "text",
      heading: "The Challenge",
      content: [{ type: "paragraph", text: "Explain the challenge here." }],
    },
  ],
}
```

## How to replace placeholder images

- Put the new file into `public/content/hero/`, `public/content/projects/`, or `public/content/team/`.
- Update the `src` value in the matching content file.
- Keep paths starting with `/content/...`.

## Form submissions

The Brand Review form currently opens a pre-filled email draft using the contact address in `src/content/site.js`.

When you later want automatic sending, replace the submission function in `src/lib/content.js` with a real API call.
