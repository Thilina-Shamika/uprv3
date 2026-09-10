import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: {
    default: 'Use Plastic Responsibly — Inspired by Polydime, Sri Lanka',
    template: '%s',
  },
  description:
    'We help industry design a circular economy for plastic. Recyclable PE, PE Plus and PE Plus Xtra structures, recycled content and biodegradable packaging.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} no-js`}
      data-scroll-behavior="smooth"
      /* The head script strips `no-js` before hydration, so the server and
         client class lists intentionally differ on this element. */
      suppressHydrationWarning
    >
      <head>
        {/* Runs before first paint so reveal targets start hidden with no flash,
            while a JS-less client keeps `.no-js` and sees everything. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js')`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
