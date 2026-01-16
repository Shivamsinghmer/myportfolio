"use client";
import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();


    return (
        <section className="w-full z-50  py-10 border-t border-zinc-200 dark:border-zinc-800 mt-16 px-4 md:px-0">


            {/* Simple Bottom Line */}
            <div className="flex z-50 flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 dark:text-zinc-200 font-mono">
                <div className="z-50">
                    &copy; {currentYear} Shivam Singh Mer.
                </div>
                <div className="z-50">
                    Built with Next.js, Tailwind & Motion.
                </div>
            </div>
        </section>
    );
};


export default Footer;

