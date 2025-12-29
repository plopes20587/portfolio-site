import { Link } from "react-router-dom";
import type { CaseStudy } from "../siteData";
import SectionWrapper from "./SectionWrapper";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons/ArrowIcons";

type Props = {
  previousProject?: CaseStudy;
  nextProject?: CaseStudy;
};

const ProjectNavigation = ({ previousProject, nextProject }: Props) => {
  return (
    <SectionWrapper
      maxWidth="1100"
      padding="large"
      className="border-t border-white/10 bg-ink-900/50"
    >
      <div className="grid w-full gap-6 md:grid-cols-2">
        {/* Previous Project */}
        {previousProject ? (
          <Link
            to={`/case/${previousProject.slug}`}
            className="group flex flex-col gap-2 rounded-[16px] border border-white/10 bg-white/5 p-6 transition hover:border-primary/30 hover:bg-white/[0.08]"
          >
            <div className="flex items-center gap-2 text-white/50">
              <ArrowLeftIcon />
              <span className="font-body text-[14px] uppercase tracking-wider">
                Previous
              </span>
            </div>
            <h3 className="font-display text-[24px] text-white transition group-hover:text-primary">
              {previousProject.title}
            </h3>
            <p className="line-clamp-2 font-body text-[16px] text-white/60">
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
            className="group flex flex-col gap-2 rounded-[16px] border border-white/10 bg-white/5 p-6 text-right transition hover:border-primary/30 hover:bg-white/[0.08]"
          >
            <div className="flex items-center justify-end gap-2 text-white/50">
              <span className="font-body text-[14px] uppercase tracking-wider">
                Next
              </span>
              <ArrowRightIcon />
            </div>
            <h3 className="font-display text-[24px] text-white transition group-hover:text-primary">
              {nextProject.title}
            </h3>
            <p className="line-clamp-2 font-body text-[16px] text-white/60">
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
