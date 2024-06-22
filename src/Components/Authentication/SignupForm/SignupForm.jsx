import React, { useState } from "react";
import { Form, Link as RouterLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Alert,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { BaseApi } from "../../../util/BaseApi.js";
import toast from "react-hot-toast";
import SignupData from "./Input.tsx";
import Buttons from "Ui/Buttons.tsx";
export default function SignupForm() {
  let nav = useNavigate();

  
  const validationSchema = yup.object().shape({
    userName: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Please: length greater than 8"),
    cPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });
  const handleSignup = async (values) => {

    let { data } = await axios
      .post(`${BaseApi}/auth/SignUp`, values)
      .catch((err) => {
        toast.error(err.response.data.message, {
          style: {
            borderRadius: "10px",
            background: "#1B0A26",
            color: "#F2C791",
          },
        });
       
      });
    if (data.message === "Done") {
     
      toast.success("Successfully ! please check your Email", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#1B0A26",
          color: "#F2C791",
        },
      });
      nav("/signin");
    }
  };
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      cPassword: "",
    },

    validationSchema,
    onSubmit: handleSignup,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Stack spacing={1} padding={"4px"} direction="column" alignItems="center">

        {SignupData.map((input, index) => {
          return (
            <TextField
              key={index}
              name={input.name}
              label={input.label}
              type={input.type}
              error={
                formik.errors[input.name] &&
                formik.touched[input.name] !== undefined
              }
              helperText={
                formik.errors[input.name] &&
                formik.touched[input.name]
                  ? formik.errors[input.name]
                  : ""
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[input.name]}
              size="small"
              sx={{ width: { xs: "90%", sm: "400px" } }}
              />
          )
        })}
      

        <Box
          sx={{
            width: { xs: "90%", sm: "400px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
         
        </Box>

        <Buttons bgColor="bg-customGreen">Sign up</Buttons>
        <Divider sx={{ width: { xs: "90%", sm: "400px" } }}>OR</Divider>

        <Typography
          variant="body2"
          color="secondary.main"
          marginY={"5px !important"}
        >
          Already have an account?{" "}
          <Link component={RouterLink} to={"/signin"}>
            {" "}
            Sign in
          </Link>
        </Typography>
      </Stack>
    </Form>
  );
}
