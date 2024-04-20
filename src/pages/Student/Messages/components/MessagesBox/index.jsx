import { Box } from "@mui/system";
import React from "react";
import Header from "./Header";
import MessagesList from "./MessagesList";
import ControlBar from "./ControlBar";
import useGetParams from "hooks/useGetParams";
import NoChat from "./NoChat";

const MessagesBox = () => {
  const params = useGetParams();
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {params[0] === "messages" || params[0] === "" ? (
        <NoChat />
      ) : (
        <>
          <Header />
          <MessagesList />
          <ControlBar />
        </>
      )}
    </Box>
  );
};

export default MessagesBox;
