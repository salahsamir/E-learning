import React from "react";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import SessionsList from "./components/SessionsList/SessionsList";
import NewSession from "./components/NewSession/NewSession";
import useGetParams from "hooks/useGetParams";
import ErrorPage from "../Error";
import { useGetSessions } from "api/instructor/sessions.tsx";

function Sessions() {
  const params = useGetParams();
  const {
    data: sessionsList,
    isLoading: loadingSessionsList,
    isError: errorSessionsList,
  } = useGetSessions(params[0]);

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
        <NewSession />
      </Box>
      <SessionsList
        sessionsList={sessionsList}
        loadingSessionsList={loadingSessionsList}
        errorSessionsList={errorSessionsList}
      />
    </Box>
  );
}

export default Sessions;
