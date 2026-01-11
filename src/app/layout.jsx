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
