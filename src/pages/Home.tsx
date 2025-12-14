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
      {/* Hero Section - 1052px height */}
      <Hero />
      
      {/* Section Divider */}
      <SectionDivider />
      
      {/* Company Carousel / Logo Marquee */}
      <LogoMarquee />
      
      {/* Section Divider */}
      <SectionDivider />
      
      {/* Case Studies / Featured Projects */}
      <WorkGrid />
      
      {/* Section Divider */}
      <SectionDivider />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Section Divider */}
      <SectionDivider />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Footer CTA */}
      <FooterCTA />
    </div>
  );
};

export default HomePage;
