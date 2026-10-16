import Footer from "../../../components/Footer";
import BluHealthNavbar from "@/components/navbars/products/BluHealthNavbar"


export default function RootLayout({
  children,
}
) {
  return (
    <div>
      <BluHealthNavbar />
      {children}
      <Footer />
    </div>
  );
}
