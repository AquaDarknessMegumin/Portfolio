"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        if (latest > 50) {
            setIsScrolled(true);
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

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <motion.header
            initial={{ y: -150 }}
            animate={{ y: hidden ? -150 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: mounted ? 0 : 1.8 }}
            className={cn(
                "fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center",
                isScrolled ? "top-4 md:top-6 px-4 md:px-8" : "top-0 px-0"
            )}
        >
            <div className={cn(
                "w-full flex items-center justify-between transition-all duration-700",
                isScrolled
                    ? "max-w-[1000px] bg-background/40 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3 px-8 md:px-10 rounded-full"
                    : "max-w-7xl bg-transparent border-transparent py-6 lg:py-8 px-6 md:px-12"
            )}>
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl lg:text-2xl font-serif font-semibold tracking-tighter text-foreground transition-opacity hover:opacity-70 flex items-center gap-1"
                >
                    SHAWN<span className="text-primary-500">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm transition-all duration-300 relative group font-medium",
                                    pathname === link.href
                                        ? "text-primary-400 bg-primary-500/10"
                                        : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                                )}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.span
                                        layoutId="navItem"
                                        className="absolute inset-0 border border-primary-500/20 rounded-full z-[-1]"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {mounted && (
                        <button
                            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                            className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-300"
                            aria-label="Toggle theme"
                        >
                            {resolvedTheme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                        </button>
                    )}
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-3 md:hidden">
                    {mounted && (
                        <button
                            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                            className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 transition-all"
                            aria-label="Toggle theme"
                        >
                            {resolvedTheme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                        </button>
                    )}
                    <button
                        className="h-9 px-4 rounded-full bg-foreground/5 text-foreground transition-colors text-xs tracking-widest font-medium uppercase hover:bg-foreground/10"
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
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden fixed left-4 right-4 top-[80px] bg-background/95 backdrop-blur-3xl rounded-3xl p-6 z-40 border border-foreground/10 shadow-2xl flex flex-col"
                    >
                        <nav className="flex flex-col gap-2">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn(
                                            "flex items-center justify-between p-4 rounded-2xl transition-colors font-serif font-medium text-lg tracking-tight",
                                            pathname === link.href
                                                ? "bg-primary-500/10 text-primary-500"
                                                : "text-foreground hover:bg-foreground/5"
                                        )}
                                    >
                                        {link.name}
                                        {pathname === link.href && (
                                            <span className="w-2 h-2 rounded-full bg-primary-500" />
                                        )}
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
