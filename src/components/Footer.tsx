"use client";

import Link from "next/link";
import { Github, Mail, ArrowUp, Heart } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-foreground/[0.06] py-16 overflow-hidden">
            {/* Subtle ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[150px] bg-primary-500/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <Link href="/" className="text-2xl font-serif font-semibold tracking-tighter text-foreground inline-block mb-2 hover:text-primary-400 transition-colors duration-300">
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
                            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-foreground/50 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <FaFacebook size={18} />
                        </a>
                        <a
                            href="mailto:shawnryannacario@gmail.com"
                            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-foreground/50 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Mail size={18} />
                        </a>
                        <button
                            onClick={scrollToTop}
                            suppressHydrationWarning
                            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ml-2"
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
                    <p className="text-foreground/20 text-xs inline-flex items-center gap-1.5">
                        Designed & Built with <Heart size={10} className="text-primary-500 fill-primary-500" />
                    </p>
                </div>
            </div>
        </footer>
    );
}
