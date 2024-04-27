import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import IndicationCard from "./Components/IndicationCard/IndicationCard";
import SidePanel from "./Components/SidePanel/SidePanel";
import MainScreen from "./Components/MainScreen/MainScreen";
import { LiveKitRoom } from "@livekit/components-react";
import { Box, CircularProgress } from "@mui/material";
import { useGetSession, useJoinSession } from "api/instructor/session-live.tsx";
import { RoomContextProvider } from "./context/room-ctx";

function LiveSessions() {
  const { data: eduRoom } = useGetSession();
  const { data: token } = useJoinSession();
  return (
    <>
      {!token && (
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
      {token && (
        <LiveKitRoom
          token={token}
          serverUrl={process.env.REACT_APP_LIVEKIT_SERVER_URL}
          options={{
            audio: true,
            video: true,
            autoJoin: true,
            autoSubscribe: true,
            dominantSpeaker: true,
            adaptiveStream: true,
          }}
        >
          <RoomContextProvider>
            <Grid2 container spacing={2}>
              <Grid2 xs={12} md={9}>
                <IndicationCard eduRoom={eduRoom} />
                <MainScreen />
              </Grid2>
              <Grid2 xs={12} md={3}>
                <SidePanel />
              </Grid2>
            </Grid2>
          </RoomContextProvider>
        </LiveKitRoom>
      )}
    </>
  );
}

export default LiveSessions;
