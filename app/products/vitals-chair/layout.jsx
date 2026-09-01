import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../../../components/Footer";
import VitalsChairNavbar from "../../../components/navbars/products/VitalsChairNavbar";

 

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
        <VitalsChairNavbar/>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
