# Portfolio Site Plan

## Project

Build a dark-mode-only portfolio site for Patrick Lopes using React, with a subtle starfield hero background, custom star cursor, hover effects, and an infinite looping logo marquee. Host on Render as a static site. Content should be conversational, confident, and focused on e-commerce and digital experiences. AI should be included as part of the workflow but not the main focus.

## Primary goals

1. Ship a fast, clean, modern portfolio that matches the new look and feel already designed in Figma.
2. Preserve a mostly set-and-forget editing model while keeping it easy to add new case studies later.
3. Implement subtle, polished motion and interactions that are difficult or limiting in no-code tools.
4. Keep copy simple, authentic, and recruiter-friendly.

## Audience

Recruiters and hiring managers reviewing a senior product designer for e-commerce and consumer digital experiences, with tasteful AI workflow capability.

---

## Brand positioning and tone

### Positioning

- Senior Product Designer with 10+ years of experience.
- Core focus: e-commerce and digital experiences (product pages, checkout flows, customer journeys).
- Less emphasis on B2B platform language.
- AI is part of the workflow (ideation, exploration, prototyping, refinement), but not the headline.

### Tone rules

- Conversational, natural, confident.
- Avoid buzzwords and hype.
- Avoid em dashes entirely.
- Keep sentences readable and simple.
- Do not over-claim skills or experience.

---

## Content requirements

### Hero headline

PRODUCT DESIGNER

### Hero sub-headline

Good design happens when the experience speaks the customer's language. With the right balance of structure, research, and a bit of AI in the early stages, the journey becomes smoother and easier to follow.

### Case study cards

- KFC: E-Commerce Platform - A redesigned product detail page that makes it easier for people to customize and order their meals online.
- Photon: Data Visualization Platform - A financial analytics platform that gives users a simpler way to explore financial analytics and understand their value.
- Cellebrite: Website & UI/UX Audit - A cybersecurity solutions website that helps visitors understand complex topics and find the information they need fast.
- SeneGence: E-Commerce & Conversion Redesign - A seamless shopping experience that helps customers browse products, add them, and check out with ease.

### CTAs

- Primary: Let's talk
- Footer: Get in touch / Say Hello!

---

## Technical plan

### Stack

- React with Vite
- TypeScript
- Tailwind CSS
- Framer Motion for UI animations
- Canvas API for starfield background
- Magic UI components (Meteors)

### Dependencies added

- clsx
- tailwind-merge
- framer-motion

### Hosting

- Render Static Site
- Build command: npm ci && npm run build
- Publish directory: dist

---

## Component architecture

### Core components (implemented)

- Layout - Page wrapper
- HeaderNav - Fixed navigation header
- Hero - Main hero section with animations
- HeroStarfieldCanvas - Canvas-based starfield with meteors
- Meteors (ui/meteors.tsx) - Magic UI-style CSS meteor animation
- StarCursor - Custom animated cursor
- CaseStudyCard - Project card component
- LogoMarquee - Infinite scrolling brand logos
- WorkGrid - Case study grid section
- SectionDivider - Visual separator between sections
- FooterCTA - Footer call-to-action section
- SkillsSection - Skills display
- AboutSection - About content

### Utility files

- src/lib/utils.ts - cn() function for class merging
- src/siteData.ts - Centralized content data

---

## Image Setup

### Directory Structure

- `src/assets/images/` - Project thumbnails and profile photo
- `src/assets/icons/` - Tech stack and social icons
- `public/images/brands/` - Brand logos for marquee

### Current Images

Project thumbnails are imported directly in components:

- `src/assets/images/KFC Thumbnail.png`
- `src/assets/images/Photon Thumbnail.png`
- `src/assets/images/Cellebrite Thumbnail.png`
- `src/assets/images/SeneGence Thumbnail.png`
- `src/assets/images/AboutmeImage.jpg`

### Adding New Images from Figma

1. Open Figma: https://www.figma.com/design/2ecLusqLKZRgdqybxEGymD/Personal-Branding?node-id=1652-3545

2. For each image:
   - Select the element
   - Right sidebar → Export section
   - Add export setting (PNG 2x for images, SVG for icons)
   - Click "Export [filename]"
   - Save to the correct directory

### Image Specifications

- **Project Mockups**: PNG, 2x scale (recommended: 800-1200px width)
- **Icons**: SVG preferred, or PNG at 2x scale
- **Profile Photo**: JPG or PNG, high quality
- **Brand Logos**: SVG preferred for scalability

### Fallback Handling

All components have error handling that shows placeholders if images aren't found. This allows the site to work even before all images are imported.

---

## Remaining work

- [ ] Add Resume/CV page or download link
- [ ] Mobile responsive refinements
- [ ] Performance optimization
- [x] Deploy to Render (deployed, SPA routing fix applied)
- [ ] Connect custom domain

---

## Completed updates

### Icon consolidation (completed)
- Centralized all icons in `src/assets/icons/index.ts`
- Removed individual icon component wrappers
- Icons now exported as React components using a shared SVG wrapper
- Simplified imports across the codebase

---

## Non-functional requirements

- Lighthouse performance score 90+
- Mobile-friendly
- Accessible contrast
- Reduced motion support

---

## Acceptance checklist

- [x] Dark mode only
- [x] Subtle starfield hero with meteors
- [x] Star cursor works correctly
- [x] Case cards show project details and metrics
- [x] Logo marquee loops seamlessly
- [x] Section dividers match Figma design
- [x] Case study pages functional
- [x] Site builds and deploys on Render
