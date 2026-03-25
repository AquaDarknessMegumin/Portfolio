"use client";

import { motion } from "framer-motion";

export function MarqueeBanner() {
    const words = [
        "SOFTWARE ENGINEER",
        "✦",
        "WEB DEVELOPER",
        "✦",
        "IT STUDENT",
        "✦",
        "UI DESIGNER",
        "✦",
        "PROBLEM SOLVER",
        "✦",
        "FULL-STACK",
        "✦",
        "CLEAN CODE",
        "✦",
        "MODERN DESIGN",
        "✦",
    ];

    return (
        <section className="py-10 overflow-hidden border-y border-foreground/[0.06] bg-foreground/[0.02] relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div className="flex overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex w-max items-center gap-8 pr-8"
                >
                    {[...words, ...words].map((word, index) => (
                        <span
                            key={index}
                            className={`text-sm md:text-base font-serif tracking-[0.3em] uppercase whitespace-nowrap ${
                                word === "✦"
                                    ? "text-primary-500/60 text-xs"
                                    : "text-foreground/25 font-light"
                            }`}
                        >
                            {word}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
