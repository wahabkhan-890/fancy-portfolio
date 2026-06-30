import AboutHero from "@/components/sections/AboutHero";
import {JourneySection } from "@/components/sections/JourneySection";
import SkillsProgress from "@/components/sections/SkillsProgress";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import StrengthsSection from "@/components/sections/StrengthsSection";
import CTA from "@/components/sections/CTA";

const AboutPage = () => (
  <>
    <AboutHero />
    <JourneySection />
    <SkillsProgress />
    <FeaturesSection />
    <AchievementsSection />
    <StrengthsSection />
    <CTA largeText />
  </>
);

export default AboutPage;