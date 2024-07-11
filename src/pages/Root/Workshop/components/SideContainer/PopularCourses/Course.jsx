import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
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
        src={course.coverImageUrl}
        alt={course.title}
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
          to={"/courseDetails/" + course._id}
          sx={{
            transition: "color ease 0.1s",
            "&:hover": {
              color: "primary.light",
            },
          }}
        >
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By {course.createdBy?.userName || "John Doe"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Course;
