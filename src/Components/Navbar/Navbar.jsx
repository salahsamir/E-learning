import React from "react";
import styles from "./Navbar.module.css";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar/SearchBar";
import ActionsRight from "./ActionsRight/ActionsRight";
import Link from "@mui/material/Link";

export default function Navbar() {
  return (
    <AppBar
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px",
        paddingX: "1em",
        borderBottom: "1px solid #bcbcce44",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Box>
        <Typography variant="h1" fontSize={{ xs: "1.5em", sm: "2em" }}>
          <Link
            to={"/"}
            component={RouterLink}
            sx={{
              textDecoration: "none",
              color: (theme) =>
                theme.palette.mode === "dark" ? "white" : "black",
            }}
          >
            Eduvation
          </Link>
        </Typography>
      </Box>
      <SearchBar />
      <ActionsRight cartVisible={true} />
    </AppBar>
  );
}
