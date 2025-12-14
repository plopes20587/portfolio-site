# Importing Images from Figma

This guide explains how to import all images and icons from the Figma design file.

## Quick Method (Manual Export)

1. **Open the Figma file**: https://www.figma.com/design/2ecLusqLKZRgdqybxEGymD/Personal-Branding?node-id=1652-3545

2. **For each image/icon**, follow these steps:
   - Select the element in Figma
   - In the right sidebar, find the "Export" section
   - Click the "+" button to add an export setting
   - Choose format (PNG for images, SVG for icons/logos)
   - Set scale (2x or 3x for high-resolution displays)
   - Click "Export [filename]"
   - Save to the appropriate directory (see below)

## Directory Structure

```
src/assets/
├── images/
│   ├── projects/
│   │   ├── kfc-mockup.png
│   │   ├── photon-mockup.png
│   │   ├── cellebrite-mockup.png
│   │   └── semesence-mockup.png
│   └── profile-photo.jpg
├── icons/
│   ├── tech-stack/
│   │   ├── design-tools.svg (or .png)
│   │   ├── development.svg
│   │   ├── research.svg
│   │   └── ai-stack.svg
│   └── social/
│       ├── linkedin.svg
│       ├── dribbble.svg
│       ├── twitter.svg
│       └── behance.svg
public/images/
└── brands/
    ├── honeywell.svg
    ├── walgreens.svg
    ├── verizon.svg
    ├── cellebrite.svg
    ├── medcline.svg
    └── kfc.svg
```

## Images to Export

### 1. Project Mockups (Featured Projects section)
- **KFC**: Mobile app mockup showing food ordering interface
- **PHOTON**: Desktop dashboard with data visualizations
- **CELLEBRITE**: Corporate website mockup
- **SEMESENCE**: E-commerce product page mockup

**Export settings**: PNG, 2x scale, save to `src/assets/images/projects/`

### 2. Tech Stack Icons
- Design Tools icon (purple background)
- Development icon (blue background)
- Research & Testing icon (green background)
- AI Stack icon (orange/red background)

**Export settings**: SVG or PNG, 2x scale, save to `src/assets/icons/tech-stack/`

### 3. Profile Photo (About section)
- Professional photo from the "A Bit About Me" section

**Export settings**: JPG or PNG, save to `src/assets/images/`

### 4. Social Media Icons (Hero section)
- LinkedIn icon
- Dribbble icon
- Twitter/X icon
- Behance icon

**Export settings**: SVG, save to `src/assets/icons/social/`

### 5. Brand Logos (Brands section)
- Honeywell
- Walgreens
- Verizon
- Cellebrite
- MedCline
- KFC

**Export settings**: SVG (preferred) or PNG, save to `public/images/brands/`

## Automated Method (Using Figma API)

If you have a Figma Personal Access Token:

1. Get your token from: https://www.figma.com/developers/api#access-tokens
2. Set it as an environment variable:
   ```bash
   export FIGMA_TOKEN=your_token_here
   ```
3. Update `scripts/export-figma-images.js` with the actual node IDs from Figma
4. Run the script:
   ```bash
   node scripts/export-figma-images.js
   ```

**To find node IDs in Figma:**
- Select an element
- Check the URL - the `node-id` parameter contains the ID
- Or use the Figma Dev Mode to see node IDs

## After Exporting

Once images are exported, the components are already set up to use them. They will automatically load from the correct paths.

If you need to update image paths, check:
- `src/components/CaseStudyCard.tsx` - project mockups
- `src/components/SkillsSection.tsx` - tech stack icons
- `src/components/AboutSection.tsx` - profile photo
- `src/components/Hero.tsx` - social icons
- `src/components/LogoMarquee.tsx` - brand logos
