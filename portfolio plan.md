# plan.md

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
Senior Product Designer focused on e-commerce and digital experiences

### Hero sub-headline
Good design happens when the experience speaks the customer’s language. With the right balance of clarity, structure, and a little help from AI along the way, a confusing journey becomes something that just feels right.

### Rotating keywords
- Product designer
- UX strategist
- AI-driven designer
- coffee enthusiast

### Case study card blurbs
- KFC PDP Redesign: A redesigned product detail page that makes it easier for people to customize and order their meals online.
- SeneGence E-commerce Redesign: A smoother shopping experience that helps customers browse products, learn about them, and check out with less friction.
- Cellebrite Website Redesign: A clearer and more structured website that helps visitors understand the offering and find what they need faster.
- Photon Website Redesign: A refreshed website experience that gives users a simpler way to explore Photon’s services and understand their value.

### CTAs
- Primary: View my work
- Secondary: Get in touch
- Footer: Let’s connect

---

## Technical plan

### Stack
- React with Vite
- TypeScript preferred
- Tailwind CSS or CSS Modules
- Motion for React for UI animations
- Canvas API for starfield background

### Hosting
- Render Static Site
- Build command: npm ci && npm run build
- Publish directory: dist

### SEO
- Page titles and meta descriptions
- Default OpenGraph image
- Optional sitemap

---

## Motion and interactions

### Hero starfield
- Canvas-based starfield with subtle drift and glow
- Occasional shooting stars
- Performance-aware and responsive
- Respects prefers-reduced-motion

### Star cursor
- Desktop-only glowing star cursor
- Pointer-events disabled
- Disabled on mobile and reduced motion

### Hover effects
- Subtle lift, scale, and glow on cards and buttons

### Logo marquee
- Infinite horizontal loop
- PNG logos with transparent backgrounds
- CSS-based marquee with duplicated track

---

## Information architecture

### Pages
- Home
- Work
- Case Study Template
- About
- Contact

### Core components
- Layout
- HeaderNav
- FooterCTA
- Hero
- HeroStarfieldCanvas
- RotatingKeywords
- StarCursor
- CaseStudyCard
- LogoMarquee
- WorkGrid
- CaseTemplate

---

## Content model
Centralize content in siteData.ts:
- siteMeta
- hero content
- caseStudies array with slug, title, blurb, metrics, sections

---

## Implementation steps

### Phase 1
- Project setup with Vite + React
- Routing and base layout
- Global dark theme

### Phase 2
- Build homepage
- Implement hero animations
- Add case study cards
- Add logo marquee
- Add footer CTA

### Phase 3
- Build work index
- Scaffold case study template

### Phase 4
- Polish animations
- Add reduced motion support
- Optimize assets

### Phase 5
- Deploy to Render
- Connect domain
- Add analytics if needed

---

## Non-functional requirements
- Lighthouse performance score 90+
- Mobile-friendly
- Accessible contrast
- Reduced motion support

---

## Acceptance checklist
- Dark mode only
- Subtle starfield hero
- Star cursor works correctly
- Case cards show one-sentence blurbs
- Logo marquee loops seamlessly
- Site builds and deploys on Render
