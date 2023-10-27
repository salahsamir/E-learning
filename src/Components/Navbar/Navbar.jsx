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
      elevation={5}
      sx={{
        position:"sticky",//1
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
        paddingX: "1em",
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#f7ffe5" : "#28313f",
      }}
    >
      <Box>
        <Typography variant="h1" fontSize={"2em"}>
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
      <ActionsRight />
    </AppBar>
  );
}