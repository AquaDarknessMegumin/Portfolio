"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, Calendar } from "lucide-react";

export function ExperiencePreview() {
    const topExperiences = [
        {
            title: "Bachelor of Science in Information Technology",
            organization: "University of San Carlos",
            date: "2022 - Present",
            description: "Currently pursuing a degree in IT, focusing on software development, database management, and modern web technologies.",
            highlight: true,
        },
        {
            title: "Science, Technology, Engineering, and Mathematics",
            organization: "University of Cebu Lapu-Lapu and Mandaue",
            date: "2020 - 2022",
            description: "Gained a strong foundation in STEM disciplines, analytical thinking, and research methodology.",
            highlight: false,
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-4"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tighter text-foreground mb-3">
                            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Background</span>
                        </h2>
                        <p className="text-foreground/50 text-sm md:text-base font-light max-w-md">
                            The academic milestones that shaped my foundation.
                        </p>
                    </div>
                    <Link href="/education" className="view-more-link shrink-0">
                        View full timeline <ArrowRight size={16} />
                    </Link>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-5">
                    {topExperiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`glass-card p-8 group ${exp.highlight ? "border-primary-500/15" : ""}`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${exp.highlight ? "bg-primary-500/10" : "bg-foreground/5"}`}>
                                    <GraduationCap size={20} className={exp.highlight ? "text-primary-400" : "text-foreground/60"} />
                                </div>
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/40">
                                    <Calendar size={12} />
                                    <span>{exp.date}</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-medium text-foreground mb-1 group-hover:text-primary-400 transition-colors tracking-tight leading-snug">
                                {exp.title}
                            </h3>
                            <p className="text-sm text-foreground/50 font-medium mb-3">{exp.organization}</p>
                            <p className="text-foreground/40 text-sm leading-relaxed font-light">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
