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
            description: "Focused on full-stack software development, database management systems, and modern web architectures. Actively engaged in Tech, AI & Career Readiness programs.",
            icon: <GraduationCap size={20} className="text-primary-400" />,
            highlight: true,
            status: "Currently Pursuing",
        },
        {
            id: 2,
            title: "Senior High School — STEM",
            organization: "University of Cebu Lapu-Lapu and Mandaue",
            date: "2020 - 2022",
            description: "Science, Technology, Engineering, and Mathematics strand. Developed strong analytical thinking, advanced mathematics skills, and research methodologies.",
            icon: <BookOpen size={20} className="text-primary-300" />,
            highlight: false,
        },
        {
            id: 3,
            title: "Basic Education (High School & Elementary)",
            organization: "San Roque College De Cebu — Cordova Campus",
            date: "2009 - 2020",
            description: "Completed secondary and primary education with a solid academic record and active participation in institutional events.",
            icon: <BookOpen size={20} className="text-foreground/50" />,
            highlight: false,
        },
        {
            id: 4,
            title: "Primary Education",
            organization: "St. Augustine International School",
            date: "2008 - 2009",
            description: "Early elementary schooling following international basic education standards.",
            icon: <BookOpen size={20} className="text-foreground/40" />,
            highlight: false,
        },
        {
            id: 5,
            title: "Early Childhood Education",
            organization: "Little Dominic Learning Center",
            date: "2006 - 2008",
            description: "Began early primary school foundation.",
            icon: <BookOpen size={20} className="text-foreground/40" />,
            highlight: false,
        }
    ];

    return (
        <section id="experiences" className="py-32 relative overflow-hidden bg-background">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tighter mb-4 text-foreground">
                        Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Background</span>
                    </h2>
                    <p className="max-w-lg mx-auto text-sm md:text-base text-foreground/50 font-light leading-relaxed">
                        The academic milestones and educational journey that shaped my foundation.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Central/Left Timeline Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500/50 via-foreground/10 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: index * 0.08 }}
                                className={`flex flex-col md:flex-row relative gap-8 group ${
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Center Icon Node */}
                                <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 top-3 w-10 h-10 rounded-full bg-background border-2 flex items-center justify-center z-10 transition-all duration-300 ${
                                    exp.highlight
                                        ? "border-primary-500 ring-4 ring-primary-500/15 shadow-[0_0_15px_rgba(34,197,94,0.3)] scale-110"
                                        : "border-foreground/10 group-hover:border-primary-400 group-hover:scale-105"
                                }`}>
                                    {exp.highlight ? (
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            {/* Pulse ring around highlight icon */}
                                            <span className="absolute inset-0 rounded-full bg-primary-500/10 animate-ping" />
                                            <GraduationCap size={16} className="text-primary-400 relative z-10" />
                                        </div>
                                    ) : (
                                        <div className="text-foreground/45 group-hover:text-primary-400 transition-colors">
                                            {exp.icon}
                                        </div>
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className={`w-[calc(100%-4rem)] md:w-1/2 ml-16 md:ml-0 ${
                                    index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                                }`}>
                                    {/* Timeline Glass Card */}
                                    <div className={`glass-card p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${
                                        exp.highlight 
                                            ? (index % 2 === 0 
                                                ? "border-l-4 border-l-primary-500" 
                                                : "border-l-4 border-l-primary-500 md:border-l-0 md:border-r-4 md:border-r-primary-500") 
                                            : "hover:border-primary-500/20"
                                    }`}>
                                        {/* Glowing Ambient BG behind highlight card */}
                                        {exp.highlight && (
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl pointer-events-none -mr-8 -mt-8" />
                                        )}

                                        {/* Date and Status tag */}
                                        <div className={`flex flex-wrap items-center gap-2.5 mb-4 text-xs font-semibold ${
                                            index % 2 !== 0 ? "md:justify-end" : ""
                                        }`}>
                                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/5 text-foreground/60 tracking-wide border border-foreground/5">
                                                <Calendar size={12} className="text-primary-400" />
                                                <span>{exp.date}</span>
                                            </div>
                                            {exp.status && (
                                                <span className="px-2.5 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/25 text-[10px] font-semibold uppercase tracking-wider text-primary-400">
                                                    {exp.status}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-base md:text-lg font-medium text-foreground tracking-tight leading-snug group-hover:text-primary-400 transition-colors mb-1">
                                            {exp.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-foreground/50 font-medium mb-3">
                                            {exp.organization}
                                        </p>
                                        <p className="text-foreground/45 text-xs md:text-sm font-light leading-relaxed">
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
