import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export const metadata = {
    title: "Skills — Shawn Ryan Nacario",
    description: "Technologies and skills mastered by Shawn Ryan Nacario across frontend, backend, and database domains.",
};

export default function SkillsPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <Skills />
            <Footer />
        </main>
    );
}
