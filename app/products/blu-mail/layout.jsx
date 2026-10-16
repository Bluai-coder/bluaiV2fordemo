
import Footer from "../../../components/Footer";
import BluMailNavbar from "../../../components/navbars/products/BluMailNavbar"



export default function RootLayout({
  children,
}) {
  return (
    <div>
      <BluMailNavbar />
      {children}
      <Footer />
    </div>
  );
}
