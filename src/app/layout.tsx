import type { Metadata } from 'next';
import { Inter, Slabo_27px } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const slabo = Slabo_27px({
  variable: '--font-slabo',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Indy - Portfolio',
  description: 'Personal portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${slabo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
