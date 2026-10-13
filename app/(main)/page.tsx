
import HeroSection from "../../components/HeroSection";
import RecentPosts from "../../components/RecentPosts"
import PartnerSlider from "../../components/Partners"
import AboutTeaser from "../../components/AboutTeaser"
import AboutUsSmall from "../../components/AboutUsSmall"
import FaqSection from "../../components/FaqSection"


export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <AboutTeaser />
      <AboutUsSmall />
      <RecentPosts />
      <FaqSection />
      <PartnerSlider />
    </div>
  );
}
