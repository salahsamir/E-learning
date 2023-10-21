import { Typography } from "@mui/material";
import React from "react";
import SigninForm from "../../Components/Authentication/SigninForm/SigninForm";
import AuthTemplate from "../../Components/Authentication/AuthTemplate/AuthTemplate";
function Signin() {
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
        Welcome back!
      </Typography>
      <SigninForm />
    </AuthTemplate>
  );
}

export default Signin;
