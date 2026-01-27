import type { CaseStudy } from "../siteData";
import SectionWrapper from "./SectionWrapper";
import roleIcon from "../assets/icons/role.svg";
import clientIcon from "../assets/icons/client.svg";
import timelineIcon from "../assets/icons/timeline.svg";
import platformIcon from "../assets/icons/platform.svg";

type ProjectMetadataProps = {
  study: CaseStudy;
};

const ProjectMetadata = ({ study }: ProjectMetadataProps) => {
  const iconMap = {
    Role: roleIcon,
    Client: clientIcon,
    Timeline: timelineIcon,
    Platform: platformIcon,
  };

  const items = [
    { iconSrc: iconMap.Role, label: "Role", value: study.role },
    { iconSrc: iconMap.Client, label: "Client", value: study.client },
    { iconSrc: iconMap.Timeline, label: "Timeline", value: study.timeline },
    { iconSrc: iconMap.Platform, label: "Platform", value: study.platform },
  ].filter((item) => item.value);

  if (items.length === 0) return null;

  return (
    <SectionWrapper
      maxWidth="1320"
      customPadding="px-24 py-80 md:px-60"
      centerContent={false}
      className="flex items-center justify-center border-y border-surface-card-border bg-[rgba(15,23,43,0.4)]"
    >
      <div className="m-0 grid w-full grid-cols-1 gap-8 gap-x-32 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-16">
            <div className="metadata-icon-container">
              <img src={item.iconSrc} alt="" className="icon-small" />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <p className="text-body-300 font-body text-h4-small font-medium uppercase">
                {item.label}
              </p>
              <p className="font-body text-body font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectMetadata;
