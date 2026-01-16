"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AnimatedTextSlider({
  texts = ["Text 1", "Text 2", "Text 3"],
  interval = 3500,
  className = ""
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative h-[1.5em] w-full overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0, 0.67, 0] }}
          className="absolute inset-0"
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
