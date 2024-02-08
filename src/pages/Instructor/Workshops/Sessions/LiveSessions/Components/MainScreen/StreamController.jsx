import { useLocalParticipant } from "@livekit/components-react";
import {
  EmojiEmotions,
  Fullscreen,
  Mic,
  MicOff,
  MoreHoriz,
  ScreenShare,
  StopScreenShare,
  Videocam,
  VideocamOff,
} from "@mui/icons-material";
import { Box, IconButton, Button } from "@mui/material";
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}
function handleDisconnect() {
  console.log("disconnected");
}

function StreamController({ controls, videoElement }) {
  const {
    isCameraEnabled,
    isMicrophoneEnabled,
    isScreenShareEnabled,
    localParticipant,
  } = useLocalParticipant();

  return (
    <Box
      sx={{
        position: "absolute",
        height: "60px",
        width: "500px",
        borderRadius: "2em",
        bottom: "0.5em",
        left: "50%",
        transform: "translateX(-50%)",
        p: "1em",
        backgroundColor: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(3px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <IconButton onClick={() => openFullscreen(videoElement.current)}>
          <Fullscreen sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <EmojiEmotions sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          onClick={() =>
            localParticipant.setMicrophoneEnabled(!isCameraEnabled)
          }
        >
          {isMicrophoneEnabled ? (
            <Mic sx={{ color: "white" }} />
          ) : (
            <MicOff sx={{ color: "white" }} />
          )}
        </IconButton>
        <Button
          onClick={() => handleDisconnect()}
          sx={{
            backgroundColor: "error.main",
            color: "white",
            borderRadius: "2em",
            "&:hover": {
              backgroundColor: "error.dark",
            },
          }}
        >
          End Meeting
        </Button>
        <IconButton
          onClick={() => localParticipant.setCameraEnabled(!isCameraEnabled)}
        >
          {isCameraEnabled ? (
            <Videocam sx={{ color: "white" }} />
          ) : (
            <VideocamOff sx={{ color: "white" }} />
          )}
        </IconButton>
        <IconButton
          onClick={() =>
            localParticipant.setScreenShareEnabled(!isScreenShareEnabled)
          }
        >
          {isScreenShareEnabled ? (
            <ScreenShare sx={{ color: "white" }} />
          ) : (
            <StopScreenShare sx={{ color: "white" }} />
          )}
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <MoreHoriz sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default StreamController;
