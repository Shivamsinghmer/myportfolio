'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// --- Components ---
import Header from '../components/features/header/Header';

// Dynamically import ALL heavy components to reduce initial bundle
const GitHubSection = dynamic(() => import('../components/features/github/GitHubSection'), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center min-h-100">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100" />
        </div>
    )
});

const Projects = dynamic(() => import('../components/features/projects/Projects'), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center min-h-100">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100" />
        </div>
    )
});

const Experience = dynamic(() => import('../components/features/experience/Experience'), {
    ssr: false,
});

const TechStack = dynamic(() => import('../components/features/home/TechStack'), {
    ssr: false,
});

// --- Home Page ---
export default function Home() {
    // Optimized Variants for better performance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.main
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-20 max-w-3xl mx-auto pb-20 px-2"
        >
            {/* 1. Header Section (Banner + Profile) */}
            <motion.div variants={itemVariants}>
                <Header />
            </motion.div>


            {/* 3. Projects (Selected Works) */}
            <motion.div variants={itemVariants}>
                <Projects />
            </motion.div>


            {/* 5. GitHub Section */}
            <motion.div variants={itemVariants}>
                <GitHubSection />
            </motion.div>

            {/* 6. Tech Stack */}
            <motion.div variants={itemVariants}>
                <TechStack />
            </motion.div>
        </motion.main>
    );
}
