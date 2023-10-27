import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import AuthTemplate from './../../../Components/Authentication/AuthTemplate/AuthTemplate.jsx'
import { BaseApi } from "../../../util/BaseApi.js";
import toast from "react-hot-toast";

export default function UpdatePasswordForm() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);
  const headers = {
    token: localStorage.getItem('TokenCode'),
  }
  const validationSchema = yup.object().shape({
    password: yup.string().required("Password is required").min(8,"Please length greater than 8"),
    cPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const HandelRegistar = async (values) => {
 
    setLoading(true);
    let {data}=await axios.patch(`${BaseApi}/auth/changePassword`,values,{headers})
    .catch((err) => {
      toast.error(err.response.data.message,{ style: {
        borderRadius: '10px',
        background: 'green',
        color: '#fff',
      }})
      setLoading(false);
    });
  
  if (data.message === "Done") {
    setLoading(false);
    toast.success('Successfully Updated  !',{
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: 'green',
        color: '#fff',
      },
    })
    nav('/signin')
  }
  
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      cPassword: "",
    },

    validationSchema,
    onSubmit: HandelRegistar,
  });

  return (
    <>
      <AuthTemplate>
      <Stack alignItems="center" height={"100%"} gap={5}>
          <Typography
            variant="h1"
            fontSize={"2.2em"}
            mt={8}
            mb={3}
            fontWeight={700}
          >
            Eduvation
          </Typography>
      
          <Typography variant="body1" color='GrayText' sx={{ width: { xs: "90%", sm: "400px" } }}>
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
          name="cPassword"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          required
          error={formik.errors.cPassword !== undefined}
          helperText={formik.errors.cPassword ? formik.errors.cPassword : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cPassword}
          variant="outlined"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        />
        <LoadingButton
          loading={loading?loading:''}
          variant="contained"
          type="submit"
          sx={{
            width: "250px",
            height: "48x",
            borderRadius: "25px",
            fontSize: "20px",
            marginTop: "35px",
           color:"white"
          }}
        >
          RESET PASSWORD
        </LoadingButton>
      </Stack>
      </Stack>
    </AuthTemplate>
     
    </>
  );
}
