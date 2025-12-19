/**
 * Script to export images from Figma using the Figma REST API
 * 
 * Prerequisites:
 * 1. Get a Figma Personal Access Token from: https://www.figma.com/developers/api#access-tokens
 * 2. Set it as an environment variable: export FIGMA_TOKEN=your_token_here
 * 3. Install dependencies: npm install node-fetch fs
 * 
 * Usage: node scripts/export-figma-images.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const FIGMA_FILE_KEY = '2ecLusqLKZRgdqybxEGymD';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;

// Node IDs for images (you'll need to find these in Figma by selecting elements and checking the URL)
const IMAGE_NODES = {
  // Project mockups - you'll need to find the actual node IDs
  'kfc-mockup': 'NODE_ID_HERE',
  'photon-mockup': 'NODE_ID_HERE',
  'cellebrite-mockup': 'NODE_ID_HERE',
  'semesence-mockup': 'NODE_ID_HERE',
  
  // Tech stack icons
  'design-tools-icon': 'NODE_ID_HERE',
  'development-icon': 'NODE_ID_HERE',
  'research-icon': 'NODE_ID_HERE',
  'ai-stack-icon': 'NODE_ID_HERE',
  
  // Profile photo
  'profile-photo': 'NODE_ID_HERE',
  
  // Social icons
  'linkedin-icon': 'NODE_ID_HERE',
  'dribbble-icon': 'NODE_ID_HERE',
  'twitter-icon': 'NODE_ID_HERE',
  'behance-icon': 'NODE_ID_HERE',
  
  // Brand logos
  'honeywell-logo': 'NODE_ID_HERE',
  'walgreens-logo': 'NODE_ID_HERE',
  'verizon-logo': 'NODE_ID_HERE',
  'cellebrite-logo': 'NODE_ID_HERE',
  'medcline-logo': 'NODE_ID_HERE',
  'kfc-logo': 'NODE_ID_HERE',
};

const OUTPUT_DIRS = {
  projects: 'src/assets/images/projects',
  'tech-stack': 'src/assets/icons/tech-stack',
  social: 'src/assets/icons/social',
  brands: 'public/images/brands',
  profile: 'src/assets/images',
};

// Create output directories
Object.values(OUTPUT_DIRS).forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function exportFigmaImages() {
  if (!FIGMA_TOKEN) {
    console.error('❌ FIGMA_TOKEN environment variable is not set!');
    console.log('Get your token from: https://www.figma.com/developers/api#access-tokens');
    process.exit(1);
  }

  const nodeIds = Object.values(IMAGE_NODES).filter(id => id !== 'NODE_ID_HERE');
  
  if (nodeIds.length === 0) {
    console.log('⚠️  Please update IMAGE_NODES with actual Figma node IDs');
    console.log('To find node IDs:');
    console.log('1. Open Figma file');
    console.log('2. Select an element');
    console.log('3. Check the URL - node-id parameter contains the ID');
    return;
  }

  const ids = nodeIds.join(',');
  const url = `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${ids}&format=png&scale=2`;

  try {
    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN,
      },
    });

    const data = await response.json();
    
    if (data.err) {
      console.error('❌ Error from Figma API:', data.err);
      return;
    }

    console.log('✅ Got image URLs from Figma');
    console.log('Downloading images...');

    // Download each image
    for (const [name, nodeId] of Object.entries(IMAGE_NODES)) {
      if (nodeId === 'NODE_ID_HERE') continue;
      
      const imageUrl = data.images[nodeId];
      if (!imageUrl) {
        console.warn(`⚠️  No image URL for ${name}`);
        continue;
      }

      let filepath;
      if (name.includes('mockup')) {
        filepath = path.join(OUTPUT_DIRS.projects, `${name}.png`);
      } else if (name.includes('icon') && !name.includes('social')) {
        filepath = path.join(OUTPUT_DIRS['tech-stack'], `${name.replace('-icon', '')}.png`);
      } else if (name.includes('social') || name.includes('linkedin') || name.includes('dribbble') || name.includes('twitter') || name.includes('behance')) {
        filepath = path.join(OUTPUT_DIRS.social, `${name.replace('-icon', '')}.png`);
      } else if (name.includes('logo')) {
        filepath = path.join(OUTPUT_DIRS.brands, `${name.replace('-logo', '')}.png`);
      } else if (name.includes('profile')) {
        filepath = path.join(OUTPUT_DIRS.profile, `${name}.png`);
      } else {
        filepath = path.join(OUTPUT_DIRS.profile, `${name}.png`);
      }

      try {
        await downloadImage(imageUrl, filepath);
        console.log(`✅ Downloaded ${name} to ${filepath}`);
      } catch (err) {
        console.error(`❌ Failed to download ${name}:`, err.message);
      }
    }

    console.log('\n✅ All images exported!');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Run if called directly
if (require.main === module) {
  exportFigmaImages();
}

module.exports = { exportFigmaImages };




