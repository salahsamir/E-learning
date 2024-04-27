import React from "react";
import BeatingAvatar from "../BeatingAvatar/BeatingAvatar";
import { ParticipantCtx } from "../ParticipantCtx/ParticipantCtx";
import useContextMenu from "hooks/useContextMenu";
import { Box, Typography, alpha } from "@mui/material";
import useRemoteVideoTracks from "../../hooks/useRemoteVideoTracks";
import UserTracksBox from "../UserTracksBox";

function MemberCard({ participant }) {
  const ctx = useContextMenu();
  let userInfo = null;
  if (participant) {
    if (participant.identity !== "") {
      userInfo = JSON.parse(participant.identity);
    }
  }
  const remoteTracks = useRemoteVideoTracks();
  let participantTracks;
  remoteTracks.forEach((track) => {
    if (track.participant.identity === participant.identity) {
      participantTracks = track;
    }
  });
  return (
    <>
      <ParticipantCtx
        participant={participant}
        points={ctx.points}
        showMenu={ctx.showMenu}
        setShowMenu={ctx.setShowMenu}
      />
      <Box
        onContextMenu={ctx.handleContextMenu}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {participantTracks ? (
          <>
            <UserTracksBox
              camera={participantTracks?.camera}
              screen={participantTracks?.screen}
            />
            <Typography
              variant="body2"
              sx={{
                position: "absolute",
                bottom: 13,
                left: 8,
                color: "text.primary",
                height: "30px",
                display: "flex",
                alignItems: "center",
                userSelect: "none",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark"
                    ? alpha(theme.palette.background.b1, 0.7)
                    : alpha(theme.palette.grey[200], 0.7),
                padding: "0 16px",
                borderRadius: "100px",
              }}
            >
              {userInfo?.userName}
            </Typography>
          </>
        ) : (
          <BeatingAvatar
            key={"grid-p-avatar"}
            beating={participant.isSpeaking}
            style={{
              height: 50,
              width: 50,
            }}
          >
            {userInfo?.userName?.slice(0, 1).toUpperCase()}
          </BeatingAvatar>
        )}
      </Box>
    </>
  );
}

export default MemberCard;
