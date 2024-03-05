import React, { useState } from "react";
import CoursesList from "./Components/CoursesList/CoursesList";
import { Box, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import NewCourse from "./Components/NewCourse/NewCourse";
import { Helmet } from "react-helmet";
import ErrorPage from "../Error";
import { useGetCourses } from "api/instructor/courses.tsx";

function Courses() {
  const [newFormIsShown, setNewFormIsShown] = useState(false);
  const {
    data: coursesList,
    isLoading: coursesLoading,
    error: coursesError,
  } = useGetCourses();
  if (coursesError?.response?.status < 500) {
    return <ErrorPage error={coursesError} redirectTo="/instructor" />;
  }
  return (
    <Box>
      <Helmet>
        <title>Courses | Eduvation</title>
      </Helmet>
      <Box
        mb="1em"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          height: "36px",
        }}
      >
        <Typography variant="h5" component="h2">
          Courses List
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => setNewFormIsShown(true)}
          disableElevation
        >
          New Course
        </Button>
      </Box>
      <NewCourse open={newFormIsShown} setOpen={setNewFormIsShown} />
      <CoursesList
        coursesList={coursesList}
        loadingCoursesList={coursesLoading}
        errorCoursesList={coursesError}
      />
    </Box>
  );
}

export default Courses;
