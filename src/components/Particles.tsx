"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Particles() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 25 + 12,
        delay: Math.random() * 8,
        // Some particles are brighter green
        bright: Math.random() > 0.7,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full mix-blend-screen ${
            p.bright ? "bg-primary-400/40" : "bg-secondary-400/25"
          }`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, 30, 0],
            opacity: [0, p.bright ? 0.8 : 0.5, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
