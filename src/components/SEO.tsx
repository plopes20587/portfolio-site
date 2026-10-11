import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { caseStudies, siteMeta } from "../siteData";

/** Find a <meta> tag by attribute (e.g. property="og:title"), creating it if missing, then set its content. */
const upsertMetaTag = (
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  let tag = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

/**
 * SEO component that updates meta tags and structured data dynamically
 * Handles both homepage and case study pages
 */
const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const slug = pathname.match(/^\/case\/(.+)$/)?.[1];
    const study = slug
      ? caseStudies.find((item) => item.slug === slug)
      : undefined;

    const title = study ? `${study.title} · ${siteMeta.title}` : siteMeta.title;
    const description = study?.blurb || siteMeta.description;
    const ogImage = siteMeta.ogImage;
    const url = window.location.href;

    document.title = title;
    upsertMetaTag("name", "description", description);

    upsertMetaTag("property", "og:title", title);
    upsertMetaTag("property", "og:description", description);
    upsertMetaTag("property", "og:image", ogImage);
    upsertMetaTag("property", "og:url", url);
    upsertMetaTag("property", "og:type", "website");

    upsertMetaTag("name", "twitter:card", "summary_large_image");
    upsertMetaTag("name", "twitter:title", title);
    upsertMetaTag("name", "twitter:description", description);
    upsertMetaTag("name", "twitter:image", ogImage);

    // Structured data (JSON-LD): a CreativeWork for case studies, a Person for everything else
    let structuredData = document.querySelector(
      'script[type="application/ld+json"]',
    );
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.setAttribute("type", "application/ld+json");
      document.head.appendChild(structuredData);
    }

    const author = { "@type": "Person", name: "Patrick Lopes" };
    const jsonLd = study
      ? {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: study.title,
          description,
          url,
          image: ogImage,
          creator: author,
        }
      : {
          "@context": "https://schema.org",
          ...author,
          jobTitle: "Senior Product Designer",
          description,
          url,
          image: ogImage,
        };

    structuredData.textContent = JSON.stringify(jsonLd);
  }, [pathname]);

  return null;
};

export default SEO;
