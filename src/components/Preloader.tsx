"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Context to share loading state with the layout
const PreloaderContext = createContext({ isLoaded: false });
export const usePreloader = () => useContext(PreloaderContext);

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadingText, setLoadingText] = useState("INITIALIZING SYSTEM...");

    useEffect(() => {
        // Disable scrolling while loading
        document.body.style.overflow = "hidden";

        const messages = [
            { threshold: 0, text: "INITIALIZING SYSTEM..." },
            { threshold: 15, text: "LOADING ASSETS..." },
            { threshold: 30, text: "COMPILING SHADERS..." },
            { threshold: 45, text: "ESTABLISHING SECURE CONNECTION..." },
            { threshold: 60, text: "DECRYPTING MODULES..." },
            { threshold: 75, text: "SYNCHRONIZING DATA..." },
            { threshold: 90, text: "FINALIZING SETUP..." },
            { threshold: 100, text: "SYSTEM ONLINE." }
        ];

        const duration = 2500;
        const interval = 30;
        const steps = duration / interval;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const easeOutQuart = (x: number): number => {
                return 1 - Math.pow(1 - x, 4);
            };

            const rawProgress = currentStep / steps;
            const easedProgress = Math.min(100, Math.floor(easeOutQuart(rawProgress) * 100));

            setProgress(easedProgress);

            // Update loading text
            const currentMessage = messages.slice().reverse().find(m => easedProgress >= m.threshold);
            if (currentMessage) {
                setLoadingText(currentMessage.text);
            }

            if (currentStep >= steps) {
                clearInterval(timer);
                setTimeout(() => {
                    setIsLoading(false);
                    // Wait for exit animation to complete before showing content
                    setTimeout(() => {
                        setIsLoaded(true);
                        document.body.style.overflow = "auto";
                    }, 900);
                }, 600);
            }
        }, interval);

        return () => {
            clearInterval(timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <PreloaderContext.Provider value={{ isLoaded }}>
            {/* Preloader Overlay */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{
                            y: "-100%",
                            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                        }}
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground overflow-hidden"
                    >
                        {/* Background Game-like Grid */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{
                                backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                                backgroundSize: "30px 30px"
                            }}>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent opacity-20 animate-pulse pointer-events-none"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center justify-center gap-12 w-full max-w-md px-8 relative z-10"
                        >
                            {/* Logo / Title */}
                            <div className="relative">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-[0.2em] font-light text-foreground relative z-10">
                                    SHAWN<span className="text-primary-400">.</span>
                                </h1>
                                <div className="absolute -inset-6 bg-primary-500/10 blur-2xl rounded-full -z-10 animate-pulse"></div>
                            </div>

                            <div className="flex flex-col items-start gap-4 w-full">
                                {/* Loading Text */}
                                <div className="flex justify-between w-full text-[10px] md:text-xs font-mono tracking-widest text-foreground/50 uppercase">
                                    <span className="animate-pulse">{loadingText}</span>
                                    <span className="text-primary-400 font-bold">{progress.toString().padStart(3, '0')}%</span>
                                </div>

                                {/* Progress Bar Container */}
                                <div className="w-full h-[2px] bg-foreground/10 overflow-hidden relative">
                                    {/* Progress Bar Fill */}
                                    <motion.div
                                        className="absolute top-0 left-0 h-full bg-primary-400"
                                        style={{ width: `${progress}%` }}
                                        transition={{ duration: 0.1 }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page Content - completely invisible until loaded, no wrapper interference */}
            <motion.div
                initial={false}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ pointerEvents: isLoaded ? "auto" : "none" }}
            >
                {children}
            </motion.div>
        </PreloaderContext.Provider>
    );
}
