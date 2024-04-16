import { MoreHoriz } from "@mui/icons-material";
import { Avatar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        height: "75px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Avatar />
        <Typography variant="body1" fontWeight="600">
          Osama Safwat
        </Typography>
      </Box>
      <Box>
        <IconButton>
          <MoreHoriz />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
