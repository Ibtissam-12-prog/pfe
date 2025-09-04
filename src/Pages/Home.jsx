import React from "react";
import HeroSection from "../Components/HeroSection";
import Carousel from "../Components/Carousel";
import ArtisansSection from "../Components/ArtisansSection";
import ContactSection from "../Components/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Carousel autoPlay={true} autoPlayInterval={4000} />
      <ArtisansSection />
      <ContactSection />
    </div>
  );
}

