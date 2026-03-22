"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Layers, Palette, Lightbulb, MapPin, Mail, Phone } from "lucide-react";
import { ReactNode } from "react";

export function About() {
    const cards: { title: string; description: string; icon: ReactNode; colSpan: string }[] = [
        {
            title: "Frontend Engineering",
            description: "Building responsive, accessible, and performant user interfaces with modern frameworks.",
            icon: <Code2 size={24} className="text-primary-400" />,
            colSpan: "lg:col-span-1",
        },
        {
            title: "Backend Integration",
            description: "Connecting interfaces to robust APIs and database architectures for seamless data flow.",
            icon: <Layers size={24} className="text-primary-400" />,
            colSpan: "lg:col-span-1",
        },
        {
            title: "UI/UX Design",
            description: "Crafting intuitive and aesthetically pleasing user experiences with attention to detail.",
            icon: <Palette size={24} className="text-primary-400" />,
            colSpan: "lg:col-span-1",
        },
        {
            title: "Problem Solving",
            description: "Analyzing complex challenges and engineering optimal, robust scalable solutions.",
            icon: <Lightbulb size={24} className="text-primary-400" />,
            colSpan: "lg:col-span-1",
        }
    ];

    return (
        <section id="about" className="pt-32 pb-24 relative overflow-hidden bg-background">
            <div className="section-divider absolute top-0 left-0 right-0" />

            {/* Subtle glow grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.foreground/2%)_0%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tighter mb-4 text-foreground">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Me</span>
                    </h2>
                    <p className="text-foreground/50 text-sm md:text-base max-w-lg mx-auto font-light">
                        Turning ideas into pixel-perfect, performant realities through modern web engineering.
                    </p>
                </motion.div>

                {/* Main Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[minmax(180px,auto)]">
                    
                    {/* Profile Image Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-2 relative overflow-hidden p-0 group min-h-[300px]"
                    >
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src="/ProfilePicture.png"
                                alt="Shawn Ryan Nacario"
                                fill
                                className="object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700 ease-out"
                            />
                            {/* Inner gradient overlay for dark mode fusion */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 backdrop-blur-md border border-foreground/10 text-xs font-medium text-foreground">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Available for work
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass-card col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-1 p-8 md:p-10 flex flex-col justify-center"
                    >
                        <p className="text-primary-500 text-xs font-bold tracking-widest uppercase mb-4">Software Engineer</p>
                        <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-foreground leading-snug tracking-tight">
                            I am a dedicated IT student bridging the gap between complex problems and elegant solutions.
                        </h3>
                        <p className="text-foreground/60 text-sm md:text-base leading-relaxed font-light">
                            My academic journey at the University of San Carlos is complemented by a strong continuous drive 
                            to learn modern technologies and build beautifully engineered applications.
                        </p>
                    </motion.div>

                    {/* Quick Info / Location Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card col-span-1 md:col-span-1 lg:col-span-1 p-8 flex flex-col items-center justify-center text-center group"
                    >
                        <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="text-foreground" size={20} />
                        </div>
                        <h4 className="text-foreground font-medium mb-1">Cebu, Philippines</h4>
                        <p className="text-foreground/50 text-sm font-light">Lapu-Lapu City</p>
                    </motion.div>

                    {/* Contact Card (Merged Email & Phone) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass-card col-span-1 md:col-span-2 lg:col-span-2 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6 sm:gap-12 hover:bg-foreground/[0.02] transition-colors"
                    >
                        {/* Email */}
                        <div 
                            className="flex items-center gap-4 cursor-pointer group w-full"
                            onClick={() => window.location.href = 'mailto:shawnryannacario@gmail.com'}
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-300">
                                <Mail className="text-primary-400" size={18} />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-xs text-foreground/50 uppercase tracking-widest font-semibold mb-1">Email</p>
                                <p className="text-sm md:text-base font-medium text-foreground truncate group-hover:text-primary-400 transition-colors">shawnryannacario@gmail.com</p>
                            </div>
                        </div>

                        {/* Divider for desktop */}
                        <div className="hidden sm:block w-px h-12 bg-foreground/10 shrink-0"></div>

                        {/* Phone */}
                        <div className="flex items-center gap-4 group w-full">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-300">
                                <Phone className="text-primary-400" size={18} />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-xs text-foreground/50 uppercase tracking-widest font-semibold mb-1">Phone</p>
                                <p className="text-sm md:text-base font-medium text-foreground truncate group-hover:text-primary-400 transition-colors">0927 223 2334</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="glass-card col-span-1 md:col-span-2 lg:col-span-1 p-6 flex flex-col justify-center items-center text-center"
                    >
                         <p className="text-4xl font-serif font-medium text-foreground mb-1 tracking-tighter">3+</p>
                         <p className="text-xs text-foreground/50 uppercase tracking-widest font-medium">Years coding</p>
                    </motion.div>

                    {/* Competency Cards */}
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                            className={`glass-card p-6 md:p-8 flex flex-col group ${card.colSpan}`}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-300">
                                {card.icon}
                            </div>
                            <h4 className="text-lg font-medium mb-3 text-foreground tracking-tight group-hover:text-primary-400 transition-colors">
                                {card.title}
                            </h4>
                            <p className="text-foreground/50 text-sm font-light leading-relaxed mt-auto">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
