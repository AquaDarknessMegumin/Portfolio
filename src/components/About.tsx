"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Layers, Palette, Lightbulb } from "lucide-react";
import { ReactNode } from "react";

export function About() {
    const cards: { title: string; description: string; icon: ReactNode; gradient: string }[] = [
        {
            title: "Frontend Engineering",
            description: "Building responsive, accessible, and performant user interfaces with modern frameworks.",
            icon: <Code2 size={22} />,
            gradient: "from-primary-500 to-secondary-500",
        },
        {
            title: "Backend Integration",
            description: "Connecting interfaces to robust APIs and database architectures for seamless data flow.",
            icon: <Layers size={22} />,
            gradient: "from-secondary-500 to-primary-500",
        },
        {
            title: "UI/UX Design",
            description: "Crafting intuitive and aesthetically pleasing user experiences with attention to detail.",
            icon: <Palette size={22} />,
            gradient: "from-primary-400 to-accent-500",
        },
        {
            title: "Problem Solving",
            description: "Analyzing complex challenges and engineering optimal, highly robust scalable solutions.",
            icon: <Lightbulb size={22} />,
            gradient: "from-accent-500 to-primary-500",
        }
    ];

    return (
        <section id="about" className="py-32 relative overflow-hidden bg-background">
            <div className="section-divider absolute top-0 left-0 right-0" />

            {/* Subtle dot grid */}
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

            {/* Ambient glow */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary-500/8 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-secondary-500/6 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-light mb-4 tracking-wide text-foreground">
                        About <span className="gradient-text italic">Me</span>
                    </h2>
                    <p className="text-foreground/50 text-sm md:text-base max-w-lg mx-auto">
                        Passionate about turning ideas into pixel-perfect, performant realities.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start mb-24">
                    {/* Profile Image with animated border */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-sm relative aspect-[4/5] mx-auto lg:mx-0 group"
                    >
                        {/* Animated gradient ring */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 via-secondary-400 to-primary-400 rounded-2xl opacity-50 group-hover:opacity-80 blur-md transition-all duration-700" />
                        <div className="absolute -inset-[1px] bg-gradient-to-br from-primary-500 via-secondary-400 to-primary-400 rounded-2xl opacity-60" />
                        <div className="relative h-full w-full rounded-2xl overflow-hidden bg-background">
                            <Image
                                src="/ProfilePicture.jpg"
                                alt="Shawn Ryan Nacario"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 lg:pt-4"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary-500/25 bg-primary-500/10 backdrop-blur-sm text-primary-400 text-xs font-medium tracking-wider uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
                            Who I Am
                        </div>

                        <h3 className="text-3xl md:text-4xl font-serif font-light mb-3 leading-tight text-foreground">
                            Information Technology Student
                        </h3>
                        <p className="text-foreground/40 text-sm tracking-[0.15em] uppercase mb-8">@ University of San Carlos</p>

                        <p className="text-base md:text-lg text-foreground/60 leading-relaxed mb-10 font-light max-w-2xl">
                            I am Shawn Ryan C. Nacario, a dedicated IT student deeply passionate about software development.
                            I constantly bridge the gap between complex technical problems and elegant, user-centric solutions.
                            My academic journey is complemented by a strong drive to learn modern web technologies
                            and build impactful, beautifully engineered applications.
                        </p>

                        {/* Contact Details in glass cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
                            {[
                                { label: "Email", value: "shawnryannacario@gmail.com" },
                                { label: "Phone", value: "0927 223 2334" },
                                { label: "Location", value: "Lapu-Lapu, Cebu" },
                            ].map((info, i) => (
                                <div key={i} className="glass-card p-4 text-center group cursor-default">
                                    <span className="text-[10px] tracking-[0.2em] uppercase text-primary-400 block mb-1">{info.label}</span>
                                    <span className="text-xs text-foreground/70 font-light">{info.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Competency Bento Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card p-6 group cursor-default relative overflow-hidden"
                        >
                            {/* Gradient accent line */}
                            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${card.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Icon */}
                            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white mb-5 opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300`}>
                                {card.icon}
                            </div>

                            <h4 className="text-base font-semibold mb-2 text-foreground group-hover:text-primary-400 transition-colors">
                                {card.title}
                            </h4>
                            <p className="text-foreground/45 text-sm font-light leading-relaxed">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
