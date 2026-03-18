"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Projects() {
    const projects = [
        {
            title: "DentEase",
            subtitle: "Dental Booking App",
            description: "A dental appointment booking application that streamlines the process of scheduling and managing dental visits. Built as a final project for Application Development.",
            image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
            tags: ["React", "App Development", "Booking System"],
            githubUrl: "https://github.com/AquaDarknessMegumin/AppDev_FinalProj_Dentease",
            liveUrl: "https://github.com/AquaDarknessMegumin/AppDev_FinalProj_Dentease",
        }
    ];

    return (
        <section id="projects" className="py-32 relative overflow-hidden bg-background">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
            <div className="absolute top-[50%] right-[-10%] w-[500px] h-[500px] bg-primary-500/8 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-foreground">
                        Featured <span className="gradient-text italic">Work</span>
                    </h2>
                    <p className="max-w-lg mx-auto text-sm md:text-base text-foreground/50 font-light leading-relaxed">
                        A curated selection of recent projects showcasing engineering craft and design sensibility.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto flex flex-col gap-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-80px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-card p-3 group !rounded-3xl"
                        >
                            <div className="flex flex-col lg:flex-row gap-0 lg:gap-0 overflow-hidden rounded-2xl">
                                {/* Image window */}
                                <div className="w-full lg:w-3/5 relative overflow-hidden rounded-2xl">
                                    <div className="aspect-[4/3] w-full relative">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />

                                        {/* Floating project number */}
                                        <div className="absolute top-5 left-5 w-10 h-10 rounded-xl bg-background/60 backdrop-blur-md border border-foreground/10 flex items-center justify-center text-sm font-serif gradient-text font-bold">
                                            0{index + 1}
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="w-full lg:w-2/5 flex flex-col justify-center p-8 lg:p-10">
                                    <p className="text-xs uppercase tracking-[0.25em] text-primary-400 mb-4 flex items-center gap-2">
                                        <span className="w-5 h-[1px] bg-primary-500" />
                                        {project.tags[0]}
                                    </p>

                                    <h3 className="text-3xl md:text-4xl font-serif font-light mb-2 text-foreground group-hover:text-primary-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <h4 className="text-base italic text-foreground/50 font-serif mb-6">
                                        {project.subtitle}
                                    </h4>

                                    <p className="text-foreground/55 font-light text-sm leading-relaxed mb-8">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-primary-500/8 text-primary-400 border border-primary-500/15 tracking-widest uppercase font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-medium hover:shadow-[0_8px_30px_rgba(139,26,26,0.25)] transition-all duration-300 hover:-translate-y-0.5"
                                        >
                                            View Project <ArrowUpRight size={14} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/15 text-foreground/50 text-sm hover:border-foreground/30 hover:text-foreground transition-all duration-300"
                                        >
                                            <Github size={14} /> Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
