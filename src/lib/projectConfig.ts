// Import project thumbnail images
import kfcThumbnail from "../assets/images/kfc-pdp-redesign/KFC Thumbnail.png";
import verizonThumbnail from "../assets/images/verizon-straight-talk-7day/ST-thumbnail.jpg";
import cellebriteThumbnail from "../assets/images/cellebrite-website/Cellebrite Thumbnail.png";
import senegenceThumbnail from "../assets/images/senegence-redesign/SeneGence Thumbnail.png";

/**
 * Project configuration type
 * Centralizes all project-specific styling and assets
 */
export type ProjectConfig = {
  /** Gradient start color for card/hero backgrounds */
  gradientFrom: string;
  /** Gradient end color for card/hero backgrounds */
  gradientTo: string;
  /** Grid pattern overlay image URL */
  gridPatternUrl: string;
  /** Project thumbnail image */
  thumbnail: string;
};

/**
 * Default project configuration fallback
 */
const DEFAULT_CONFIG: ProjectConfig = {
  gradientFrom: "#541db9",
  gradientTo: "#7f5af0",
  gridPatternUrl: "/images/grid-pattern.png",
  thumbnail: "",
};

/**
 * Centralized project configuration mapping
 * Single source of truth for all project styling and assets
 */
export const projectConfigs: Record<string, ProjectConfig> = {
  "kfc-pdp-redesign": {
    gradientFrom: "#541db9",
    gradientTo: "#7f5af0",
    gridPatternUrl: "/images/grid-pattern.png",
    thumbnail: kfcThumbnail,
  },
  "verizon-straight-talk-7day": {
    gradientFrom: "#E31E24",
    gradientTo: "#C8102E",
    gridPatternUrl: "/images/grid-pattern.png",
    thumbnail: verizonThumbnail,
  },
  "cellebrite-website": {
    gradientFrom: "#ffbe51",
    gradientTo: "#b44d08",
    gridPatternUrl: "/images/grid-pattern.png",
    thumbnail: cellebriteThumbnail,
  },
  "senegence-redesign": {
    gradientFrom: "#0052cc",
    gradientTo: "#0066ff",
    gridPatternUrl: "/images/grid-pattern.png",
    thumbnail: senegenceThumbnail,
  },
};

/**
 * Get project configuration by slug
 * Returns default config if project not found
 */
export const getProjectConfig = (slug: string): ProjectConfig => {
  return projectConfigs[slug] || DEFAULT_CONFIG;
};

/**
 * Get project thumbnail by slug
 */
export const getProjectThumbnail = (slug: string): string => {
  return getProjectConfig(slug).thumbnail;
};

/**
 * Get project gradient colors by slug
 */
export const getProjectGradient = (slug: string): { from: string; to: string } => {
  const config = getProjectConfig(slug);
  return { from: config.gradientFrom, to: config.gradientTo };
};



