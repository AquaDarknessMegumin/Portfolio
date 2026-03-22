"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Magnetic } from "./Magnetic";
import { TextReveal } from "./TextReveal";
import { Particles } from "./Particles";

function AnimatedCounter({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => Math.round(latest));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animate(motionValue, value, {
                        duration: 2,
                        ease: "easeOut",
                    });
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [motionValue, value, hasAnimated]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-serif font-medium tracking-tighter text-foreground">
            <motion.span>{rounded}</motion.span>+
        </span>
    );
}

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">

            {/* Dot grid pattern */}
            <div className="absolute inset-0 dot-grid opacity-20 z-0" />

            {/* High-contrast spotlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-[500px] bg-primary-500/15 rounded-full blur-[120px] opacity-50 z-[1] mix-blend-screen pointer-events-none" />

            <Particles />

            <div className="container relative z-10 mx-auto px-6 max-w-7xl">
                <div className="flex flex-col items-center text-center">

                    {/* Sleek tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.2 }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 mb-12 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md text-foreground/80 text-sm font-medium tracking-widest uppercase"
                    >
                        <Sparkles size={14} className="animate-pulse text-primary-500" />
                        Software Engineer • IT Student
                    </motion.div>

                    {/* Massive striking name */}
                    <TextReveal delay={2.4}>
                        <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-serif font-medium tracking-tighter mb-4 text-foreground leading-[0.85]">
                            Shawn Ryan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Nacario</span>
                        </h1>
                    </TextReveal>

                    {/* Decorative minimalist line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-24 h-[2px] bg-foreground/20 mb-10"
                    />

                    {/* Subtitle */}
                    <TextReveal delay={2.8}>
                        <p className="text-base md:text-lg text-foreground/60 max-w-xl mx-auto leading-relaxed mb-14 font-light">
                            Crafting high-performance software solutions with an uncompromising passion for clean architecture and state-of-the-art design.
                        </p>
                    </TextReveal>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 3.0 }}
                        className="flex flex-col sm:flex-row items-center gap-5"
                    >
                        <Magnetic>
                            <Link
                                href="/projects"
                                className="group relative flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium transition-all duration-500 hover:scale-105"
                            >
                                Explore Portfolio
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link
                                href="/contact"
                                className="group flex items-center gap-3 px-8 py-4 rounded-full font-medium border border-foreground/15 text-foreground hover:border-foreground/30 hover:bg-foreground/5 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                            >
                                Get In Touch
                            </Link>
                        </Magnetic>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.4 }}
                        className="flex items-center gap-10 md:gap-16 mt-24 text-center"
                    >
                        {[
                            { value: 3, label: "Years Coding" },
                            { value: 1, label: "Projects Built" },
                            { value: 16, label: "Technologies" },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <AnimatedCounter value={stat.value} />
                                <span className="text-[10px] text-foreground/35 tracking-[0.2em] uppercase mt-2">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll pill — gold accent */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-7 h-11 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2 backdrop-blur-sm"
                >
                    <div className="w-1.5 h-2.5 bg-foreground/60 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
