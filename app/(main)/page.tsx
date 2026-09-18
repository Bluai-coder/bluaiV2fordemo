"use client"
import HeroSection from "../../components/HeroSection";
import RecentPosts from "../../components/RecentPosts"
import ExploreWorkSection from "../../components/ExploreWorkSection"
import PartnerSlider from "../../components/Partners"
import AboutTeaser from "../../components/AboutTeaser"

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <AboutTeaser/>
      <ExploreWorkSection />
      <RecentPosts />
      <PartnerSlider />
    </div>
  );
}
