import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import IndicationCard from "./Components/IndicationCard/IndicationCard";
import SidePanel from "./Components/SidePanel/SidePanel";
import MainScreen from "./Components/MainScreen/MainScreen";
import { LiveKitRoom } from "@livekit/components-react";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDY1NjEyNjcsImlzcyI6IkFQSUNzbzk4NG13eGZ6UyIsIm5iZiI6MTcwNjQ3NDg2Nywic3ViIjoicXVpY2tzdGFydCB1c2VyIGQwaWx1NCIsInZpZGVvIjp7ImNhblB1Ymxpc2giOnRydWUsImNhblB1Ymxpc2hEYXRhIjp0cnVlLCJjYW5TdWJzY3JpYmUiOnRydWUsInJvb20iOiJxdWlja3N0YXJ0IHJvb20iLCJyb29tSm9pbiI6dHJ1ZX19.v-GTAwE-SBxKzly9oV_6dSoGTcbgGSvK7Wz6cRh1u6k";
function LiveSessions() {
  return (
    <LiveKitRoom
      token={token}
      serverUrl={"wss://osama-k19imcsj.livekit.cloud"}
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
          <IndicationCard />
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
  );
}

export default LiveSessions;
