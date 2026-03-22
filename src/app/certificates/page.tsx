import { Certificates } from "@/components/Certificates";
import { Footer } from "@/components/Footer";

export const metadata = {
    title: "Certificates — Shawn Ryan Nacario",
    description: "Professional certifications and licenses earned by Shawn Ryan Nacario.",
};

export default function CertificatesPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <Certificates />
            <Footer />
        </main>
    );
}
