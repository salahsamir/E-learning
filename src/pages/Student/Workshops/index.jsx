import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import WorkshopItem from "./components/WorkshopItem";
import { useGetBoughtWorkshops } from "api/student/workshops.tsx";
import { Helmet } from "react-helmet";
import LoadingSpinner from "Components/LoadingSpinner";
import ErrorBox from "Components/ErrorBox";

const Workshops = () => {
  const { data: workshops, isLoading, isError } = useGetBoughtWorkshops();
  console.log(workshops);
  return (
    <>
      <Helmet>
        <title>My Workshops | Eduvation</title>
      </Helmet>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <ErrorBox />
      ) : (
        <Box>
          <Typography variant="h6" mb="1em">
            My Workshops
          </Typography>
          <Grid2 container spacing="16px">
            {workshops.map((item) => (
              <WorkshopItem workshop={item} />
            ))}
          </Grid2>
        </Box>
      )}
    </>
  );
};

export default Workshops;
