"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FavoriteReveal = ({ children, favorites }) => {
  const [isHovered, setIsHovered] = useState(false);
  const favoriteList = Array.isArray(favorites) ? favorites : [favorites];

  return (
    <span
      className="relative inline-block cursor-help group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-gray-900 dark:text-white font-medium border-b-2 border-gray-900/40 dark:border-white/40 hover:border-gray-900 dark:hover:border-white transition-colors pb-0.5">
        {children}
      </span>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 px-5 py-3 bg-zinc-900/95 dark:bg-zinc-100/95 text-zinc-100 dark:text-zinc-900 text-[13px] rounded-2xl shadow-2xl whitespace-nowrap backdrop-blur-xl border border-white/10 dark:border-black/5 max-sm:fixed max-sm:bottom-10 max-sm:left-4 max-sm:right-4 max-sm:translate-x-0 max-sm:whitespace-normal"
          >
            <div className="flex flex-col gap-2.5">
              <span className="text-[13px] uppercase tracking-[0.22em]  font-mono font-bold text-center border-b border-white/10 dark:border-black/10 pb-2 mb-1 text-zinc-500 dark:text-zinc-700">
                Snapshot
              </span>
              <ul className="space-y-1.5">
                {favoriteList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 pr-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-linear-to-tr from-cyan-500 to-blue-500" />
                    <span className="font-bold text-[12px] tracking-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-[6px] border-transparent border-t-zinc-900/95 dark:border-t-zinc-100/95 max-sm:hidden" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

const BeyondCode = () => {
  return (
    <section className="py-20 relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-zinc-200 dark:bg-zinc-800/10 rounded-full blur-[120px] opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-4xl"
      >
        <div className="space-y-8">
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-black/10 dark:bg-white/10"></div>
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-gray-400 dark:text-zinc-500">
              Persona
            </span>
          </div>

          {/* Content Block */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-instrument italic font-normal text-gray-900 dark:text-white tracking-tight leading-tight">
              Beyond{" "}
              <span className="font-inter not-italic font-bold text-gray-400 dark:text-zinc-600">
                the keyboard.
              </span>
            </h2>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative p-8 md:p-12 rounded-4xl border border-black/3 dark:border-white/3 bg-gray-50/50 dark:bg-white/2 backdrop-blur-3xl overflow-visible group"
            >
              {/* Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] rounded-4xl"></div>

              <div className="text-xl md:text-2xl font-inter font-light text-gray-700 dark:text-zinc-300 leading-relaxed tracking-tight relative z-10">
                Beyond the code, I'm into{" "}
                <FavoriteReveal
                  favorites={[
                    "The Lean Startup",
                    "Zero to One",
                    "The Almanack of Naval Ravikant",
                  ]}
                >
                  books on building things
                </FavoriteReveal>
                , late-night{" "}
                <FavoriteReveal
                  favorites={["Arijit Singh", "FUNK", "The Weeknd"]}
                >
                  music sessions
                </FavoriteReveal>{" "}
                <span className="font-instrument italic text-gray-500 dark:text-zinc-500">
                  (headphones in, world out)
                </span>
                , down a rabbit hole of{" "}
                <FavoriteReveal
                  favorites={[
                    "How money actually works",
                    "Why Web3 matters",
                    "The future of AI agents",
                  ]}
                >
                  big ideas
                </FavoriteReveal>
                , and obsessed with{" "}
                <FavoriteReveal
                  favorites={[
                    "Lex Fridman Podcast",
                    "My First Million",
                    "Lenny's Podcast",
                  ]}
                >
                  podcasts
                </FavoriteReveal>{" "}
                that make me think differently about the world.
              </div>

              {/* Floating Accent */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-linear-to-br from-purple-500/5 to-cyan-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BeyondCode;
