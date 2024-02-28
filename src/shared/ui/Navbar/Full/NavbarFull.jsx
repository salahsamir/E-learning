import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import Link from "@mui/material/Link";
import ActionsRight from "../ActionsRight/ActionsRight.tsx";

export default function NavbarFull({
  visibleIcons = {
    wishlist: true,
    notification: true,
    cart: true,
    avatar: true,
    themeMode: true,
  },
}) {
  return (
    <AppBar
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "45px",
        paddingX: ".8em",
        borderBottom: ".5px solid #bcbcce44",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Box>
        <Typography variant="h1" fontSize={{ xs: "1.5em", sm: "2em" }}>
          <Link
            to={"/"}
            component={RouterLink}
            color={"primary.main"}
            sx={{
              textDecoration: "none",
            }}
          >
            Eduvation
          </Link>
        </Typography>
      </Box>
      <SearchBar />
      <ActionsRight visibleIcons={visibleIcons} />
    </AppBar>
  );
}
