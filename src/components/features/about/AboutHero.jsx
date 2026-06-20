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

    const meta = [
        { label: 'Kanpur, India' },
        { label: 'Crafting Since 2024' },
        { label: 'Global / Freelance' },
    ];

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-8 md:py-0">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full max-w-4xl mx-auto px-4 md:px-6 text-center"
            >
                <div className="space-y-10 flex flex-col items-center">
                    {/* Live Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
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
                    <h1 className="text-5xl w-full md:text-7xl lg:text-8xl font-inter font-bold tracking-tighter text-zinc-900 dark:text-white leading-[0.95] drop-shadow-sm">
                        <span className="block">From curious kid</span>
                        <span className="font-instrument italic font-normal text-zinc-500 dark:text-zinc-500">
                            to <span className="text-zinc-900 dark:text-white underline decoration-zinc-200 dark:decoration-zinc-800 decoration-2 underline-offset-4">shaping</span>
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

                    {/* Bio Text - Concise */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="space-y-8 max-w-xl flex flex-col items-center"
                    >
                        <p className="text-lg text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                            I'm <span className="font-medium text-zinc-900 dark:text-white">Shivam</span>. A developer who thinks in pixels and logic. Focused on <span className="text-zinc-900 dark:text-white font-medium">Freelancing</span> & <span className="text-zinc-900 dark:text-white font-medium">Web3</span>, rewriting the rules of how we interact online.
                        </p>

                        <div className="flex flex-wrap justify-center gap-2.5">
                            {tags.map((tag) => (
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

                        {/* Slim meta strip */}
                        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 pt-2 border-t border-black/5 dark:border-white/10 w-full">
                            {meta.map((item, i) => (
                                <span key={item.label} className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500">
                                    {i > 0 && <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />}
                                    {item.label}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutHero;
