// Import assets
import profilePhoto from "../assets/images/AboutmeImage.jpg";
import yearsExperienceIcon from "../assets/icons/years-experience.svg";
import projectsCompletedIcon from "../assets/icons/projects-completed.svg";
import happyClientsIcon from "../assets/icons/happy-clients.svg";
import productsLaunchedIcon from "../assets/icons/products-launched.svg";
import SectionWrapper from "./SectionWrapper";

type AboutStat = {
  iconSrc: string;
  value: string;
  label: string;
  gridArea: string;
};

const AboutSection = () => {
  const aboutStats: AboutStat[] = [
    {
      iconSrc: yearsExperienceIcon,
      value: "12+",
      label: "Years of Experience",
      gridArea: "1 / 1",
    },
    {
      iconSrc: projectsCompletedIcon,
      value: "150+",
      label: "Projects Delivered",
      gridArea: "1 / 2",
    },
    {
      iconSrc: happyClientsIcon,
      value: "50+",
      label: "Happy Clients",
      gridArea: "2 / 1",
    },
    {
      iconSrc: productsLaunchedIcon,
      value: "20+",
      label: "Products Launched",
      gridArea: "2 / 2",
    },
  ];

  return (
    <SectionWrapper
      id="about"
      maxWidth="1320"
      padding="large"
      className="py-[80px]"
    >
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="font-display text-h2 font-normal text-white">
          a bit About me
        </h2>
      </div>

      {/* Two Column Layout */}
      <div className="grid items-start gap-x-10 gap-y-0 md:grid-cols-2">
        {/* Profile Image */}
        <div className="h-[710px] w-full overflow-hidden rounded-[16px]">
          <img
            src={profilePhoto}
            alt="Patrick Lopes - Senior Product Designer"
            className="aspect-[837/1488] h-full w-full object-cover object-top"
            loading="lazy"
          />
        </div>

        {/* Content Column */}
        <div className="flex flex-col gap-7">
          {/* Bio Text */}
          <div className="flex flex-col gap-4">
            <p className="font-body text-body text-white">
              I'm a senior product designer with a focus on e-commerce and
              digital shopping. Over the past ten years, I've worked on product
              pages, checkout flows, and customer journeys for brands like
              Verizon, KFC, and SeneGence.
            </p>
            <div className="font-body text-body text-white">
              <p className="mb-0">
                I like keeping things simple. My approach usually starts with
                understanding how people shop or move through a flow, then
                figuring out how to make that experience feel smoother and more
                predictable. AI has become a helpful part of my workflow. It
                lets me explore directions faster, play with variations, and get
                clearer on what will actually help users.
              </p>
              <p>
                When I'm not working, I'm probably traveling, working remotely
                somewhere warm, or finding a good coffee spot.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid h-full w-full grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_fit-content(100%))] gap-6">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="stat-card"
                style={{ gridArea: stat.gridArea }}
              >
                {/* Icon Container */}
                <div className="stat-card-icon-container">
                  <img
                    src={stat.iconSrc}
                    alt={stat.label}
                    className="size-[24px]"
                  />
                </div>
                {/* Stat Value */}
                <p className="font-body text-body font-semibold text-white">
                  {stat.value}
                </p>
                {/* Stat Label */}
                <p className="text-nowrap font-body text-body text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
