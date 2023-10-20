import { createTheme } from "@mui/material";

export const theme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            // primary: amber,
            // divider: amber[200],
            primary: {
              main: "#05445E",
              // light: "#189AB4",
              // dark: "#75E6DA",
              border: "#bcbcce",
            },
            background: {
              default: "#f4f5fa",
              searchBar: "#f4f5fa",
            },
            // text: {
            //   primary: grey[900],
            //   secondary: grey[800],
            // },
          }
        : {
            // palette values for dark mode
            // primary: deepOrange,
            // divider: deepOrange[700],
            background: {
              default: "rgb(30,31,34)",
              searchBar: "#f4f5fa",
            },
            primary: {
              main: "#05445E",
              border: "#bcbcce",
              // light: "#189AB4",
              // dark: "#75E6DA",
            },
            // text: {
            //   primary: "#fff",
            //   secondary: grey[500],
            // },
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
      MuiIconButton: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
          },
        },
      },
      ...(mode === "light"
        ? {
            MuiAppBar: {
              styleOverrides: {
                root: {
                  backgroundColor: "#f4f5fa",
                },
              },
            },
            MuiSvgIcon: {
              styleOverrides: {
                root: {
                  color: "#000",
                },
              },
            },
          }
        : {
            MuiAppBar: {
              styleOverrides: {
                root: {
                  backgroundColor: "#2b2c40",
                },
              },
            },
            MuiInputBase: {
              styleOverrides: {
                root: {
                  backgroundColor: "rgb(49, 51, 56)",
                },
              },
            },
            MuiOutlinedInput: {
              styleOverrides: {
                root: {
                  backgroundColor: "rgb(49, 51, 56)",
                },
              },
            },
            MuiSvgIcon: {
              styleOverrides: {
                root: {
                  color: "#bcbcce",
                },
              },
            },
          }),
    },
  });
