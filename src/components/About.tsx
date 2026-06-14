"use client";

import { motion } from "framer-motion";
import { BlurImage } from "@/components/BlurImage";
import { Code2, Layers, Palette, Lightbulb, MapPin, Mail, Phone, Sparkles } from "lucide-react";
import { ReactNode } from "react";

export function About() {
    const expertise: { num: string; title: string; description: string; icon: ReactNode }[] = [
        {
            num: "01",
            title: "Frontend Engineering",
            description: "Building responsive, accessible, and performant user interfaces with modern frameworks.",
            icon: <Code2 size={20} className="text-primary-400" />,
        },
        {
            num: "02",
            title: "Backend Integration",
            description: "Connecting interfaces to robust APIs and database architectures for seamless data flow.",
            icon: <Layers size={20} className="text-primary-400" />,
        },
        {
            num: "03",
            title: "UI/UX Design",
            description: "Crafting intuitive and aesthetically pleasing user experiences with attention to detail.",
            icon: <Palette size={20} className="text-primary-400" />,
        },
        {
            num: "04",
            title: "Problem Solving",
            description: "Analyzing complex challenges and engineering optimal, robust scalable solutions.",
            icon: <Lightbulb size={20} className="text-primary-400" />,
        }
    ];

    return (
        <section id="about" className="py-32 relative overflow-hidden bg-background">
            <div className="section-divider absolute top-0 left-0 right-0" />

            {/* Subtle glow grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.foreground/2%)_0%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                
                {/* Header with plenty of space from the navbar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tighter mb-4 text-foreground">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Me</span>
                    </h2>
                    <p className="text-foreground/40 text-sm md:text-base max-w-lg mx-auto font-light">
                        Turning ideas into pixel-perfect, performant realities through modern web engineering.
                    </p>
                </motion.div>

                {/* Main Split Profile Section */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-32">
                    
                    {/* Left Column: Profile Card & Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-2/5 flex flex-col items-center lg:items-stretch"
                    >
                        {/* Elegant Portrait Frame */}
                        <div className="glass-card relative overflow-hidden p-0 w-full max-w-[380px] lg:max-w-none aspect-[3/4] group shadow-xl border border-foreground/10 rounded-[2rem]">
                            <BlurImage
                                src="/ProfilePicture.png"
                                alt="Shawn Ryan Nacario"
                                fill
                                priority
                                className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                            />
                            {/* Inner gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                            
                            {/* Available Badge */}
                            <div className="absolute bottom-6 left-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 backdrop-blur-md border border-foreground/15 text-xs font-semibold text-foreground tracking-wide">
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" /> 
                                    Available for work
                                </div>
                            </div>
                        </div>

                        {/* Integrated Minimalist Stats */}
                        <div className="grid grid-cols-2 gap-6 w-full mt-10 py-6 border-y border-foreground/10">
                            <div className="text-center border-r border-foreground/10 pr-6">
                                <p className="text-4xl md:text-5xl font-serif font-medium text-foreground">4+</p>
                                <p className="text-[10px] text-foreground/45 uppercase tracking-[0.25em] font-semibold mt-1">Years Coding</p>
                            </div>
                            <div className="text-center pl-6">
                                <p className="text-4xl md:text-5xl font-serif font-medium text-foreground">16+</p>
                                <p className="text-[10px] text-foreground/45 uppercase tracking-[0.25em] font-semibold mt-1">Technologies</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Biography & Contact details */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="w-full lg:w-3/5 flex flex-col justify-center"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 self-start rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-500 text-xs font-semibold uppercase tracking-widest">
                            <Sparkles size={12} className="text-primary-500" />
                            Full Stack Developer
                        </span>

                        <h3 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-foreground leading-[1.15] tracking-tight">
                            Crafting clean code and <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">premium interfaces.</span>
                        </h3>
                        
                        <div className="space-y-6 text-foreground/75 text-sm md:text-base leading-relaxed font-light mb-10">
                            <p>
                                I am an IT student at the **University of San Carlos** in Cebu, Philippines. My work is driven by a deep curiosity for solving intricate engineering problems while keeping a sharp eye on pixel-perfect UI execution.
                            </p>
                            <p>
                                I combine modern web architectures like React, TypeScript, and Next.js with layout flow systems to build digital products that are not only scalable and fast, but visually stunning and interactive.
                            </p>
                        </div>

                        {/* Unified Contact Info Row */}
                        <div className="space-y-5 pt-8 border-t border-foreground/10 w-full">
                            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                                <div className="flex items-center gap-4 w-full">
                                    <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                                        <Mail className="text-primary-400" size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-semibold">Email</p>
                                        <a href="mailto:shawnryannacario@gmail.com" className="text-sm font-medium text-foreground hover:text-primary-400 transition-colors">
                                            shawnryannacario@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 w-full">
                                    <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                                        <Phone className="text-primary-400" size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-semibold">Phone</p>
                                        <span className="text-sm font-medium text-foreground">0927 223 2334</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 pt-2">
                                <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary-400" size={16} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-semibold">Location</p>
                                    <span className="text-sm font-medium text-foreground">Lapu-Lapu City, Cebu, Philippines</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Core Expertise List (Replaces 4 Cards) */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-14"
                    >
                        <h3 className="text-xs font-serif tracking-widest uppercase text-primary-500 font-bold flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-primary-500" />
                            Core Capabilities
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                        {expertise.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex flex-col group lg:border-l lg:border-foreground/10 lg:pl-8 first:border-0 first:pl-0"
                            >
                                {/* Index Number Overlay */}
                                <div className="text-5xl font-serif text-primary-500/15 group-hover:text-primary-500/40 transition-colors duration-300 font-semibold mb-4 leading-none select-none">
                                    {item.num}
                                </div>

                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-primary-500/10 group-hover:scale-105 transition-all duration-300 shrink-0">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-base font-semibold text-foreground tracking-tight group-hover:text-primary-400 transition-colors duration-300">
                                        {item.title}
                                    </h4>
                                </div>

                                <p className="text-foreground/50 text-xs md:text-sm font-light leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
