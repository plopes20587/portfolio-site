import Hero from "../components/Hero";
import LogoMarquee from "../components/LogoMarquee";
import WorkGrid from "../components/WorkGrid";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import FooterCTA from "../components/FooterCTA";

const HomePage = () => {
  return (
    <div className="space-y-20 sm:space-y-24">
      <Hero />
      <LogoMarquee />
      <WorkGrid />
      <SkillsSection />
      <AboutSection />
      <FooterCTA />
    </div>
  );
};

export default HomePage;
