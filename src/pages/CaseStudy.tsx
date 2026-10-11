import { useParams } from "react-router-dom";
import { caseStudies } from "../siteData";
import { hasItems, hasValue } from "../lib/helpers";
import { getImageSections } from "../lib/caseStudyHelpers";
import CaseStudyHero from "../components/CaseStudyHero";
import ProjectMetadata from "../components/ProjectMetadata";
import TLDRSection from "../components/TLDRSection";
import RoleSection from "../components/RoleSection";
import ChallengeSection from "../components/ChallengeSection";
import ProblemSection from "../components/ProblemSection";
import ApproachSection from "../components/ApproachSection";
import DesignPrinciplesSection from "../components/DesignPrinciplesSection";
import ImageShowcase from "../components/ImageShowcase";
import SolutionSection from "../components/SolutionSection";
import ProjectNavigation from "../components/ProjectNavigation";
import NotFound from "../components/NotFound";

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const studyIndex = caseStudies.findIndex((item) => item.slug === slug);

  if (studyIndex === -1) return <NotFound />;

  const study = caseStudies[studyIndex];
  const previousProject = caseStudies[studyIndex - 1];
  const nextProject = caseStudies[studyIndex + 1];

  return (
    <div className="min-h-screen bg-ink">
      {/* 1. Hero */}
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

      {/* 6. The Problem, with after-problem images */}
      {hasItems(study.problemBreakdown) && (
        <ProblemSection
          items={study.problemBreakdown}
          imageSections={getImageSections(study, "after-problem")}
        />
      )}

      {/* 7. Approach, or Design Principles for studies not yet migrated */}
      <ApproachSection steps={study.approach ?? []} />
      <DesignPrinciplesSection principles={study.designPrinciples ?? []} />

      {/* 7b. Design artifacts (e.g. final mobile mockup) before the solution */}
      {getImageSections(study, "after-process").map((section, index) => (
        <ImageShowcase
          key={`after-process-${index}`}
          images={section.images}
          layout={section.layout}
          sectionLabel={section.sectionLabel}
          heading={section.heading}
          customPadding={section.customPadding}
          imageMaxWidth={section.imageMaxWidth}
        />
      ))}

      {/* 8. The Solution + metrics */}
      {hasItems(study.solutionCards) && (
        <SolutionSection
          description={study.solution}
          cards={study.solutionCards}
          image={getImageSections(study, "after-solution")[0]}
          metrics={study.metrics}
          metricsSubtitle={study.metricsSubtitle}
        />
      )}

      {/* Previous / Next project */}
      <ProjectNavigation
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </div>
  );
};

export default CaseStudyPage;
