import Hero from "../components/Hero";
import LogoMarquee from "../components/LogoMarquee";
import WorkGrid from "../components/WorkGrid";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import FooterCTA from "../components/FooterCTA";
import SectionDivider from "../components/SectionDivider";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <SectionDivider />
      <LogoMarquee />
      <SectionDivider />
      {/* Case study cards (#work) */}
      <WorkGrid />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <AboutSection />
      <FooterCTA />
    </div>
  );
};

export default HomePage;
