import { SettingsOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      height="43px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h5" fontWeight="600">
        Messages
      </Typography>
      <IconButton
        sx={{
          padding: "4px",
        }}
      >
        <SettingsOutlined
          fontSize="small"
          sx={{
            color: (theme) => theme.palette.text.secondary,
          }}
        />
      </IconButton>
    </Box>
  );
};

export default Header;
