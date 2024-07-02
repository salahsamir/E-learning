import { Box, Typography } from "@mui/material";
import React from "react";
import ChatImage from "assets/images/chat_screenshot.png";
const FocusGroups = () => {
  return (
    <Box
      className="flex flex-col gap-8 items-center"
      mt="3em"
      mb="3em"
      px="16px"
    >
      <Box textAlign="center" maxWidth="820px" m="auto">
        <Typography
          variant="h3"
          fontWeight={{ xs: "600", lg: "800" }}
          fontSize={{ xs: "32px", lg: "3rem" }}
        >
          Collaborate and Learn with Eduvation Focus Groups
        </Typography>
        <Typography mt="1em" fontSize="18px">
          Join Eduvation's focus groups for interactive discussions and hands-on
          projects that seamlessly integrate into your routine. Engage with
          peers in real-time, apply your knowledge to real-world scenarios, and
          achieve your learning and professional goals together.
        </Typography>
      </Box>
      <img
        src={ChatImage}
        alt=""
        style={{ maxWidth: "600px", width: "100%" }}
      />
    </Box>
  );
};

export default FocusGroups;
