import { Star, StarOutline } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import React from "react";
import { useRoomContext } from "../../context/room-ctx";

const FocusBtn = ({ participant }) => {
  const { focusedParticipant, setFocusedParticipant } = useRoomContext();
  const isUserFocused = focusedParticipant?.identity === participant.identity;
  return (
    <MenuItem>
      <ListItemIcon>{isUserFocused ? <StarOutline /> : <Star />}</ListItemIcon>
      <ListItemText
        onClick={() => {
          if (participant.isLocal) return;
          if (isUserFocused) {
            setFocusedParticipant(null);
            return;
          }
          setFocusedParticipant(participant);
        }}
      >
        {isUserFocused ? "Unfocus" : "Focus"}
      </ListItemText>
    </MenuItem>
  );
};

export default FocusBtn;
