import { Box, Typography } from "@mui/material";
import React from "react";

const ErrorBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        minHeight: "300px",
      }}
    >
      <Typography color="error">
        There was an error fetching your data!
      </Typography>
    </Box>
  );
};

export default ErrorBox;
