import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "react-redux";
import { forgetPasswordActions } from "../../store/forgetPasswordSlice";

export default function ConfirmCode() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  const validationSchema = yup.object().shape({
    code: yup.number().required("Verification code is required"),
  });
  const dispatch = useDispatch();
  const HandelRegistar = async (values) => {
    setLoading(true);
    // let { data } = await axios
    //   .post(`https://task2-three-lemon.vercel.app/auth/signin`, values)
    //   .catch((err) => {
    //     setError(err.response.data.message);
    //     setLoading(false);
    //   });
    dispatch(forgetPasswordActions.setCodeStatus(true));
    setLoading(false);

    // if (data.message === "success") {
    //   dispatch(forgetPasswordActions.setCodeStatus(true));
    //   setLoading(false);
    // }
  };
  const formik = useFormik({
    initialValues: {
      code: "",
    },

    validationSchema,
    onSubmit: HandelRegistar,
  });

  return (
    <>
      <Typography variant="body1" sx={{ width: { xs: "90%", sm: "400px" } }}>
        We have sent you a code to your email. please type the code here to
        reset your password.
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
          label="verification code"
          defaultValue="Code..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.code}
          error={formik.errors.code !== undefined}
          helperText={formik.errors.code ? formik.errors.code : ""}
          name="code"
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
    </>
  );
}
