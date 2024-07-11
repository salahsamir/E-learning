import { Box, IconButton, Typography } from "@mui/material";
import React, { useRef } from "react";
import Item from "./Item";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useGetBoughtCourses } from "api/student/courses.tsx";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  "&:hover": {
    backgroundColor: theme.palette.action.selected,
  },
}));
const RecentEnrolledCourses = () => {
  const sliderRef = useRef(null);
  const handleSlide = (dir) => {
    const scrollWidth =
      document.querySelector(".custom-slide-item").clientWidth + 16;
    sliderRef.current.scrollLeft += (dir === "left" ? -1 : 1) * scrollWidth;
  };
  const { data: courses, isLoading, isError } = useGetBoughtCourses();
  return (
    <Box
      sx={{
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "background.b1",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "16px",
        }}
      >
        <Typography variant="h6" color="text.primary">
          Recent Enrolled Courses
        </Typography>
        <Box display="flex" gap="8px">
          <StyledIconButton onClick={() => handleSlide("left")}>
            <ChevronLeft />
          </StyledIconButton>
          <StyledIconButton onClick={() => handleSlide("right")}>
            <ChevronRight />
          </StyledIconButton>
        </Box>
      </Box>
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          gap: "16px",
          overflowX: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        {isLoading
          ? ""
          : isError
          ? ""
          : courses
              .slice(0, 4)
              .map((course) => (
                <Item
                  key={course._id}
                  title={course.title}
                  instructorName={course.createdBy?.userName || "John Doe"}
                  finishedResources="0"
                  allResources="200"
                  image={course.coverImageUrl}
                />
              ))}
      </Box>
    </Box>
  );
};

export default RecentEnrolledCourses;
