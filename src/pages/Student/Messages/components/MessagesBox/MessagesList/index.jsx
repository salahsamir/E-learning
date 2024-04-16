import { Box } from "@mui/system";
import React from "react";

const MessagesList = () => {
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
    ></Box>
  );
};

export default MessagesList;
