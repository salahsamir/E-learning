import React, { useState } from "react";
import { Form, Link as RouterLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { Link, Stack, Typography } from "@mui/material";

import { BaseApi } from "../../../util/BaseApi.js";
import toast from "react-hot-toast";
import Buttons from "Ui/Buttons.tsx";
import SigninData from "./Input.tsx";

export default function SigninForm() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);
  let [showPassword, setShowPassword] = useState(false); // State to control password visibility

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Please length greater than 8"),
  });

  const handleSignin = async (values) => {
    setLoading(true);
    let { data } = await axios.post(`${BaseApi}/auth/Login`, values).catch((err) => {
      toast.error(err.response.data.message, {
        style: {
          borderRadius: "10px",
          background: "#1B0A26",
          color: "#F2C791",
        },
      });
      setLoading(false);
    });

    if (data.message === "Done") {
      setLoading(false);
      toast.success("Successfully", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#1B0A26",
          color: "#F2C791",
        },
      });
      localStorage.setItem("token", data.BrearerToken);
      nav("/");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema,
    onSubmit: handleSignin,
  });

  return (
    <Form onSubmit={formik.handleSubmit} method="post" autoComplete="off">
      <Stack spacing={1} direction="column" alignItems="center">
      {SigninData.map((data) => (
  <React.Fragment key={data.name}>
    <TextField
      name={data.name}
      label={data.label}
   
      required
      error={
        formik.errors[data.name] &&
        formik.touched[data.name] !== undefined
      }
      helperText={
        formik.errors[data.name] && formik.touched[data.name]
          ? formik.errors[data.name]
          : ""
      }
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[data.name]}
      variant="outlined"
      size="small"
      sx={{ width: { xs: "90%", sm: "400px" } }}
    />
  </React.Fragment>
))}

        <Typography py={2} variant="body2" sx={{ float: "right" }}>
          <Link to={"/sendEmail"} className="float-end" component={RouterLink}>
            Forget password?
          </Link>
        </Typography>
         <Buttons bgColor="bg-customGreen">Sign in</Buttons>
    
        <Divider sx={{ width: { xs: "90%", sm: "400px" } }}>OR</Divider>

        <Typography
          variant="body1"
          color="secondary.main"
          marginY={"20px !important"}
        >
          Still without account?{" "}
          <Link component={RouterLink} to={"/signup"}>
            Create one
          </Link>
        </Typography>
      </Stack>
    </Form>
  );
}
