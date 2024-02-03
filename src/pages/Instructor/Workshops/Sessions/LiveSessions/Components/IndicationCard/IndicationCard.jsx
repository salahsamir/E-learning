import { Box, Typography } from "@mui/material";
import React from "react";

function IndicationCard() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.b1,
        height: "80px",
        borderRadius: "8px",
        padding: "1em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h6">Live Session</Typography>
        <Typography variant="body2" color="text.secondary">
          24 June 2023
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" textAlign="center" color="text.secondary">
          Time Passed
        </Typography>
        <Typography variant="body1" textAlign="center" fontWeight="400">
          01 : 25 : 30
        </Typography>
      </Box>
    </Box>
  );
}

export default IndicationCard;
