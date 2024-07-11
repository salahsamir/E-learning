import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Item from "./Item";
import { useGetBoughtWorkshops } from "api/student/workshops.tsx";

const RecentEnrolledWorkshops = () => {
  const { data: workshops, isLoading, isError } = useGetBoughtWorkshops();
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
        {isLoading
          ? ""
          : isError
          ? ""
          : workshops
              .slice(0, 4)
              .map((workshop) => (
                <Item
                  key={workshop._id}
                  image={workshop.promotionImage?.url}
                  instructorName={workshop.instructor?.userName || "John Doe"}
                  title={workshop.title}
                  sessionTime={workshop.sessionTime}
                  commingDate={workshop.startDay}
                />
              ))}
      </Grid2>
    </Box>
  );
};

export default RecentEnrolledWorkshops;
