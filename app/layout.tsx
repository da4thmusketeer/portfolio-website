import type { Metadata } from "next";
import { DM_Mono, Syne, Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/floating-nav";

const display = Syne({ subsets: ["latin"], variable: "--font-display" });
const body = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-body" });
const sans = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "da4thmusketeer | Software Engineer",
  description: "Software Engineer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${sans.variable} min-h-screen w-full max-w-full overflow-x-hidden relative`}>
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}

