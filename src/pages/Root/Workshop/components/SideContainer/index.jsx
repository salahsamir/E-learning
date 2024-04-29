import { Box } from "@mui/material";
import React from "react";
import InfoBox from "./InfoBox";
import RatingBox from "./RatingBox";
import InstructorBox from "./InstructorBox";
import PopularCourses from "./PopularCourses";

const SideContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <InfoBox />
      <RatingBox />
      <InstructorBox />
      <PopularCourses />
    </Box>
  );
};

export default SideContainer;
