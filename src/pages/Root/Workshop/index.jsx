import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import SideContainer from "./components/SideContainer";
import MainContainer from "./components/MainContainer";

const Workshop = () => {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        mx: "auto",
      }}
    >
      <Grid2 container flexDirection="row-reverse" padding="16px" spacing={4}>
        <Grid2 xs={12} sm={5} md={4}>
          <SideContainer />
        </Grid2>
        <Grid2 xs={12} sm={7} md={8}>
          <MainContainer />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Workshop;
