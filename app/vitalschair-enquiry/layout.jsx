import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../../components/Footer";
import MainNavBar from "@/components/navbars/MainNavBar.jsx"
import BlubillingNav from "../../components/navbars/BlubillingNav";
import VitalsChairEnquiryNavbar from "../../components/navbars/VitalsChairEnquiryNavbar";


const geistSans = Geist({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-inter",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <MainNavBar/> */}
        {/* <VitalsChairEnquiryNavbar/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
