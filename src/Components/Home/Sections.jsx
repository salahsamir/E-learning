import { Box, Container } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Recomandtions from "./Recomenadtion.jsx";
import WorkshopOverview from "./WorkshopOverview.jsx";
import Footer from "Components/Footer/Footer.jsx";
import Workshops from "./Workshops.jsx";
import RecomendedCourses from "./RecomendedCourses/index.jsx";
import FocusGroups from "./FocusGroups.jsx";
import TopWorkshops from "./TopWorkshops/index.jsx";
export default function Sections() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <Box sx={{ mt: "2em" }}>
      {/* <WhoSection/> */}
      <WorkshopOverview />
      <RecomendedCourses />
      <FocusGroups />
      <TopWorkshops />{" "}
      {/* <Recomandtions />
      <Workshops /> */}
      <Footer />
    </Box>
  );
}
