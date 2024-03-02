import { Box, IconButton, alpha } from "@mui/material";
import React from "react";
import { Menu } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import ActionsRight from "../ActionsRight/ActionsRight.tsx";
function NavbarCompact({
  onMenuClick,
  visibleIcons = {
    wishlist: true,
    notification: true,
    cart: true,
    avatar: true,
    themeMode: true,
  },
}) {
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
          justifyContent: { md: "space-between" },
          height: "100%",
          position: "relative",
          zIndex: 102,
          backgroundColor: (theme) => theme.palette.background.b1,
          px: "0.5em",
          borderRadius: "8px",
          gap: "1em",
          border: (theme) => `1px solid ${theme.palette.primary.border}`,
        }}
      >
        <SearchBar />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "space-between", md: "flex-end" },
            flex: { xs: 1, md: "0" },
          }}
        >
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={onMenuClick}
          >
            <Menu />
          </IconButton>
          <ActionsRight visibleIcons={visibleIcons} />
        </Box>
      </Box>
    </Box>
  );
}

export default NavbarCompact;
