import { Box } from "@mui/material";
import React from "react";

const LoadingSpinner = () => {
  return (
    <Box
      className="loading-container"
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        minHeight: "300px",
        ".loader:before": {
          color: "text.primary",
        },
        ".loader:after": {
          color: "primary.main",
        },
      }}
    >
      <div className="loader" />
    </Box>
  );
};

export default LoadingSpinner;
