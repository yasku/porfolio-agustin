import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agustin Yaskuloski | AI Developer & Engineer',
  description: 'Portfolio of Agustin Yaskuloski - AI Developer & Engineer specializing in Machine Learning, Deep Learning, and NLP',
  keywords: ['AI Developer', 'Machine Learning', 'Deep Learning', 'NLP', 'Portfolio', 'Agustin Yaskuloski'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="crt">
        <div className="scanline"></div>
        {children}
      </body>
    </html>
  );
}
