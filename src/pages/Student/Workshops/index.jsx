import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import WorkshopItem from "./components/WorkshopItem";

const Workshops = () => {
  return (
    <Box>
      <Grid2 container spacing="16px">
        <WorkshopItem />
        <WorkshopItem />
      </Grid2>
    </Box>
  );
};

export default Workshops;
