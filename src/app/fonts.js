import { Inter, Instrument_Serif, Playfair_Display } from 'next/font/google';

// Optimize font loading with Next.js
export const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-inter',
    display: 'swap',
    preload: true,
    adjustFontFallback: true,
});

export const instrumentSerif = Instrument_Serif({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal', 'italic'],
    variable: '--font-instrument',
    display: 'swap',
    preload: true,
    adjustFontFallback: true,
});

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-playfair',
    display: 'swap',
    preload: false, // Only preload critical fonts
    adjustFontFallback: true,
});
