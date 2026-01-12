import Script from 'next/script';
import './globals.css';
import { Providers } from './providers';
import ClientLayout from '../components/layout/ClientLayout';

export const metadata = {
    title: 'Shivam Singh Mer — Full Stack Developer',
    description: 'I build accessible, pixel-perfect web experiences. Explore my projects, open-source contributions, and engineering journey.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-92FT4Y8L8T"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-92FT4Y8L8T');
                    `}
                </Script>
            </head>
            <body className="antialiased">
                <Providers>
                    <ClientLayout>
                        {children}
                    </ClientLayout>
                </Providers>
            </body>
        </html>
    );
}
