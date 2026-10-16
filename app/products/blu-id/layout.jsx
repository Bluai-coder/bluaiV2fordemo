import Footer from "../../../components/Footer";
import BluIdNavbar from "@/components/navbars/products/BluIdNavbar"



export default function RootLayout({
  children,
}) {
  return (
    <div>
       <BluIdNavbar/>
        {children}
        <Footer/>
    </div>
  );
}
