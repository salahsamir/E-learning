import { Box } from "@mui/system";
import React from "react";
import Header from "./Header";
import Messages from "./MessagesList";
import ControlBar from "./ControlBar";

const MessagesBox = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Messages />
      <ControlBar />
    </Box>
  );
};

export default MessagesBox;
