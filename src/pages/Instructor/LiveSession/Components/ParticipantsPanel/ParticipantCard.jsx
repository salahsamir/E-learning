import { Mic, MicOff, Videocam, VideocamOff } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import BeatingAvatar from "../BeatingAvatar/BeatingAvatar";
import { ParticipantCtx } from "../ParticipantCtx/ParticipantCtx";
import useContextMenu from "hooks/useContextMenu";

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
          gap: "8px",
          borderRadius: "8px",
          padding: "1em",
          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
      >
        <Box
          display="flex"
          gap="8px"
          alignItems="center"
          flexShrink={1}
          overflow="hidden"
        >
          <BeatingAvatar beating={participant.isSpeaking}>
            {userInfo?.userName?.slice(0, 1).toUpperCase()}
          </BeatingAvatar>
          <Typography
            flexShrink={1}
            noWrap
            sx={{
              "&:hover": {
                cursor: "default",
              },
            }}
          >
            {userInfo?.userName}
          </Typography>
        </Box>
        <Box display="flex" flexWrap="nowrap" gap="4px">
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
