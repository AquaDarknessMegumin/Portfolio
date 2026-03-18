"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 64 : 16;
  
  // We offset it so the top-left starts at 0 initially but gets offset in render
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing effect
  const springConfig = { damping: 20, stiffness: 200, mass: 0.2 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Set to center of the dot
      mouseX.set(e.clientX - cursorSize / 2);
      mouseY.set(e.clientY - cursorSize / 2);
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
  }, [cursorSize, mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:flex items-center justify-center text-[10px] font-bold text-black"
      style={{
        x: cursorX,
        y: cursorY,
        width: cursorSize,
        height: cursorSize,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
    >
    </motion.div>
  );
}
