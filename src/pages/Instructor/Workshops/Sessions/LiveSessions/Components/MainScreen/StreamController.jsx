import { useLocalParticipant } from "@livekit/components-react";
import {
  BackHand,
  Mic,
  MicOff,
  MoreHoriz,
  PushPin,
  ScreenShare,
  StopScreenShare,
  Videocam,
  VideocamOff,
} from "@mui/icons-material";
import { Box, IconButton, Button } from "@mui/material";
import { useState } from "react";
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

function StreamController() {
  const {
    isCameraEnabled,
    isMicrophoneEnabled,
    isScreenShareEnabled,
    localParticipant,
  } = useLocalParticipant();
  const [controlbarPined, setControlbarPined] = useState(false);
  let raiseHand;
  if (localParticipant?.metadata) {
    raiseHand = JSON.parse(localParticipant.metadata)?.raiseHand;
  }
  const handleRaiseHand = () => {
    localParticipant.setMetadata(JSON.stringify({ raiseHand: !raiseHand }));
  };
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
        opacity: controlbarPined ? "1" : "0",
        transition: "opacity 0.5s",
        "&:hover": {
          opacity: "1",
        },
      }}
    >
      <Box>
        <IconButton onClick={() => setControlbarPined((old) => !old)}>
          <PushPin
            sx={{
              color: (theme) =>
                controlbarPined ? theme.palette.primary.main : "white",
            }}
          />
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={() => handleRaiseHand()}>
          <BackHand
            sx={{
              color: (theme) =>
                raiseHand ? theme.palette.primary.main : "white",
            }}
          />
        </IconButton>
        <IconButton
          onClick={() =>
            localParticipant.setMicrophoneEnabled(!isMicrophoneEnabled)
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