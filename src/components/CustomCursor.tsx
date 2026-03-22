"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 64 : 16;
  
  // Set to center directly
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing effect of the outer circle
  const springConfig = { damping: 20, stiffness: 200, mass: 0.2 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Faster spring for the inner dot
  const dotSpringConfig = { damping: 25, stiffness: 400, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("magnetic")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer Trailing Glassy Circle */}
      <motion.div
        className="fixed top-0 left-0 bg-primary-500/10 border border-primary-500/30 backdrop-blur-[2px] rounded-full pointer-events-none z-[9998] hidden lg:flex items-center justify-center transition-colors duration-300"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
          scale: isHovered ? 1.1 : [1, 1.15, 1], // Breathing effect when not hovered
        }}
        transition={{ 
          width: { type: "tween", ease: "backOut", duration: 0.3 },
          height: { type: "tween", ease: "backOut", duration: 0.3 },
          scale: {
            duration: isHovered ? 0.3 : 2.5,
            repeat: isHovered ? 0 : Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Subtle inner ring when hovered */}
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-full border border-primary-500/20 rounded-full animate-ping"
            style={{ animationDuration: '2s' }}
          />
        )}
      </motion.div>

      {/* Inner precise solid dot */}
      <motion.div
        className="fixed top-0 left-0 bg-primary-500 rounded-full pointer-events-none z-[9999] hidden lg:block shadow-[0_0_10px_rgba(34,197,94,0.5)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 4 : 8,
          height: isHovered ? 4 : 8,
          opacity: isHovered ? 0.5 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />
    </>
  );
}
