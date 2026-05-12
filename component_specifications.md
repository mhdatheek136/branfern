# Paper Hoof — Component Specifications

This document outlines the functional and visual specifications for the reusable UI components of the Paper Hoof website. All components follow a strict editorial-minimalist aesthetic.

---

## 1. Design Tokens (Foundation)

### 1.1 Color Tokens
| Token Name | Hex Code | Application |
| :--- | :--- | :--- |
| `color-primary-black` | #202423 | Text, Nav, Icons, Dark Surfaces |
| `color-primary-white` | #FFFDF7 | Main backgrounds, Cards, Whitespace |
| `color-accent-orange` | #E34C18 | Active states, CTA highlights |
| `color-accent-green` | #01360A | Directional icons, subtle accents |
| `color-surface-grey` | #83A1AC | Muted panels, placeholders |
| `color-highlight-beige`| #FFF093 | Limited highlight areas |

### 1.2 Spacing Tokens (8pt Grid)
Use these variables for all margins, paddings, and gaps:
* `space-xs`: 8px
* `space-sm`: 16px
* `space-md`: 24px
* `space-lg`: 32px
* `space-xl`: 48px
* `space-xxl`: 64px
* `space-huge`: 96px
* `section-pad-desktop`: 120px

### 1.3 Typography Tokens
* **Heading (Serif):** "Cormorant Garamond"
* **UI/Body (Sans):** "Inter" or "Satoshi"
* **Base Line Height:** 1.5 - 1.6

---

## 2. Component: Global Navigation

**Structure:** Minimalist header with logo and text-based links.
* **Height (Mobile):** 72px
* **Typography:** Interface Typeface, thin weight.
* **Layout:** Horizontal flex with generous breathing room.
* **Hover State:**
    * Opacity transition (200ms ease).
    * Subtle underline fade-in.
* **Constraint:** No heavy background colors; maintain transparency or solid `color-primary-white`.

---

## 3. Component: Hero Section

**Structure:** High-impact editorial entrance.
* **Heading Style:** `72px–96px` (Desktop), centered or offset for asymmetry.
* **Visuals:** High whitespace ratio; subtle interactive project preview.
* **Interaction:** Entrance animation using `opacity: 0 -> 1` and `translateY: 16px -> 0`.
* **Constraint:** No clutter; prioritize brand clarity and motion elegance.

---

## 4. Component: Project Card

**Structure:** Image-centric card for portfolio display.
* **Border Radius:** 8px (soft).
* **Shadows:** None. Use spacing and contrast to define edges.
* **Content:** Clean image dominance with minimal metadata labels.
* **Hover Behavior (Desktop):**
    * Image Scale: `1.02`
    * Card Lift: `translateY(-4px)`
    * Transition: `300ms` ease-out.
* **Responsive:** Stacks to full-width (1-column) on mobile with `24px` gap.

---

## 5. Component: “We Design Everything” Expansion Panel

**Structure:** A floating, interactive disclosure panel.
* **Style:** Soft rounded container, premium padding.
* **Expand/Collapse Logic:**
    * Smooth height transition.
    * Opacity fade for internal content.
    * Duration: `300ms` ease-out.
* **Content:** Tags aligned with the spacing rhythm; high touch-target area (`44px x 44px`).

---

## 6. Component: Global Footer

**Structure:** Editorial-grade 3-column information hub.
* **Columns:**
    1. Brand Symbol / Visual
    2. Brand Name / Tagline
    3. Contact Info / Social Links
* **Styling:** Subtle dividers only; generous vertical whitespace.
* **Mobile Behavior:** Single-column vertical stack.

---

## 7. Motion & Interaction System

All components must inherit these motion variants:

### 7.1 Timing & Easing
* **Fast:** 200ms
* **Standard:** 300ms
* **Slow:** 500ms
* **Easing:** `cubic-bezier(0.25, 0.1, 0.25, 1)` (Ease-out)

### 7.2 Entrance (Section Level)
* **Effect:** Opacity + Vertical Translate.
* **Stagger:** 80ms delay between child components.

### 7.3 Hover Family
* **Buttons:** Subtle background color shift.
* **Links:** Underline reveal.
* **Tags:** Subtle fill inversion.

---

## 8. Responsive Specifications

| Component | Mobile (4-col) | Tablet (8-col) | Desktop (12-col) |
| :--- | :--- | :--- | :--- |
| **Hero Heading** | 36–44px | 52–64px | 72–96px |
| **Section Pad** | 56px | 80px | 120px |
| **Grid Gap** | 20px | 32px | 48px |
| **Touch Targets**| 44px (min) | 44px (min) | N/A |

---

## 9. Implementation Notes
* **Frontend:** Use CSS Variables for all tokens.
* **Animation:** Use Framer Motion (React) or GSAP for staggered transitions.
* **Grid:** CSS Grid for layout; Flexbox for internal component alignment.
