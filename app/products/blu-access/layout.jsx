import Footer from "../../../components/Footer";
import BluAccessNavbar from "../../../components/navbars/products/BluAccessNavbar"




export default function RootLayout({
  children,
}) {
  return (
    <div>
      <BluAccessNavbar />
      {children}
      <Footer />
    </div>
  );
}
