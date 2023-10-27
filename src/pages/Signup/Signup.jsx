import { Grid, Typography } from "@mui/material";
import React from "react";
import SignupForm from "../../Components/Authentication/SignupForm/SignupForm";
import AuthTemplate from "../../Components/Authentication/AuthTemplate/AuthTemplate";
function Signup() {
  return (
    <AuthTemplate>
      <Typography
        variant="h1"
        fontSize={"2em"}
        mt={2}
        fontWeight={600}
      >
        Eduvation
      </Typography>
      <Typography variant="h5" color="GrayText" mt={2} mb={2}>
        Welcome to our site!
      </Typography>
      <SignupForm />
    </AuthTemplate>
  );
}

export default Signup;
