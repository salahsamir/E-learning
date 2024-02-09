import { Mic, MicOff, Videocam, VideocamOff } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import BeatingAvatar from "../BeatingAvatar/BeatingAvatar";

function ParticipantCard({ participant }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "8px",
        padding: "1em",
        "&:hover": {
          bgcolor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.04)",
        },
      }}
    >
      <Box display="flex" gap="8px" alignItems="center">
        <BeatingAvatar beating={participant.isSpeaking}>
          {participant.identity.slice(0, 1).toUpperCase()}
        </BeatingAvatar>
        <Typography>{participant.identity}</Typography>
      </Box>
      <Box>
        {participant.isMicrophoneEnabled ? (
          <Mic fontSize="small" />
        ) : (
          <MicOff fontSize="small" />
        )}
        {participant.isVideoEnabled ? (
          <Videocam fontSize="small" />
        ) : (
          <VideocamOff fontSize="small" />
        )}
      </Box>
    </Box>
  );
}

export default ParticipantCard;
