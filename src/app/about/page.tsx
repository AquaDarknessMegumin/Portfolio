import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export const metadata = {
    title: "About — Shawn Ryan Nacario",
    description: "Learn more about Shawn Ryan Nacario, an IT student and software engineer from Cebu, Philippines.",
};

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <About />
            <Footer />
        </main>
    );
}
