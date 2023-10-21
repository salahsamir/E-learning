import { Grid, Typography } from "@mui/material";
import React from "react";
import SignupForm from "../../Components/Authentication/SignupForm/SignupForm";
import AuthTemplate from "../../Components/Authentication/AuthTemplate/AuthTemplate";
function Signup() {
  return (
    <AuthTemplate>
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
    </AuthTemplate>
  );
}

export default Signup;
