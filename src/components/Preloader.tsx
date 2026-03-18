"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Disable scrolling while loading
        document.body.style.overflow = "hidden";

        // Fast, smooth cinematic counter
        const duration = 1800; // 1.8 seconds loading time
        const interval = 30;
        const steps = duration / interval;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            // Easing function for percentage to slow down near the end
            const easeOutExpo = (x: number): number => {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            };

            const rawProgress = currentStep / steps;
            const easedProgress = Math.min(100, Math.floor(easeOutExpo(rawProgress) * 100));

            setProgress(easedProgress);

            if (currentStep >= steps) {
                clearInterval(timer);
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.overflow = "auto";
                }, 400); // Small pause at 100%
            }
        }, interval);

        return () => {
            clearInterval(timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center justify-center gap-8"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-[0.2em] font-light text-foreground">
                            SHAWN.
                        </h1>

                        <div className="flex flex-col items-center gap-3">
                            <div className="text-sm md:text-base font-light tracking-[0.3em] text-foreground/40 font-serif">
                                {progress.toString().padStart(3, '0')}%
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
