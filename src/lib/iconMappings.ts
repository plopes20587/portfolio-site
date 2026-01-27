/**
 * Consolidated icon mappings for feature/solution cards
 * Centralizes icon imports used across multiple components
 */

// Figma design principle icons (cyan stroke color #38EFE9)
import sparkleCursorIcon from "../assets/icons/sparkle-cursor.svg";
import arrowUpCircleIcon from "../assets/icons/arrow-up-circle.svg";
import layoutGridIcon from "../assets/icons/layout-grid.svg";
import mobileIcon from "../assets/icons/mobile.svg";

// Solution/feature icons
import targetIcon from "../assets/icons/target.svg";
import shieldIcon from "../assets/icons/shield.svg";
import lightningIcon from "../assets/icons/lightning.svg";

/**
 * Maps icon names from siteData to imported SVG assets
 * Used by DesignPrinciplesSection and SolutionSection
 */
export const featureIcons: Record<string, string> = {
  // Design principle icons
  "sparkle-cursor": sparkleCursorIcon,
  "arrow-up-circle": arrowUpCircleIcon,
  "layout-grid": layoutGridIcon,
  mobile: mobileIcon,
  // Solution/feature icons
  target: targetIcon,
  shield: shieldIcon,
  lightning: lightningIcon,
};

/**
 * Get the icon source URL for a given icon name
 * @param iconName - The icon name from siteData
 * @returns The imported SVG path or null if not found
 */
export const getIconSrc = (iconName: string): string | null => {
  return featureIcons[iconName] || null;
};
