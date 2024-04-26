import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { Link } from "react-router-dom";

const WorkshopItem = ({ title, image, days, time }) => {
  return (
    <Grid2 xs={12} sm={6} md={4} lg={3} component={Link} to="1">
      <Box
        sx={{
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "background.b1",
          color: "text.primary",
          "&:hover": {
            boxShadow: (theme) => theme.palette.elevation[1],
            cursor: "pointer",
            color: "text.primary",
          },
        }}
      >
        <img
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*dEo8x5swSiuFVp4VYsCGKg.jpeg"
          alt={title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <Box padding="8px">
          <Typography variant="body1" fontWeight="600" mb="4px">
            Introduction To Software Engineering
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            color={"text.secondary"}
          >
            <Typography variant="body2">
              Saturday, Wednesday, <br /> Thursday
            </Typography>
            <Typography variant="body2">7AM</Typography>
          </Box>
        </Box>
      </Box>
    </Grid2>
  );
};

export default WorkshopItem;
