import React, { useState } from "react";
import WorkshopsList from "./Components/WorkshopsList/WorkshopsList";
import { Box, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import NewWorkshop from "./Components/NewWorkshop/NewWorkshop";
import { Helmet } from "react-helmet";
import ErrorPage from "../Error";
import useGetWorkshops from "api/instructor/workshops.tsx";

function Workshops() {
  const [newFormIsShown, setNewFormIsShown] = useState(false);
  const {
    data: workshopsList,
    isLoading: workshopsLoading,
    isError: workshopsError,
  } = useGetWorkshops();
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
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => setNewFormIsShown(true)}
          disableElevation
        >
          New Workshop
        </Button>
      </Box>
      <NewWorkshop open={newFormIsShown} setOpen={setNewFormIsShown} />
      <WorkshopsList
        workshopsList={workshopsList}
        workshopsLoading={workshopsLoading}
        workshopsError={workshopsError}
      />
    </Box>
  );
}

export default Workshops;
