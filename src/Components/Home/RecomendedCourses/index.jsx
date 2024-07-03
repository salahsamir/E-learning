import { Box, IconButton, Skeleton, Typography } from "@mui/material";
import React, { useRef } from "react";
import Item from "./Item";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useGetRecommendedCourses } from "api/global/recommendation.tsx";
import ErrorBox from "Components/ErrorBox";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  "&:hover": {
    backgroundColor: theme.palette.action.selected,
  },
}));

const RecomendedCourses = () => {
  const sliderRef = useRef(null);
  const { data: courses, isLoading, isError } = useGetRecommendedCourses();
  const handleSlide = (dir) => {
    const scrollWidth =
      (document.querySelector(".custom-slide-item1")?.clientWidth || 0) + 16;
    sliderRef.current.scrollLeft += (dir === "left" ? -1 : 1) * scrollWidth;
  };
  return (
    <Box width="100%" py="3em" sx={{ backgroundColor: "background.b1" }}>
      <Box className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-6">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "16px",
          }}
        >
          <Typography variant="h5" color="text.primary" fontWeight="600">
            Recommended Courses
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
          {isLoading ? (
            [1, 2, 3, 4].map((ele) => (
              <Box
                className="custom-slide-item1 rounded-t-lg overflow-hidden"
                height="320px"
                width="295px"
                key={ele}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{ height: "200px", mb: "8px" }}
                />
                <Skeleton variant="text" height="30px" width="70%" />
                <Skeleton variant="text" height="30px" width="50%" />
              </Box>
            ))
          ) : isError ? (
            <ErrorBox />
          ) : (
            courses?.map((ele) => (
              <Item key={ele.course?._id} course={ele.course} />
            ))
          )}
        </Box>{" "}
      </Box>
    </Box>
  );
};

export default RecomendedCourses;
