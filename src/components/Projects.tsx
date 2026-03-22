"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
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

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tighter mb-4 text-foreground">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Work</span>
                    </h2>
                    <p className="max-w-lg mx-auto text-sm md:text-base text-foreground/50 font-light leading-relaxed">
                        A curated selection of recent projects showcasing engineering craft and design sensibility.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto flex flex-col gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-card overflow-hidden group"
                        >
                            <div className="flex flex-col lg:flex-row">
                                {/* Image */}
                                <div className="w-full lg:w-3/5 relative overflow-hidden">
                                    <div className="aspect-[4/3] w-full relative">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                                        
                                        {/* Project number */}
                                        <div className="absolute top-5 left-5 w-10 h-10 rounded-xl bg-background/60 backdrop-blur-md border border-foreground/10 flex items-center justify-center text-sm font-mono text-foreground font-semibold">
                                            0{index + 1}
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="w-full lg:w-2/5 flex flex-col justify-center p-8 lg:p-10">
                                    <p className="text-xs uppercase tracking-widest text-primary-500 mb-4 flex items-center gap-2 font-semibold">
                                        <span className="w-5 h-[2px] bg-primary-500" />
                                        {project.tags[0]}
                                    </p>

                                    <h3 className="text-3xl md:text-4xl font-serif font-medium mb-2 text-foreground group-hover:text-primary-400 transition-colors duration-300 tracking-tight">
                                        {project.title}
                                    </h3>
                                    <h4 className="text-base text-foreground/50 mb-6">
                                        {project.subtitle}
                                    </h4>

                                    <p className="text-foreground/55 font-light text-sm leading-relaxed mb-8">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-foreground/5 text-foreground/60 border border-foreground/10 tracking-widest uppercase font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:scale-105 transition-all duration-300"
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
