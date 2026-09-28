import type { Metadata } from "next";
import Footer from "../../components/Footer";
import MainNavBar from "@/components/navbars/MainNavBar.jsx"



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
    <div>
      <MainNavBar />
      {children}
      <Footer />
    </div>
  );
}
