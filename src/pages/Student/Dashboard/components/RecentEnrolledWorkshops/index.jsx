import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Item from "./Item";

const RecentEnrolledWorkshops = () => {
  return (
    <Box
      sx={{
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "background.b1",
      }}
    >
      <Typography variant="h6" color="text.primary" mb="16px">
        Recent Enrolled Workshops
      </Typography>
      <Grid2 container spacing={2}>
        <Item
          image="https://facialix.com/wp-content/uploads/2023/05/curso-gratis-mongoDB-facialix.jpg"
          instructorName="Osama Safwat"
          title="MongoDB The Full Guide"
        />
        <Item
          image="https://facialix.com/wp-content/uploads/2023/05/curso-gratis-mongoDB-facialix.jpg"
          instructorName="Osama Safwat"
          title="MongoDB The Full Guide"
        />
        <Item
          image="https://facialix.com/wp-content/uploads/2023/05/curso-gratis-mongoDB-facialix.jpg"
          instructorName="Osama Safwat"
          title="MongoDB The Full Guide"
        />
        <Item
          image="https://facialix.com/wp-content/uploads/2023/05/curso-gratis-mongoDB-facialix.jpg"
          instructorName="Osama Safwat"
          title="MongoDB The Full Guide"
        />
      </Grid2>
    </Box>
  );
};

export default RecentEnrolledWorkshops;
