import { Link } from "react-router-dom";
import type { CaseStudy } from "../types";
import SectionWrapper from "./SectionWrapper";
import { icons } from "../lib/iconMappings";

type ProjectNavigationProps = {
  previousProject?: CaseStudy;
  nextProject?: CaseStudy;
};

type ProjectNavCardProps = {
  project?: CaseStudy;
  direction: "previous" | "next";
};

const ProjectNavCard = ({ project, direction }: ProjectNavCardProps) => {
  // Keep the empty grid cell on desktop so "Next" stays in the right column
  if (!project) return <div className="hidden md:block" />;

  const isNext = direction === "next";
  const arrow = (
    <img
      src={isNext ? icons["arrow-right"] : icons["arrow-left"]}
      alt=""
      className="h-5 w-5"
    />
  );

  return (
    <Link
      to={`/case/${project.slug}`}
      className={`hover:border-primary/30 group flex flex-col gap-2 rounded-16 border border-surface-card-border bg-surface-card p-6 transition hover:bg-white/[0.08] ${isNext ? "text-right" : ""}`}
    >
      <div
        className={`text-text-body/50 flex items-center gap-2 ${isNext ? "justify-end" : ""}`}
      >
        {!isNext && arrow}
        <span className="text-h4-small uppercase">
          {isNext ? "Next" : "Previous"}
        </span>
        {isNext && arrow}
      </div>
      <h3 className="transition group-hover:text-primary">{project.title}</h3>
      <p className="line-clamp-2 text-white/60">{project.blurb}</p>
    </Link>
  );
};

const ProjectNavigation = ({
  previousProject,
  nextProject,
}: ProjectNavigationProps) => {
  return (
    <SectionWrapper className="bg-ink-900/50 border-t border-surface-card-border">
      <div className="grid w-full gap-6 md:grid-cols-2">
        <ProjectNavCard project={previousProject} direction="previous" />
        <ProjectNavCard project={nextProject} direction="next" />
      </div>
    </SectionWrapper>
  );
};

export default ProjectNavigation;
