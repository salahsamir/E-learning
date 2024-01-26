import { Box, IconButton, alpha } from "@mui/material";
import React from "react";
import ActionsRight from "../../../../Components/Navbar/ActionsRight/ActionsRight";
import { Menu } from "@mui/icons-material";
function Navbar({ onMenuClick }) {
  return (
    <Box
      component="header"
      sx={{
        height: "60px",
        position: "fixed",
        width: {
          xs: "calc(100vw - 2em)",
          md: "calc(100vw - 65px - 2em)",
          lg: "calc(100vw - 240px - 2em)",
        },
        maxWidth: "1400px",
        transform: "translateX(-50%)",
        left: {
          xs: "50%",
          md: "calc(50% + 32.5px)",
          lg: "calc(50% + 120px)",
        },
        zIndex: 101,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: "-0.5em",
          left: "0",
          width: "100%",
          height: "0.9em",
          backgroundColor: (theme) => alpha(theme.palette.background.b1, 0.1),
          backdropFilter: "blur(3px)",
          zIndex: 100,
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-between", md: "flex-end" },
          height: "100%",
          position: "relative",
          zIndex: 102,
          backgroundColor: (theme) => theme.palette.background.b1,
          px: "0.5em",
          borderRadius: "8px",
        }}
      >
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={onMenuClick}
        >
          <Menu />
        </IconButton>
        <ActionsRight cartVisible={false} />
      </Box>
    </Box>
  );
}

export default Navbar;
