import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import SidePanel from "./components/SidePanel";
import MessagesBox from "./components/MessagesBox";

const Messages = () => {
  return (
    <Grid2
      container
      sx={{
        backgroundColor: (theme) => theme.palette.background.b1,
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: "16px",
        height: "calc(100vh - 90px)",
      }}
    >
      <Grid2 xs={4} maxHeight="100%">
        <SidePanel />
      </Grid2>
      <Grid2 xs={8}>
        <MessagesBox />
      </Grid2>
    </Grid2>
  );
};

export default Messages;
