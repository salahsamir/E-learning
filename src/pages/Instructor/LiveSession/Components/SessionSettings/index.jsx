import { useRoomContext } from "@livekit/components-react";
import { Box } from "@mui/material";
import React from "react";

const SessionSettings = () => {
  const room = useRoomContext();
  console.log(room);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    ></Box>
  );
};

export default SessionSettings;
