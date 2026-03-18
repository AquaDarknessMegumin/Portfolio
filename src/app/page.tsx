import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experiences } from "@/components/Experiences";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}

