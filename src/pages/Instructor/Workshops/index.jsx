import React from "react";
import WorkshopsList from "./Components/WorkshopsList/WorkshopsList";
import { Box, Typography } from "@mui/material";
import NewWorkshop from "./Components/NewWorkshop/NewWorkshop";
import { Helmet } from "react-helmet";
import ErrorPage from "../Error";
import useGetWorkshops from "api/instructor/workshops.tsx";

function Workshops() {
  const {
    data: workshopsList,
    isLoading: workshopsLoading,
    isError: workshopsError,
  } = useGetWorkshops({
    view: "instructor",
  });
  if (workshopsError?.response?.status < 500) {
    return <ErrorPage error={workshopsError} redirectTo="/instructor" />;
  }
  return (
    <Box>
      <Helmet>
        <title>Workshops | Eduvation</title>
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
          Workshops
        </Typography>
        <NewWorkshop />
      </Box>
      <WorkshopsList
        workshopsList={workshopsList}
        loadingWorkshopsList={workshopsLoading}
        errorWorkshopsList={workshopsError}
      />
    </Box>
  );
}

export default Workshops;
