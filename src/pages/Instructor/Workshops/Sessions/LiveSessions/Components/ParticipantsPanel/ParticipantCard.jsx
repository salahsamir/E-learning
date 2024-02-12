import { Mic, MicOff, Videocam, VideocamOff } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import BeatingAvatar from "../BeatingAvatar/BeatingAvatar";
import useContextMenu from "../../../../../../../hooks/useContextMenu";
import { ParticipantCtx } from "../ParticipantCtx/ParticipantCtx";

function ParticipantCard({ participant }) {
  const ctx = useContextMenu();
  let userInfo = null;
  if (participant) {
    if (participant.identity !== "") {
      userInfo = JSON.parse(participant.identity);
    }
  }
  return (
    <>
      <ParticipantCtx
        showMenu={ctx.showMenu}
        points={ctx.points}
        participant={participant}
      />
      <Box
        onContextMenu={ctx.handleContextMenu}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
          padding: "1em",
          "&:hover": {
            bgcolor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        <Box display="flex" gap="8px" alignItems="center">
          <BeatingAvatar beating={participant.isSpeaking}>
            {userInfo?.identity.slice(0, 1).toUpperCase()}
          </BeatingAvatar>
          <Typography
            sx={{
              "&:hover": {
                cursor: "default",
              },
            }}
          >
            {userInfo?.identity}
          </Typography>
        </Box>
        <Box>
          {participant.isMicrophoneEnabled ? (
            <Mic fontSize="small" />
          ) : (
            <MicOff fontSize="small" />
          )}
          {participant.isVideoEnabled ? (
            <Videocam fontSize="small" />
          ) : (
            <VideocamOff fontSize="small" />
          )}
        </Box>
      </Box>
    </>
  );
}

export default ParticipantCard;
