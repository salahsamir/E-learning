import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <Box
      display="flex"
      gap="16px"
      maxWidth="100%"
      borderRadius="8px"
      padding="16px"
      sx={{
        userSelect: "none",
        transition: "background-color ease 0.3s",
        "&:hover": {
          backgroundColor: "action.hover",
        },
      }}
    >
      <img
        src="https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png"
        alt="title"
        style={{
          height: "80px",
          width: "140px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        gap="4px"
        flexShrink={1}
        flexGrow={1}
        minWidth="0px"
      >
        <Typography
          variant="body1"
          color="text.primary"
          component={Link}
          sx={{
            transition: "color ease 0.1s",
            "&:hover": {
              color: "primary.light",
            },
          }}
        >
          Javascrip The Full Guide To Build Web Apps
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By Osama Safwat
        </Typography>
      </Box>
    </Box>
  );
};

export default Course;
