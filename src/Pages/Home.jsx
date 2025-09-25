import React from "react";
import HeroSection from "../Components/HeroSection";
import Carousel from "../Components/Carousel";
import ArtisansSection from "../Components/ArtisansSection";
import SiteStatistics from "../Components/SiteStatistics";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Carousel autoPlay={true} autoPlayInterval={4000} />
      <div style={{ margin: 0, padding: 0 }}>
        <ArtisansSection />
        <SiteStatistics />
      </div>
    </div>
  );
}

