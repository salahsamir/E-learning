import { useLocalParticipant, useRoomContext } from "@livekit/components-react";
import {
  BackHand,
  CallEnd,
  Fullscreen,
  Mic,
  MicOff,
  PushPin,
  ScreenShare,
  StopScreenShare,
  Videocam,
  VideocamOff,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const iconStyle = {
  color: "white",
  height: { xs: "18px", sm: "24px" },
  width: { xs: "18px", sm: "24px" },
};
function StreamController({ toggleFullScreen }) {
  const room = useRoomContext();
  const navigate = useNavigate();
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
  function handleDisconnect() {
    room.disconnect().then(() => {
      navigate("/");
    });
  }
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: "10001",
        padding: "0.25em",
        width: { xs: "95%", sm: "500px" },
        borderRadius: "2em",
        bottom: "0.5em",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(0,0,0,0.35)",
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
            localParticipant
              .setMicrophoneEnabled(!isMicrophoneEnabled)
              .catch((err) => {
                toast.error(err.message);
              })
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
          onClick={() =>
            localParticipant.setCameraEnabled(!isCameraEnabled).catch((err) => {
              toast.error(err.message);
            })
          }
        >
          {isCameraEnabled ? (
            <Videocam sx={iconStyle} />
          ) : (
            <VideocamOff sx={iconStyle} />
          )}
        </IconButton>
        <IconButton
          onClick={() =>
            localParticipant
              .setScreenShareEnabled(!isScreenShareEnabled)
              .catch((err) => {
                toast.error(err.message);
              })
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
        <IconButton aria-label="fullscreen" onClick={toggleFullScreen}>
          <Fullscreen sx={iconStyle} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default StreamController;
