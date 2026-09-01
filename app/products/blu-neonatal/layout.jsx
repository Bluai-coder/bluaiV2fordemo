import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../../../components/Footer";
import BluNeoNatalNavbar from "../../../components/navbars/products/BluNeoNatalNavbar";

 

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
        <BluNeoNatalNavbar/>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
