"use client"
import HeroSection from "../../components/HeroSection";
import RecentPosts from "../../components/RecentPosts"
import ExploreWorkSection from "../../components/ExploreWorkSection"
import PartnerSlider from "../../components/Partners"

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerSlider />
      <ExploreWorkSection />
      <RecentPosts />
    </>
  );
}
