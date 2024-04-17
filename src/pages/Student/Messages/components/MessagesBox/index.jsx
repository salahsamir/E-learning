import { Box } from "@mui/system";
import React from "react";
import Header from "./Header";
import MessagesList from "./MessagesList";
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
      <MessagesList />
      <ControlBar />
    </Box>
  );
};

export default MessagesBox;
