'use client';

import { motion } from 'framer-motion';
import { AnimatedTextSlider } from '../../animated-text-slider';

const AboutHero = () => {
    // Elegant, punchy tags with a modern pill look
    const tags = [
        { label: 'Curious', color: 'text-cyan-600 dark:text-cyan-300', border: 'border-cyan-200 dark:border-cyan-500/20', bg: 'bg-cyan-50 dark:bg-cyan-500/10' },
        { label: 'Focused', color: 'text-blue-600 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-500/20', bg: 'bg-blue-50 dark:bg-blue-500/10' },
        { label: 'Obsessed', color: 'text-purple-600 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-500/20', bg: 'bg-purple-50 dark:bg-purple-500/10' },
        { label: 'Builder', color: 'text-emerald-600 dark:text-emerald-300', border: 'border-emerald-200 dark:border-emerald-500/20', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
    ];

    const stats = [
        { label: 'Base', value: 'Kanpur, India', icon: '📍' },
        { label: 'Crafting Since', value: '2024', icon: '⚡' },
        { label: 'Availability', value: 'Global / Freelance', icon: '🟢' },
    ];

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-8 md:py-0">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full max-w-7xl mx-auto px-4 md:px-6"
            >
                {/* Main Content Grid - Centered & Compact */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full lg:gap-20 items-center">

                    {/* Left Side: Copy */}
                    <div className="lg:col-span-7 w-full space-y-10">
                        <div className="space-y-8">
                            {/* Live Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm backdrop-blur-md"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300 pr-1">Open to Work</span>
                            </motion.div>

                            {/* Dynamic Heading */}
                            <div className="space-y-4 w-full">
                                <h1 className="text-5xl w-full md:text-7xl lg:text-8xl font-inter font-bold tracking-tighter text-zinc-900 dark:text-white leading-[0.95] drop-shadow-sm">
                                    <span className="block">From curious kid</span>
                                    <span className="font-instrument italic font-normal text-zinc-500 dark:text-zinc-500">
                                        to <span className="block md:inline text-zinc-900 dark:text-white underline decoration-zinc-200 dark:decoration-zinc-800 decoration-2 underline-offset-4">shaping</span>
                                    </span>
                                    <br className="hidden md:block" />
                                    <span className="block mt-2 md:mt-0 w-full">
                                        <AnimatedTextSlider
                                            className="text-2xl w-full md:text-3xl font-instrument italic text-zinc-600 dark:text-zinc-400 tracking-normal leading-relaxed py-1"
                                            texts={[
                                                "crafting interfaces that feel alive.",
                                                "designing logic with soul.",
                                                "building the future of web."
                                            ]}
                                            interval={3500}
                                        />
                                    </span>
                                </h1>
                            </div>
                        </div>

                        {/* Bio Text - Concise */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="space-y-8 max-w-xl"
                        >
                            <p className="text-lg text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                                I'm <span className="font-medium text-zinc-900 dark:text-white">Shivam</span>. A developer who thinks in pixels and logic. Focused on <span className="text-zinc-900 dark:text-white font-medium">Freelancing</span> & <span className="text-zinc-900 dark:text-white font-medium">Web3</span>, rewriting the rules of how we interact online.
                            </p>

                            <div className="flex flex-wrap gap-2.5">
                                {tags.map((tag, index) => (
                                    <motion.span
                                        key={tag.label}
                                        className={`px-3.5 py-1.5 rounded-full border ${tag.border} ${tag.bg} ${tag.color} text-[11px] font-medium tracking-wide uppercase cursor-default`}
                                        whileHover={{ scale: 1.05, y: -1 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        {tag.label}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Snapshot Card - Stylish Glass */}
                    <div className="lg:col-span-5 hidden lg:block relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                            className="relative group mr-8"
                        >
                            {/* Stylish Glow */}
                            <div className="absolute -inset-0.5 bg-linear-to-br from-zinc-200 to-transparent dark:from-zinc-700 rounded-4xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700" />

                            <div className="relative p-8 rounded-4xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl shadow-xl dark:shadow-black/50 overflow-hidden">
                                {/* Card Texture/Grain */}
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

                                <div className="relative z-10 space-y-8">
                                    <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-4">
                                        <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500">
                                            Identity
                                        </h3>
                                        <div className="flex gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-pulse" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {stats.map((stat, i) => (
                                            <div key={stat.label} className="flex items-center gap-5 group/item cursor-default">
                                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-zinc-100 dark:border-white/10 flex items-center justify-center text-xl shadow-sm transition-transform group-hover/item:scale-110 duration-300">
                                                    {stat.icon}
                                                </div>
                                                <div>
                                                    <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                                                        {stat.label}
                                                    </span>
                                                    <span className="block text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                                        {stat.value}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4 mt-2 border-t border-black/5 dark:border-white/10 flex justify-between items-center opacity-70">
                                        <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Verified</span>
                                        <div className="text-[16px] animate-pulse">✨</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Mobile Snapshot (Simplified) */}
                    <div className="lg:hidden w-full mt-8">
                        <div className="p-6 rounded-3xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md space-y-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-white/5 flex items-center justify-center text-lg shadow-sm">{stat.icon}</div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono uppercase text-zinc-500">{stat.label}</span>
                                        <span className="text-sm font-medium text-zinc-800 dark:text-white">{stat.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutHero;
