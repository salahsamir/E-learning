import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Helmet } from "react-helmet";
import SessionsList from "./components/SessionsList/SessionsList";
import NewSession from "./components/NewSession/NewSession";
import useGetData from "hooks/useGetData";
import useGetParams from "hooks/useGetParams";
import ErrorPage from "../Error";

function Sessions() {
  const [newFormIsShown, setNewFormIsShown] = useState(false);
  const params = useGetParams();
  const {
    data: sessionsData,
    loading: loadingSessionsList,
    error: errorSessionsList,
  } = useGetData(`workshop/${params[0]}/allRooms`);
  const [sessionsList, setSessionsList] = useState([]);
  useEffect(() => {
    if (sessionsData) {
      setSessionsList(sessionsData.results);
    }
  }, [sessionsData]);
  if (errorSessionsList?.response?.status < 500) {
    return <ErrorPage error={errorSessionsList} redirectTo="/instructor" />;
  }
  return (
    <Box>
      <Helmet>
        <title>Sessions | Eduvation</title>
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
          Sessions
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => setNewFormIsShown(true)}
          disableElevation
        >
          New Session
        </Button>
      </Box>
      <NewSession
        open={newFormIsShown}
        setOpen={setNewFormIsShown}
        setItems={setSessionsList}
      />
      <SessionsList
        sessionsList={sessionsList}
        loadingSessionsList={loadingSessionsList}
        errorSessionsList={errorSessionsList}
        setSessionsList={setSessionsList}
      />
    </Box>
  );
}

export default Sessions;
