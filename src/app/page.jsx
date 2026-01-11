'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- Components ---
import Header from '../components/features/header/Header';
import GitHubSection from '../components/features/github/GitHubSection';
import Projects from '../components/features/projects/Projects';
import Experience from '../components/features/experience/Experience';
import TechStack from '../components/features/home/TechStack';

// --- Home Page ---
export default function Home() {
    // Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <motion.div
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
        </motion.div>
    );
}
