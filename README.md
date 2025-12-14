# Portfolio Site

Personal portfolio built with React, TypeScript, and Vite. It includes animated hero and starfield, case studies, rotating keywords, skills grid, and a CTA footer tailored for product design work.

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for page routing

## Getting Started
1) Install dependencies: `npm install`
2) Run locally: `npm run dev` then open the printed URL
3) Type-check and build: `npm run build`
4) Preview production build: `npm run preview`
5) Lint: `npm run lint`

## Project Structure
- `src/` React components, pages, styling, and data
- `src/components/` Hero, navigation, skills, marquee, case study cards, star cursor, etc.
- `src/pages/` `Home` and `CaseStudy` routes
- `src/siteData.ts` Content for hero, skills, projects, and footer CTA
- `public/` Static assets served at root (brand logos live in `public/images/brands`)

## Assets
- Image and icon placeholders are wired up; see `IMAGES-SETUP.md` for required files and paths.
- Detailed Figma export steps live in `README-IMAGES.md`.
- Figma auto-export helper: `scripts/export-figma-images.js` (requires Figma API token).

## Deployment
- Build output is written to `dist/`. Host the contents of that directory on any static host (GitHub Pages, Vercel, Netlify, etc.).
