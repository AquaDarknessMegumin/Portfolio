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
        <span ref={ref} className="text-3xl md:text-4xl font-serif font-light gradient-text">
            <motion.span>{rounded}</motion.span>+
        </span>
    );
}

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">

            {/* Dot grid pattern */}
            <div className="absolute inset-0 dot-grid opacity-20 z-0" />

            {/* Warm ambient gradient orbs */}
            <div className="absolute inset-0 z-[1]">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], x: [0, 60, 0], y: [0, 30, 0] }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[5%] left-[-5%] w-[600px] h-[600px] bg-primary-500/15 rounded-full blur-[180px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], x: [0, -60, 0], y: [0, -40, 0] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-5%] right-[-5%] w-[700px] h-[700px] bg-secondary-500/12 rounded-full blur-[200px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.15, 1], x: [0, 40, 0], y: [0, -50, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[40%] left-[50%] w-[350px] h-[350px] bg-secondary-400/6 rounded-full blur-[140px]"
                />
            </div>

            <Particles />

            <div className="container relative z-10 mx-auto px-6 max-w-7xl">
                <div className="flex flex-col items-center text-center">

                    {/* Elegant tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.2 }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 mb-12 rounded-full border border-secondary-400/30 bg-secondary-500/8 backdrop-blur-md text-secondary-400 text-sm font-medium tracking-wider shimmer-line"
                    >
                        <Sparkles size={14} className="animate-pulse" />
                        Software Engineer • IT Student
                    </motion.div>

                    {/* Name — grand and elegant */}
                    <TextReveal delay={2.4}>
                        <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-serif font-light tracking-tight mb-6 text-foreground leading-[0.9]">
                            Shawn Ryan <br />
                            <span className="gradient-text italic font-normal">Nacario</span>
                        </h1>
                    </TextReveal>

                    {/* Decorative gold line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-32 h-px bg-gradient-to-r from-transparent via-secondary-400 to-transparent mb-8 opacity-60"
                    />

                    {/* Subtitle */}
                    <TextReveal delay={2.8}>
                        <p className="text-base md:text-lg lg:text-xl font-light text-foreground/55 max-w-xl mx-auto leading-relaxed mb-14">
                            Crafting elegant software solutions with a passion for clean code,
                            modern design, and cutting-edge technologies.
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
                                href="#projects"
                                className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 text-white rounded-full font-medium transition-all duration-500 glow-hover hover:-translate-y-1"
                            >
                                Explore Portfolio
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link
                                href="#contact"
                                className="group flex items-center gap-3 px-8 py-4 rounded-full font-medium border border-secondary-400/25 text-foreground hover:border-secondary-400/50 hover:bg-secondary-500/5 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
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
                    className="w-7 h-11 rounded-full border-2 border-secondary-400/30 flex items-start justify-center p-2 backdrop-blur-sm"
                >
                    <div className="w-1.5 h-2.5 bg-secondary-400/60 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
