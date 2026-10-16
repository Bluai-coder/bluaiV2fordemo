import Footer from "../../../components/Footer";
import BluMentalHealthNavbar from "../../../components/navbars/products/BluMentalHealthNavbar";






export default function RootLayout({
  children,
}) {
  return (
    <div>
      <BluMentalHealthNavbar />
      {children}
      <Footer />
    </div>
  );
}
