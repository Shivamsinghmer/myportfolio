'use client';

import { motion } from 'motion/react';
import { AnimatedTextSlider } from '../../animated-text-slider';

const AboutHero = () => {
    const tags = [
        { label: 'Curious', color: 'text-cyan-500/90 dark:text-cyan-400/90', border: 'border-cyan-500/10 dark:border-cyan-400/10', bg: 'bg-cyan-500/5 dark:bg-cyan-400/5' },
        { label: 'Focused', color: 'text-blue-500/90 dark:text-blue-400/90', border: 'border-blue-500/10 dark:border-blue-400/10', bg: 'bg-blue-500/5 dark:bg-blue-400/5' },
        { label: 'Obsessed', color: 'text-purple-500/90 dark:text-purple-400/90', border: 'border-purple-500/10 dark:border-purple-400/10', bg: 'bg-purple-500/5 dark:bg-purple-400/5' },
        { label: 'Builder', color: 'text-emerald-500/90 dark:text-emerald-400/90', border: 'border-emerald-500/10 dark:border-emerald-400/10', bg: 'bg-emerald-500/5 dark:bg-emerald-400/5' },
    ];

    const stats = [
        { label: 'Base', value: 'Kanpur, India', icon: '📍' },
        { label: 'Crafting Since', value: '2024', icon: '⚡' },
        { label: 'Availability', value: 'Global / Freelance', icon: '🟢' },
    ];

    return (
        <section className="relative pt-12 md:pb-32 pb-20 overflow-visible">
            {/* Minimalist Background Accents */}
            <div className="absolute inset-x-0 -top-24 h-96 pointer-events-none opacity-40 dark:opacity-20 hidden md:block">
                <div className="absolute top-0 left-1/4 w-[50%] h-full bg-linear-to-r from-purple-200/20 via-cyan-200/20 to-transparent blur-3xl animate-pulse"></div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative"
            >
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left Side: Copy */}
                    <div className="lg:col-span-7 space-y-16">
                        <div className="space-y-10">
                            {/* Live Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white dark:bg-white/2 border border-black/4 dark:border-white/6 shadow-xs"
                            >
                                <div className="relative flex h-1.5 w-1.5 ml-1">
                                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></div>
                                    <div className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></div>
                                </div>
                                <span className="text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-zinc-400 pr-1">Now open for creative collaborations</span>
                            </motion.div>

                            {/* Dynamic Heading */}
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-7xl font-inter font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
                                    From curious kid <span className="font-instrument italic font-normal text-gray-400/80 dark:text-zinc-500/80">to</span> <br />
                                    <span className="font-instrument italic font-normal text-gray-900 dark:text-white underline decoration-gray-200/50 dark:decoration-zinc-800/50 underline-offset-8 decoration-2">shaping</span>
                                </h1>
                                <div className="h-12 md:h-16 flex items-center">
                                    <AnimatedTextSlider
                                        className="text-3xl md:text-4xl font-instrument italic font-normal text-gray-600 dark:text-zinc-400"
                                        texts={[
                                            "experiences that feel right.",
                                            "interfaces that make sense.",
                                            "products people actually use."
                                        ]}
                                        interval={3500}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Bio Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="space-y-10"
                        >
                            <div className="space-y-8 max-w-2xl">
                                <p className="text-xl md:text-2xl text-gray-700 dark:text-zinc-300 font-inter font-light leading-relaxed tracking-tight">
                                    I'm <span className="text-gray-950 dark:text-white font-medium underline decoration-gray-300 dark:decoration-zinc-700 underline-offset-4 decoration-1">Shivam</span>, a builder who cares about how things look, but cares <span className="italic font-instrument font-medium text-gray-900 dark:text-white">even more </span> about how they work.
                                </p>
                                <p className="text-lg text-gray-500 dark:text-zinc-400 font-inter font-light leading-relaxed">
                                    Currently focused on <span className="text-gray-700 dark:text-zinc-300 font-normal">Freelancing</span> and diving deep into the world of <span className="text-gray-700 dark:text-zinc-300 font-normal">Web3</span>. Exploring how blockchain can reshape our digital interactions, one smart contract at a time.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2.5 pt-4">
                                {tags.map((tag, index) => (
                                    <motion.span
                                        key={tag.label}
                                        className={`px-4 py-2 rounded-2xl border ${tag.border} ${tag.bg} ${tag.color} text-[12px] font-medium tracking-tight cursor-default`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {tag.label}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Snapshot Card */}
                    <div className="lg:col-span-5 hidden lg:block sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, rotate: 2 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 1, type: "spring" }}
                            className="group relative"
                        >
                            {/* Card Decoration */}
                            <div className="absolute -inset-4 bg-linear-to-b from-gray-50 to-transparent dark:from-zinc-900/50 dark:to-transparent rounded-[3rem] -z-10 blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>

                            <div className="relative p-10 rounded-4xl border border-black/4 dark:border-white/4 bg-white/40 dark:bg-black/20 backdrop-blur-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] space-y-12">
                                <div className="flex items-center justify-between border-b border-black/4 dark:border-white/4 pb-6">
                                    <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400 dark:text-zinc-500">
                                        Identity Snapshot
                                    </h3>
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200 dark:bg-zinc-800"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200 dark:bg-zinc-800"></div>
                                    </div>
                                </div>

                                <div className="space-y-10">
                                    {stats.map((stat, i) => (
                                        <motion.div
                                            key={stat.label}
                                            className="flex items-center gap-6 group/item"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/3 border border-black/2 dark:border-white/5 flex items-center justify-center text-xl transition-all duration-500 group-hover/item:border-black/10 dark:group-hover/item:border-white/10 group-hover/item:shadow-lg shadow-black/5">
                                                {stat.icon}
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-400 dark:text-zinc-500">
                                                    {stat.label}
                                                </span>
                                                <span className="text-base font-medium text-gray-900 dark:text-white tracking-tight">
                                                    {stat.value}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="pt-6">
                                    <div className="h-px w-full bg-linear-to-r from-transparent via-black/[0.05] dark:via-white/[0.05] to-transparent"></div>
                                    <div className="flex items-center justify-between mt-6">
                                        <span className="text-[9px] text-gray-400 dark:text-zinc-600 font-mono uppercase tracking-[0.2em]">Verified Profile</span>
                                        <span className="text-[9px] text-gray-400 dark:text-zinc-600 font-mono uppercase tracking-[0.2em]">© 2026</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Mobile Snapshot (Simplified) */}
                    <div className="lg:hidden w-full">
                        <div className="p-8 rounded-4xl border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-zinc-900/50 space-y-6">
                            <div className="grid grid-cols-1 gap-6">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/3 flex items-center justify-center text-lg">{stat.icon}</div>
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-mono uppercase text-gray-400">{stat.label}</span>
                                            <span className="text-sm font-medium dark:text-white">{stat.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutHero;


