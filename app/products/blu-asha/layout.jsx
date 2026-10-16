import Footer from "../../../components/Footer";
import BluAshaNavbar from "../../../components/navbars/products/BluAshaNavbar"



export default function RootLayout({
  children,
}) {
  return (
    <div>
      <BluAshaNavbar />
      {children}
      <Footer />
    </div>
    
  );
}
