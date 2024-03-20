import { useLocalParticipant } from "@livekit/components-react";
import {
  BackHand,
  CallEnd,
  Mic,
  MicOff,
  MoreHoriz,
  PushPin,
  ScreenShare,
  StopScreenShare,
  Videocam,
  VideocamOff,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
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
  const [controlbarPined, setControlbarPined] = useState(true);
  let raiseHand;
  if (localParticipant?.metadata) {
    raiseHand = JSON.parse(localParticipant.metadata)?.raiseHand;
  }
  const handleRaiseHand = () => {
    localParticipant.setMetadata(JSON.stringify({ raiseHand: !raiseHand }));
  };
  const iconStyle = {
    color: "white",
    height: { xs: "18px", sm: "24px" },
    width: { xs: "18px", sm: "24px" },
  };
  return (
    <Box
      sx={{
        position: "absolute",
        padding: "0.25em 0.5em",
        width: { xs: "100%", sm: "500px" },
        borderRadius: "2em",
        bottom: "0.5em",
        left: "50%",
        transform: "translateX(-50%)",
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
              ...iconStyle,
              color: controlbarPined ? "primary.main" : "white",
            }}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <IconButton onClick={() => handleRaiseHand()}>
          <BackHand
            sx={{
              ...iconStyle,
              color: raiseHand ? "primary.main" : "white",
            }}
          />
        </IconButton>
        <IconButton
          onClick={() =>
            localParticipant.setMicrophoneEnabled(!isMicrophoneEnabled)
          }
        >
          {isMicrophoneEnabled ? (
            <Mic sx={iconStyle} />
          ) : (
            <MicOff sx={iconStyle} />
          )}
        </IconButton>
        <IconButton
          onClick={() => handleDisconnect()}
          sx={{
            mx: { xs: "0", sm: "0.5em" },
            backgroundColor: "error.main",
            "&:hover": {
              backgroundColor: "error.dark",
            },
          }}
        >
          <CallEnd sx={iconStyle} />
        </IconButton>
        <IconButton
          onClick={() => localParticipant.setCameraEnabled(!isCameraEnabled)}
        >
          {isCameraEnabled ? (
            <Videocam sx={iconStyle} />
          ) : (
            <VideocamOff sx={iconStyle} />
          )}
        </IconButton>
        <IconButton
          onClick={() =>
            localParticipant.setScreenShareEnabled(!isScreenShareEnabled)
          }
        >
          {isScreenShareEnabled ? (
            <ScreenShare sx={iconStyle} />
          ) : (
            <StopScreenShare sx={iconStyle} />
          )}
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <MoreHoriz sx={iconStyle} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default StreamController;
