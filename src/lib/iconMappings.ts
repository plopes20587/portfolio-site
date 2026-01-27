/**
 * Consolidated icon mappings
 * Centralizes all icon imports used across the application
 */

// Design principle icons (cyan stroke color #38EFE9)
import sparkleCursorIcon from "../assets/icons/sparkle-cursor.svg";
import arrowUpCircleIcon from "../assets/icons/arrow-up-circle.svg";
import layoutGridIcon from "../assets/icons/layout-grid.svg";
import mobileIcon from "../assets/icons/mobile.svg";

// Solution/feature icons
import targetIcon from "../assets/icons/target.svg";
import shieldIcon from "../assets/icons/shield.svg";
import lightningIcon from "../assets/icons/lightning.svg";
import bridgeLinkIcon from "../assets/icons/bridge-link.svg";
import rulesIcon from "../assets/icons/rules.svg";
import scaleIcon from "../assets/icons/scale.svg";
import rhythmIcon from "../assets/icons/rhythm.svg";

// UI icons
import checkIcon from "../assets/icons/check.svg";
import selectedIcon from "../assets/icons/selected.svg";
import closeIcon from "../assets/icons/close.svg";
import menuIcon from "../assets/icons/menu.svg";
import externalLinkIcon from "../assets/icons/external-link.svg";
import arrowLeftIcon from "../assets/icons/arrow-left.svg";
import arrowRightIcon from "../assets/icons/arrow-right.svg";

// Social icons
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import emailIcon from "../assets/icons/email.svg";

// Stats/metrics icons
import yearsExperienceIcon from "../assets/icons/years-experience.svg";
import projectsCompletedIcon from "../assets/icons/projects-completed.svg";
import happyClientsIcon from "../assets/icons/happy-clients.svg";
import productsLaunchedIcon from "../assets/icons/products-launched.svg";

// Role/process icons
import roleIcon from "../assets/icons/role.svg";
import timelineIcon from "../assets/icons/timeline.svg";
import clientIcon from "../assets/icons/client.svg";
import platformIcon from "../assets/icons/platform.svg";

// Skills icons
import researchIcon from "../assets/icons/research.svg";
import designToolsIcon from "../assets/icons/design-tools.svg";
import developmentIcon from "../assets/icons/development.svg";
import aiStackIcon from "../assets/icons/ai-stack.svg";

/**
 * Maps icon names to imported SVG assets
 * Used across the application for consistent icon access
 */
export const icons: Record<string, string> = {
  // Design principle icons
  "sparkle-cursor": sparkleCursorIcon,
  "arrow-up-circle": arrowUpCircleIcon,
  "layout-grid": layoutGridIcon,
  mobile: mobileIcon,

  // Solution/feature icons
  "bridge-link": bridgeLinkIcon,
  rhythm: rhythmIcon,
  scale: scaleIcon,
  rules: rulesIcon,
  target: targetIcon,
  shield: shieldIcon,
  lightning: lightningIcon,

  // UI icons
  check: checkIcon,
  selected: selectedIcon,
  close: closeIcon,
  menu: menuIcon,
  "external-link": externalLinkIcon,
  "arrow-left": arrowLeftIcon,
  "arrow-right": arrowRightIcon,

  // Social icons
  github: githubIcon,
  linkedin: linkedinIcon,
  instagram: instagramIcon,
  email: emailIcon,

  // Stats/metrics icons
  "years-experience": yearsExperienceIcon,
  "projects-completed": projectsCompletedIcon,
  "happy-clients": happyClientsIcon,
  "products-launched": productsLaunchedIcon,

  // Role/process icons
  role: roleIcon,
  timeline: timelineIcon,
  client: clientIcon,
  platform: platformIcon,

  // Skills icons
  research: researchIcon,
  "design-tools": designToolsIcon,
  development: developmentIcon,
  "ai-stack": aiStackIcon,
};

// Legacy alias for backward compatibility
export const featureIcons = icons;

/**
 * Get the icon source URL for a given icon name
 * @param iconName - The icon name
 * @returns The imported SVG path or null if not found
 */
export const getIconSrc = (iconName: string): string | null => {
  return icons[iconName] || null;
};
