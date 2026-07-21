"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiFramer, SiMongodb, SiPostgresql, SiPhp, SiC, SiSharp, SiPython, SiMysql, SiSupabase, SiVercel, SiEslint } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const AceternityIcon = ({ size = 32 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="48 48 160 160" fill="none" className="text-[#A855F7]">
        <path d="M146 48H106.136L48 208H87.8644L116.932 128C116.932 128 122 114.5 124.4 108L131.466 88L146 48Z" fill="currentColor"></path>
        <path d="M110 48H149.864L168.032 98H127.84L110 48Z" fill="currentColor"></path>
        <path d="M139.587 113.833L171.458 208H208L172.807 113.833H139.587Z" fill="currentColor"></path>
        <path d="M173 114L140.8 208H104L139.545 114H173Z" fill="currentColor"></path>
    </svg>
);

export function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: <FaReact size={32} className="text-[#61DAFB]" />, color: "#61DAFB" },
                { name: "Next.js", icon: <SiNextdotjs size={32} className="text-foreground" />, color: "#FFFFFF" },
                { name: "TypeScript", icon: <SiTypescript size={32} className="text-[#3178C6]" />, color: "#3178C6" },
                { name: "JavaScript", icon: <SiJavascript size={32} className="text-[#F7DF1E]" />, color: "#F7DF1E" },
                { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-[#38B2AC]" />, color: "#38B2AC" },
                { name: "Aceternity UI", icon: <AceternityIcon size={32} />, color: "#A855F7" },
                { name: "HTML5", icon: <FaHtml5 size={32} className="text-[#E34F26]" />, color: "#E34F26" },
                { name: "CSS3", icon: <FaCss3Alt size={32} className="text-[#1572B6]" />, color: "#1572B6" },
                { name: "Framer Motion", icon: <SiFramer size={32} className="text-[#0055FF]" />, color: "#0055FF" },
            ]
        },
        {
            title: "Backend & Programming",
            skills: [
                { name: "Node.js", icon: <FaNodeJs size={32} className="text-[#339933]" />, color: "#339933" },
                { name: "PHP", icon: <SiPhp size={32} className="text-[#777BB4]" />, color: "#777BB4" },
                { name: "Java", icon: <FaJava size={32} className="text-[#007396]" />, color: "#007396" },
                { name: "C#", icon: <SiSharp size={32} className="text-[#239120]" />, color: "#239120" },
                { name: "Python", icon: <SiPython size={32} className="text-[#3776AB]" />, color: "#3776AB" },
                { name: "C", icon: <SiC size={32} className="text-[#A8B9CC]" />, color: "#A8B9CC" },
            ]
        },
        {
            title: "Database & Tools",
            skills: [
                { name: "MySQL", icon: <SiMysql size={32} className="text-[#4479A1]" />, color: "#4479A1" },
                { name: "PostgreSQL", icon: <SiPostgresql size={32} className="text-[#336791]" />, color: "#336791" },
                { name: "MongoDB", icon: <SiMongodb size={32} className="text-[#47A248]" />, color: "#47A248" },
                { name: "Supabase", icon: <SiSupabase size={32} className="text-[#3ECF8E]" />, color: "#3ECF8E" },
                { name: "Git + GitHub / GitLab", icon: <FaGitAlt size={32} className="text-[#F05032]" />, color: "#F05032" },
                { name: "Vercel", icon: <SiVercel size={32} className="text-foreground" />, color: "#FFFFFF" },
                { name: "ESLint", icon: <SiEslint size={32} className="text-[#4B32C3]" />, color: "#4B32C3" },
                { name: "VS Code", icon: <VscVscode size={32} className="text-[#007ACC]" />, color: "#007ACC" },
            ]
        }
    ];

    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tighter text-foreground mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Skills</span>
                    </h2>
                    <p className="max-w-lg mx-auto text-sm md:text-base text-foreground/50 font-light leading-relaxed">
                        Technologies I use to bring ideas to life — from frontend polish to backend power.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-16">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="relative"
                        >
                            <h3 className="text-xs font-serif tracking-widest uppercase text-primary-500 mb-6 flex items-center gap-3 font-semibold">
                                <span className="w-8 h-[2px] bg-primary-500" />
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className="relative group p-5 rounded-2xl glass-card border border-foreground/5 hover:border-primary-500/20 hover:bg-primary-500/5 cursor-default transition-all duration-300 flex items-center gap-4 overflow-hidden"
                                    >
                                        {/* Background Glow */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                                            style={{
                                                background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`
                                            }}
                                        />
                                        <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                                            {skill.icon}
                                        </div>
                                        <span className="text-xs font-semibold tracking-wider text-foreground/45 group-hover:text-foreground transition-colors uppercase">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
