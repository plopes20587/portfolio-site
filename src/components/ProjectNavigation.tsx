import { Link } from "react-router-dom";
import type { CaseStudy } from "../siteData";
import SectionWrapper from "./SectionWrapper";
import { icons } from "../lib/iconMappings";

type ProjectNavigationProps = {
  previousProject?: CaseStudy;
  nextProject?: CaseStudy;
};

const ProjectNavigation = ({
  previousProject,
  nextProject,
}: ProjectNavigationProps) => {
  return (
    <SectionWrapper
      maxWidth="1320"
      padding="large"
      className="bg-ink-900/50 border-t border-surface-card-border"
    >
      <div className="grid w-full gap-6 md:grid-cols-2">
        {/* Previous Project */}
        {previousProject ? (
          <Link
            to={`/case/${previousProject.slug}`}
            className="hover:border-primary/30 group flex flex-col gap-2 rounded-16 border border-surface-card-border bg-surface-card p-6 transition hover:bg-white/[0.08]"
          >
            <div className="flex items-center gap-2 text-text-body/50">
              <img src={icons["arrow-left"]} alt="" className="h-5 w-5" />
              <span className="text-h4-small uppercase">
                Previous
              </span>
            </div>
            <h3 className="transition group-hover:text-primary">
              {previousProject.title}
            </h3>
            <p className="line-clamp-2 text-white/60">
              {previousProject.blurb}
            </p>
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}

        {/* Next Project */}
        {nextProject ? (
          <Link
            to={`/case/${nextProject.slug}`}
            className="hover:border-primary/30 group flex flex-col gap-2 rounded-16 border border-surface-card-border bg-surface-card p-6 text-right transition hover:bg-white/[0.08]"
          >
            <div className="flex items-center justify-end gap-2 text-text-body/50">
              <span className="text-h4-small uppercase">Next</span>
              <img src={icons["arrow-right"]} alt="" className="h-5 w-5" />
            </div>
            <h3 className="transition group-hover:text-primary">
              {nextProject.title}
            </h3>
            <p className="line-clamp-2 text-white/60">
              {nextProject.blurb}
            </p>
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>
    </SectionWrapper>
  );
};

export default ProjectNavigation;
