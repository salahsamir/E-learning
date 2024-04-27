import { Box, IconButton, Tooltip, alpha } from "@mui/material";
import React from "react";
import { useRoomContext } from "../../context/room-ctx";
import MemberCard from "../ParticipantsGrid/MemberCard";
import { StarOutline } from "@mui/icons-material";

const UnfocusBtn = () => {
  const { setFocusedParticipant } = useRoomContext();
  return (
    <Tooltip title="Unfocus">
      <IconButton
        aria-label="unfocus"
        onClick={() => setFocusedParticipant(null)}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "text.primary",
          transition: "background-color 0.3s",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? alpha(theme.palette.background.b1, 0.4)
              : alpha(theme.palette.grey[200], 0.7),
          "&:hover": {
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? alpha(theme.palette.background.b1, 0.6)
                : alpha(theme.palette.grey[200], 0.9),
          },
        }}
      >
        <StarOutline />
      </IconButton>
    </Tooltip>
  );
};
const FocusLayout = () => {
  const { focusedParticipant } = useRoomContext();
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.b1",
      }}
    >
      <MemberCard participant={focusedParticipant} />
      <UnfocusBtn />
    </Box>
  );
};

export default FocusLayout;
