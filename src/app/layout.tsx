import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ismail Akhtar - UI/UX Manager & Frontend Tech Lead",
  description: "Professional UI/UX design and frontend architecture services. 10+ years of experience building scalable enterprise applications.",
  keywords: "Frontend, React, Angular, UI/UX Design, Web Development, TypeScript",
  authors: [{ name: "Ismail Akhtar" }],
  openGraph: {
    title: "Ismail Akhtar - Frontend Tech Lead & UI/UX Expert",
    description: "Building scalable enterprise applications with modern design",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
