import { Grid, Typography } from "@mui/material";
import React from "react";
import loginImage from "../../assets/signin-dark.jpg";
import SignupForm from "../../Components/SignupForm/SignupForm";
function Signup() {
  return (
    <Grid container sx={{ minHeight: "calc(100vh - 60px)" }}>
      <Grid
        item
        xs={0}
        md={6}
        sx={{
          backgroundImage: "url(" + loginImage + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
        <Typography
          variant="h1"
          fontSize={"2.2em"}
          mt={8}
          mb={3}
          fontWeight={700}
        >
          Eduvation
        </Typography>
        <Typography variant="h5" mt={2} mb={5}>
          Welcome to our site!
        </Typography>
        <SignupForm />
      </Grid>
    </Grid>
  );
}

export default Signup;
