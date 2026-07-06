import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import CTA from "@/components/sections/CTA";
import WorkProcess  from "@/components/sections/WorkProcess";

const Home = () => (
  <>
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <SkillsSection />
    <ProjectsSection />
    <WorkProcess/>
    <ContactSection />
    <NewsletterSection />
    <CTA />
  </>
);

export default Home;
