import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"], // پشتیبانی از فارسی
  weight: ["400", "500", "700"], // ضخامت‌های موردنیاز
  variable: "--font-vazirmatn", // برای استفاده در CSS
});

export const metadata: Metadata = {
  title: "نمونه منو با فونت وزیرمتن",
  description: "منوی فارسی با فونت Vazirmatn در Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
