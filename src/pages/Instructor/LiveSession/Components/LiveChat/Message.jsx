import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export const Message = ({ message }) => {
  const participant = message.from;
  console.log(participant);
  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.5em",
        height: "fit-content",
        justifyContent: participant.isLocal ? "flex-end" : "flex-start",
        alignItems: "flex-end",
      }}
    >
      {!participant.isLocal && (
        <Avatar sx={{ height: "30px", width: "30px" }}></Avatar>
      )}
      <Box
        sx={{
          padding: "0.5em",
          borderRadius: "8px",
          borderBottomLeftRadius: participant.isLocal ? "8px" : "0px",
          borderBottomRightRadius: participant.isLocal ? "0px" : "8px",
          color: participant.isLocal && "white",
          backgroundColor: (theme) =>
            participant.isLocal
              ? "primary.main"
              : theme.palette.mode === "light"
              ? "rgba(0,0,0,0.1)"
              : "rgba(255,255,255,0.1)",
        }}
      >
        <Typography variant="body2">{message.message}</Typography>
      </Box>
    </Box>
  );
};
