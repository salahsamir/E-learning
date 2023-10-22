import React, { useState } from "react";
import { Form, Link as RouterLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Alert, Link, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "react-redux";
import { forgetPasswordActions } from "../../../store/forgetPasswordSlice";

export default function ForgetPasswordForm() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const HandelRegistar = async (values) => {
    setLoading(true);
    // let { data } = await axios
    //   .post(`https://task2-three-lemon.vercel.app/auth/signin`, values)
    //   .catch((err) => {
    //     setError(err.response.data.message);
    //     setLoading(false);
    //   });

    dispatch(forgetPasswordActions.setEmailStatus(true));
    setLoading(false);

    // if (data.message === "success") {
    //   dispatch(forgetPasswordActions.setEmailStatus(true));
    //   setLoading(false);
    // }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema,
    onSubmit: HandelRegistar,
  });

  return (
    <>
      <Typography variant="body1" sx={{ width: { xs: "90%", sm: "400px" } }}>
        Enter the email address associated with your account and we will send
        you a link to reset your password.
      </Typography>
      <Stack
        onSubmit={formik.handleSubmit}
        component={Form}
        noValidate
        autoComplete="off"
        alignItems="center"
        gap={5}
        sx={{ width: { xs: "90%", sm: "400px" } }}
      >
        <TextField
          required
          label="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.errors.email !== undefined}
          helperText={formik.errors.email ? formik.errors.email : ""}
          name="email"
          type="email"
          sx={{ width: "100%" }}
        />
        <LoadingButton
          loading={loading}
          variant="contained"
          type="submit"
          sx={{
            width: "250px",
            height: "48x",
            borderRadius: "25px",
            fontSize: "20px",
          }}
        >
          Submit
        </LoadingButton>
      </Stack>
      <Typography variant="body1" marginY={"20px !important"}>
        Still without account?{" "}
        <Link component={RouterLink} to={"/signup"}>
          Create one
        </Link>
      </Typography>
    </>
  );
}
