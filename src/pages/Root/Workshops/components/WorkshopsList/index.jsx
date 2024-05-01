import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import WorkshopCard from "../WorkshopCard";

const WorkshopsList = () => {
  return (
    <Grid2 container padding="16px" spacing={2}>
      {[1, 2, 3, 4, 5, 6].map((ele) => (
        <Grid2 xs={12} sm={6} md={4} lg={3} key={ele}>
          <WorkshopCard />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default WorkshopsList;
