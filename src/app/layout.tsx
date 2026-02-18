import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김성민 (Theo) | Backend Developer",
  description:
    "문제 분석과 협업에 강한 백엔드 개발자 김성민(Theo)의 포트폴리오입니다. Spring Boot, AWS, Docker 기반의 백엔드 개발 경험을 소개합니다.",
  keywords: [
    "김성민",
    "Theo",
    "백엔드 개발자",
    "Backend Developer",
    "Spring Boot",
    "Java",
    "Portfolio",
  ],
  authors: [{ name: "김성민 (Theo)" }],
  openGraph: {
    title: "김성민 (Theo) | Backend Developer",
    description:
      "문제 분석과 협업에 강한 백엔드 개발자 김성민(Theo)의 포트폴리오",
    url: "https://about-theo.vercel.app",
    siteName: "Theo Portfolio",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "김성민 (Theo) | Backend Developer",
    description:
      "문제 분석과 협업에 강한 백엔드 개발자 김성민(Theo)의 포트폴리오",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
