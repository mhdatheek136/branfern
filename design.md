# Paper Hoof — UI Design System Skill File

## Objective
Transform the current Paper Hoof website into a premium, minimal, editorial-grade creative agency website. The redesign must preserve the existing branding while elevating the interface into a refined design system inspired by the interaction quality and restraint of Pentagram.

The experience should feel:
* **Minimal but warm**
* **Editorial but functional**
* **Premium but understated**
* **Dynamic but calm**

The final output should communicate authority, craft, and sophistication.

---

## 1. Brand Personality
Paper Hoof represents:
* Legacy
* Precision
* Modern craftsmanship
* Strategic creativity
* Premium professionalism

The visual language must reflect the symbolism of the horse: **strength, elegance, motion, and discipline.** Avoid flashy, trendy, exaggerated UI. Everything should feel deliberate.

---

## 2. Core Design Principles
* **Principle 1 — Restraint:** Use fewer visual elements with stronger hierarchy. No unnecessary decoration. Whitespace is a core design element.
* **Principle 2 — Editorial Layout:** Use strong typography, clean grids, and asymmetrical but balanced composition. Think of the website as an editorial layout rather than a traditional agency template.
* **Principle 3 — Calm Motion:** Motion must feel subtle, elegant, and responsive. No dramatic bouncing or exaggerated scaling. Animation should communicate refinement.
* **Principle 4 — Consistency:** Spacing, typography, and component behavior must follow a unified system.

---

## 3. Color System

### Primary Colors
* **Horse Black (`#202423`):** Use for text, navigation, icons, and dark surfaces.
* **Sheep White (`#FFFDF7`):** Use for primary background, cards, and whitespace zones.

### Secondary Accent Colors
* **Mane Orange (`#E34C18`):** Use sparingly for active indicators, CTA emphasis, and hover highlights.
* **Saddle Green (`#01360A`):** Use for secondary emphasis, directional icons, and subtle graphic accents.
* **Truck Grey (`#83A1AC`):** Use for muted surfaces, subtle panels, and image placeholders.
* **Barn Beige (`#FFF093`):** Use only in limited highlight areas.

### Color Usage Ratio
* 70% Sheep White
* 20% Horse Black
* 10% Accent Colors
* *Note: Accent colors must never dominate the layout.*

---

## 4. Typography System
Typography must feel editorial and premium.

### Heading Typeface
* **Font:** "Cormorant Garamond"
* **Use for:** Hero titles, featured project names.
* **Style:** Large, elegant, high-contrast serif.

### Interface Typeface
* **Font:** "Inter" or "Satoshi"
* **Use for:** Navigation, labels, descriptions, buttons.
* **Style:** Neutral, modern sans-serif.

### Type Scale (Desktop)
* **Hero Heading:** 72–96px
* **Section Heading:** 36–48px
* **Card Title:** 20–24px
* **Body Text:** 16–18px
* **Labels:** 12–14px
* *Maintain generous line height.*

---

## 5. Layout System
* **Grid:** Strict 12-column grid.
* **Desktop Max Width:** 1440px
* **Content Width:** 1200px
* **Section Padding:** 120px top/bottom
* **Horizontal Padding:** 48px
* **Spacing Scale:** 8 / 16 / 24 / 32 / 48 / 64 / 96 (All spacing must follow this scale).

---

## 6. Hero Section Rules
The hero section must feel dramatic and spacious.
* Large editorial heading (centered or offset).
* High whitespace and minimal controls.
* Subtle interactive project preview.
* Accent colors only in small UI details.
* Prioritize brand clarity and smooth motion; avoid clutter.

---

## 7. Card System
Project cards must be minimal.
* **Corner Radius:** 8px (soft rounded).
* **Visuals:** Clean image dominance with minimal metadata.
* **Padding:** Spacious.
* **Hover Behavior:** Image scales to 1.02; card lifts slightly (`translateY(-4px)`); transition duration 300ms.
* **Constraint:** No shadows. Use contrast and spacing instead.

---

## 8. Navigation Behavior
Navigation must feel lightweight.
* Thin weight typography with generous spacing.
* Subtle hover underline (opacity transition, fade in).
* No heavy navigation backgrounds.
* **Transition:** 200ms ease.

---

## 9. Motion Language
All animations must be subtle.
* **Allowed:** Fade in, slight translate, gentle scale, opacity shifts.
* **Avoid:** Bounce, elastic motion, abrupt transforms.
* **Durations:** Fast (200ms), Standard (300ms), Slow (500ms).
* **Curves:** Use ease-out curves.

---

## 10. Section Entrance Animations
Animate sections into view using:
* **Opacity:** 0 to 1
* **Translation:** `translateY` from 16px to 0
* **Duration:** 500ms ease-out
* **Stagger:** 80ms delay per element to create sequential rhythm.

---

## 11. Hover Interaction Family
All interactions use the same easing and timing:
* **Buttons:** Slight background shift.
* **Cards:** Lift + image scale.
* **Links:** Underline reveal.
* **Tags:** Subtle fill inversion.

---

## 12. “We Design Everything” Expansion Panel
* Soft rounded container with clean padding.
* Smooth expand/collapse (height transition + opacity fade).
* **Duration:** 300ms ease-out.
* **Feel:** The panel should float elegantly, not feel like a modal.

---

## 13. Visual Hierarchy Rules
Guide the eye in this order: Heading -> Main Visual -> Supporting Metadata -> CTA.
* Use contrast, scale, and spacing.
* **Never rely on color alone.**

---

## 14. Imagery Rules
* Images must dominate decoration.
* Use large crops and clean edges.
* **Avoid:** Thick borders, excessive shadows, decorative overlays.

---

## 15. Footer Layout
* **Structure:** Three-column (Symbol/Visual, Brand Name, Contact Info).
* Editorial feel with generous whitespace.
* Use subtle dividers only.

---

## 16. Animation Inspiration
Inspired by **Pentagram, Aesop, and Stripe** editorial transitions. Motion should support hierarchy, not distract.

---

## 17. Technical Implementation Notes
* **Tools:** Framer Motion for transitions.
* **Architecture:** CSS variables for colors, reusable spacing tokens, and reusable typography tokens.
* **Variants:** All animations must be reusable via shared motion variants.

---

## 18. Final Experience Goal
The website should feel like a premium editorial design agency with refined motion and disciplined minimalism. It must communicate trust, elegance, strategy, and craftsmanship.

---

## 19. Responsive Design System
Preserve the premium editorial feel across all devices. Responsive behavior must be an intentional design choice, preserving hierarchy, rhythm, and sophistication rather than just stacking elements.

---

## 20. Breakpoints
* **Desktop:** 1280px and above (12-column grid).
* **Tablet:** 768px – 1279px (8-column grid).
* **Mobile:** Below 768px (4-column grid).

---

## 21. Responsive Layout Rules
* **Desktop:** Wide editorial spacing, asymmetrical compositions, multi-column cards.
* **Tablet:** Reduce columns to 8, simplify asymmetry, reduce horizontal padding. Should feel like a compressed desktop.
* **Mobile:** Stack sections vertically, simplify layout for flow, prioritize readability and breathing room.

---

## 22. Responsive Spacing
| Element | Desktop | Tablet | Mobile |
| :--- | :--- | :--- | :--- |
| **Section Padding** | 120px | 80px | 56px |
| **Horizontal Padding** | 48px | 32px | 20px |

---

## 23. Responsive Typography
| Element | Desktop | Tablet | Mobile |
| :--- | :--- | :--- | :--- |
| **Hero Heading** | 72–96px | 52–64px | 36–44px |
| **Section Heading** | 36–48px | 28–36px | 24–28px |
| **Body Text** | 16–18px | 16px | 14–16px |

---

## 24. Responsive Hero Behavior
* **Desktop:** Editorial large heading, floating preview, layered composition.
* **Tablet:** Reduce hero height and preview size; maintain heading presence.
* **Mobile:** Stack content vertically, center align, reduce preview dimensions. Maintain one focal point.

---

## 25. Responsive Navigation
* **Desktop:** Full spacing, horizontal alignment.
* **Tablet:** Reduced spacing, simplified interactions.
* **Mobile:** Compact header (72px height), menu icon emphasis, minimal elements.

---

## 26. Responsive Project Grid
* **Desktop:** 3-column grid (featured cards can span wider).
* **Tablet:** 2-column grid.
* **Mobile:** 1-column stack (full width).
* **Mobile Gap:** 24px.

---

## 27. Responsive Card Behavior
* **Tablet:** Reduce padding slightly, preserve image dominance and metadata spacing.
* **Mobile:** Full-width cards, simplified metadata, maintain image prominence and hover effects where possible.

---

## 28. Responsive Footer
* **Desktop:** 3-column editorial.
* **Tablet:** 2-column layout.
* **Mobile:** Single-column stack (Identity -> Contact -> Social). Generous spacing.

---

## 29. Responsive Motion Rules
* **Desktop:** Full subtle animation system (fades, lifts, staggers).
* **Tablet:** Reduced stagger complexity; use fades and reduced translate values.
* **Mobile:** Simplify for performance. Use fades and small `translateY` (8px) over 300ms.

---

## 30. Touch Interaction Rules
* **Minimum Touch Target:** 44px x 44px (buttons, tags, nav, controls).
* **Minimum Spacing:** 8px between interactive elements.

---

## 31. Responsive “We Design Everything” Panel
* **Tablet:** Reduce panel width and tag density per row.
* **Mobile:** Full-width panel, stack tags with wrapping, increase touch spacing, simplify preview size.

---

## 32. Mobile Performance Rules
* Reduce animation complexity.
* Lazy load heavy images.
* Optimize image sizes and avoid large transforms.

---

## 33. Final Responsive Goal
Across all breakpoints, Paper Hoof must preserve elegance, clarity, and rhythm.
* **Desktop:** Expansive.
* **Tablet:** Balanced.
* **Mobile:** Intentional.
