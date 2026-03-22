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
        },
        {
            title: "CyberOps Associate",
            issuer: "Cisco",
            icon: <ShieldCheck size={20} className="text-primary-400" />,
        },
        {
            title: "CCNA: Switching, Routing, and Wireless Essentials",
            issuer: "Cisco",
            icon: <Award size={20} className="text-primary-400" />,
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
                            className="glass-card p-7 group flex items-start gap-4"
                        >
                            <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-300">
                                {cert.icon}
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-foreground group-hover:text-primary-400 transition-colors leading-snug tracking-tight mb-1">
                                    {cert.title}
                                </h3>
                                <p className="text-foreground/40 text-xs font-light">{cert.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
