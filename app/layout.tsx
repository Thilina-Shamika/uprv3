import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: 'Use Plastic Responsibly — Inspired by Polydime, Sri Lanka',
  description:
    'Smarter material solutions that help packaging stay useful, recoverable and responsible. Recyclable PE, PE Plus and PE Plus Xtra structures, recycled content and biodegradable packaging.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
