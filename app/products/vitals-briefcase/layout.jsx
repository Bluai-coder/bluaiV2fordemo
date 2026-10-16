import Footer from "../../../components/Footer";
import VitalsChairNavbar from "../../../components/navbars/products/VitalsChairNavbar";


export default function RootLayout({
  children,
}) {
  return (
    <div>
      <VitalsChairNavbar logopath="/logos/vitals-briefcase.png" />
      {children}
      <Footer />
    </div>
  );
}
