import React, { useState } from "react";
import { Form, Link as RouterLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Alert ,Link, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import AuthTemplate from "../../../Components/Authentication/AuthTemplate/AuthTemplate.jsx";
import SendIcon from '@mui/icons-material/Send';
import { BaseApi } from "../../../util/BaseApi.js";
import toast from "react-hot-toast";
export default function SendEmail() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const HandelRegistar = async (values) => {
    setLoading(true);
    let { data } = await axios
      .patch(`${BaseApi}/auth/forgetCode`, values)
      .catch((err) => {
        toast.error(err.response.data.message,{ style: {
          borderRadius: '10px',
          background: '#1B0A26',
          color: '#F2C791',
        }})
        setLoading(false);
      });
    
    if (data.message === "Done") {
      setLoading(false);
      toast.success('Successfully ! please check your Email',{
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#1B0A26',
          color: '#F2C791',
        },
      })
      nav('/sendCode')
    }
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
          error={formik.errors.email && formik.touched.email  !== undefined}
          helperText={formik.errors.email&& formik.touched.email ? formik.errors.email : ""}
          name="email"
          type="email"
          sx={{ width: "100%" }}
        />
        <LoadingButton
          loading={loading?loading:''}
          variant="contained"
          type="submit"
          sx={{
            color:"white",
            width: "250px",
            height: "48x",
            borderRadius: "25px",
            fontSize: "20px",
          }}
          endIcon={<SendIcon/>}
        >
          Send   
        </LoadingButton>
      </Stack>
      <Typography variant="body1" marginY={"20px !important"}>
        Still without account?{" "}

        <Link component={RouterLink} to={"/signup"}>
          Create one
        </Link>
      </Typography>
        
      
      </Stack>
    </AuthTemplate>
 
    </>
  );
}
