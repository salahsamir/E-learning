import { Box } from "@mui/material";
import StreamController from "./StreamController";
import { RoomAudioRenderer } from "@livekit/components-react";
import ParticipantsGrid from "../ParticipantsGrid/ParicipantsGrid";
import AllowAudio from "../AllowAudio/AllowAudio";
import CurrentStreamBox from "../CurrentStreamBox";
function MainScreen() {
  return (
    <>
      <RoomAudioRenderer />
      <Box
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
        <ParticipantsGrid />
        <StreamController />
        <CurrentStreamBox />
      </Box>
    </>
  );
}

export default MainScreen;
