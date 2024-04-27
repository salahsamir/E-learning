import React from "react";
import EditCourseForm from "../Components/EditCourseForm/EditCourseForm";
import { Box, Typography } from "@mui/material";
import useGetParams from "hooks/useGetParams";
import { useGetCourse } from "api/instructor/courses.tsx";
function EditCourseInfo() {
  const params = useGetParams();
  const {
    data: course,
    isLoading: courseLoading,
    isError: courseError,
  } = useGetCourse(params[1]);
  return (
    <Box pb="1em">
      {courseLoading && (
        <Typography variant="body1" component="p">
          Loading...
        </Typography>
      )}
      {!courseLoading && courseError && (
        <Typography variant="body1" component="p">
          There was an error loading the course.
        </Typography>
      )}
      {!courseError && !courseLoading && course && (
        <EditCourseForm course={course} />
      )}
    </Box>
  );
}

export default EditCourseInfo;
