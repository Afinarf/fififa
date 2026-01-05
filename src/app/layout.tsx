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
  keywords: [
    "Sewa Proyektor Bogor",
    "Sewa Infocus Bogor",
    "Sewa TV Bogor",
    "Sewa TV Stand Bogor",
    "Sewa Screen Bogor",
    "Sewa Layar Bogor",
    "Sewa Laptop Bogor",
    "Sewa Mic Delegate Bogor",
    "Sewa Interpreter Bogor",

    "Sewa Mic Rapat Conference",
    "Sewa Alat Interpreter Bogor",
    "Sewa Booth Interpreter",
    "Sewa Screen Layar Lebar",
    "Sewa TV 43 Inchi Bogor",
    "Sewa TV 32 Inchi Bogor",

    "Rental Proyektor Bogor",
    "Rental Infokus Bogor",
    "Rental Infocus Bogor",
    "Rental TV Stand Bogor",
    "Rental TV Bogor",
    "Rental Screen Bogor",
    "Rental Layar Bogor",
    "Rental Laptop Bogor",
    "Rental Mic Delegate Bogor",
    "Rental Interpreter Bogor",

    "Proyektor Bogor",
    "Infokus Bogor",
    "Infocus Bogor",
    "TV Bogor",
    "Screen Bogor",
    "Layar Bogor",
    "Laptop Bogor",
    "Mic Delegate Bogor",
    "Interpreter Bogor",

    "Rental Multimedia Bogor Murah",
    "Sewa Laptop Harian Bogor",
    "Jasa Live Streaming Bogor",
    "FIFIFA Multimedia",
  ],
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