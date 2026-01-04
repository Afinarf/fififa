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
    title: 'FIFIFA Multimedia | Sewa Alat Meeting Profesional Bogor',
    description: 'FIFIFA Multimedia adalah penyedia jasa sewa peralatan meeting dan acara profesional di Bogor. Kami menyewakan Proyektor, TV, Screen, Laptop, Mic Delegasi, dan Sistem Interpreter dengan dukungan teknis berpengalaman lebih dari 5 tahun untuk menjamin kesuksesan acara Anda.',
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