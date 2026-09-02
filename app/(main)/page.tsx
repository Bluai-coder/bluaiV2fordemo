"use client"
import HeroSection from "../../components/HeroSection";
import RecentPosts from "../../components/RecentPosts"
import ExploreWorkSection from "../../components/ExploreWorkSection"
import PartnerSlider from "../../components/Partners"
import AboutUS from "../../components/AboutUS";
export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerSlider />
      <ExploreWorkSection />
      <RecentPosts />
      <AboutUS />
    </>
  );
}
