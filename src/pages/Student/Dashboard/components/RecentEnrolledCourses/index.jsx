import { Box, IconButton, Typography } from "@mui/material";
import React, { useRef } from "react";
import Item from "./Item";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import styled from "@emotion/styled";

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
        {[1, 2, 3, 4].map((ele) => (
          <Item
            key={ele}
            title="MongoDB The Full Guide"
            instructorName="Osama Safwat"
            finishedResources="40"
            allResources="200"
            image="https://facialix.com/wp-content/uploads/2023/05/curso-gratis-mongoDB-facialix.jpg"
          />
        ))}
      </Box>
    </Box>
  );
};

export default RecentEnrolledCourses;
