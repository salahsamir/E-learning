import { Container, Grid } from "@mui/material";
import React from "react";
import authImage from "../../../assets/signin-dark.jpg";
function AuthTemplate(props) {
  return (
   <Container py={4}>
     <Grid container sx={{ minHeight: "calc(100vh - 60px)" }}>
      <Grid
        item
        xs={0}
        md={6}
        sx={{
          backgroundImage: "url(https://t4.ftcdn.net/jpg/04/82/18/45/240_F_482184571_pEIAB76B4xdQ9lMMVeJTb8xi1uuQYLJ6.jpg)",
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
   </Container>
  );
}

export default AuthTemplate;
