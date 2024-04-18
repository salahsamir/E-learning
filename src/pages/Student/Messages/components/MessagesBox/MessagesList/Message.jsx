import { Avatar, Box, Typography } from "@mui/material";
import { useGetProfile } from "api/global/profile.tsx";
import React from "react";

const Message = ({ message }) => {
  const { data: currentUser } = useGetProfile();
  const isLocal = currentUser?._id === message.from;
  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.5em",
        height: "fit-content",
        justifyContent: isLocal ? "flex-end" : "flex-start",
        alignItems: "flex-end",
      }}
    >
      {!isLocal && <Avatar sx={{ height: "30px", width: "30px" }}></Avatar>}
      <Box
        sx={{
          padding: "0.5em",
          borderRadius: "8px",
          borderBottomLeftRadius: isLocal ? "8px" : "0px",
          borderBottomRightRadius: isLocal ? "0px" : "8px",
          color: isLocal && "white",
          backgroundColor: (theme) =>
            isLocal
              ? "primary.main"
              : theme.palette.mode === "light"
              ? "rgba(0,0,0,0.1)"
              : "rgba(255,255,255,0.1)",
        }}
      >
        <Typography variant="body2">{message.text}</Typography>
        {message.media && <audio src={message.media} controls></audio>}
      </Box>
    </Box>
  );
};

export default Message;
