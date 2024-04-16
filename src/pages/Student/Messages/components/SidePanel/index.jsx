import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SearchButton from "./SearchButton";
import Contacts from "./Contacts";

const SidePanel = () => {
  return (
    <Box
      sx={{
        borderRight: (theme) => `1px solid ${theme.palette.divider}`,
        padding: "16px",
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Box height="43px">
        <Typography variant="h5" display="flex" alignItems="center">
          Messages
        </Typography>
      </Box>

      <SearchButton />
      <Contacts />
    </Box>
  );
};

export default SidePanel;
