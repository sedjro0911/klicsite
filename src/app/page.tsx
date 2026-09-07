import { AiDoctrineSection } from "@/components/home/AiDoctrineSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { Hero } from "@/components/home/Hero";
import { HomeCtaSection } from "@/components/home/HomeCtaSection";
import { MethodSection } from "@/components/home/MethodSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";

/** Accueil — sections construites une par une (étape 4) */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <MethodSection />
      <BeforeAfterSection />
      <ProjectsSection />
      <AiDoctrineSection />
      <HomeCtaSection />
    </>
  );
}
