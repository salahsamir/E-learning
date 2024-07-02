import React from "react";

import SliderHome from "../../Components/Home/SliderHome.jsx";

import Sections from "../../Components/Home/Sections.jsx";
import HeroSection from "pages/Root/Home/components/HeroSection/index.jsx";
import TopAdverisement from "Components/Home/TopAdverisement.jsx";
export default function Home() {
  return (
    <>
      {/* <SliderHome /> */}
      <TopAdverisement />
      <HeroSection />
      <Sections />
    </>
  );
}
