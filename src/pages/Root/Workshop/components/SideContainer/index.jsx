import { Box } from "@mui/material";
import React from "react";
import InfoBox from "./InfoBox";
import RatingBox from "./RatingBox";
import InstructorBox from "./InstructorBox";
import PopularCourses from "./PopularCourses";

const SideContainer = ({ workshop }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <InfoBox info={{ price: workshop.price }} />
      {/* <RatingBox /> */}
      <InstructorBox instructor={workshop.instructor || {}} />
      <PopularCourses />
    </Box>
  );
};

export default SideContainer;
