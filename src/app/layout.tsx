import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PreloaderProvider } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Noise } from "@/components/Noise";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shawn Ryan Nacario — IT Portfolio",
  description: "Portfolio of Shawn Ryan C. Nacario, an aspiring IT professional and Information Technology student at the University of San Carlos, showcasing projects, skills, and experience in software development.",
  keywords: ["Shawn Ryan Nacario", "IT Student", "Portfolio", "Web Developer", "University of San Carlos", "Software Development"],
  authors: [{ name: "Shawn Ryan Nacario" }],
  openGraph: {
    title: "Shawn Ryan Nacario — IT Portfolio",
    description: "Aspiring IT Professional | Information Technology Student at University of San Carlos",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${cormorant.variable} ${cinzel.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll>
            <Noise />
            <CustomCursor />
            <PreloaderProvider>
              <Navbar />
              {children}
            </PreloaderProvider>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
