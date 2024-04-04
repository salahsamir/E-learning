import React from "react";
import styles from "./Navbar.module.css";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar/SearchBar";
import ActionsRight from "./ActionsRight/ActionsRight";
import Link from "@mui/material/Link";
import Category from "./Category.jsx";

export default function Navbar() {
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
      <Box display='flex'>
        <Typography variant="h3" mx={1}  fontSize={{ xs: "1.7em", sm: "2em" }}>
          <Link
            to={"/"}
            component={RouterLink}
            color={'primary.main'}
            sx={{
              textDecoration: "none",
            //   color: (theme) =>
            //     theme.palette.mode === "dark" ? "white" : "black",
            }}
          >
            Eduvation
          </Link>
        </Typography>

      <Category/>
      </Box>
      <SearchBar />
      <ActionsRight cartVisible={true} />
    </AppBar>
  );
}
