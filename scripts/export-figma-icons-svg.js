/**
 * Script to export SVG icons from Figma using the Figma REST API
 *
 * Prerequisites:
 * 1. Get a Figma Personal Access Token from: https://www.figma.com/developers/api#access-tokens
 * 2. Set it as an environment variable: export FIGMA_TOKEN=your_token_here
 *
 * Usage: node scripts/export-figma-icons-svg.js
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const FIGMA_FILE_KEY = "2ecLusqLKZRgdqybxEGymD";
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;

// Node IDs for problem breakdown icons
const ICON_NODES = {
  target: "1867-1255",
  shield: "1867-1266",
  lightning: "1867-1277",
};

const OUTPUT_DIR = "src/assets/icons/problem-breakdown";

// Create output directory
const fullPath = path.join(process.cwd(), OUTPUT_DIR);
if (!fs.existsSync(fullPath)) {
  fs.mkdirSync(fullPath, { recursive: true });
}

async function getNodeData(nodeId) {
  return new Promise((resolve, reject) => {
    const url = `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${nodeId}`;

    https
      .get(
        url,
        {
          headers: {
            "X-Figma-Token": FIGMA_TOKEN,
          },
        },
        (response) => {
          let data = "";

          response.on("data", (chunk) => {
            data += chunk;
          });

          response.on("end", () => {
            try {
              const json = JSON.parse(data);
              resolve(json);
            } catch (err) {
              reject(err);
            }
          });
        }
      )
      .on("error", (err) => {
        reject(err);
      });
  });
}

async function exportSVG(nodeId, filename) {
  return new Promise((resolve, reject) => {
    const url = `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${nodeId}&format=svg`;

    https
      .get(
        url,
        {
          headers: {
            "X-Figma-Token": FIGMA_TOKEN,
          },
        },
        (response) => {
          let data = "";

          response.on("data", (chunk) => {
            data += chunk;
          });

          response.on("end", () => {
            try {
              const json = JSON.parse(data);
              if (json.err) {
                reject(new Error(json.err));
                return;
              }

              const svgUrl = json.images[nodeId];
              if (!svgUrl) {
                reject(new Error(`No SVG URL for ${nodeId}`));
                return;
              }

              // Download the SVG
              https
                .get(svgUrl, (svgResponse) => {
                  let svgData = "";
                  svgResponse.on("data", (chunk) => {
                    svgData += chunk;
                  });
                  svgResponse.on("end", () => {
                    const filepath = path.join(fullPath, `${filename}.svg`);
                    fs.writeFileSync(filepath, svgData);
                    console.log(`✅ Exported ${filename}.svg`);
                    resolve();
                  });
                })
                .on("error", reject);
            } catch (err) {
              reject(err);
            }
          });
        }
      )
      .on("error", reject);
  });
}

async function exportFigmaIcons() {
  if (!FIGMA_TOKEN) {
    console.error("❌ FIGMA_TOKEN environment variable is not set!");
    console.log(
      "Get your token from: https://www.figma.com/developers/api#access-tokens"
    );
    process.exit(1);
  }

  console.log("Exporting SVG icons from Figma...\n");

  for (const [name, nodeId] of Object.entries(ICON_NODES)) {
    try {
      await exportSVG(nodeId, name);
    } catch (err) {
      console.error(`❌ Failed to export ${name}:`, err.message);
    }
  }

  console.log("\n✅ All icons exported!");
}

// Run if called directly
if (require.main === module) {
  exportFigmaIcons();
}

module.exports = { exportFigmaIcons };
