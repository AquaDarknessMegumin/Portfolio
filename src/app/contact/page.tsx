import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata = {
    title: "Contact — Shawn Ryan Nacario",
    description: "Get in touch with Shawn Ryan Nacario for projects, collaborations, or inquiries.",
};

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <Contact />
            <Footer />
        </main>
    );
}
