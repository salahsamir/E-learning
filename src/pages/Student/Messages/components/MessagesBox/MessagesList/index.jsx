import { Box } from "@mui/material";
import React from "react";
import Message from "./Message";

const MessagesList = () => {
  const messages = [
    {
      from: { isLocal: true },
      message: "Hello",
    },
    {
      from: { isLocal: false },
      message: "Hi",
    },
    {
      from: { isLocal: true },
      message: "How are you?",
    },
    {
      from: { isLocal: false },
      message: "I'm good",
    },
    {
      from: { isLocal: true },
      message: "That's great",
    },
    {
      from: { isLocal: false },
      message: "Yeah",
    },
    {
      from: { isLocal: true },
      message: "What are you doing?",
    },
    {
      from: { isLocal: false },
      message: "Nothing much",
    },
    {
      from: { isLocal: true },
      message: "Okay",
    },
    {
      from: { isLocal: false },
      message: "What about you?",
    },
    {
      from: { isLocal: true },
      message: "Just chilling",
    },
  ];
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "0.5em",
        overflowY: "scroll",
        p: "1em",
        height: "100%",
        "& > :first-of-type": {
          mt: "auto !important",
        },
      }}
    >
      {messages?.map((message, index) => (
        <Message key={"mm" + index} message={message} />
      ))}
    </Box>
  );
};

export default MessagesList;
