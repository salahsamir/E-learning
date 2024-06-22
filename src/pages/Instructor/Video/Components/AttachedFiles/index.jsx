import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import AttachedItem from "./AttachedItem";
import AddButton from "./AddButton";

const AttachedFiles = ({ attachedFiles, sx }) => {
  return (
    <Box sx={sx}>
      {/* Header */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb="8px"
      >
        <Typography variant="h6">Attached</Typography>
        <AddButton />
      </Box>
      {/* Attached Files Box */}
      <Grid2 container spacing="16px">
        {attachedFiles.map((item) => (
          <AttachedItem item={item} key={item._id} />
        ))}
      </Grid2>
    </Box>
  );
};

export default AttachedFiles;
