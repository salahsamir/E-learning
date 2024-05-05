import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect } from "react";
import IndicationCard from "./Components/IndicationCard/IndicationCard";
import SidePanel from "./Components/SidePanel/SidePanel";
import MainScreen from "./Components/MainScreen/MainScreen";
import { LiveKitRoom } from "@livekit/components-react";
import { useGetSession, useJoinSession } from "api/instructor/session-live.tsx";
import { RoomContextProvider } from "./context/room-ctx";
import LoadingSpinner from "Components/LoadingSpinner";
import ErrorBox from "Components/ErrorBox";

function LiveSessions() {
  const { data: eduRoom } = useGetSession();
  const {
    data: token,
    isLoading: loadingJoinSession,
    isError: errorJoiningSession,
  } = useJoinSession();

  // show warning before leaving the site
  useEffect(() => {
    window.onbeforeunload = () => {
      return true;
    };
    return () => (window.onbeforeunload = null);
  }, []);

  return (
    <>
      {loadingJoinSession ? (
        <LoadingSpinner />
      ) : errorJoiningSession ? (
        <ErrorBox />
      ) : (
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
            publishDefaults: { videoCodec: "h264" },
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
