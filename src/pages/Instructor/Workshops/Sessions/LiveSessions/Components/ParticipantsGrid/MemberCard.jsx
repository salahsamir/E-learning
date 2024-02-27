import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import BeatingAvatar from "../BeatingAvatar/BeatingAvatar";
import useContextMenu from "../../../../../../../hooks/useContextMenu";
import { ParticipantCtx } from "../ParticipantCtx/ParticipantCtx";

function MemberCard({ participant }) {
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
        participant={participant}
        points={ctx.points}
        showMenu={ctx.showMenu}
      />
      <Grid2
        container
        justifyContent="center"
        alignItems="center"
        height={"100%"}
        width={"100%"}
        onContextMenu={ctx.handleContextMenu}
      >
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
      </Grid2>
    </>
  );
}

export default MemberCard;
