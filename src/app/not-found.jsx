'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-9xl font-instrument italic font-normal text-zinc-200 dark:text-zinc-800 tracking-tighter">
                        404
                    </h1>
                </motion.div>

                <div className="space-y-4">
                    <h2 className="text-3xl font-instrument italic font-normal text-zinc-900 dark:text-white tracking-tight">
                        Lost in the <span className="font-inter not-italic font-bold text-zinc-400 dark:text-zinc-600">Digital Void?</span>
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 font-inter font-light max-w-md mx-auto">
                        The page you are looking for doesn't exist or has been moved. Let's get you back on track.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:scale-105 active:scale-95 transition-all shadow-lg"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-black/5 dark:border-white/5 bg-white/5 backdrop-blur-md rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </motion.div>
            </div>
        </main>
    );
}
