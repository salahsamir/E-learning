import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "react-redux";
import { forgetPasswordActions } from "../../../store/forgetPasswordSlice";
export default function UpdatePasswordForm() {
  let nav = useNavigate();
  const dispatch = useDispatch();
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  // Define the validation schema
  const validationSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    cpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const HandelRegistar = async (values) => {
    setLoading(true);
    // let { data } = await axios
    //   .post(`https://task2-three-lemon.vercel.app/auth/signup`, values)
    //   .catch((err) => {
    //     setError(err.response.data.message);
    //     setLoading(false);
    //   });

    dispatch(forgetPasswordActions.setPasswordStatus(true));
    setLoading(false);
    // if (data.message === "success") {
    //   dispatch(forgetPasswordActions.setPasswordStatus(true));
    //   setLoading(false);
    // }
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      cpassword: "",
    },

    validationSchema,
    onSubmit: HandelRegistar,
  });

  return (
    <>
      <Typography variant="body1" sx={{ width: { xs: "90%", sm: "400px" } }}>
        Enter your new password.
      </Typography>
      <Stack
        onSubmit={formik.handleSubmit}
        component={Form}
        noValidate
        autoComplete="off"
        alignItems="center"
        gap={1}
        sx={{ width: { xs: "90%", sm: "400px" } }}
      >
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          required
          error={formik.errors.password !== undefined}
          helperText={formik.errors.password ? formik.errors.password : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          variant="outlined"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        />
        <TextField
          name="cpassword"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          required
          error={formik.errors.cpassword !== undefined}
          helperText={formik.errors.cpassword ? formik.errors.cpassword : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cpassword}
          variant="outlined"
          sx={{ width: { xs: "90%", sm: "400px" } }}
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
            marginTop: "35px",
          }}
        >
          RESET PASSWORD
        </LoadingButton>
      </Stack>
    </>
  );
}
