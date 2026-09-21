"use client"
import HeroSection from "../../components/HeroSection";
import RecentPosts from "../../components/RecentPosts"
import ExploreWorkSection from "../../components/ExploreWorkSection"
import PartnerSlider from "../../components/Partners"
import AboutTeaser from "../../components/AboutTeaser"
import AboutUsSmall from "../../components/AboutUsSmall"


export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <AboutTeaser/>
      <AboutUsSmall/>
      {/* <ExploreWorkSection /> */}
      <RecentPosts />
      <PartnerSlider />
    </div>
  );
}
