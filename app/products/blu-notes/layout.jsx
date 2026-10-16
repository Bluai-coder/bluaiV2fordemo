
import Footer from "../../../components/Footer";
import BluNotesNavbar from "../../../components/navbars/products/BluNotesNavbar"



export default function RootLayout({
  children,
}) {
  return (
    <div>
       <BluNotesNavbar />
        {children}
        <Footer />
    </div>
  );
}
