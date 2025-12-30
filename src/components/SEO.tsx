import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { caseStudies, siteMeta } from "../siteData";

/**
 * SEO component that updates meta tags and structured data dynamically
 * Handles both homepage and case study pages
 */
const SEO = () => {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    // Get current page data
    let title = siteMeta.title;
    let description = siteMeta.description;
    const ogImage = siteMeta.ogImage || "/og.png";
    const url = window.location.href;

    // Check if this is a case study page
    const caseStudyMatch = pathname.match(/^\/case\/(.+)$/);
    if (caseStudyMatch) {
      const slug = caseStudyMatch[1];
      const study = caseStudies.find((s) => s.slug === slug);
      if (study) {
        title = `${study.title} · ${siteMeta.title}`;
        description = study.blurb || description;
      }
    }

    // Update meta tags
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update OpenGraph tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateOGTag("og:title", title);
    updateOGTag("og:description", description);
    updateOGTag("og:image", ogImage);
    updateOGTag("og:url", url);
    updateOGTag("og:type", "website");

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateTwitterTag("twitter:card", "summary_large_image");
    updateTwitterTag("twitter:title", title);
    updateTwitterTag("twitter:description", description);
    updateTwitterTag("twitter:image", ogImage);

    // Add structured data (JSON-LD)
    let structuredData = document.querySelector(
      'script[type="application/ld+json"]',
    );
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.setAttribute("type", "application/ld+json");
      document.head.appendChild(structuredData);
    }

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": caseStudyMatch ? "CreativeWork" : "Person",
      name: caseStudyMatch
        ? caseStudies.find((s) => s.slug === caseStudyMatch[1])?.title || title
        : "Patrick Lopes",
      jobTitle: "Senior Product Designer",
      description: description,
      url: url,
      image: ogImage,
      ...(caseStudyMatch && {
        "@type": "CreativeWork",
        creator: {
          "@type": "Person",
          name: "Patrick Lopes",
        },
      }),
    };

    structuredData.textContent = JSON.stringify(jsonLd);
  }, [pathname]);

  return null;
};

export default SEO;
