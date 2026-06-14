import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/previews/AboutPreview";
import { SkillsPreview } from "@/components/previews/SkillsPreview";
import { ExperiencePreview } from "@/components/previews/ExperiencePreview";
import { ProjectsPreview } from "@/components/previews/ProjectsPreview";
import { CertificatesPreview } from "@/components/previews/CertificatesPreview";
import { ContactPreview } from "@/components/previews/ContactPreview";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <ExperiencePreview />
      <ProjectsPreview />
      <CertificatesPreview />
      <ContactPreview />
      <Footer />
    </main>
  );
}
