'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
// import { Link } from 'react-router-dom';
import { Github, Globe, ArrowUpRight } from 'lucide-react';
import { techStack } from '../../../data/portfolioData';

const ProjectCard = ({ project, index }) => {
    const stackItems = project.stack.map(techName => {
        return techStack.find(t => t.name === techName) || { name: techName, icon: null };
    });

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col"
        >
            {/* Image/Gradient Area with Floating Browser Feel */}
            <div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-black/[0.05] dark:border-white/[0.05] transition-all duration-700 ease-[0.22,1,0.36,1]">

                {/* Dynamic Glow Effect on Hover */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 blur-3xl pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${project.bgColor || '#71717a'}, transparent 70%)` }}
                />

                {/* Main Image Container */}
                <div className="absolute inset-4 md:inset-6 bottom-0 rounded-t-2xl overflow-hidden bg-white dark:bg-zinc-800 shadow-2xl transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:translate-y-2 group-hover:scale-[1.02]">
                    {/* Browser Bar */}
                    <div className="h-8 w-full bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-black/[0.03] dark:border-white/[0.03] flex items-center px-4 gap-1.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-red-400/20 dark:bg-red-400/10" />
                        <div className="w-2 h-2 rounded-full bg-amber-400/20 dark:bg-amber-400/10" />
                        <div className="w-2 h-2 rounded-full bg-emerald-400/20 dark:bg-emerald-400/10" />
                    </div>

                    {/* Project Preview */}
                    <div className="relative w-full h-full">
                        {project.img ? (
                            <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                quality={75}
                                sizes="(max-width: 768px) 90vw, 45vw"
                                className="object-contain transition-all duration-1000 group-hover:scale-[1.02]"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-zinc-50 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                                <span className="text-4xl font-instrument italic opacity-10">{project.title.charAt(0)}</span>
                            </div>
                        )}
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                </div>
            </div>

            {/* Content Area - Premium Minimalist */}
            <div className="pt-8 px-2 space-y-4">
                <div className="flex items-start justify-between">
                    <div className="space-y-1">
                        <h3 className="text-2xl md:text-3xl font-instrument italic text-zinc-900 dark:text-zinc-100 tracking-tight leading-none">
                            {project.title}
                        </h3>
                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                            {project.role}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                className="p-2.5 rounded-full border border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                                aria-label="GitHub"
                            >
                                <Github size={16} strokeWidth={1.5} />
                            </a>
                        )}
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                className="p-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:scale-105 active:scale-95 transition-all shadow-lg"
                                aria-label="Live Demo"
                            >
                                <ArrowUpRight size={16} strokeWidth={2.5} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-sm font-inter font-light text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                {/* Expanding Tech Stack - Overlapping Design */}
                <div className="flex items-center mt-3 pl-2">
                    <div className="flex -space-x-2 hover:space-x-1 transition-all duration-300">
                        {stackItems.map((tech, i) => (
                            <TechCircle key={i} tech={tech} index={i} total={stackItems.length} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Clean Circular Stack Item
const TechCircle = ({ tech, index, total }) => {
    // Determine tooltip position alignment
    let tooltipPosClass = "left-1/2 -translate-x-1/2";
    let arrowPosClass = "left-1/2 -translate-x-1/2";

    if (index === 0) {
        // First item: Align Left
        tooltipPosClass = "left-0 translate-x-0";
        arrowPosClass = "left-4 -translate-x-1/2";
    } else if (index === total - 1) {
        // Last item: Align Right
        tooltipPosClass = "right-0 translate-x-0 left-auto";
        arrowPosClass = "right-4 translate-x-1/2"; // approximate arrow position
    }

    return (
        <div className="group/tech relative flex items-center justify-center w-9 h-9 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:z-20 transition-all duration-300 hover:scale-110 cursor-help shadow-xs">
            {tech.icon ? (
                <>
                    <img
                        src={typeof tech.icon === 'string' ? tech.icon : tech.icon.src}
                        alt={tech.name}
                        className={`w-5 h-5 object-contain ${tech.darkIcon ? 'dark:hidden' : (tech.invertDark ? 'dark:invert' : '')} opacity-80 group-hover/tech:opacity-100`}
                    />
                    {tech.darkIcon && (
                        <img
                            src={tech.darkIcon}
                            alt={tech.name}
                            className="w-4 h-4 object-contain hidden dark:block opacity-80 group-hover/tech:opacity-100"
                        />
                    )}
                </>
            ) : (
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            )}

            {/* Tooltip popping up */}
            <div className={`absolute bottom-full mb-2 px-2 py-1 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-[10px] font-bold rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-30 ${tooltipPosClass}`}>
                {tech.name}
                {/* Arrow */}
                <div className={`absolute top-full border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100 ${arrowPosClass}`} />
            </div>
        </div>
    );
};

export default ProjectCard;
