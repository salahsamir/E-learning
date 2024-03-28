import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import AttachedItem from "./AttachedItem";
import AddButton from "./AddButton";

const Attached = () => {
  const attachedFiles = [
    {
      id: 1,
      type: "PDF",
      name: "File Name",
      size: "50MB",
    },
    {
      id: 2,
      type: "RAR",
      name: "File 12",
      size: "70MB",
    },
    {
      id: 3,
      type: "URL",
      name: "File 13",
    },
  ];
  return (
    <Box>
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
          <AttachedItem item={item} key={item.id} />
        ))}
      </Grid2>
    </Box>
  );
};

export default Attached;
