import { Box } from "@mui/material";
import React from "react";
import VideoTrack from "../VideoTrack";

const UserTracksBox = ({ camera, screen, sx }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "background.b1",
        ...sx,
      }}
    >
      <VideoTrack track={screen ? screen : camera} />
      {screen && camera && (
        <VideoTrack
          track={camera}
          style={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
            width: "40%",
            height: "40%",
            maxHeight: "300px",
            maxWidth: "350px",
            objectFit: "contain",
            borderTop: "1px solid  rgba(255, 255, 255, 0.12)",
            borderLeft: "1px solid  rgba(255, 255, 255, 0.12)",
          }}
        />
      )}
    </Box>
  );
};

export default UserTracksBox;
