"use client";

import { useRef, useState, cloneElement, ReactElement } from "react";
import { motion } from "framer-motion";

export function Magnetic({ children, multiplier = 0.2 }: { children: ReactElement; multiplier?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * multiplier, y: middleY * multiplier });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  
  return (
    <motion.div
        className="magnetic relative inline-flex"
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
