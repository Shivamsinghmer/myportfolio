
import React, { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { techStack } from "../../../data/portfolioData";
import { cn } from "../../../lib/utils";

// Utility to wrap range
const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// Tooltip Component
const Tooltip = ({ text, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs rounded-md whitespace-nowrap z-50 shadow-lg border border-zinc-700 pointer-events-none"
                >
                    {text}
                    {/* Tiny triangle arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-800" />
                </motion.div>
            )}
        </div>
    );
};

function ParallaxLoop({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    // Smooth out scroll velocity
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    // Map scroll velocity to a multiplier
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
    const directionFactor = useRef(1);
    const [isHovered, setIsHovered] = useState(false);

    useAnimationFrame((t, delta) => {
        // Reduce speed significantly if hovered
        const currentVelocity = isHovered ? baseVelocity * 0.2 : baseVelocity;

        let moveBy = directionFactor.current * currentVelocity * (delta / 1000);

        // Change direction based on scroll velocity direction
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        // Add scroll momentum to the base movement
        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div
            className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap relative py-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div className="flex whitespace-nowrap gap-16 md:gap-24" style={{ x }}>
                {/* Repeating children to ensure seamless loop */}
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-16 md:gap-24 items-center">
                        {children}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

// import { Cpu, Sparkles } from 'lucide-react';

const TechStack = () => {
    const firstRow = techStack.slice(0, Math.ceil(techStack.length / 2));
    const secondRow = techStack.slice(Math.ceil(techStack.length / 2));

    const renderTechItem = (tech, index) => (
        <Tooltip key={index} text={tech.name}>
            <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cursor-pointer transition-transform duration-300 hover:scale-110 block"
            >
                <img
                    src={tech.icon}
                    alt={tech.name}
                    className={cn(
                        "h-10 w-10 md:h-12 md:w-12 object-contain min-w-10 min-h-10 transition-all duration-300 transform opacity-90 hover:opacity-100",
                        tech.darkIcon ? "dark:hidden" : (tech.invertDark && "dark:invert")
                    )}
                />
                {tech.darkIcon && (
                    <img
                        src={tech.darkIcon}
                        alt={tech.name}
                        className="h-10 w-10 md:h-12 md:w-12 object-contain min-w-10 min-h-10 transition-all duration-300 transform opacity-90 hover:opacity-100 hidden dark:block"
                    />
                )}
            </a>
        </Tooltip>
    );

    return (
        <section className="py-10 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto px-2 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-black/5 dark:border-white/5 pb-8 flex flex-col items-start"
                >
                    <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 dark:text-zinc-500 block mb-2">
                            Arsenal & Tools
                        </span>
                        <h2 className="text-4xl md:text-5xl font-instrument italic font-normal text-gray-900 dark:text-white tracking-tight">
                            Tech <span className="font-inter not-italic font-light text-gray-400 dark:text-zinc-500 text-3xl md:text-4xl">Stack</span>
                        </h2>
                    </div>
                </motion.div>
                <div className="mt-8">
                    <p className="text-base font-inter font-light text-gray-500 dark:text-zinc-400 max-w-lg leading-relaxed tracking-tight">
                        I leverage a modern ecosystem of tools and frameworks to build high-performance, accessible, and scalable digital products.
                    </p>
                </div>
            </div>

            <div
                className="relative  w-full"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
                }}
            >
                {/* Row 1: Left moving */}
                <ParallaxLoop baseVelocity={-1}>
                    {firstRow.map((tech, index) => renderTechItem(tech, index))}
                </ParallaxLoop>

                {/* Row 2: Right moving */}
                <ParallaxLoop baseVelocity={1}>
                    {secondRow.map((tech, index) => renderTechItem(tech, index))}
                </ParallaxLoop>
            </div>
        </section>
    );
};

export default TechStack;
