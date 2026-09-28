import Footer from "../../../components/Footer";
import VitalschairEnquiryNavbar from "../../../components/navbars/products/VitalschairEnquiryNavbar";




export default function RootLayout({
  children,
}) {
  return (
    <div>
      <VitalschairEnquiryNavbar />
      {children}
      <Footer />
    </div>
  );
}
