import { Box } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import IndicationRow from "./components/IndicationRow";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import MyProgress from "./components/MyProgress";
import StudyStatics from "./components/StudyStatics";
import RecentEnrolledCourses from "./components/RecentEnrolledCourses";
import RecentEnrolledWorkshops from "./components/RecentEnrolledWorkshops";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Eduvation</title>
      </Helmet>
      <Box>
        <IndicationRow />
        <Grid2 container my="16px" spacing={2}>
          <Grid2 xs={12} md={7}>
            <StudyStatics
              data={{ 5: 3.5, 6: 1, 7: 2, 8: 1.5, 9: 3, 10: 2.5, 11: 0.5 }}
            />
          </Grid2>
          <Grid2 xs={12} md={5}>
            <MyProgress status={[20, 50, 30]} />
          </Grid2>
          <Grid2 xs={12}>
            <RecentEnrolledCourses />
          </Grid2>
          <Grid2 xs={12}>
            <RecentEnrolledWorkshops />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Home;
