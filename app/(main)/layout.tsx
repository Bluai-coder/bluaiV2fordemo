import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../../components/Footer";
import MainNavBar from "@/components/navbars/MainNavBar.jsx"


const geistSans = Geist({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BluAI - Medical-Grade AI Solutions | VitalsChair™ Healthcare Monitoring",
  description: "Discover BluAI's innovative medical-grade AI solutions for enhanced healthcare monitoring and diagnostics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MainNavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
