import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kabul International Halal Market',
  description: 'Your local source for fresh halal meats and groceries in Austin, Texas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-gray-900`}>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
} 