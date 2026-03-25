"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

export function Certificates() {
    const certificates = [
        {
            title: "Introduction to Cybersecurity",
            issuer: "Cisco",
            credentialUrl: "https://www.credly.com/badges/7523b54e-3903-4ee2-8848-60b6e66a0c67/public_url",
            icon: <ShieldCheck size={22} className="text-primary-400" />,
            image: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/linkedin_thumb_I2CS__1_.png",
            description: "The holder of this credential has introductory knowledge of cybersecurity, including the global implications of cyber threats on industries. They understand vulnerabilities and threat detection and defense.",
        },
        {
            title: "CyberOps Associate",
            issuer: "Cisco",
            credentialUrl: "https://www.credly.com/badges/1fbfcbe8-e2a3-4915-abfc-8d8ac664a48d/public_url",
            icon: <ShieldCheck size={22} className="text-primary-400" />,
            image: "https://images.credly.com/images/53f37f83-04a1-4935-9b1e-21a99cc6e1b2/linkedin_thumb_CyberOpsAssoc.png",
            description: "The holder has a broad understanding of Security Operations. They developed problem-solving skills to detect and analyze intrusions and monitor the network by completing hands-on labs.",
        },
        {
            title: "CCNA: Switching, Routing, and Wireless Essentials",
            issuer: "Cisco",
            credentialUrl: "https://www.credly.com/badges/1ac62d18-80ef-427d-957c-de5f5bf633af/public_url",
            icon: <Award size={22} className="text-primary-400" />,
            image: "https://images.credly.com/images/f4ccdba9-dd65-4349-baad-8f05df116443/linkedin_thumb_CCNASRWE__1_.png",
            description: "The earner has a foundation in switching operations, wired and wireless LAN configuration using security best practices, redundancy protocols, and developed problem-solving skills.",
        }
    ];

    return (
        <section id="certificates" className="py-28 relative overflow-hidden">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tighter mb-4 text-foreground">
                        Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Certificates</span>
                    </h2>
                    <p className="max-w-lg mx-auto text-sm md:text-base text-foreground/50 font-light leading-relaxed">
                        Professional certifications validating my expertise in networking and cybersecurity.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-5">
                    {certificates.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 group cursor-pointer relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Base Card Content */}
                            <div className="relative z-10 flex flex-col h-full transition-opacity duration-300 group-hover:opacity-0">
                                <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6">
                                    {cert.icon}
                                </div>

                                <h3 className="text-base font-medium mb-3 text-foreground leading-snug tracking-tight">
                                    {cert.title}
                                </h3>

                                <div className="mt-auto">
                                    <p className="text-foreground/50 text-sm font-light mb-5">{cert.issuer}</p>

                                    <span className="inline-flex items-center gap-2 text-xs font-medium text-foreground/40 tracking-wider uppercase">
                                        Hover to view details
                                    </span>
                                </div>
                            </div>
                            
                            {/* Hover Overlay Modal */}
                            <div className="absolute inset-0 z-20 bg-background/95 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center translate-y-4 group-hover:translate-y-0">
                                <div className="w-24 h-24 mb-4 drop-shadow-2xl">
                                    <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
                                </div>
                                <h3 className="text-sm font-medium mb-2 text-foreground">{cert.title}</h3>
                                <p className="text-xs font-light text-foreground/70 leading-relaxed mb-4 line-clamp-4">
                                    {cert.description}
                                </p>
                                <span className="inline-flex items-center gap-2 text-xs font-medium text-primary-400 group-hover:text-primary-300 tracking-wider uppercase transition-colors mt-auto">
                                    View Credential <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
