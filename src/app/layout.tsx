import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Transition from '@/components/layout/Transition';
import "./globals.css";

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2', 
  weight: '45 920', 
  display: 'swap', 
  variable: '--font-pretendard', 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EUN - 포트폴리오",
  description: "2025 프론트엔드 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <Transition>
          {children}
        </Transition>
        <Footer />
      </body>
    </html>
  );
}