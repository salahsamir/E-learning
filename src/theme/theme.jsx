import { createTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
export const theme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#f4f4f8",
              b1: "#fff",
              b2: "#e1ecc7",
              b3: "#f7ffe5",
              autofill: "#f4f4f8",
              skeleton: "rgba(0, 0, 0, 0.03)",
              paper: "#fff",
            },
            primary: {
              main: "#007D53",
              light: "#007E92",
              dark: "#09a16b",
              border: "rgb(241, 243, 244)",
              border2: "rgba(50, 71, 92, 0.12)",
              svg: "#000",
              scrollbar: "#c4c4c4",
            },
          }
        : {
            background: {
              default: "#232333",
              b1: "#2b2c40",
              b2: "#2b2c40",
              autofill: "#232333",
              skeleton: "rgba(255, 255, 255, 0.05)",
              paper: "#2b2c40",
            },
            primary: {
              main: "#1BB385",
              border: "rgb(46, 50, 54)",
              border2: "rgba(219, 219, 235, 0.12)",
              light: "#189AB4",
              dark: "#009766",
              scrollbar: "#626585",
            },
            secondary: {
              main: "#2e3d4b",
            },
          }),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            "*::-webkit-scrollbar-thumb, &::-webkit-scrollbar-thumb": {
              backgroundColor:
                mode === "light" ? "#A9A9A9 !important" : "#626585 !important",
            },
          },
        },
      },
      MuiLink: {
        defaultProps: {
          component: RouterLink,
        },
        styleOverrides: {
          root: {
            color: mode === "light" ? "#007d53" : "#1bb385",
            textDecoration: "none",
            "&:hover": {
              color: mode === "light" ? "#09a16b" : "#009766",
            },
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: {
              variant: "contained",
              disableRipple: true,
              disableElevation: true,
            },
          },
        ],
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 500,
          },
        },
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
