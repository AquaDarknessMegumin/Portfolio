"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        
        if (latest > 50) {
            setIsScrolled(true);
            // Hide when scrolling down, show when scrolling up
            if (latest > previous && latest > 150 && !mobileMenuOpen) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        } else {
            setIsScrolled(false);
            setHidden(false);
        }
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: hidden ? "-100%" : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: mounted ? 0 : 1.8 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-background/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4"
                    : "bg-transparent py-6 lg:py-8"
            )}
        >
            <div className="container mx-auto px-6 max-w-[1400px] flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="#home"
                    className="text-xl lg:text-2xl font-serif tracking-[0.15em] uppercase text-foreground transition-opacity hover:opacity-70"
                >
                    SHAWN<span className="gradient-text">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex items-center gap-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm text-foreground/60 hover:text-primary-400 transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary-400 to-secondary-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {mounted && (
                        <button
                            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                            className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-primary-400 hover:border-primary-500/30 transition-all"
                            aria-label="Toggle theme"
                        >
                            {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                    )}
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    {mounted && (
                        <button
                            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                            className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-primary-400 transition-all"
                            aria-label="Toggle theme"
                        >
                            {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                    )}
                    <button
                        className="text-foreground transition-colors uppercase text-sm tracking-widest"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? "Close" : "Menu"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="md:hidden fixed inset-0 top-[70px] bg-background z-40 overflow-hidden flex flex-col justify-center items-center"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-3xl font-serif text-foreground hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
