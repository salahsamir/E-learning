import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import BeatingAvatar from "../BeatingAvatar/BeatingAvatar";

function MemberCard({ name, participant }) {
  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      height={"100%"}
      width={"100%"}
    >
      <BeatingAvatar
        key={"grid-p-avatar"}
        beating={participant.isSpeaking}
        style={{
          height: 50,
          width: 50,
        }}
      >
        {participant.identity?.slice(0, 1).toUpperCase()}
      </BeatingAvatar>
    </Grid2>
  );
}

export default MemberCard;
