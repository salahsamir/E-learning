import { Box, Grid } from "@mui/material";
import React from "react";
import AuthImg from "assets/images/auth.webp";
function AuthTemplate(props) {
  return (
    <Box
      className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-6"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? "background.b1"
            : "background.default",
      }}
    >
      <Grid container sx={{ minHeight: "calc(100vh - 64px)" }}>
        <Grid
          item
          xs={0}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            p: "16px",
          }}
        >
          <img
            src={AuthImg}
            alt=""
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "scroll",
              borderRadius: "16px",
              maxHeight: "450px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {props.children}
        </Grid>
      </Grid>
    </Box>
  );
}

export default AuthTemplate;
