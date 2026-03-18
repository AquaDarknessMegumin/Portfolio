"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export function Certificates() {
    const certificates = [
        {
            title: "AWS Certified Developer - Associate",
            issuer: "Amazon Web Services",
            date: "Aug 2024",
            credentialUrl: "https://www.credly.com/badges/7523b54e-3903-4ee2-8848-60b6e66a0c67/public_url"
        },
        {
            title: "Meta Front-End Developer Professional Certificate",
            issuer: "Coursera",
            date: "Jul 2024",
            credentialUrl: "https://www.credly.com/badges/1fbfcbe8-e2a3-4915-abfc-8d8ac664a48d/public_url"
        },
        {
            title: "Full-Stack Web Development Boot Camp",
            issuer: "Tech Academy",
            date: "Dec 2023",
            credentialUrl: "https://www.credly.com/badges/1ac62d18-80ef-427d-957c-de5f5bf633af/public_url"
        }
    ];

    return (
        <section id="certificates" className="py-28 relative overflow-hidden">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-foreground">
                        Licenses & <span className="gradient-text italic">Certificates</span>
                    </h2>
                    <p className="max-w-lg mx-auto text-sm md:text-base text-foreground/50 font-light leading-relaxed">
                        Professional certifications validating my expertise in various technology domains.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            className="glass-card p-7 group cursor-pointer relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Top accent */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-secondary-500 via-secondary-400 to-primary-400 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-400 flex items-center justify-center text-white mb-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                <Award size={20} />
                            </div>

                            <h3 className="text-base font-semibold mb-3 text-foreground group-hover:text-secondary-400 transition-colors leading-snug">
                                {cert.title}
                            </h3>

                            <div className="mt-auto">
                                <p className="text-foreground/50 text-sm font-light mb-1">{cert.issuer}</p>
                                <p className="text-foreground/30 text-xs mb-5">{cert.date}</p>

                                <span className="inline-flex items-center gap-2 text-xs font-medium text-secondary-400 group-hover:text-secondary-300 tracking-wider uppercase transition-colors">
                                    View Credential <ExternalLink size={12} />
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
