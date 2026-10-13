import VitalsChairNavbar from "../../../components/navbars/products/VitalsChairNavbar";
import Footer from "../../../components/Footer";




export default function RootLayout({
  children,
}) {
  return (
    <div>
      <VitalsChairNavbar logopath="/logos/vitals-pole.png" />
      {children}
       <Footer />
    </div>
  );
}
