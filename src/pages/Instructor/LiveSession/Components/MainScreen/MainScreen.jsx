import { Box } from "@mui/material";
import StreamController from "./StreamController";
import { RoomAudioRenderer } from "@livekit/components-react";
import ParticipantsGrid from "../ParticipantsGrid";
import AllowAudio from "../AllowAudio/AllowAudio";
import CurrentStreamBox from "../CurrentStreamBox";
import { useRoomContext } from "../../context/room-ctx";
import FocusLayout from "./FocusLayout";
import { useRef, useState } from "react";
import ConnectionQuality from "./ConnectionQuality";
import FullScreenBtn from "./FullScreenBtn";
function MainScreen() {
  const { focusedParticipant } = useRoomContext();
  const [showFullScreen, setShowFullScreen] = useState(false);
  const containerRef = useRef(null);
  const toggleFullScreen = () => {
    if (showFullScreen) {
      document.exitFullscreen();
    } else {
      containerRef.current?.requestFullscreen();
    }
    setShowFullScreen((old) => !old);
  };
  return (
    <>
      <RoomAudioRenderer />
      <Box
        ref={containerRef}
        mt="1em"
        borderRadius="8px"
        overflow="hidden"
        position="relative"
        height="calc(100vh - 199px)"
        minHeight="calc(480px - 199px)"
        maxHeight="calc(1080px - 199px)"
        sx={{
          border: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <AllowAudio />
        {focusedParticipant ? (
          <FocusLayout showFullScreen={showFullScreen} />
        ) : (
          <ParticipantsGrid />
        )}
        <StreamController />
        <CurrentStreamBox />
        <FullScreenBtn toggleFullScreen={toggleFullScreen} />
        <ConnectionQuality />
      </Box>
    </>
  );
}

export default MainScreen;
