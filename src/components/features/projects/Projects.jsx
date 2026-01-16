'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { projects } from '../../../data/portfolioData';
import { ShimmeringText } from '../../ui/ShimmeringText';

const Projects = () => {
    // Show only first 4 projects for the main section
    const featuredProjects = projects.slice(0, 4);

    return (
        <section className="relative overflow-hidden">

            <div className="max-w-6xl mx-auto px-2 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16 md:mb-24 border-b border-black/5 dark:border-white/5 pb-8 flex justify-between items-end"
                >
                    <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 dark:text-zinc-500 block mb-2">
                            Curated Selection
                        </span>
                        <h2 className="text-4xl md:text-5xl font-instrument italic font-normal text-gray-900 dark:text-white tracking-tight">
                            Featured <span className="font-inter not-italic font-light text-gray-400 dark:text-zinc-500 text-3xl md:text-4xl">Works</span>
                        </h2>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24 mb-20">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* View All Work Link */}
                <div className="flex justify-center mt-12 mb-20">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link
                            href="/projects"
                            className="group flex items-center gap-3 px-8 py-4 bg-gray-950 dark:bg-white text-white dark:text-black rounded-full font-inter font-medium text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-white/20"
                        >
                            View All Work
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* "Cooking more projects" Faded Text */}
            <div className="text-center relative pointer-events-none select-none overflow-hidden py-10 opacity-50">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <ShimmeringText
                        text="More in development..."
                        className="text-[10vw] md:text-[4vw] font-instrument italic leading-tight pb-1 tracking-tighter"
                    />
                </motion.div>
                </div>
        </section>
    );
};

export default Projects;