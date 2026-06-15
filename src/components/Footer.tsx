"use client";

import Link from "next/link";
import { Github, Mail, ArrowUp, Sparkles } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative pt-16 pb-10 overflow-hidden bg-background">
            {/* Wavy line divider at the top — dual-layer for depth */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500/30 to-transparent wavy-divider" />
            <div className="absolute top-[3px] left-0 right-0 h-[10px] bg-gradient-to-r from-transparent via-foreground/8 to-transparent wavy-divider opacity-60" />

            {/* Ambient glow — bottom center */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[160px] bg-primary-500/6 rounded-full blur-[100px] pointer-events-none" />

            {/* Floating decorative orb — left */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary-500/4 blur-[60px] pointer-events-none" />

            {/* Floating decorative orb — right */}
            <div className="absolute -top-8 -right-12 w-32 h-32 rounded-full bg-secondary-500/5 blur-[50px] pointer-events-none" />

            {/* Subtle dot grid pattern overlay */}
            <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Main row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Left: Branding */}
                    <div className="text-center md:text-left">
                        <div className="relative inline-block mb-3">
                            <Link href="/" className="text-3xl font-serif font-semibold tracking-tighter text-foreground inline-block hover:text-primary-400 transition-colors duration-300">
                                Shawn<span className="text-primary-500">.</span>
                            </Link>
                            {/* Subtle glow behind the logo */}
                            <div className="absolute -inset-3 bg-primary-500/5 rounded-full blur-xl pointer-events-none -z-10" />
                        </div>
                        <p className="text-foreground/45 text-xs font-light leading-relaxed tracking-wide">
                            &copy; 2026 Shawn Ryan Nacario. All rights reserved.
                        </p>
                    </div>

                    {/* Center: Decorative accent */}
                    <div className="hidden md:flex flex-col items-center gap-2">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary-500/30" />
                            <Sparkles size={14} className="text-primary-500/40" />
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary-500/30" />
                        </div>
                    </div>

                    {/* Right: Social icons */}
                    <div className="flex items-center gap-3">
                        {[
                            { href: "https://github.com/AquaDarknessMegumin", label: "GitHub Profile", icon: <Github size={17} />, external: true },
                            { href: "https://www.facebook.com/shawnryan.nacario", label: "Facebook Profile", icon: <FaFacebook size={17} />, external: true },
                            { href: "mailto:shawnryannacario@gmail.com", label: "Send Email", icon: <Mail size={17} />, external: false },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noreferrer" : undefined}
                                aria-label={item.label}
                                className="group relative w-11 h-11 rounded-2xl glass-card flex items-center justify-center text-foreground/50 hover:text-primary-400 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_25px_rgba(34,197,94,0.15)]"
                            >
                                {item.icon}
                                {/* Hover glow ring */}
                                <div className="absolute inset-0 rounded-2xl bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors duration-300 pointer-events-none" />
                            </a>
                        ))}

                        {/* Divider */}
                        <div className="w-[1px] h-6 bg-foreground/10 mx-1" />

                        {/* Back to Top */}
                        <button
                            onClick={scrollToTop}
                            aria-label="Scroll to top"
                            className="group relative w-11 h-11 rounded-2xl glass-card flex items-center justify-center text-foreground/50 hover:text-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(34,197,94,0.12)]"
                        >
                            <ArrowUp size={17} className="group-hover:animate-bounce" />
                            <div className="absolute inset-0 rounded-2xl bg-foreground/0 group-hover:bg-foreground/3 transition-colors duration-300 pointer-events-none" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
