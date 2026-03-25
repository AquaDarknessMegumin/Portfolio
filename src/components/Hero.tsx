"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Sparkles, Code2, MonitorSmartphone, FolderKanban } from "lucide-react";
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
        <span ref={ref} className="text-3xl md:text-4xl font-serif font-bold tracking-tighter text-foreground">
            <motion.span>{rounded}</motion.span>+
        </span>
    );
}



export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-background">

            {/* Dot grid pattern */}
            <div className="absolute inset-0 dot-grid opacity-20 z-0" />

            {/* High-contrast spotlight — top center */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] h-[600px] bg-primary-500/12 rounded-full blur-[150px] opacity-60 z-[1] pointer-events-none" />

            {/* Bottom left accent glow */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/8 rounded-full blur-[120px] opacity-50 z-[1] pointer-events-none" />

            {/* Bottom right accent glow */}
            <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-primary-700/10 rounded-full blur-[100px] opacity-40 z-[1] pointer-events-none" />

            <Particles />



            {/* Main content */}
            <div className="container relative z-10 mx-auto px-6 max-w-7xl flex-1 flex flex-col items-center justify-center pt-20 pb-8">
                <div className="flex flex-col items-center text-center">

                    {/* Sleek tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.2 }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 mb-10 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md text-foreground/80 text-sm font-medium tracking-widest uppercase"
                    >
                        <Sparkles size={14} className="animate-pulse text-primary-500" />
                        Software Engineer • IT Student
                    </motion.div>

                    {/* Massive striking name */}
                    <TextReveal delay={2.4}>
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-medium tracking-tighter mb-2 text-foreground leading-[0.85]">
                            Shawn Ryan
                        </h1>
                    </TextReveal>
                    <TextReveal delay={2.5}>
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-medium tracking-tighter mb-6 leading-[0.85]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Nacario</span>
                        </h1>
                    </TextReveal>

                    {/* Subtitle */}
                    <TextReveal delay={2.7}>
                        <p className="text-sm md:text-base text-foreground/50 max-w-lg mx-auto leading-relaxed mb-10 font-light">
                            Crafting high-performance software solutions with an uncompromising
                            passion for clean architecture and state-of-the-art design.
                        </p>
                    </TextReveal>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.9 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Magnetic>
                            <Link
                                href="/projects"
                                className="group relative flex items-center gap-3 px-7 py-3.5 bg-foreground text-background rounded-full font-medium text-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                            >
                                Explore Portfolio
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link
                                href="/contact"
                                className="group flex items-center gap-3 px-7 py-3.5 rounded-full font-medium text-sm border border-foreground/15 text-foreground hover:border-primary-500/30 hover:bg-primary-500/5 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                            >
                                Get in Touch
                            </Link>
                        </Magnetic>
                    </motion.div>
                </div>
            </div>

            {/* Stats row — glass cards with icons at the bottom */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2, duration: 0.8 }}
                className="relative z-10 w-full px-6"
            >
                <div className="container mx-auto max-w-4xl grid grid-cols-3 gap-4 pb-8">
                    {[
                        { value: 3, label: "Years", sublabel: "Experience", icon: <Code2 size={22} className="text-primary-400" /> },
                        { value: 14, label: "Delivered", sublabel: "Solutions", icon: <MonitorSmartphone size={22} className="text-primary-400" /> },
                        { value: 16, label: "Key", sublabel: "Projects", icon: <FolderKanban size={22} className="text-primary-400" /> },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="glass-card px-5 py-5 flex items-center gap-4 group relative overflow-hidden"
                        >
                            {/* Subtle corner glow */}
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <div className="relative z-10">
                                <AnimatedCounter value={stat.value} />
                                <p className="text-[10px] md:text-xs text-foreground/40 tracking-[0.15em] uppercase font-medium leading-tight mt-0.5">
                                    {stat.label}<br />{stat.sublabel}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>


            {/* Scroll indicator — center bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.8 }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 lg:hidden"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1.5 backdrop-blur-sm"
                >
                    <div className="w-1 h-2 bg-foreground/60 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
