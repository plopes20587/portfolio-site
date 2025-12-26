import { useParams } from "react-router-dom";
import { caseStudies } from "../siteData";
import CaseStudyHero from "../components/CaseStudyHero";
import ProjectMetadata from "../components/ProjectMetadata";
import ContentSection from "../components/ContentSection";
import TLDRSection from "../components/TLDRSection";
import ProjectNavigation from "../components/ProjectNavigation";
import MetricsGrid from "../components/MetricsGrid";
import ImageShowcase from "../components/ImageShowcase";
import { Link } from "react-router-dom";

// Arrow icon for back button
const ArrowLeftIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8333 10H4.16667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 15.8333L4.16667 10L10 4.16667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Bullet list component for reuse
const BulletList = ({ items }: { items: string[] }) => (
  <ul className="mt-4 flex flex-col gap-2">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
        <span className="font-body text-[18px] leading-[1.6] text-white/80">
          {item}
        </span>
      </li>
    ))}
  </ul>
);

// Import SVG icons from Figma exports (as raw text to preserve currentColor support)
// @ts-ignore - Vite handles ?raw imports
import targetIconSvg from "../assets/icons/problem-breakdown/target.svg?raw";
// @ts-ignore - Vite handles ?raw imports
import shieldIconSvg from "../assets/icons/problem-breakdown/shield.svg?raw";
// @ts-ignore - Vite handles ?raw imports
import lightningIconSvg from "../assets/icons/problem-breakdown/lightning.svg?raw";

// Problem breakdown icon components - Icons imported from Figma exports
const ProblemIcon = ({ icon }: { icon: string }) => {
  const getIconSvg = (): string | null => {
    switch (icon) {
      case "target":
        return targetIconSvg as string;
      case "shield":
        return shieldIconSvg as string;
      case "lightning":
        return lightningIconSvg as string;
      default:
        return null;
    }
  };

  const svgContent = getIconSvg();
  if (svgContent) {
    return (
      <div
        className="w-6 h-6 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:text-current"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    );
  }

  // Fallback to hardcoded icons for other cases
  switch (icon) {
    case "alert":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chart":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3V21H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 16L12 11L16 15L21 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 10H16V15H21V10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "users":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8531 15.3516 20 15.13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const studyIndex = caseStudies.findIndex((item) => item.slug === slug);
  const study = studyIndex !== -1 ? caseStudies[studyIndex] : null;

  // Get previous and next projects for navigation
  const previousProject =
    studyIndex > 0 ? caseStudies[studyIndex - 1] : undefined;
  const nextProject =
    studyIndex < caseStudies.length - 1
      ? caseStudies[studyIndex + 1]
      : undefined;

  // Helper to get image sections by placement
  const getImageSections = (placement: string) =>
    study?.imageSections?.filter(
      (section) => section.placement === placement
    ) || [];

  if (!study) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ink px-6">
        <h1 className="font-display text-[48px] text-white">
          Case Study Not Found
        </h1>
        <p className="font-body text-[18px] text-white/70">
          The case study you're looking for doesn't exist.
        </p>
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 rounded-[4px] bg-primary px-6 py-3 font-body text-[16px] font-medium text-white transition hover:bg-primary/90"
        >
          <ArrowLeftIcon />
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink">
      {/* 1. Overview (Hero Section) */}
      <CaseStudyHero study={study} />

      {/* Project Metadata (Role, Client, Timeline, Platforms) */}
      <ProjectMetadata study={study} />

      {/* 2. TL;DR */}
      {study.tldr && study.tldr.length > 0 && (
        <TLDRSection items={study.tldr} summary={study.tldrSummary} />
      )}

      {/* 3. The Problem */}
      {study.challenge && (
        <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
          <div className="mx-auto max-w-[1320px]">
            {/* Section Label and Heading - matching Figma design */}
            <div className="mb-12">
              <span className="mb-4 inline-block font-body text-[14px] font-semibold uppercase tracking-[0.1em] text-primary">
                OBSTACLES
              </span>
              <h2 className="font-display text-[32px] font-normal leading-[1.2] text-white uppercase md:text-[42px]">
                THE PROBLEM
              </h2>
            </div>
            {/* 3-Container Layout or Fallback to Paragraph */}
            {study.problemBreakdown && study.problemBreakdown.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-3">
                {study.problemBreakdown.map((problem, index) => (
                  <div
                    key={index}
                    className="group flex flex-col gap-4 rounded-[16px] border border-[#1D293D] bg-[#0F172B]/40 p-6 backdrop-blur-sm transition hover:border-primary/30 hover:bg-[#0F172B]/60"
                  >
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <ProblemIcon icon={problem.icon} />
                    </div>
                    {/* Title */}
                    <h3 className="font-display text-[20px] font-semibold leading-[1.2] text-white">
                      {problem.title}
                    </h3>
                    {/* Description */}
                    <p className="font-body text-[16px] font-normal leading-[1.5] text-white/80">
                      {problem.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="max-w-[900px]">
                <div className="font-body text-[18px] font-normal leading-[1.6] text-white/80">
                  <p>{study.challenge}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. My Role */}
      {study.roleDescription && (
        <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
          <div className="mx-auto max-w-[900px]">
            <ContentSection heading="My Role">
              <p>{study.roleDescription}</p>
            </ContentSection>
          </div>
        </section>
      )}

      {/* Images after problem/role section */}
      {getImageSections("after-problem").map((section, index) => (
        <ImageShowcase
          key={`after-problem-${index}`}
          images={section.images}
          layout={section.layout}
          sectionLabel={section.sectionLabel}
          heading={section.heading}
        />
      ))}

      {/* 5. Discovery and Key Insights */}
      {(study.discoveryInputs || study.discoveryInsights) && (
        <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
          <div className="mx-auto max-w-[900px]">
            <ContentSection heading="Discovery and Key Insights">
              {study.discoveryInputs && study.discoveryInputs.length > 0 && (
                <div className="mb-8">
                  <h4 className="mb-4 font-body text-[14px] font-semibold uppercase tracking-wider text-primary">
                    Inputs
                  </h4>
                  <BulletList items={study.discoveryInputs} />
                </div>
              )}
              {study.discoveryInsights &&
                study.discoveryInsights.length > 0 && (
                  <div className="mb-6">
                    <h4 className="mb-4 font-body text-[14px] font-semibold uppercase tracking-wider text-primary">
                      Key Insights
                    </h4>
                    <BulletList items={study.discoveryInsights} />
                  </div>
                )}
              {study.discoverySummary && (
                <p className="mt-6 font-body text-[18px] leading-[1.6] text-white/80">
                  {study.discoverySummary}
                </p>
              )}
            </ContentSection>
          </div>
        </section>
      )}

      {/* Images after discovery section */}
      {getImageSections("after-process").map((section, index) => (
        <ImageShowcase
          key={`after-process-${index}`}
          images={section.images}
          layout={section.layout}
          sectionLabel={section.sectionLabel}
          heading={section.heading}
        />
      ))}

      {/* 6. Design Approach */}
      {(study.designApproach || study.designApproachPoints) && (
        <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
          <div className="mx-auto max-w-[900px]">
            <ContentSection heading="Design Approach">
              {study.designApproach && (
                <p className="mb-6">{study.designApproach}</p>
              )}
              {study.designApproachPoints &&
                study.designApproachPoints.length > 0 && (
                  <BulletList items={study.designApproachPoints} />
                )}
            </ContentSection>
          </div>
        </section>
      )}

      {/* 7. The Solution */}
      {(study.solution || study.solutionPoints) && (
        <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
          <div className="mx-auto max-w-[900px]">
            <ContentSection heading="The Solution">
              {study.solution && <p className="mb-6">{study.solution}</p>}
              {study.solutionPoints && study.solutionPoints.length > 0 && (
                <BulletList items={study.solutionPoints} />
              )}
            </ContentSection>
          </div>
        </section>
      )}

      {/* Images after solution section */}
      {getImageSections("after-solution").map((section, index) => (
        <ImageShowcase
          key={`after-solution-${index}`}
          images={section.images}
          layout={section.layout}
          sectionLabel={section.sectionLabel}
          heading={section.heading}
        />
      ))}

      {/* 8. Validation */}
      {study.validation && (
        <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
          <div className="mx-auto max-w-[900px]">
            <ContentSection heading="Validation">
              <p>{study.validation}</p>
            </ContentSection>
          </div>
        </section>
      )}

      {/* 9. Impact (Metrics) */}
      {study.metrics && study.metrics.length > 0 && (
        <MetricsGrid
          metrics={study.metrics}
          sectionLabel="RESULTS"
          heading="Impact"
        />
      )}

      {/* Results summary text */}
      {study.results && (
        <section className="px-6 py-8 md:px-[60px]">
          <div className="mx-auto max-w-[900px]">
            <p className="text-center font-body text-[18px] text-white/70">
              {study.results}
            </p>
          </div>
        </section>
      )}

      {/* Images before What I Learned */}
      {getImageSections("before-results").map((section, index) => (
        <ImageShowcase
          key={`before-results-${index}`}
          images={section.images}
          layout={section.layout}
          sectionLabel={section.sectionLabel}
          heading={section.heading}
        />
      ))}

      {/* 10. What I Learned */}
      {study.whatILearned && (
        <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
          <div className="mx-auto max-w-[900px]">
            <ContentSection heading="What I Learned">
              <p>{study.whatILearned}</p>
            </ContentSection>
          </div>
        </section>
      )}

      {/* Fallback to old sections structure for backward compatibility */}
      {!study.discoveryInputs &&
        !study.designApproach &&
        study.sections &&
        study.sections.length > 0 && (
          <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
            <div className="mx-auto flex max-w-[900px] flex-col gap-16">
              {study.sections.map((section) => (
                <ContentSection key={section.heading} heading={section.heading}>
                  <p>{section.copy}</p>
                </ContentSection>
              ))}
            </div>
          </section>
        )}

      {/* Project Navigation - Previous/Next */}
      <ProjectNavigation
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </div>
  );
};

export default CaseStudyPage;
