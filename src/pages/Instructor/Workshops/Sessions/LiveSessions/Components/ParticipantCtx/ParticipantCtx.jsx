import { AccountCircle, Email, Mic, MicOff, Star } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import React from "react";

export const ParticipantCtx = ({ showMenu, points, participant }) => {
  const identity = {
    id: "123",
    name: "John Doe",
    avatar: "https://randomuser.me/api/port",
  };

  console.log(JSON.stringify(identity));
  return (
    <MenuList
      sx={{
        display: showMenu ? "block" : "none",
        position: "fixed",
        top: points[1],
        left: points[0],
        zIndex: 1000,
        borderRadius: "4px",
        backgroundColor: "rgba(0,0,0,0.1 )",
        backdropFilter: "blur(10px)",
      }}
    >
      <MenuItem>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText>Spotlight</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          {participant.isMicrophoneEnabled ? <Mic /> : <MicOff />}
        </ListItemIcon>
        <ListItemText>
          {participant.isMicrophoneEnabled ? "Mute" : "Unmute"}
        </ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Email />
        </ListItemIcon>
        <ListItemText>Message </ListItemText>
      </MenuItem>
    </MenuList>
  );
};
