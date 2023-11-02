import { Typography } from "@mui/material";
import React from "react";
import SigninForm from "../../Components/Authentication/SigninForm/SigninForm";
import AuthTemplate from "../../Components/Authentication/AuthTemplate/AuthTemplate";
function Signin() {
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
      <Typography variant="h5" color='gray' mt={2} mb={2}>
        Welcome back!
      </Typography>
      <SigninForm  />
    </AuthTemplate>
  );
}

export default Signin;
