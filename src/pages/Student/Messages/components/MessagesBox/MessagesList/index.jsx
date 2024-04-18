import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Message from "./Message";
import { useGetChat } from "api/global/messages.tsx";
import useGetParams from "hooks/useGetParams";
import { socket } from "api/socket/socket.ts";

const MessagesList = () => {
  const params = useGetParams();
  const { data: chat } = useGetChat({ id: params[0] });
  console.log(chat);
  useEffect(() => {
    socket.on("recieveMsg", (date) => {
      console.log(date);
    });
  }, []);

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
      {chat?.messages?.map((message, index) => (
        <Message key={"mm" + index} message={message} />
      ))}
    </Box>
  );
};

export default MessagesList;
