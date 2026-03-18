"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-background">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-primary-500/8 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-secondary-500/6 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-foreground">
                        Get In <span className="gradient-text italic">Touch</span>
                    </h2>
                    <p className="text-foreground/50 text-sm md:text-base max-w-lg mx-auto font-light">
                        Have a project in mind or just want to connect? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 flex flex-col gap-5"
                    >
                        <a href="mailto:shawnryannacario@gmail.com" className="glass-card p-6 flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_15px_rgba(139,26,42,0.2)]">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold mb-1 text-foreground">Email Me</h4>
                                <p className="text-foreground/50 text-sm font-light">shawnryannacario@gmail.com</p>
                            </div>
                        </a>

                        <a href="tel:09272232334" className="glass-card p-6 flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-400 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_15px_rgba(184,134,11,0.2)]">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold mb-1 text-foreground">Call Me</h4>
                                <p className="text-foreground/50 text-sm font-light">0927 223 2334</p>
                            </div>
                        </a>

                        <div className="glass-card p-6 flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-400 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_15px_rgba(201,120,120,0.2)]">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold mb-1 text-foreground">Location</h4>
                                <p className="text-foreground/50 text-sm font-light">Lapu-Lapu City, Cebu</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3 glass-card p-8 md:p-10 relative overflow-hidden"
                    >
                        {/* Gold gradient accent */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-secondary-500 via-primary-400 to-secondary-400" />

                        <form onSubmit={handleSubmit} className="space-y-7">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        suppressHydrationWarning
                                        className="w-full bg-foreground/[0.04] border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-secondary-400/50 focus:ring-2 focus:ring-secondary-400/20 transition-all placeholder:text-foreground/20"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        suppressHydrationWarning
                                        className="w-full bg-foreground/[0.04] border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-secondary-400/50 focus:ring-2 focus:ring-secondary-400/20 transition-all placeholder:text-foreground/20"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    suppressHydrationWarning
                                    className="w-full bg-foreground/[0.04] border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-secondary-400/50 focus:ring-2 focus:ring-secondary-400/20 transition-all placeholder:text-foreground/20"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    suppressHydrationWarning
                                    rows={4}
                                    className="w-full bg-foreground/[0.04] border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-secondary-400/50 focus:ring-2 focus:ring-secondary-400/20 transition-all resize-none placeholder:text-foreground/20"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                suppressHydrationWarning
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 text-white rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed glow-hover hover:-translate-y-0.5"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                ) : isSubmitted ? (
                                    <span className="flex items-center gap-2">✓ Message Sent Successfully!</span>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Success overlay */}
                        {isSubmitted && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 bg-background/95 backdrop-blur-md rounded-[1.25rem] flex flex-col items-center justify-center z-20"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary-500 to-secondary-400 flex items-center justify-center mb-5 shadow-[0_8px_30px_rgba(184,134,11,0.2)]">
                                    <Send size={26} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">Thank You!</h3>
                                <p className="text-foreground/50 text-sm text-center px-8">
                                    Your message has been received. I&apos;ll respond shortly.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
