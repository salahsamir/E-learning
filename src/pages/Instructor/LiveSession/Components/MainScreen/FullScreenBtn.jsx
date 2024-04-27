import { Fullscreen } from "@mui/icons-material";
import { IconButton, alpha } from "@mui/material";
import React from "react";

const FullScreenBtn = ({ toggleFullScreen }) => {
  return (
    <IconButton
      aria-label="fullscreen"
      onClick={toggleFullScreen}
      sx={{
        position: "absolute",
        bottom: 8,
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
      <Fullscreen />
    </IconButton>
  );
};

export default FullScreenBtn;
