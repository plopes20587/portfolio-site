import type { CaseStudy, ImageSection } from "../types";

/**
 * Get image sections by placement
 * @param study - The case study object
 * @param placement - The placement type to filter by
 * @returns Array of image sections matching the placement
 */
export const getImageSections = (
  study: CaseStudy,
  placement: ImageSection["placement"],
): ImageSection[] => {
  return (study.imageSections ?? []).filter(
    (section) => section.placement === placement,
  );
};
