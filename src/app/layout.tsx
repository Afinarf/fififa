import { Poppins } from 'next/font/google';
import './globals.css';

const poppinsSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], 
});

export const metadata = {
  title: "Fififa Multimedia",
  description: "Company Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className={`${poppinsSans.variable} antialiased bg-neutral-50`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}