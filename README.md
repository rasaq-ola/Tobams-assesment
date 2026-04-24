# Training and Development — Tobams Group

A pixel-perfect, fully responsive implementation of the Tobams Group Training and Development page, built with **Next.js 15 (App Router)** and **Tailwind CSS v4**.

---

## 🚀 Live URL

> **[https://tobams-training-dev.vercel.app](https://tobams-training-dev.vercel.app)**
>
> *(Replace this with your actual Vercel URL after deployment)*

---

## 📐 Figma Design

[View the original Figma design](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 15.3.1 | Framework (App Router) |
| React | 19 | UI library |
| Tailwind CSS | 4.0 | Styling |
| TypeScript | 5 | Type safety |

---

## ⚡ Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/rasaq-ola/tobams-training-development.git
cd tobams-training-development

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

**Requirements:** Node.js 18+

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, font loading, metadata
│   ├── page.tsx            # Page entry — composes all sections
│   └── globals.css         # Tailwind v4 imports + CSS theme tokens
└── components/
    ├── Navbar.tsx                      # Sticky nav with mobile hamburger menu
    ├── Hero.tsx                        # Dark hero with background image
    ├── LearningManagementSystem.tsx    # Image + content, 2-col
    ├── CorporateTrainings.tsx          # Content + image, 2-col
    ├── PersonalisedTraining.tsx        # Image + content, 2-col
    ├── CapacityDevelopment.tsx         # Content + image, 2-col
    ├── ManagementDevelopmentProgram.tsx# Dark section with accordion
    ├── TransformationHub.tsx           # Pink card, CEO section
    ├── TrainingConsultant.tsx          # 4-card feature grid
    ├── CtaBanner.tsx                   # Purple CTA banner
    ├── Testimonials.tsx                # 3-col desktop / carousel mobile
    ├── JoinBanner.tsx                  # Dark join banner
    ├── Footer.tsx                      # 4-col footer with links
    ├── BulletItem.tsx                  # Reusable lightning-bolt bullet
    └── LearnMoreLink.tsx               # Reusable CTA link (2 variants)
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | 425px | Single column, stacked sections |
| Tablet | 768px | 2-column grids begin, improved spacing |
| Desktop | 1280px+ | Full layout, max-width container centred |

All responsiveness is handled exclusively with **Tailwind responsive prefixes** (`sm:`, `md:`, `lg:`, `xl:`). No custom media queries are used anywhere in the codebase. This aligns with the assessment requirement and keeps styling co-located with markup, making it easier to reason about layout at a glance.

---

### Font Loading
## 🎨 Design Decisions & Technical Assumptions

### Font Usage

The project uses system/default fonts styled with Tailwind CSS utilities to closely match the Figma design.

For a production environment, this could be improved by integrating `next/font/google` for optimized font loading and better visual consistency.

---

### Images

All images were exported directly from the provided Figma design and stored locally in the `/public/images` directory.

They are rendered using Next.js `next/image` for automatic optimization, including responsive sizing and lazy loading.

---

### Testimonials Carousel
The design shows three testimonial cards side-by-side on desktop. On mobile (425px), a single card is shown with previous/next arrow controls — a common responsive pattern for this type of content that keeps the layout clean without reducing readability.

### Accordion (Management Development Program)
The accordion in the dark purple section is interactive: one item is open by default (matching the Figma), and clicking another item opens it while closing the previous one. `aria-expanded` and `aria-controls` attributes are included for screen reader support.

### Alternate row layout (image ↔ text)
Sections alternate between image-left/text-right and text-left/image-right on desktop, matching the Figma. On mobile, the image always appears above the text using Tailwind `order-` utilities (`order-1 md:order-2`), which is better for visual hierarchy on small screens.

### Color Palette (extracted from Figma)
| Token | Value | Usage |
|---|---|---|
| Brand Purple | `#3d0a3f` | Primary CTA buttons, accents, footer background header |
| Purple Dark | `#2d0a30` | Management section background |
| Purple Deeper | `#0f0a14` | Footer main background |
| Brand Pink | `#fce8ea` | Transformation Hub card background |
| Bullet accent | `#3d0a3f` | Lightning bolt icons |

---

## ♿ Accessibility

- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<address>` used throughout
- All `<section>` elements have `aria-labelledby` pointing to their heading
- All images have descriptive `alt` text
- Interactive elements (buttons, links) have `:focus-visible` ring styles for keyboard navigation
- Accordion uses `aria-expanded` and `aria-controls`
- Mobile menu button uses `aria-expanded` and `aria-label`
- Carousel controls have `aria-label` descriptions
- Social icon links have `aria-label` text
- No `tabindex` abuse — all focus order follows natural DOM order

---

## Known Issues / Future Improvements

- The Navbar active-link highlighting is not implemented (Figma shows the current page underlined); this would require `usePathname()` and is straightforward to add.
- The Management Development Program accordion could animate open/close with a CSS `max-height` transition for a more polished feel.
