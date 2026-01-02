/* NEXT */
import type { Metadata } from "next";
import localFont from 'next/font/local';

/* 컴포넌트 */
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Transition from '@/components/layout/Transition';
import ScrollToTop from "@/components/layout/ScrollToTop";
import ProgressBar from "@/components/layout/ProgressBar";

/* CSS */
import "./globals.css";

/* 프리텐다드 폰트 */
const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  weight: '45 920',
  display: 'swap',
  variable: '--font-pretendard',
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
      <body>
        <ProgressBar />
        <Header />
        <Transition>
          {children}
        </Transition>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}