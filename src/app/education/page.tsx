import { Experiences } from "@/components/Experiences";
import { Footer } from "@/components/Footer";

export const metadata = {
    title: "Education — Shawn Ryan Nacario",
    description: "Educational background and academic milestones of Shawn Ryan Nacario.",
};

export default function EducationPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <Experiences />
            <Footer />
        </main>
    );
}
