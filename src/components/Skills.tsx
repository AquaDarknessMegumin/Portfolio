"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiFramer, SiMongodb, SiPostgresql, SiPhp, SiC, SiMysql } from "react-icons/si";

export function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            duration: 30,
            skills: [
                { name: "React", icon: <FaReact size={32} className="text-[#61DAFB]" /> },
                { name: "Next.js", icon: <SiNextdotjs size={32} className="text-foreground" /> },
                { name: "TypeScript", icon: <SiTypescript size={32} className="text-[#3178C6]" /> },
                { name: "JavaScript", icon: <SiJavascript size={32} className="text-[#F7DF1E]" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-[#38B2AC]" /> },
                { name: "HTML5", icon: <FaHtml5 size={32} className="text-[#E34F26]" /> },
                { name: "CSS3", icon: <FaCss3Alt size={32} className="text-[#1572B6]" /> },
                { name: "Framer Motion", icon: <SiFramer size={32} className="text-[#0055FF]" /> },
            ]
        },
        {
            title: "Backend & Programming",
            duration: 22,
            direction: -1,
            skills: [
                { name: "Node.js", icon: <FaNodeJs size={32} className="text-[#339933]" /> },
                { name: "PHP", icon: <SiPhp size={32} className="text-[#777BB4]" /> },
                { name: "Java", icon: <FaJava size={32} className="text-[#007396]" /> },
                { name: "C", icon: <SiC size={32} className="text-[#A8B9CC]" /> },
            ]
        },
        {
            title: "Database & Tools",
            duration: 26,
            skills: [
                { name: "MySQL", icon: <SiMysql size={32} className="text-[#4479A1]" /> },
                { name: "PostgreSQL", icon: <SiPostgresql size={32} className="text-[#336791]" /> },
                { name: "MongoDB", icon: <SiMongodb size={32} className="text-[#47A248]" /> },
                { name: "Git", icon: <FaGitAlt size={32} className="text-[#F05032]" /> },
            ]
        }
    ];

    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            <div className="section-divider absolute top-0 left-0 right-0" />

            {/* Dot grid background */}
            <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

            {/* Ambient glows */}
            <div className="absolute top-[30%] left-[-8%] w-[450px] h-[450px] bg-primary-500/10 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-secondary-500/8 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4">
                        Technical <span className="gradient-text italic">Skills</span>
                    </h2>
                    <p className="max-w-lg mx-auto text-sm md:text-base text-foreground/50 font-light leading-relaxed">
                        Technologies I use to bring ideas to life — from frontend polish to backend power.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-14 overflow-hidden">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="relative"
                        >
                            <h3 className="text-xs font-sans tracking-[0.25em] uppercase text-primary-400 mb-6 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-gradient-to-r from-primary-500 to-transparent" />
                                {category.title}
                            </h3>

                            {/* Edge fade masks */}
                            <div className="absolute left-0 top-10 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-10 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                            <div className="overflow-hidden flex">
                                <motion.div
                                    animate={{
                                        x: category.direction === -1 ? ["-50%", "0%"] : ["0%", "-50%"]
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        ease: "linear",
                                        duration: category.duration
                                    }}
                                    className="flex w-max gap-6 md:gap-10 pr-6 md:pr-10"
                                >
                                    {[...category.skills, ...category.skills].map((skill, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center justify-center gap-3 group cursor-default"
                                        >
                                            <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center relative overflow-hidden">
                                                {/* Inner glow on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-500" />
                                                <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                                    {skill.icon}
                                                </div>
                                            </div>
                                            <span className="text-[11px] tracking-widest text-foreground/35 group-hover:text-primary-400 transition-colors uppercase font-medium">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
