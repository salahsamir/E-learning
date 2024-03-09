import { Box } from "@mui/material";
import React from "react";
import { Message } from "./Message";

export const Messages = ({ messages }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "0.5em",
        overflow: "auto",
        px: "1em",
        height: "100%",
        justifyContent: "flex-end",
      }}
    >
      {messages?.map((message, index) => (
        <Message key={"mm" + index} message={message} />
      ))}
    </Box>
  );
};
