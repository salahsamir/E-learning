import { useRoomContext, useStartAudio } from "@livekit/components-react";
import { Button } from "@mui/material";
import React from "react";

function AllowAudio() {
  const room = useRoomContext();
  const { mergedProps } = useStartAudio(room);
  return (
    <Button
      style={mergedProps.style}
      onClick={mergedProps.onClick}
      variant="contained"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
      }}
    >
      Allow Audio
    </Button>
  );
}

export default AllowAudio;
