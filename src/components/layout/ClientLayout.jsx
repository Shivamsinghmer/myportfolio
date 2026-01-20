'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Navbar from './Navbar/Navbar';
import SmoothScroll from '../ui/SmoothScroll';
import Contact from '../features/contact/Contact';
import Footer from './Footer/Footer';
import QuoteSection from './Footer/QuoteSection';

const ClientLayout = ({ children }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    return (
        <>
            <SmoothScroll />
            <div className="noise-bg-fixed" />

            {/* Global Fixed Background Image - Optimized */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Image
                    src="/about-bg.jpg"
                    alt=""
                    fill
                    priority
                    quality={75}
                    sizes="100vw"
                    className="object-cover opacity-100"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                />
                {/* Lighter overlay for visibility */}
                <div className="absolute inset-0 bg-white/40 dark:bg-zinc-950/60 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-white dark:to-zinc-950 opacity-80" />
            </div>

            <div className="relative z-50">
                <Navbar />
            </div>
            <div className="min-h-screen text-gray-600 dark:text-gray-400 font-inter selection:bg-gray-900 selection:text-white pb-8">
                <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 relative z-10 w-full">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        {children}
                    </motion.div>
                </main>
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-20 max-w-3xl mx-auto mt-25"
            >

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={itemVariants}
                >
                    <Contact />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={itemVariants}
                >
                    <QuoteSection />
                    <Footer />
                </motion.div>
            </motion.div>
        </>
    );
};

export default ClientLayout;
