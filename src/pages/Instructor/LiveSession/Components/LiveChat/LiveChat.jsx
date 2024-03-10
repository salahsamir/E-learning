import { Box } from "@mui/material";
import React from "react";
import { ControlBar } from "./ControlBar";
import { Messages } from "./Messages";

function LiveChat({ liveChat }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      <Messages messages={liveChat.chatMessages} />
      <ControlBar sendMessage={liveChat.send} />
    </Box>
  );
}

export default LiveChat;
