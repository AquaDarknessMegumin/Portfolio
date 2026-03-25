"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";

export function CertificatesPreview() {
    const topCerts = [
        {
            title: "Introduction to Cybersecurity",
            issuer: "Cisco",
            icon: <ShieldCheck size={20} className="text-primary-400" />,
            image: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/linkedin_thumb_I2CS__1_.png",
            description: "Introductory knowledge of cybersecurity, cyber threats, vulnerabilities, and threat detection.",
        },
        {
            title: "CyberOps Associate",
            issuer: "Cisco",
            icon: <ShieldCheck size={20} className="text-primary-400" />,
            image: "https://images.credly.com/images/53f37f83-04a1-4935-9b1e-21a99cc6e1b2/linkedin_thumb_CyberOpsAssoc.png",
            description: "Broad understanding of Security Operations and skills to detect and analyze intrusions.",
        },
        {
            title: "CCNA: Switching, Routing, and Wireless Essentials",
            issuer: "Cisco",
            icon: <Award size={20} className="text-primary-400" />,
            image: "https://images.credly.com/images/f4ccdba9-dd65-4349-baad-8f05df116443/linkedin_thumb_CCNASRWE__1_.png",
            description: "Foundation in switching operations, wired/wireless LAN configuration, and redundancy protocols.",
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
                            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Certificates</span>
                        </h2>
                        <p className="text-foreground/50 text-sm md:text-base font-light max-w-md">
                            Professional certifications validating my expertise.
                        </p>
                    </div>
                    <Link href="/certificates" className="view-more-link shrink-0">
                        View all certificates <ArrowRight size={16} />
                    </Link>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-5">
                    {topCerts.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-7 group relative overflow-hidden flex items-center min-h-[100px]"
                        >
                            {/* Base Card Content */}
                            <div className="w-full flex items-center gap-4 transition-opacity duration-300 group-hover:opacity-0 relative z-10">
                                <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                                    {cert.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-foreground leading-snug tracking-tight mb-1">
                                        {cert.title}
                                    </h3>
                                    <p className="text-foreground/50 text-xs font-light">{cert.issuer}</p>
                                </div>
                            </div>

                            {/* Hover Overlay Modal */}
                            <div className="absolute inset-0 z-20 bg-background/95 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center gap-4 p-5 translate-y-2 group-hover:translate-y-0">
                                <div className="w-12 h-12 shrink-0 drop-shadow-lg">
                                    <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-xs font-light text-foreground/80 leading-snug line-clamp-2">
                                        {cert.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
