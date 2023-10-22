import { createTheme } from "@mui/material";

export const theme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#f7ffe5",
              b1: "#fff",
            },
            primary: {
              main: "#007D53",
              light: "#007E92",
              dark: "#09a16b",
              border: "#bcbcce",
              svg: "#000",
            },
          }
        : {
            background: {
              default: "#28313f",
              searchBar: "#f4f5fa",
              b1: "#2e3e45",
            },
            primary: {
              // main: "#30B1B5",
              main: "#1BB385",
              border: "#bcbcce",
              light: "#189AB4",
              dark: "#009766",
            },
            secondary: {
              main: "#2e3d4b",
            },
          }),
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: {
              variant: "contained",
              disableRipple: true,
            },
          },
        ],
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
          },
        },
      },
    },
  });
