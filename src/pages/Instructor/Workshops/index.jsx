import React, { useEffect, useState } from "react";
import WorkshopsList from "./Components/WorkshopsList/WorkshopsList";
import { Box, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import NewWorkshop from "./Components/NewWorkshop/NewWorkshop";
import { Helmet } from "react-helmet";
import useGetData from "hooks/useGetData";
import ErrorPage from "../Error";

function Workshops() {
  const [newFormIsShown, setNewFormIsShown] = useState(false);
  const {
    data: workshopData,
    loading: loadingWorkshopsList,
    error: errorWorkshopsList,
  } = useGetData("workshop?view=instructor");
  const [workshopsList, setWorkshopsList] = useState([]);
  useEffect(() => {
    if (workshopData) {
      setWorkshopsList(workshopData.results);
    }
  }, [workshopData]);
  if (errorWorkshopsList?.response?.status < 500) {
    return <ErrorPage error={errorWorkshopsList} redirectTo="/instructor" />;
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
      <NewWorkshop
        open={newFormIsShown}
        setOpen={setNewFormIsShown}
        setWorkshopsList={setWorkshopsList}
      />
      <WorkshopsList
        workshopsList={workshopsList}
        loadingWorkshopsList={loadingWorkshopsList}
        errorWorkshopsList={errorWorkshopsList}
        setWorkshopsList={setWorkshopsList}
      />
    </Box>
  );
}

export default Workshops;
