"use client";

import Link from "next/link";
import { Github, Mail, ArrowUp } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-foreground/[0.06] py-16 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <Link href="/" className="text-2xl font-serif font-semibold tracking-tighter text-foreground inline-block mb-2">
                            Shawn<span className="text-primary-500">.</span>
                        </Link>
                        <p className="text-foreground/40 text-sm max-w-xs font-light">
                            Information Technology Student building modern digital experiences.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/AquaDarknessMegumin"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-foreground/50 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <FaFacebook size={18} />
                        </a>
                        <a
                            href="mailto:shawnryannacario@gmail.com"
                            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-foreground/50 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <Mail size={18} />
                        </a>
                        <button
                            onClick={scrollToTop}
                            suppressHydrationWarning
                            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/20 transition-all duration-300 hover:-translate-y-1 ml-2"
                        >
                            <ArrowUp size={18} />
                        </button>
                    </div>
                </div>

                <div className="section-divider my-8" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-foreground/30 text-sm">
                        &copy; {currentYear} Shawn Ryan Nacario. All rights reserved.
                    </p>
                    <p className="text-foreground/20 text-xs">
                        Designed & Built with ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
}
