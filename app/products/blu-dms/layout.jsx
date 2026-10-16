import Footer from "../../../components/Footer";
import BluDMSNavbar from "../../../components/navbars/products/BluDMSNavbar"



export default function RootLayout({
  children,
}) {
  return (
    <div>
      <BluDMSNavbar />
      {children}
      <Footer />
    </div>
    
  );
}
