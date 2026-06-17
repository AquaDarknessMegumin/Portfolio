import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PreloaderProvider } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Noise } from "@/components/Noise";
import { PageTransition } from "@/components/PageTransition";

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
  title: "Shawn Ryan",
  description: "Full Stack Developer — Crafting high-performance software solutions with an uncompromising passion for clean architecture and state-of-the-art design.",
  openGraph: {
    title: "Shawn Ryan",
    description: "Full Stack Developer — Crafting high-performance software solutions with clean architecture and premium design.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shawn Ryan Nacario — Full Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawn Ryan",
    description: "Full Stack Developer — Crafting high-performance software solutions with clean architecture and premium design.",
    images: ["/og-image.png"],
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
              <PageTransition>
                {children}
              </PageTransition>
            </PreloaderProvider>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
