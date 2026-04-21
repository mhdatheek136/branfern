# Branfern

This repo now uses a `Next.js` App Router frontend with local content files instead of Sanity.

## Run

From `frontend/`:

```bash
npm install
npm run dev
```

## Project shape

- `frontend/app/`
  Next.js routes and layout files.

- `frontend/src/content/site.js`
  Site-wide settings, hero slides, social links, contact details, categories, and form options.

- `frontend/src/content/pages.js`
  Copy for the `About`, `Work`, `Contact`, and `Brand Review` pages.

- `frontend/src/content/projects.js`
  All portfolio cards and case studies.

- `frontend/src/content/services.js`
  Service pillars shown on the About page.

- `frontend/src/content/team.js`
  Team members shown on the About page.

- `frontend/public/content/`
  Replace the placeholder images here with real project, hero, and team assets.

## Add a new project

1. Add your images to `frontend/public/content/projects/`.
2. Add a new object to `frontend/src/content/projects.js`.
3. Set a unique `_id`, `slug`, and `order`.
4. Point `mainImage.src` to your new file.
5. Add `gallery` and `contentSections` if you want a full case study page.

## Brand Review form

The Brand Review page currently opens a pre-filled email draft to the address in `frontend/src/content/site.js`.

When you want automatic form delivery later, replace the `createBooking()` function in `frontend/src/lib/content.js` with a real API call.
