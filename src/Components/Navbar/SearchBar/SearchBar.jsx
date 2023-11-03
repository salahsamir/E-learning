import { SearchOutlined } from "@mui/icons-material";
import { Box, InputBase, alpha, styled } from "@mui/material";
import React from "react";
function SearchBar() {
  const Search = styled(Box)(({ theme }) => ({
    position: "relative",
    borderRadius: "20px",
    width: "fit-content",
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
    borderRadius: "20px",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      paddingRight: "1em",
    },
  }));
  return (
    <Search display={{ xs: "none", sm: "block" }}>
      <SearchIconWrapper>
        <SearchOutlined sx={{ color: (theme) => theme.palette.primary.svg }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        color="primary"
        aria-label="search"
        name="search"
        sx={{
          backgroundColor: (theme) => alpha(theme.palette.background.b1, 0.75),
        }}
      />
    </Search>
  );
}

export default SearchBar;
