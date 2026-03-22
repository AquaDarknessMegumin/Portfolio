import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export const metadata = {
    title: "Projects — Shawn Ryan Nacario",
    description: "Featured projects and engineering work by Shawn Ryan Nacario.",
};

export default function ProjectsPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <Projects />
            <Footer />
        </main>
    );
}
