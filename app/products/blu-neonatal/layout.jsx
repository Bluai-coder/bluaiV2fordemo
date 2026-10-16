import Footer from "../../../components/Footer";
import BluNeoNatalNavbar from "../../../components/navbars/products/BluNeoNatalNavbar";

 



export default function RootLayout({
  children,
}) {
  return (
    <div>
       <BluNeoNatalNavbar/>
        {children}
        <Footer/>
    </div>
  );
}
