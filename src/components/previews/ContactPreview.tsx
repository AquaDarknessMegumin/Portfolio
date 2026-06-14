"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export function ContactPreview() {
    return (
        <section className="py-28 relative overflow-hidden bg-background">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container mx-auto px-6 max-w-[900px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-10 md:p-16 text-center relative overflow-hidden"
                >
                    {/* Ambient glow effects */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-primary-500/8 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-primary-500/5 rounded-full blur-[60px] pointer-events-none" />
                    <div className="absolute top-1/2 left-0 w-[150px] h-[150px] bg-primary-500/5 rounded-full blur-[50px] pointer-events-none" />

                    <div className="relative z-10">
                        <motion.div 
                            className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center mx-auto mb-6"
                            whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <Mail size={24} className="text-primary-400" />
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-4 text-foreground">
                            Let&apos;s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Together</span>
                        </h2>

                        <p className="text-foreground/50 text-sm md:text-base font-light max-w-md mx-auto mb-10 leading-relaxed">
                            Have a project in mind or just want to connect? I&apos;d love to hear from you.
                        </p>

                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
                        >
                            <Sparkles size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            Get In Touch
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
