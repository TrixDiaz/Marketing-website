import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SocialHeader } from "@/components/layouts/social-header";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/layouts/sections/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SimplifyEcomm",
  description: "SimplifyEcomm is a platform that helps you simplify your e-commerce business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SocialHeader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
