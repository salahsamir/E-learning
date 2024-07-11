import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Course from "./Course";
import { ChevronRight } from "@mui/icons-material";
import { useGetPopularCoursesInCateg } from "api/global/recommendation.tsx";
import { Link } from "react-router-dom";

const PopularCourses = () => {
  const {
    data: coursesList,
    isLoading,
    isError,
  } = useGetPopularCoursesInCateg({
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
          LinkComponent={Link}
          to="/course"
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
      {isLoading
        ? [1, 2, 3].map((ele) => <Box key={ele}></Box>)
        : isError
        ? ""
        : coursesList
            .slice(0, 3)
            .map((course) => <Course key={course._id} course={course} />)}
    </Box>
  );
};

export default PopularCourses;
