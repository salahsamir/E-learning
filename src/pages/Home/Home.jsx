import React from "react";

import SliderHome from "../../Components/Home/SliderHome.jsx";

import Sections from "../../Components/Home/Sections.jsx";
import TopBar from "../../Components/TopBar/TopBar.jsx";
export default function Home() {
 
 
  return (
    <> 
          {/* <TopBar display={{ xs: "none", sm: "flex" }} /> */}
    
    <SliderHome />
  
    <Sections/>
    
    </>
  );
}
