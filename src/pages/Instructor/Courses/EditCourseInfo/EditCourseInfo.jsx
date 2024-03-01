import React from "react";
import EditCourseForm from "../Components/EditCourseForm/EditCourseForm";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import useGetData from "hooks/useGetData";
import ErrorPage from "pages/Instructor/Error";
function EditCourseInfo() {
  const location = useLocation();
  const pathList = location.pathname.split("/");
  const courseId = pathList[pathList.length - 2];
  const {
    data: course,
    loading: loadingCourse,
    error: errorCourse,
  } = useGetData("course/" + courseId);
  if (errorCourse?.response?.status < 500) {
    return <ErrorPage error={errorCourse} redirectTo="/instructor/courses" />;
  }
  return (
    <Box pb="1em">
      {loadingCourse ? (
        <Typography variant="body1" component="p">
          Loading...
        </Typography>
      ) : (
        <EditCourseForm course={course.course} />
      )}
    </Box>
  );
}

export default EditCourseInfo;
