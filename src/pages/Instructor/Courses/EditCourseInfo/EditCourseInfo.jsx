import React from "react";
import EditCourseForm from "../Components/EditCourseForm/EditCourseForm";
import { Box, Typography } from "@mui/material";
import useGetParams from "hooks/useGetParams";
import { useGetCourse } from "api/instructor/courses.tsx";
function EditCourseInfo() {
  const params = useGetParams();
  const { data: course, isLoading: courseLoading } = useGetCourse(params[1]);
  return (
    <Box pb="1em">
      {courseLoading ? (
        <Typography variant="body1" component="p">
          Loading...
        </Typography>
      ) : (
        <EditCourseForm course={course} />
      )}
    </Box>
  );
}

export default EditCourseInfo;
