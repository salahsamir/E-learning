import React, { useEffect } from "react";
import AuthTemplate from "../../Components/Authentication/AuthTemplate/AuthTemplate";
import ForgetPasswordForm from "../../Components/Authentication/ForgetPasswordForm/ForgetPasswordForm";
import { Stack, Typography } from "@mui/material";
import ConfirmCode from "../../Components/ConfirmCode/ConfirmCode";
import { useSelector } from "react-redux";
import UpdatePasswordForm from "../../Components/Authentication/UpdatePasswordForm/UpdatePasswordForm";
import { useNavigate } from "react-router-dom";
import SuccessBox from "./SuccessBox";

function ForgetPassword() {
  const codeIsValid = useSelector((state) => state.forgetPassword.codeIsValid);
  const emailIsSent = useSelector((state) => state.forgetPassword.emailIsSent);
  const passwordUpdated = useSelector(
    (state) => state.forgetPassword.passwordIsUpdated
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (passwordUpdated) {
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    }
  }, [passwordUpdated]);
  return (
    <AuthTemplate>
      <Stack alignItems="center" height={"100%"} gap={5}>
        {!passwordUpdated && (
          <Typography
            variant="h1"
            fontSize={"2.2em"}
            mt={8}
            mb={3}
            fontWeight={700}
          >
            Eduvation
          </Typography>
        )}
        {!emailIsSent && <ForgetPasswordForm />}
        {emailIsSent && !codeIsValid && <ConfirmCode />}
        {codeIsValid && !passwordUpdated && <UpdatePasswordForm />}
        {passwordUpdated && <SuccessBox />}
      </Stack>
    </AuthTemplate>
  );
}

export default ForgetPassword;
