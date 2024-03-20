import { createTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
export const theme = (mode) =>
  createTheme({
    palette: {
      mode,
      thrid: {
        main: "#A69494",
      },
      primary: {
        main: mode === "light" ? colors.primary[7] : colors.primary[4],
        dark: mode === "light" ? colors.primary[6] : colors.primary[5],
        light: mode === "light" ? colors.primary[6] : colors.primary[5],
        border: mode === "light" ? "rgb(241, 243, 244)" : "rgb(46, 50, 54)",
        border2:
          mode === "light"
            ? "rgba(50, 71, 92, 0.12)"
            : "rgba(219, 219, 235, 0.12)",
        svg: mode === "light" ? "#000" : "#fff",
        scrollbar: mode === "light" ? "#c4c4c4" : "#626585",
        100: colors.primary[0],
        200: colors.primary[1],
        300: colors.primary[2],
        400: colors.primary[3],
        500: colors.primary[4],
        600: colors.primary[5],
        700: colors.primary[6],
        800: colors.primary[7],
        900: colors.primary[8],
      },
      secondary: {
        main: mode === "light" ? "#65888C" : "#A69494",
      },
      background: {
        default: mode === "light" ? bg.purple.light[0] : bg.green.dark[0],
        paper: mode === "light" ? bg.green.light[1] : bg.green.dark[1],
        autofill: mode === "light" ? "#f4f4f8" : "#232333",
        skeleton:
          mode === "light"
            ? "rgba(0, 0, 0, 0.03)"
            : "rgba(255, 255, 255, 0.05)",
        b1: mode === "light" ? bg.green.light[1] : bg.green.dark[1],
        b2: mode === "light" ? "#e1ecc7" : "#2b2c40",
        b3: mode === "light" ? "#f7ffe5" : "#2b2c40",
      },
      error: {
        main: mode === "light" ? colors.error[4] : colors.error[4],
        dark: mode === "light" ? colors.error[3] : colors.error[5],
        light: mode === "light" ? colors.error[5] : colors.error[2],
        100: colors.error[0],
        200: colors.error[1],
        300: colors.error[2],
        400: colors.error[3],
        500: colors.error[4],
        600: colors.error[5],
        700: colors.error[6],
        800: colors.error[7],
        900: colors.error[8],
      },
      text: {
        primary: mode === "light" ? "#343434" : "#F5F5F5",
        secondary: mode === "light" ? "#868686" : "#c7cbc5",
      },
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

            "& input:-webkit-autofill": {
              boxShadow: `0 0 0 100px ${
                mode === "light" ? "#ecf3f0" : "#2c2d33"
              } inset`,
            },
            "&:has(> input:-webkit-autofill)": {
              backgroundColor: mode === "light" ? "#ecf3f0" : "#2c2d33",
            },
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
    typography: {
      fontFamily: '"Inter", sans-serif',
    },
  });

const colors = {
  primary: [
    "#EBFFF8",
    "#B8F2DD",
    "#8AE5C4",
    "#60DBAE",
    "#34CC94",
    "#20A876",
    "#11855A",
    "#076140",
    "#003D27",
  ],
  error: [
    "#FFEBEB",
    "#F2B8B8",
    "#E58A8A",
    "#DB6060",
    "#CC3434",
    "#A82020",
    "#851111",
    "#610707",
    "#3D0000",
  ],
};

const bg = {
  purple: { dark: ["#232333", "#2b2c40"], light: ["#F7FAF9", "#fff"] },
  green: { dark: ["#16171b", "#202125"], light: ["#fdfbfe", "#fff"] },
};
