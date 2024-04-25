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
        position: "sticky",
        top: "0",
        zIndex: 101,
        pt: "0.5em",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "1em",
          backgroundColor: (theme) => alpha(theme.palette.background.b1, 0.1),
          backdropFilter: "blur(3px)",
          position: "absolute",
          top: 0,
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
          border: (theme) => `1px solid ${theme.palette.divider}`,
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
            aria-label="menu"
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
