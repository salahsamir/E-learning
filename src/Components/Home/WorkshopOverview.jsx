import { Box, Typography } from "@mui/material";
import React from "react";
import WorkshopDemo from "assets/images/workshop_screenshot.png";
const WorkshopOverview = () => {
  return (
    <Box
      className="flex flex-col gap-8 items-center"
      mt="3em"
      mb="3em"
      px="16px"
    >
      <Box textAlign="center" maxWidth="800px" m="auto">
        <Typography
          variant="h3"
          fontWeight={{ xs: "600", lg: "800" }}
          fontSize={{ xs: "32px", lg: "3rem" }}
        >
          Empower Your Skills with Engaging Workshops
        </Typography>
        <Typography mt="1em" fontSize="18px">
          Eduvation's workshops offer hands-on projects and interactive sessions
          that fit seamlessly into your busy schedule. With real-world
          applications and flexible online classes, our workshops make
          meaningful learning and professional growth achievable.
        </Typography>
      </Box>
      <img
        src={WorkshopDemo}
        alt="workshop screenshot"
        style={{ maxWidth: "600px", width: "100%" }}
      />
    </Box>
  );
};

export default WorkshopOverview;
