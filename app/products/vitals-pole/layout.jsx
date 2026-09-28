import VitalsChairNavbar from "../../../components/navbars/products/VitalsChairNavbar";




export default function RootLayout({
  children,
}) {
  return (
    <div>
      <VitalsChairNavbar logopath="/logos/vitals-pole.png" />
      {children}
    </div>
  );
}
