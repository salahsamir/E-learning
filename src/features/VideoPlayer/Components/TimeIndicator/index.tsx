import { Box, Typography } from "@mui/material";
import { Time } from "@vidstack/react";
import React from "react";

const TimeIndicator = () => {
  return (
    <Box display="flex" gap="4px" flex="1" justifyContent="center">
      <Typography variant="body2" display="inline-block" component="div">
        <Time type="current" />
      </Typography>
      <Typography
        variant="body2"
        display="flex"
        gap="2px"
        color="grey.400"
        component="div"
      >
        / <Time type="duration" />
      </Typography>
    </Box>
  );
};

export default TimeIndicator;
