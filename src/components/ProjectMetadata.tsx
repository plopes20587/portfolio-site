import type { CaseStudy } from "../siteData";
import SectionWrapper from "./SectionWrapper";
import { icons } from "../lib/iconMappings";

type ProjectMetadataProps = {
  study: CaseStudy;
};

const ProjectMetadata = ({ study }: ProjectMetadataProps) => {
  const iconMap = {
    Role: icons.role,
    Client: icons.client,
    Timeline: icons.timeline,
    Platform: icons.platform,
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
      className="flex items-center justify-center border-y border-surface-card-border bg-metadata-bg"
    >
      <div className="m-0 grid w-full grid-cols-1 gap-8 gap-x-32 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-16">
            <div className="metadata-icon-container">
              <img src={item.iconSrc} alt="" className="icon-small" />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <p className="text-h4-small font-medium uppercase text-text-body-300">
                {item.label}
              </p>
              <p className="font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectMetadata;
