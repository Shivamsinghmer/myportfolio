'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../../ui/SectionHeading';
import { roles } from '../../../data/portfolioData';

const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <motion.section
            variants={{
                hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="max-w-3xl mx-auto"
        >
            {/* Refined Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mb-12 border-b border-black/5 dark:border-white/5 pb-8 flex justify-between items-end"
            >
                <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 dark:text-zinc-500 block mb-2">
                        Career Path
                    </span>
                    <h2 className="text-4xl md:text-5xl font-instrument italic font-normal text-gray-900 dark:text-white tracking-tight">
                        Experience <span className="font-inter not-italic font-light text-gray-400 dark:text-zinc-500 text-3xl md:text-4xl">& Roles</span>
                    </h2>
                </div>
            </motion.div>

            <div className="relative flex flex-col gap-12 pl-10 border-l border-black/3 dark:border-white/3 ml-4" onMouseLeave={() => setActiveIndex(null)}>
                {roles.map((role, index) => {
                    const isOpen = activeIndex === index;
                    const isAnyOpen = activeIndex !== null;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            onMouseEnter={() => setActiveIndex(index)}
                            className={`group relative transition-all duration-500 ease-out ${isAnyOpen && !isOpen ? 'opacity-40 blur-[0.5px]' : 'opacity-100'}`}
                        >
                            {/* Timeline Dot with Pulse Effect on Active */}
                            <div className="absolute -left-11.25 top-6 flex items-center justify-center">
                                <div className={`w-2.5 h-2.5 rounded-full border border-white dark:border-zinc-950 transition-all duration-500 ${isOpen ? 'bg-black dark:bg-white scale-125 ring-8 ring-black/5 dark:ring-white/5 z-10' : 'bg-gray-300 dark:bg-zinc-800'}`} />
                                {isOpen && (
                                    <motion.div
                                        layoutId="pulse"
                                        className="absolute w-2.5 h-2.5 rounded-full bg-black dark:bg-white opacity-20 animate-ping"
                                    />
                                )}
                            </div>

                            {/* Main Content Area */}
                            <div className={`relative p-6 -m-6 rounded-3xl transition-all duration-500 ${isOpen ? 'bg-gray-50/50 dark:bg-white/2' : 'hover:bg-gray-50/30 dark:hover:bg-white/1'}`}>
                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                                        <div className="space-y-1">
                                            <h3 className={`text-2xl md:text-3xl font-instrument italic transition-colors duration-500 ${isOpen ? 'text-black dark:text-white' : 'text-gray-700 dark:text-zinc-400'}`}>
                                                {role.company}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                <span className="text-[13px] font-inter font-medium text-gray-900 dark:text-zinc-200">
                                                    {role.role}
                                                </span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-zinc-700" />
                                                <span className="text-[11px] font-mono tracking-wider text-gray-400 dark:text-zinc-500 uppercase">
                                                    {role.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded Content with Smooth Transition */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                            >
                                                <div className="pt-2 space-y-6">
                                                    <p className="text-base font-inter font-light text-gray-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                                                        {role.description}
                                                    </p>

                                                    {role.skills && (
                                                        <div className="flex flex-wrap gap-2">
                                                            {role.skills.split('•').map((skill, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-lg bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 text-gray-500 dark:text-zinc-400"
                                                                >
                                                                    {skill.trim()}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default Experience;