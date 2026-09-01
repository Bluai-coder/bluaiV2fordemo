import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../../../components/Footer";
import BluIdNavbar from "@/components/navbars/products/BluIdNavbar"


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
     
        <BluIdNavbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
