import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { Github, ArrowUpRight, Loader2 } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import {
    ContributionGraph,
    ContributionGraphCalendar,
    ContributionGraphBlock
} from '../../ui/ContributionGraph';

// Tooltip Component using Portal
const PortalTooltip = ({ activity, position }) => {
    if (!activity || !position) return null;

    // Render directly to body to escape all stacking contexts
    return createPortal(
        <div
            className="fixed z-99999 pointer-events-none"
            style={{
                left: position.x,
                top: position.y,
                transform: 'translate(-50%, -100%) translateY(-10px)',
            }}
        >
            <div className="bg-slate-900 dark:bg-slate-800 text-white text-[10px] py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap flex flex-col items-center border border-slate-700/50">
                <span className="font-bold mb-0.5">{activity.count} contributions</span>
                <span className="text-slate-400 text-[9px] font-medium uppercase tracking-wider">{activity.date}</span>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-slate-900 dark:border-t-slate-800"></div>
            </div>
        </div>,
        document.body
    );
};

const GitHubSection = () => {
    const username = 'ShivamSinghMer';

    const [contributionData, setContributionData] = useState([]);
    const [totalContributions, setTotalContributions] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Tooltip State
    const [hoveredBlock, setHoveredBlock] = useState(null); // { activity, x, y }
    const containerRef = useRef(null);

    // PREMIUM DARK GREEN THEME
    const { theme: currentTheme } = useTheme();

    // PREMIUM DARK GREEN THEME (Light Mode)
    const lightTheme = {
        textMain: '#0f172a', // Slate 900
        textSub: '#64748b',  // Slate 500
        level0: '#f1f5f9', // Slate 100
        level1: '#86efac', // Green 300
        level2: '#22c55e', // Green 500
        level3: '#15803d', // Green 700
        level4: '#022c22', // Green 950
    };

    // DARK MODE THEME (GitHub-like) - Muted Forest
    const darkTheme = {
        textMain: '#f8fafc', // Slate 50
        textSub: '#94a3b8',  // Slate 400
        level0: '#161b22', // Darkest
        level1: '#0d361e', // Deep Forest
        level2: '#1b5e32', // Medium Forest
        level3: '#2ea043', // Typical GitHub Green
        level4: '#4ade80', // Highlight Green
    };

    const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

    const getLevel = (count) => {
        if (count === 0) return 0;
        if (count < 3) return 1;
        if (count < 6) return 2;
        if (count < 10) return 3;
        return 4;
    };

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const fetchData = async () => {
            try {
                const res = await fetch('/api/github');
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();

                if (data.error) throw new Error(data.error);

                setContributionData(data.contributions);
                setTotalContributions(data.totalContributions);

            } catch (err) {
                console.error("GitHub Fetch Error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Tooltip Handlers
    const handleMouseEnter = (e, activity) => {
        const rect = e.target.getBoundingClientRect();
        setHoveredBlock({
            activity,
            x: rect.left + rect.width / 2,
            y: rect.top
        });
    };

    const handleMouseLeave = () => {
        setHoveredBlock(null);
    };

    if (error) return null;
    if (!mounted) return null;

    return (
        <>
            <PortalTooltip
                activity={hoveredBlock?.activity}
                position={hoveredBlock ? { x: hoveredBlock.x, y: hoveredBlock.y } : null}
            />

            <motion.div
                ref={containerRef}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-225 mx-auto font-sans relative py-8"
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="flex justify-between items-end mb-12 border-b border-black/5 dark:border-white/5 pb-8"
                >
                    <div className="space-y-1">
                        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-gray-400 block">
                            Open Source
                        </span>
                        <div className="flex items-baseline gap-3">
                            <h2 className="text-4xl md:text-5xl font-instrument italic font-normal text-gray-900 dark:text-white tracking-tight">
                                GitHub <span className="font-inter not-italic font-light text-gray-500 dark:text-gray-400 text-3xl md:text-4xl">Activity</span>
                            </h2>
                            <span className="text-lg font-mono text-gray-500 dark:text-gray-600 hidden sm:block">@{username}</span>
                        </div>
                    </div>

                    <motion.a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-sm font-semibold transition-all duration-300 group/link pb-1"
                        style={{ color: theme.textMain }}
                    >
                        <span className="relative after:absolute after:bg-current after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                            View Profile
                        </span>
                        <ArrowUpRight size={16} className="text-slate-400 dark:text-slate-500 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-current" />
                    </motion.a>
                </motion.div>

                {/* Content Card */}
                <div className="relative p-6 md:p-10 rounded-[2.5rem] border border-black/4 dark:border-white/4 bg-white/70 dark:bg-black/40 backdrop-blur-md shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] overflow-hidden group">
                    {/* Background Glow */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>

                    {loading ? (
                        <div className="h-48 flex flex-col items-center justify-center w-full gap-4">
                            <div className="relative">
                                <Loader2 className="animate-spin text-emerald-500/50" size={32} />
                                <div className="absolute inset-0 animate-pulse bg-emerald-500/20 blur-xl rounded-full"></div>
                            </div>
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 animate-pulse">Syncing contributions</span>
                        </div>
                    ) : (
                        <div className="w-full flex flex-col relative">
                            <ContributionGraph
                                data={contributionData}
                                totalCount={totalContributions}
                                blockRadius={2}
                                blockMargin={3}
                                className="w-full"
                            >
                                <ContributionGraphCalendar>
                                    {({ activity, dayIndex, weekIndex }) => (
                                        <ContributionGraphBlock
                                            activity={activity}
                                            dayIndex={dayIndex}
                                            weekIndex={weekIndex}
                                            onMouseEnter={(e) => handleMouseEnter(e, activity)}
                                            onMouseLeave={handleMouseLeave}
                                            className="cursor-pointer transition-all duration-300 hover:opacity-80 rounded-xs"
                                        />
                                    )}
                                </ContributionGraphCalendar>

                                {/* Custom Footer */}
                                <div className="flex flex-col sm:flex-row items-center justify-between mt-10 pt-6 border-t border-black/5 dark:border-white/5 w-full gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-2">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className="w-5 h-5 rounded-full border-2 border-white dark:border-zinc-900 bg-emerald-500/20 flex items-center justify-center">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-[13px] font-inter font-medium text-gray-600 dark:text-zinc-400">
                                            <span className="text-gray-950 dark:text-white font-bold tabular-nums">
                                                {totalContributions.toLocaleString()}
                                            </span>
                                            {" "}commits in the past year
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 text-[9px] font-mono uppercase tracking-widest text-gray-400">
                                        <span>Less</span>
                                        <div className="flex gap-1 p-1 bg-white dark:bg-zinc-900 rounded-lg border border-black/5 dark:border-white/5">
                                            {[theme.level0, theme.level1, theme.level2, theme.level3, theme.level4].map((color, i) => (
                                                <div key={i} className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: color }} />
                                            ))}
                                        </div>
                                        <span>More</span>
                                    </div>
                                </div>
                            </ContributionGraph>
                        </div>
                    )}
                </div>
            </motion.div>
        </>
    );
};

export default GitHubSection;