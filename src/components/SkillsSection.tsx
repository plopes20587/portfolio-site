import { icons } from "../lib/iconMappings";
import SectionWrapper from "./SectionWrapper";
import { SECTION_HEADING_BASE } from "../lib/styles";

type SkillCategory = {
  name: string;
  iconSrc: string;
  iconGradient: string;
  bulletGradient: string;
  items: string[];
};

const SkillsSection = () => {
  const techStack: SkillCategory[] = [
    {
      name: "Design Tools",
      iconSrc: icons["design-tools"],
      iconGradient: "bg-gradient-to-b from-[#541db9] to-[#7f5af0]",
      bulletGradient: "bg-gradient-to-b from-[#7f5af0] to-[#9d7ff5]",
      items: ["Figma", "Framer", "Webflow"],
    },
    {
      name: "Development",
      iconSrc: icons.development,
      iconGradient: "bg-gradient-to-br from-[#2b7fff] to-[#00b8db]",
      bulletGradient: "bg-gradient-to-r from-[#2b7fff] to-[#00b8db]",
      items: ["HTML", "CSS", "React"],
    },
    {
      name: "Research & Testing",
      iconSrc: icons.research,
      iconGradient: "bg-gradient-to-br from-[#00c950] to-[#00bc7d]",
      bulletGradient: "bg-gradient-to-r from-[#00c950] to-[#00bc7d]",
      items: ["User Testing", "User Research", "A/B Testing"],
    },
    {
      name: "AI Stack",
      iconSrc: icons["ai-stack"],
      iconGradient: "bg-gradient-to-br from-[#ff6900] to-[#fb2c36]",
      bulletGradient: "bg-gradient-to-r from-[#ff6900] to-[#fb2c36]",
      items: ["Claude", "ChatGPT", "Cursor"],
    },
  ];

  return (
    <SectionWrapper id="skills" maxWidth="1320" padding="large">
      <div className="flex flex-col gap-40">
        {/* Header */}
        <div className="flex w-full flex-col items-center gap-16">
          <h2 className={SECTION_HEADING_BASE}>Tech Stack</h2>
          <p className="max-w-[741px] text-center">
            My toolkit spans design, development, and AI—enabling me to bring
            ideas to life from concept to code
          </p>
        </div>

        {/* Skills Grid - responsive: 1 col mobile, 2 cols tablet, 4 cols desktop */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-24">
          {techStack.map((stack) => (
            <div
              key={stack.name}
              className="flex flex-col gap-16 rounded-16 border border-surface-card-border bg-surface-card p-24"
            >
              {/* Icon Container - 56x56 with 28x28 icon centered */}
              <div
                className={`relative h-[56px] w-[56px] rounded-[14px] ${stack.iconGradient}`}
              >
                <img
                  src={stack.iconSrc}
                  alt={`${stack.name} icon`}
                  className="absolute left-[14px] top-[14px] h-[28px] w-[28px]"
                />
              </div>

              {/* Category Name */}
              <p>{stack.name}</p>

              {/* Skills List */}
              <div className="flex flex-col gap-8">
                {stack.items.map((item) => (
                  <div
                    key={item}
                    className="flex h-[24px] items-center gap-8"
                  >
                    {/* Gradient Bullet */}
                    <div
                      className={`h-[6px] w-[6px] rounded-full ${stack.bulletGradient}`}
                    />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
