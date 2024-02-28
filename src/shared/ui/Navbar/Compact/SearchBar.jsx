import { SearchOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const SearchBar = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <Autocomplete
        freeSolo
        id="search-bar"
        options={searchData.map((option) => option.name)}
        disableClearable
        clearIcon={null}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search input"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
            InputProps={{
              ...params.InputProps,
              type: "search",
              autoComplete: "off",
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
          />
        )}
        renderOption={(props, option) => {
          const { name, path } = searchData.find(
            (searchOption) => searchOption.name === option
          );
          return (
            <Box
              component={Link}
              to={path}
              {...props}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5em",
                padding: "0.5em",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.background.b2,
                },
              }}
            >
              <Typography>{name}</Typography>
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default SearchBar;

const searchData = [
  {
    name: "courses",
    path: "/instructor/courses",
  },
  {
    name: "profile",
    path: "/student/profile",
  },
  {
    name: "settings",
    path: "/instructor/settings",
  },
  {
    name: "revenue",
    path: "/instructor/revenue",
  },
  {
    name: "analytics",
    path: "/instructor/analytics",
  },
  {
    name: "workshops",
    path: "/instructor/workshops",
  },
  {
    name: "comments",
    path: "/instructor/comments",
  },
];
