import { useParams } from "react-router-dom";
import { caseStudies } from "../siteData";
import CaseStudyHero from "../components/CaseStudyHero";
import ProjectMetadata from "../components/ProjectMetadata";
import ContentSection from "../components/ContentSection";
import TLDRSection from "../components/TLDRSection";
import ProjectNavigation from "../components/ProjectNavigation";
import MetricsGrid from "../components/MetricsGrid";
import ImageShowcase from "../components/ImageShowcase";
import ResultsSummary from "../components/ResultsSummary";
import SectionWrapper from "../components/SectionWrapper";
import BulletList from "../components/BulletList";
import { ArrowLeftIcon } from "../components/icons/ArrowIcons";
import { Link } from "react-router-dom";
import targetIcon from "../assets/icons/target.svg";
import shieldIcon from "../assets/icons/shield.svg";
import lightningIcon from "../assets/icons/lightning.svg";

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
      (section) => section.placement === placement,
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

      {/* 3. The Problem - Combined with Images */}
      {study.challenge && (
        <section className="flex flex-col items-center justify-center px-6 py-[80px] md:px-[60px]">
          <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-[48px]">
            {/* Section Header */}
            {study.problemBreakdown && study.problemBreakdown.length > 0 ? (
              <>
                <div className="flex w-full flex-col items-center gap-[8px]">
                  <span className="font-body text-[32px] font-normal uppercase leading-[36px] text-primary">
                    OBSTACLES
                  </span>
                  <h2 className="font-display text-[48px] font-normal leading-[52px] text-white">
                    The problem
                  </h2>
                </div>

                {/* Problem Cards */}
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                  {study.problemBreakdown.map((item, index) => (
                    <div
                      key={index}
                      className="flex h-[238px] flex-col gap-4 rounded-[14px] border border-[#1D293D] bg-[rgba(15,23,43,0.4)] p-6"
                    >
                      {/* Icon */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(127,90,240,0.25)] bg-[rgba(127,90,240,0.25)] text-primary">
                        {item.icon === "target" && (
                          <img src={targetIcon} alt="" className="h-6 w-6" />
                        )}
                        {item.icon === "shield" && (
                          <img src={shieldIcon} alt="" className="h-6 w-6" />
                        )}
                        {item.icon === "lightning" && (
                          <img src={lightningIcon} alt="" className="h-6 w-6" />
                        )}
                      </div>
                      {/* Title */}
                      <h3 className="font-body text-[16px] font-normal leading-[16px] tracking-[-0.3125px] text-white">
                        {item.title}
                      </h3>
                      {/* Description */}
                      <p className="font-body text-[16px] font-normal leading-[26px] tracking-[-0.3125px] text-[#c3c3c3]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Images Section */}
                {getImageSections("after-problem").map((section, index) => (
                  <div
                    key={`after-problem-${index}`}
                    className="flex w-full flex-col items-start justify-center gap-6 md:flex-row md:gap-[70px]"
                  >
                    {section.images.map((image, imgIndex) => (
                      <figure key={imgIndex} className="group overflow-hidden">
                        <div className="overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                        </div>
                        {image.caption && (
                          <figcaption className="px-6 py-4">
                            <p className="font-body text-[14px] text-white/70">
                              {image.caption}
                            </p>
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="mb-12">
                  <span className="mb-4 inline-block font-body text-[14px] font-semibold uppercase tracking-[0.1em] text-primary">
                    OBSTACLES
                  </span>
                  <h2 className="font-display text-[32px] font-normal uppercase leading-[1.2] text-white md:text-[42px]">
                    THE PROBLEM
                  </h2>
                </div>
                <div className="max-w-[900px]">
                  <div className="font-body text-[18px] font-normal leading-[1.6] text-white/80">
                    <p>{study.challenge}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      )}
      {/* 4. My Role */}
      {study.roleDescription && (
        <SectionWrapper maxWidth="1320" padding="large">
          <div className="flex flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center justify-center rounded-[14px] border border-[rgba(251,44,54,0.2)] bg-[rgba(2,6,24,0.8)] p-[48px]">
              <div className="flex w-full max-w-[1080px] items-center gap-[32px]">
                {/* Large question mark icon */}
                <div className="flex h-24 w-[52.641px] shrink-0 items-center justify-center">
                  <p className="font-display text-[96px] leading-[96px] text-[#1d293d]">
                    ?
                  </p>
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col gap-[24px]">
                  <h2 className="font-body text-[36px] font-normal leading-[36px] text-white">
                    My role
                  </h2>
                  <p className="font-body text-[16px] font-normal leading-[24px] text-white">
                    {study.roleDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      )}
      {/* 5. Discovery and Key Insights */}
      {(study.discoveryInputs || study.discoveryInsights) && (
        <SectionWrapper maxWidth="900" padding="large">
          <ContentSection heading="Discovery and Key Insights">
            {study.discoveryInputs && study.discoveryInputs.length > 0 && (
              <div className="mb-8">
                <h4 className="mb-4 font-body text-[14px] font-semibold uppercase tracking-wider text-primary">
                  Inputs
                </h4>
                <BulletList items={study.discoveryInputs} />
              </div>
            )}
            {study.discoveryInsights && study.discoveryInsights.length > 0 && (
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
        </SectionWrapper>
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
        <SectionWrapper maxWidth="900" padding="large">
          <ContentSection heading="Design Approach">
            {study.designApproach && (
              <p className="mb-6">{study.designApproach}</p>
            )}
            {study.designApproachPoints &&
              study.designApproachPoints.length > 0 && (
                <BulletList items={study.designApproachPoints} />
              )}
          </ContentSection>
        </SectionWrapper>
      )}

      {/* 7. The Solution */}
      {(study.solution || study.solutionPoints) && (
        <SectionWrapper maxWidth="900" padding="large">
          <ContentSection heading="The Solution">
            {study.solution && <p className="mb-6">{study.solution}</p>}
            {study.solutionPoints && study.solutionPoints.length > 0 && (
              <BulletList items={study.solutionPoints} />
            )}
          </ContentSection>
        </SectionWrapper>
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
        <SectionWrapper maxWidth="900" padding="large">
          <ContentSection heading="Validation">
            <p>{study.validation}</p>
          </ContentSection>
        </SectionWrapper>
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
      <ResultsSummary text={study.results || ""} />

      {/* 10. What I Learned */}
      {study.whatILearned && (
        <SectionWrapper maxWidth="900" padding="large">
          <ContentSection heading="What I Learned">
            <p>{study.whatILearned}</p>
          </ContentSection>
        </SectionWrapper>
      )}

      {/* Fallback to old sections structure for backward compatibility */}
      {!study.discoveryInputs &&
        !study.designApproach &&
        study.sections &&
        study.sections.length > 0 && (
          <SectionWrapper maxWidth="900" padding="large">
            <div className="flex flex-col gap-16">
              {study.sections.map((section) => (
                <ContentSection key={section.heading} heading={section.heading}>
                  <p>{section.copy}</p>
                </ContentSection>
              ))}
            </div>
          </SectionWrapper>
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
