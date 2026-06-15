"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_ferpqtm";
const EMAILJS_TEMPLATE_ID = "template_t2olhzk";
const EMAILJS_PUBLIC_KEY = "RFetVCdNlEkRY5Z7L";

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(formRef.current);
        const templateParams = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            subject: formData.get("subject") as string,
            message: formData.get("message") as string,
        };

        try {
            const result = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams
            );
            console.log("EmailJS success:", result);
            setIsSubmitted(true);
            formRef.current.reset();
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (err: unknown) {
            const errorMsg = err instanceof Error ? err.message : JSON.stringify(err);
            console.error("EmailJS error:", errorMsg);
            setError("Failed to send message. Please try again or email me directly.");
            setTimeout(() => setError(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-background">
            <div className="section-divider absolute top-0 left-0 right-0" />

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tighter mb-4 text-foreground">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Touch</span>
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
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 flex flex-col gap-5"
                    >
                        <a href="mailto:shawnryannacario@gmail.com" className="glass-card p-6 flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-300">
                                <Mail size={20} className="text-primary-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium mb-1 text-foreground">Email Me</h4>
                                <p className="text-foreground/50 text-sm font-light">shawnryannacario@gmail.com</p>
                            </div>
                        </a>

                        <a href="tel:09272232334" className="glass-card p-6 flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-300">
                                <Phone size={20} className="text-primary-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium mb-1 text-foreground">Call Me</h4>
                                <p className="text-foreground/50 text-sm font-light">0927 223 2334</p>
                            </div>
                        </a>

                        <div className="glass-card p-6 flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-accent-500/10 transition-all duration-300">
                                <MapPin size={20} className="text-accent-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium mb-1 text-foreground">Location</h4>
                                <p className="text-foreground/50 text-sm font-light">Lapu-Lapu City, Cebu</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3 glass-card p-8 md:p-10 relative overflow-hidden"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        suppressHydrationWarning
                                        className="w-full bg-foreground/[0.04] border border-neutral-200 dark:border-neutral-800/60 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all placeholder:text-foreground/20"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        suppressHydrationWarning
                                        className="w-full bg-foreground/[0.04] border border-neutral-200 dark:border-neutral-800/60 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all placeholder:text-foreground/20"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    suppressHydrationWarning
                                    className="w-full bg-foreground/[0.04] border border-neutral-200 dark:border-neutral-800/60 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all placeholder:text-foreground/20"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    suppressHydrationWarning
                                    rows={4}
                                    className="w-full bg-foreground/[0.04] border border-neutral-200 dark:border-neutral-800/60 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none placeholder:text-foreground/20"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {error && (
                                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                suppressHydrationWarning
                                disabled={isSubmitting}
                                className="w-full py-4 bg-foreground text-background rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] hover:shadow-2xl"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Premium Success Overlay */}
                        {isSubmitted && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-white/40 dark:bg-black/70 backdrop-blur-md rounded-[1.5rem] flex items-center justify-center z-20"
                            >
                                {/* Centered glass card box */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 250, damping: 20, delay: 0.15 }}
                                    className="relative bg-white dark:bg-[#0c120c] border border-black/5 dark:border-white/10 rounded-2xl px-10 py-12 flex flex-col items-center max-w-sm w-full mx-4 overflow-hidden success-popup-card"
                                >
                                    {/* Radial glow inside card */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-[250px] h-[250px] rounded-full bg-primary-500/8 blur-[80px]" />
                                    </div>

                                    {/* Animated floating particles */}
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20, scale: 0 }}
                                            animate={{
                                                opacity: [0, 0.6, 0],
                                                y: [20, -60 - i * 15],
                                                scale: [0, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                delay: 0.4 + i * 0.15,
                                                ease: "easeOut",
                                            }}
                                            className="absolute w-1.5 h-1.5 rounded-full bg-primary-400"
                                            style={{
                                                left: `${25 + i * 10}%`,
                                                top: "50%",
                                            }}
                                        />
                                    ))}

                                    {/* Animated checkmark circle */}
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.25 }}
                                        className="relative mb-6 z-10"
                                    >
                                        {/* Pulsing ring */}
                                        <motion.div
                                            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute -inset-3 rounded-full border-2 border-primary-500/30"
                                        />
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.25)]">
                                            <motion.svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="w-10 h-10"
                                            >
                                                <motion.path
                                                    d="M5 13l4 4L19 7"
                                                    stroke="white"
                                                    strokeWidth={2.5}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.5 }}
                                                />
                                            </motion.svg>
                                        </div>
                                    </motion.div>

                                    {/* Text */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="text-2xl font-serif font-semibold mb-2 text-foreground tracking-tight relative z-10"
                                    >
                                        Message Sent!
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.75 }}
                                        className="text-foreground/50 text-sm text-center max-w-xs font-light leading-relaxed relative z-10"
                                    >
                                        Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
