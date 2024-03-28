import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const AddButton = () => {
  return (
    <IconButton
      sx={{
        padding: "4px",
        color: "text.primary",
        transition: "color 0.3s",
        "&:hover": {
          color: "primary.main",
        },
      }}
    >
      <Add />
    </IconButton>
  );
};

export default AddButton;
