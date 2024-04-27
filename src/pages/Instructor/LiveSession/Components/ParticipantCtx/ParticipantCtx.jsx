import { Mic, MicOff } from "@mui/icons-material";
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  darken,
  lighten,
} from "@mui/material";
import React from "react";
import MessageBtn from "./MessageBtn";
import FocusBtn from "./FocusBtn";
import ProfileBtn from "./ProfileBtn";

export const ParticipantCtx = ({ showMenu, points, participant }) => {
  let userInfo = null;
  if (participant) {
    if (participant.identity !== "") {
      userInfo = JSON.parse(participant.identity);
    }
  }
  return (
    <MenuList
      className={showMenu ? "active-ctx-menu" : ""}
      sx={{
        display: "none",
        position: "fixed",
        top: points[1],
        left: points[0],
        zIndex: 100005,
        borderRadius: "4px",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? lighten(theme.palette.background.b1, 0.1)
            : darken(theme.palette.background.b1, 0.1),
        backdropFilter: "blur(10px)",
        padding: "0",
        "&.active-ctx-menu": {
          display: "block",
        },
      }}
    >
      <ProfileBtn userInfo={userInfo} />
      <FocusBtn participant={participant} />
      <MenuItem>
        <ListItemIcon>
          {participant.isMicrophoneEnabled ? <Mic /> : <MicOff />}
        </ListItemIcon>
        <ListItemText>
          {participant.isMicrophoneEnabled ? "Mute" : "Unmute"}
        </ListItemText>
      </MenuItem>
      <MessageBtn userId={userInfo?.userId} />
    </MenuList>
  );
};
