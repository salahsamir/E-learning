import React, { useState } from "react";
import DragButton from "./DragButton";
import { Paper } from "@mui/material";
import useLocalVideoTracks from "../../hooks/useLocalVideoTracks";
import MinimizeBtn from "./MinimizeBtn";
import VideoTrack from "../VideoTrack";

const initialPosition = {
  x:
    window.innerWidth > 400
      ? window.innerWidth - 256 - 8
      : window.innerWidth - 144 - 8,
  y:
    window.innerHeight > 400
      ? window.innerHeight - 144 - 8
      : window.innerHeight - 90 - 8,
};

const CurrentStreamBox = () => {
  const { camera: cameraTrack, screen: screenTrack } = useLocalVideoTracks();
  const [minimized, setMinimized] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(initialPosition);
  if (!cameraTrack && !screenTrack) return null;
  return (
    <Paper
      elevation={4}
      sx={{
        position: "fixed",
        width: { xs: "160px", sm: "256px" },
        height: minimized ? "40px" : { xs: "90px", sm: "144px" },
        border: (theme) => `1px solid ${theme.palette.divider}`,
        zIndex: 10000,
        borderRadius: "8px",
        overflow: "hidden",
      }}
      style={{
        top: currentPosition.y + "px",
        left: currentPosition.x + "px",
      }}
    >
      <DragButton position={currentPosition} setPosition={setCurrentPosition} />
      <MinimizeBtn
        initialPosition={initialPosition}
        minimized={minimized}
        setMinimized={setMinimized}
        setPosition={setCurrentPosition}
      />
      {!minimized && (
        <>
          <VideoTrack track={screenTrack ? screenTrack : cameraTrack} />
          {screenTrack && cameraTrack && (
            <VideoTrack
              track={cameraTrack}
              style={{
                position: "absolute",
                bottom: "0px",
                right: "0px",
                width: "40%",
                height: "40%",
                objectFit: "cover",
                borderTop: "1px solid  rgba(255, 255, 255, 0.12)",
                borderLeft: "1px solid  rgba(255, 255, 255, 0.12)",
              }}
            />
          )}
        </>
      )}
    </Paper>
  );
};

export default CurrentStreamBox;
