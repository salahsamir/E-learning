import React, { useEffect, useState } from "react";
import CoursesList from "./Components/CoursesList/CoursesList";
import { Box, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import NewCourse from "./Components/NewCourse/NewCourse";
import { Helmet } from "react-helmet";
import useGetData from "../../../hooks/useGetData";
import { BaseApi } from "../../../util/BaseApi";
import ErrorPage from "../Error/ErrorPage";

function Courses() {
  const [newFormIsShown, setNewFormIsShown] = useState(false);
  const {
    data: coursesData,
    loading: loadingCoursesList,
    error: errorCoursesList,
    setRefetch: refetchCoursesList,
  } = useGetData(BaseApi + "/course?view=instructor");
  const [coursesList, setCoursesList] = useState([]);
  useEffect(() => {
    if (coursesData) {
      setCoursesList(coursesData.courses);
    }
  }, [coursesData]);
  console.log(errorCoursesList);
  if (errorCoursesList?.response?.status < 500) {
    console.log("errorCoursesList");
    return <ErrorPage error={errorCoursesList} redirectTo="/instructor" />;
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
      <NewCourse
        open={newFormIsShown}
        setOpen={setNewFormIsShown}
        setCoursesList={setCoursesList}
      />
      <CoursesList
        coursesList={coursesList}
        loadingCoursesList={loadingCoursesList}
        errorCoursesList={errorCoursesList}
        setCoursesList={setCoursesList}
      />
    </Box>
  );
}

export default Courses;
