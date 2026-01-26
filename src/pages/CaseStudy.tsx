import { useParams } from "react-router-dom";
import { caseStudies } from "../siteData";
import { hasItems, hasValue, hasAny } from "../lib/helpers";
import CaseStudyHero from "../components/CaseStudyHero";
import ProjectMetadata from "../components/ProjectMetadata";
import ContentSection from "../components/ContentSection";
import TLDRSection from "../components/TLDRSection";
import ProjectNavigation from "../components/ProjectNavigation";
import ImageShowcase from "../components/ImageShowcase";
import SectionWrapper from "../components/SectionWrapper";
import BulletList from "../components/BulletList";
import NotFound from "../components/NotFound";
import ProblemCards from "../components/ProblemCards";
import ProblemImageGallery from "../components/ProblemImageGallery";
import RoleSection from "../components/RoleSection";
import ChallengeSection from "../components/ChallengeSection";
import DesignPrinciplesSection from "../components/DesignPrinciplesSection";
import SolutionSection from "../components/SolutionSection";
import { getImageSections } from "../lib/caseStudyHelpers";

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

  // Helper to render image sections by placement
  const renderImageSections = (
    placement:
      | "after-problem"
      | "after-process"
      | "after-solution"
      | "before-results",
  ) => {
    if (!study) return null;
    const sections = getImageSections(study, placement);
    return sections.map((section, index) => (
      <ImageShowcase
        key={`${placement}-${index}`}
        images={section.images}
        layout={section.layout}
        sectionLabel={section.sectionLabel}
        heading={section.heading}
      />
    ));
  };

  if (!study) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-ink">
      {/* 1. Hero Section */}
      <CaseStudyHero study={study} />

      {/* 2. Project Metadata */}
      <ProjectMetadata study={study} />

      {/* 3. TL;DR */}
      {hasItems(study.tldr) && <TLDRSection items={study.tldr} />}

      {/* 4. My Role + Core Contributions */}
      {hasValue(study.roleDescription) && (
        <RoleSection
          roleDescription={study.roleDescription}
          coreContributions={study.coreContributions}
        />
      )}

      {/* 5. The Challenge */}
      {hasValue(study.challenge) && (
        <ChallengeSection challenge={study.challenge} />
      )}

      {/* 6. The Problem - Combined with Images */}
      {hasItems(study.problemBreakdown) && (
        <SectionWrapper
          maxWidth="1320"
          customPadding="px-6 py-[80px] md:px-[60px]"
          className="justify-center"
        >
          <div className="flex flex-col items-center justify-start gap-[48px]">
            <ProblemCards
              items={study.problemBreakdown}
              sectionLabel="OBSTACLES"
              heading="The problem"
              showWrapper={false}
              showHeader={true}
            />

            {/* Images Section */}
            {study &&
              getImageSections(study, "after-problem").map((section, index) => (
                <ProblemImageGallery
                  key={`after-problem-${index}`}
                  images={section.images}
                />
              ))}
          </div>
        </SectionWrapper>
      )}

      {/* 8. Design Principles */}
      {hasItems(study.designPrinciples) && (
        <DesignPrinciplesSection principles={study.designPrinciples} />
      )}

      {/* 9. The Solution - New card-based layout */}
      {hasItems(study.solutionCards) && (
        <SolutionSection
          description={study.solution}
          cards={study.solutionCards}
          image={getImageSections(study, "after-solution")[0]}
          metrics={study.metrics}
        />
      )}

      {/* 9b. The Solution - Legacy bullet list layout (for case studies without solutionCards) */}
      {!hasItems(study.solutionCards) &&
        hasAny(study.solution, study.solutionPoints) && (
          <>
            <SectionWrapper maxWidth="900" padding="large">
              <ContentSection heading="The Solution">
                {hasValue(study.solution) && (
                  <p className="mb-6">{study.solution}</p>
                )}
                {hasItems(study.solutionPoints) && (
                  <BulletList items={study.solutionPoints} />
                )}
              </ContentSection>
            </SectionWrapper>
            {/* Images after solution section */}
            {renderImageSections("after-solution")}
          </>
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
