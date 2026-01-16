'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Building2, ExternalLink, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import VerifiedBadge from '../../ui/VerifiedBadge';
import Tooltip from '../../ui/Tooltip';
import { AnimatedTextSlider } from '../../../components/animated-text-slider.jsx';
import Link from 'next/link';
// import chd_map from "../../assets/chd_map.png"

const Header = () => {
    // State for dynamic time
    const [currentTime, setCurrentTime] = useState("GMT+5:30");
    const { theme, toggleTheme } = useTheme();

    // Effect to update time every minute (Asia/Kolkata)
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            };
            const timeString = now.toLocaleTimeString('en-US', options);
            setCurrentTime(timeString);
        };

        updateTime(); // Initial call
        const interval = setInterval(updateTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    // Correct Google Maps Link for Kanpur
    const mapLink = "https://www.google.com/maps/place/Kanpur,+India";

    return (
        <motion.section
            variants={{
                hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="relative mb-20"
        >
            {/* Banner Image */}
            <div className="w-full h-64 rounded-4xl overflow-hidden relative border border-black/5 dark:border-white/10 bg-black transition-all duration-500 group">
                <img
                    src="https://i.pinimg.com/1200x/5b/e9/1d/5be91d87451f9b92e8829dacf3a0565d.jpg"
                    alt="Profile Banner"
                    className="absolute top-1/2 left-1/2  md:w-100 w-64  -translate-y-1/2 -translate-x-1/2 rotate-270 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-100/40 via-transparent to-transparent dark:from-black/40" />
            </div>

            {/* Profile Info & Badge Overlay */}
            <div className="relative -mt-24 px-2 flex flex-col items-start translate-z-10">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-6">
                    {/* Profile Picture */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                        className="w-36 h-36 md:w-44 md:h-44 rounded-full border-[6px] border-[#FDFCF8] dark:border-[#09090b] shadow-2xl overflow-hidden bg-white dark:bg-zinc-900 relative z-10 ring-1 ring-black/5 dark:ring-white/10"
                    >
                        <img
                            src="Profile.jpg"
                            alt="Shivam Singh Mer"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Available Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="mb-4 sm:mb-2"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/5 shadow-sm">
                            <div className="relative flex h-2 w-2">
                                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></div>
                                <div className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></div>
                            </div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-zinc-400">Available For Work</span>
                        </div>
                    </motion.div>
                </div>

                {/* Name, Badge & Origin */}
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h1 className="text-4xl md:text-6xl font-instrument italic font-normal text-gray-950 dark:text-white tracking-tight -ml-0.5">
                        Shivam Singh Mer
                    </h1>
                    <div className="flex items-center gap-3">
                        <VerifiedBadge />
                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-zinc-800 hidden sm:block" />
                        <div className="hidden sm:block">
                            <Tooltip
                                text="Based in India"
                                content={
                                    <div className="flex items-center gap-3 min-w-[140px]">
                                        <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden relative shrink-0 shadow-sm">
                                            <div className="absolute inset-0 bg-linear-to-b from-[#ff9933] via-white to-[#138808]" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-2.5 h-2.5 rounded-full border border-[#000080]" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white dark:text-zinc-900 text-sm">Kanpur, IN</p>
                                            <p className="text-[10px] text-gray-300 dark:text-gray-500 font-mono">{currentTime} IST</p>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>

                {/* Role & Bio */}
                <div className="mt-10 w-full max-w-2xl">
                    <h2 className="text-3xl sm:text-4xl font-instrument italic font-normal text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-8">
                        Building <span className="font-inter not-italic font-bold text-zinc-400 dark:text-zinc-600">Polished</span> <br />
                        <span className="text-zinc-400 dark:text-zinc-500 not-italic font-inter font-light">
                            <AnimatedTextSlider texts={[
                                "Digital Experiences.",
                                "Web Applications.",
                                "User Interfaces.",
                                "Performance Solutions."
                            ]} />
                        </span>
                    </h2>

                    <div className="space-y-6">
                        <div className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-inter font-light leading-relaxed tracking-tight">
                            Currently a <span className="text-zinc-900 dark:text-zinc-200 font-medium whitespace-nowrap">Full Stack Developer</span> at{" "}
                            <a href="https://brxlabz.vercel.app/" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 font-instrument italic text-zinc-950 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                                <Tooltip
                                    text="BRX Labz"
                                    underline={true}
                                    content={
                                        <div className="flex flex-col gap-2 p-1">
                                            <div className="flex items-center gap-2 text-[#4daaf7] dark:text-[#1D9BF0] font-semibold text-xs">
                                                <Building2 size={14} />
                                                <span>BRX Labz</span>
                                            </div>
                                            <p className="text-zinc-400 dark:text-zinc-500 text-[11px] leading-snug">Building modern, performance-driven websites and web applications for startups and businesses.</p>
                                        </div>
                                    }
                                />
                                <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                        </div>

                        <p className="text-base text-zinc-500 dark:text-zinc-500 font-inter font-light leading-relaxed max-w-xl">
                            Specializing in crafting seamless interfaces with <span className="text-zinc-800 dark:text-zinc-300 font-medium">TypeScript</span>, <span className="text-zinc-800 dark:text-zinc-300 font-medium">Next.js</span>, and <span className="text-zinc-800 dark:text-zinc-300 font-medium">GSAP</span>. Driven by a keen eye for design and a passion for interactive aesthetics.
                        </p>
                    </div>
                </div>

            </div>
        </motion.section>
    );
};

export default Header;