import type { Metadata } from 'next';
import React from 'react';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppinsSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fififa-multimedia.com"),
  title: "FIFIFA Multimedia",
  keywords: ["Sewa Proyektor", "Sewa TV", "Sewa Bogor"],
  openGraph: {
    title: 'FIFIFA Multimedia | Sewa Alat Meeting Bogor  ',
    description: 'Sewa Proyektor, TV, Screen, Laptop, Interpreter, Kabel Bogor',
    url: 'https://fififa-multimedia.com',
    siteName: 'FIFIFA Multimedia',
    images: [
      {
        url: 'logo.jpg',
        width: 1200,
        height: 630,
        alt: 'FIFIFA Multimedia',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppinsSans.variable} antialiased bg-neutral-50`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}