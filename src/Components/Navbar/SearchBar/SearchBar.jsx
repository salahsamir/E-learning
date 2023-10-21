import { Search, SearchOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Icon,
  InputBase,
  alpha,
  styled,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "20px",
    backgroundColor: alpha(theme.palette.background.default, 0.15),

    marginLeft: 0,
    width: "fit-content",
    borderColor: theme.palette.primary.light,
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      display: "none",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    zIndex: 1,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.border}`,
    borderRadius: "20px",
    backgroundColor: "transparent",

    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      paddingRight: "1em",
    },
  }));
  return (
    <Search>
      <SearchIconWrapper>
        <SearchOutlined sx={{ color: (theme) => theme.palette.primary.svg }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        color="primary"
      />
    </Search>
  );
}

export default SearchBar;
