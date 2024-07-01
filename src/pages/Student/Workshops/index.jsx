import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import WorkshopItem from "./components/WorkshopItem";
import { useGetBoughtWorkshops } from "api/student/workshops.tsx";

const Workshops = () => {
  const { data } = useGetBoughtWorkshops();
  console.log(data);
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
