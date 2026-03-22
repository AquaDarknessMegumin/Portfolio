"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function ContactPreview() {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container mx-auto px-6 max-w-[900px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-10 md:p-16 text-center relative overflow-hidden"
                >
                    {/* Subtle glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-primary-500/8 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center mx-auto mb-6">
                            <Mail size={24} className="text-primary-400" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tighter mb-4 text-foreground">
                            Let&apos;s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Together</span>
                        </h2>

                        <p className="text-foreground/50 text-sm md:text-base font-light max-w-md mx-auto mb-8 leading-relaxed">
                            Have a project in mind or just want to connect? I&apos;d love to hear from you.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                        >
                            Get In Touch
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
