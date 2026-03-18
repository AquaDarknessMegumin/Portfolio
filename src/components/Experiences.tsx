"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

export function Experiences() {
    const experiences = [
        {
            id: 1,
            title: "Bachelor of Science in Information Technology",
            organization: "University of San Carlos",
            date: "2022 - Present",
            description: "Tertiary Level — Currently pursuing a degree in Information Technology, focusing on software development, database management, and modern web technologies.",
            icon: <GraduationCap size={22} className="text-secondary-400" />,
            highlight: true,
        },
        {
            id: 2,
            title: "Science, Technology, Engineering, and Mathematics",
            organization: "University of Cebu Lapu-Lapu and Mandaue",
            date: "2020 - 2022",
            description: "Senior High School Curriculum — Gained a strong foundation in STEM disciplines, analytical thinking, and research methodology.",
            icon: <BookOpen size={22} className="text-primary-400" />,
            highlight: false,
        },
        {
            id: 3,
            title: "Elementary — High School",
            organization: "San Roque College De Cebu — Cordova Campus",
            date: "2009 - 2020",
            description: "Basic Education — Completed foundational education with a well-rounded academic background.",
            icon: <BookOpen size={22} className="text-accent-400" />,
            highlight: false,
        },
        {
            id: 4,
            title: "Elementary School",
            organization: "St. Augustine International School",
            date: "2008 - 2009",
            description: "Primary Education",
            icon: <BookOpen size={22} className="text-secondary-300" />,
            highlight: false,
        },
        {
            id: 5,
            title: "Elementary School",
            organization: "Little Dominic Learning Center",
            date: "2006 - 2008",
            description: "Early Primary Education",
            icon: <BookOpen size={22} className="text-primary-300" />,
            highlight: false,
        }
    ];

    return (
        <section id="experiences" className="py-28 relative overflow-hidden">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
            <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-secondary-500/6 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-foreground">
                        Educational <span className="gradient-text italic">Background</span>
                    </h2>
                    <p className="max-w-lg mx-auto text-sm md:text-base text-foreground/50 font-light leading-relaxed">
                        The academic milestones and educational journey that shaped my foundation.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Refined Timeline Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary-400/30 via-primary-400/20 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className={`flex flex-col md:flex-row relative gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Center Icon */}
                                <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 flex items-center justify-center z-10 transition-all duration-300 ${exp.highlight
                                        ? "border-secondary-400/50 shadow-[0_0_20px_rgba(184,134,11,0.2)]"
                                        : "border-foreground/10"
                                    }`}>
                                    {exp.icon}
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pl-14" : "md:pr-14 text-left md:text-right"
                                    }`}>
                                    <div className={`p-6 rounded-2xl glass-card transition-all duration-300 group hover:border-secondary-400/20 ${exp.highlight ? "border-secondary-400/15" : ""
                                        }`}>
                                        <div className={`flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider ${exp.highlight ? "text-secondary-400" : "text-foreground/40"
                                            } ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                                            <Calendar size={14} />
                                            <span>{exp.date}</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-secondary-400 transition-colors leading-snug">
                                            {exp.title}
                                        </h3>
                                        <div className="text-sm font-medium text-foreground/50 mb-3">
                                            {exp.organization}
                                        </div>
                                        <p className="text-foreground/40 text-sm leading-relaxed font-light">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
