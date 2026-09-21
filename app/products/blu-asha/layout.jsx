import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../../../components/Footer";
import BluAshaNavbar from "../../../components/navbars/products/BluAshaNavbar"


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
    <div>
      <BluAshaNavbar />
      {children}
      <Footer />
    </div>
    // <html lang="en" >
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    //   >
    //     <BluAshaNavbar/>
    //     {children}
    //     <Footer/>
    //   </body>
    // </html>
  );
}
