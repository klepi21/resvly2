import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GradientText } from '@/components/ui/gradient-text';
import { Mail } from 'lucide-react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RESVLY - Smart Booking Solutions for Modern Businesses',
  description: 'Transform your business with RESVLY\'s intelligent booking system. Streamline appointments, enhance customer experience, and boost revenue.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <nav className="fixed w-full bg-black/20 backdrop-blur-xl z-50 border-b border-white/[0.08]">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <div className="font-bold text-2xl">
              <GradientText>RESVLY</GradientText>
            </div>
            <div className="hidden md:flex items-center gap-12">
              <a href="#features" className="text-white/60 hover:text-white transition-colors">Features</a>
              <a href="#industries" className="text-white/60 hover:text-white transition-colors">Industries</a>
              <a href="#pricing" className="text-white/60 hover:text-white transition-colors">Pricing</a>
              <div className="flex items-center gap-2 text-white/60">
                <Mail className="w-4 h-4" />
                <span>info@resvly.gr</span>
              </div>
              <Link href="/gr" className="text-2xl">🇬🇷</Link>
              <Link href="/" className="text-2xl">🇬🇧</Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-black/50 backdrop-blur-xl py-20 border-t border-white/[0.08]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="font-bold text-2xl mb-6">
                <GradientText>RESVLY</GradientText>
              </h3>
              <p className="text-white/60">Empowering businesses with smart booking solutions.</p>
              <div className="mt-6 flex items-center justify-center gap-2 text-white/60">
                <Mail className="w-4 h-4" />
                <span>info@resvly.gr</span>
              </div>
            </div>
            <div className="mt-20 pt-8 border-t border-white/[0.08] text-center text-white/40">
              © {new Date().getFullYear()} RESVLY. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}