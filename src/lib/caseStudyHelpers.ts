import type { CaseStudy, ImageSection } from "../siteData";

/**
 * Get image sections by placement
 * @param study - The case study object
 * @param placement - The placement type to filter by
 * @returns Array of image sections matching the placement
 */
export const getImageSections = (
  study: CaseStudy | null,
  placement: ImageSection["placement"],
): ImageSection[] => {
  if (!study?.imageSections) return [];
  return study.imageSections.filter(
    (section) => section.placement === placement,
  );
};

