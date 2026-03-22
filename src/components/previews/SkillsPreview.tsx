"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiFramer, SiMongodb, SiPostgresql, SiPhp, SiC, SiMysql } from "react-icons/si";

export function SkillsPreview() {
    const allSkills = [
        { name: "React", icon: <FaReact size={28} className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs size={28} className="text-foreground" /> },
        { name: "TypeScript", icon: <SiTypescript size={28} className="text-[#3178C6]" /> },
        { name: "JavaScript", icon: <SiJavascript size={28} className="text-[#F7DF1E]" /> },
        { name: "Tailwind", icon: <SiTailwindcss size={28} className="text-[#38B2AC]" /> },
        { name: "HTML5", icon: <FaHtml5 size={28} className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt size={28} className="text-[#1572B6]" /> },
        { name: "Framer", icon: <SiFramer size={28} className="text-[#0055FF]" /> },
        { name: "Node.js", icon: <FaNodeJs size={28} className="text-[#339933]" /> },
        { name: "PHP", icon: <SiPhp size={28} className="text-[#777BB4]" /> },
        { name: "Java", icon: <FaJava size={28} className="text-[#007396]" /> },
        { name: "C", icon: <SiC size={28} className="text-[#A8B9CC]" /> },
        { name: "MySQL", icon: <SiMysql size={28} className="text-[#4479A1]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={28} className="text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb size={28} className="text-[#47A248]" /> },
        { name: "Git", icon: <FaGitAlt size={28} className="text-[#F05032]" /> },
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
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Skills</span>
                        </h2>
                        <p className="text-foreground/50 text-sm md:text-base font-light max-w-md">
                            Technologies I use to bring ideas to life.
                        </p>
                    </div>
                    <Link href="/skills" className="view-more-link shrink-0">
                        View all skills <ArrowRight size={16} />
                    </Link>
                </motion.div>

                {/* Single scrolling row */}
                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    <div className="overflow-hidden flex">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                            className="flex w-max gap-6 pr-6"
                        >
                            {[...allSkills, ...allSkills].map((skill, index) => (
                                <div key={index} className="flex flex-col items-center gap-3 group cursor-default">
                                    <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500" />
                                        <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                            {skill.icon}
                                        </div>
                                    </div>
                                    <span className="text-[10px] tracking-widest text-foreground/35 group-hover:text-foreground/80 transition-colors uppercase font-medium">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
