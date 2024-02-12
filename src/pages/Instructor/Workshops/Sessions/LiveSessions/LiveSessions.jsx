import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import IndicationCard from "./Components/IndicationCard/IndicationCard";
import SidePanel from "./Components/SidePanel/SidePanel";
import MainScreen from "./Components/MainScreen/MainScreen";
import { LiveKitRoom } from "@livekit/components-react";
import axios from "axios";
import { BaseApi } from "../../../../../util/BaseApi";
import useGetParams from "../../../../../hooks/useGetParams";
import { Box, CircularProgress } from "@mui/material";
import useGetData from "../../../../../hooks/useGetData";

function LiveSessions() {
  const [token, setToken] = useState("");
  const params = useGetParams();
  const { data: eduRoom } = useGetData(BaseApi + "/room/" + params[0]);
  useEffect(() => {
    axios
      .post(
        BaseApi + "/room/join",
        {
          roomId: params[0],
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setToken(res.data.token);
      });
  }, [params]);
  return (
    <>
      {token === "" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {token !== "" && (
        <LiveKitRoom
          token={token}
          serverUrl={process.env.REACT_APP_LIVEKIT_SERVER_URL}
          options={{
            audio: true,
            video: true,
            autoJoin: true,
            autoSubscribe: true,
            dominantSpeaker: true,
          }}
        >
          <Grid2 container spacing={2}>
            <Grid2 xs={12} md={9}>
              <IndicationCard eduRoom={eduRoom?.results} />
              <MainScreen />
              <Grid2 container spacing={2}>
                <Grid2 xs={12} md={4}></Grid2>
                <Grid2 xs={12} md={4}></Grid2>
                <Grid2 xs={12} md={4}></Grid2>
              </Grid2>
            </Grid2>
            <Grid2 xs={12} md={3}>
              <SidePanel />
            </Grid2>
          </Grid2>
        </LiveKitRoom>
      )}
    </>
  );
}

export default LiveSessions;
