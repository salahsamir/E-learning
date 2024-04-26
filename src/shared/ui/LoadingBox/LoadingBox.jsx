import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LoadingBox = ({ sx }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={sx}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingBox;
