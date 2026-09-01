import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../../../components/Footer";
import BluHealthNavbar from "@/components/navbars/products/BluHealthNavbar"


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
}
 ) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BluHealthNavbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
