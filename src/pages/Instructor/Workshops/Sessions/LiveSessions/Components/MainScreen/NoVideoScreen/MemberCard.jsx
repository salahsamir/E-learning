import { Avatar } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

function MemberCard() {
  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      height={"100%"}
      width={"100%"}
    >
      <Avatar>AJ</Avatar>
    </Grid2>
  );
}

export default MemberCard;
