import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Course from "./Course";
import { ChevronRight } from "@mui/icons-material";
import { useGetPopularCoursesInCateg } from "api/global/recommendation.tsx";

const PopularCourses = () => {
  const { data: coursesList } = useGetPopularCoursesInCateg({
    categoryId: "65ece04d661c66c97548d956",
  });
  console.log(coursesList);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.b1",
        borderRadius: "16px",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="16px"
        pb="0px"
      >
        <Typography variant="h6" color="text.primary">
          Popular Courses
        </Typography>
        <Button
          aria-label="view all popular courses"
          sx={{
            color: "text.secondary",
            "&:hover": {
              backgroundColor: "transparent",
              color: "text.primary",
            },
          }}
        >
          View All <ChevronRight />
        </Button>
      </Box>
      {[1, 2, 3].map((ele) => (
        <Course key={ele} />
      ))}
    </Box>
  );
};

export default PopularCourses;
