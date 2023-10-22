import { Grid } from "@mui/material";
import React from "react";
import authImage from "../../../assets/signin-dark.jpg";
function AuthTemplate(props) {
  return (
    <Grid container sx={{ minHeight: "calc(100vh - 60px)" }}>
      <Grid
        item
        xs={0}
        md={6}
        sx={{
          backgroundImage: "url(" + authImage + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
          display: { sm: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {props.children}
      </Grid>
    </Grid>
  );
}

export default AuthTemplate;
