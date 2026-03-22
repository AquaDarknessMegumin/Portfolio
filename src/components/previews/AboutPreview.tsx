"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export function AboutPreview() {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tighter mb-4 text-foreground">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Me</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Profile Image */}
                        <div className="w-full md:w-1/3 relative min-h-[300px] md:min-h-[400px] overflow-hidden group">
                            <Image
                                src="/ProfilePicture.png"
                                alt="Shawn Ryan Nacario"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/20" />
                            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 backdrop-blur-md border border-foreground/10 text-xs font-medium text-foreground">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Available for work
                                </div>
                            </div>
                        </div>

                        {/* Bio Summary */}
                        <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                            <p className="text-primary-500 text-xs font-bold tracking-widest uppercase mb-4">Software Engineer</p>
                            <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-foreground leading-snug tracking-tight">
                                I am a dedicated IT student bridging the gap between complex problems and elegant solutions.
                            </h3>
                            <p className="text-foreground/60 text-sm md:text-base leading-relaxed font-light mb-6">
                                My academic journey at the University of San Carlos is complemented by a strong continuous drive
                                to learn modern technologies and build beautifully engineered applications.
                            </p>

                            <div className="flex items-center gap-4 mb-8 text-foreground/50 text-sm">
                                <MapPin size={16} className="text-primary-400" />
                                <span>Lapu-Lapu City, Cebu, Philippines</span>
                            </div>

                            <Link href="/about" className="view-more-link self-start">
                                Learn more about me <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
