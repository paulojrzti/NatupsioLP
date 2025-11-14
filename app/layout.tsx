import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Menu } from "@/components/Menu";
import { LenisProvider } from "@/components/LenisProvider";

// Fontes locais
const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Natufisio",
  description: "Natufisio - Fisioterapia y Rehabilitación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${clashDisplay.className} antialiased`}
      >
        <LenisProvider />
        <Menu />
        {children}
      </body>
    </html>
  );
}
