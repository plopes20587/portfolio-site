// Import project thumbnail images
import kfcThumbnail from "../assets/images/kfc-pdp-redesign/KFC Thumbnail.png";
import verizonThumbnail from "../assets/images/verizon-straight-talk-7day/ST Thumbnail.png";
import cellebriteThumbnail from "../assets/images/cellebrite-website/Cellebrite-CardThumbnail.png";
import senegenceThumbnail from "../assets/images/senegence-redesign/SG-CardThumbnail.png";
import verizonHeroImage from "../assets/images/verizon-straight-talk-7day/ST-7Day-CaseStudyHero.png";
import kfcHeroImage from "../assets/images/kfc-pdp-redesign/KFC-CaseStudyHero.png";
import senegenceHeroImage from "../assets/images/senegence-redesign/SG-CaseStudyHero.png";
import cellebriteHeroImage from "../assets/images/cellebrite-website/Cellebrite-CaseStudyHero.png";

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
  /** Project thumbnail image — used by CaseStudyCard */
  thumbnail: string;
  /** Hero image — used by CaseStudyHero. Falls back to thumbnail if not set */
  heroImage?: string;
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
    gradientFrom: "#191230",
    gradientTo: "#7F5AF0",
    gridPatternUrl: "/images/grid-pattern.png",
    thumbnail: kfcThumbnail,
    heroImage: kfcHeroImage,
  },
  "verizon-straight-talk-7day": {
    gradientFrom: "#064E3B",
    gradientTo: "#10B981",
    gridPatternUrl: "/images/grid-pattern.png",
    thumbnail: verizonThumbnail,
    heroImage: verizonHeroImage,
  },
  "cellebrite-website": {
    gradientFrom: "#7C2D12",
    gradientTo: "#F97316",
    gridPatternUrl: "/images/grid-pattern.png",
    thumbnail: cellebriteThumbnail,
    heroImage: cellebriteHeroImage,
  },
  "senegence-redesign": {
    gradientFrom: "#002A30",
    gradientTo: "#00D3F2",
    gridPatternUrl: "/images/grid-pattern.png",
    thumbnail: senegenceThumbnail,
    heroImage: senegenceHeroImage,
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
 * Get project thumbnail by slug — for use in CaseStudyCard
 */
export const getProjectThumbnail = (slug: string): string => {
  return getProjectConfig(slug).thumbnail;
};

/**
 * Get project hero image by slug — for use in CaseStudyHero.
 * Falls back to thumbnail when no dedicated heroImage is configured.
 */
export const getProjectHeroImage = (slug: string): string => {
  const config = getProjectConfig(slug);
  return config.heroImage ?? config.thumbnail;
};

/**
 * Get project gradient colors by slug
 */
export const getProjectGradient = (
  slug: string,
): { from: string; to: string } => {
  const config = getProjectConfig(slug);
  return { from: config.gradientFrom, to: config.gradientTo };
};
