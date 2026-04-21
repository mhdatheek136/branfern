Store `paparhoof` design exports here.

Structure:
- `screens/` for page and UI exports
- `branding/` for logos, marks, palette references, and other brand assets

Examples:
- `frontend/public/content/paparhoof/screens/home-page.png` -> `/content/paparhoof/screens/home-page.png`
- `frontend/public/content/paparhoof/branding/wordmark-horizontal.svg` -> `/content/paparhoof/branding/wordmark-horizontal.svg`
- `frontend/public/content/paparhoof/branding/palette.md` -> design palette reference

Notes:
- Anything in `frontend/public` is served by Next.js as a static file.
- Prefer `SVG` for logos and icons.
- Prefer `PNG` at `2x` for page/frame screenshots and image-heavy mockups.
- Export each frame separately instead of exporting the whole canvas.
