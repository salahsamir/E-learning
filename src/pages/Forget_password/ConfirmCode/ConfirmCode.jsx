import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Alert, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import AuthTemplate from './../../../Components/Authentication/AuthTemplate/AuthTemplate.jsx'
import SendIcon from '@mui/icons-material/Send';
import { BaseApi } from "../../../util/BaseApi.js";
import toast from "react-hot-toast";
export default function ConfirmCode() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);

  const validationSchema = yup.object().shape({
    code: yup.number().required("Verification code is required").min(5),
  });
  const HandelRegistar = async (values) => {
    setLoading(true);
    let { data } = await axios
      .patch(`${BaseApi}/auth/verifyCode`, values)
      .catch((err) => {
        toast.error(err.response.data.message,{ style: {
          borderRadius: '10px',
          background: '#1B0A26',
          color: '#F2C791',
        }})
        setLoading(false);
      });
     
    if (data.message === "Done") {
      localStorage.setItem('TokenCode',data.token)

      setLoading(false);
      toast.success('Well Done!',{
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#1B0A26',
          color: '#F2C791',
        },
      })
      nav('/updatePassword')
  
  }
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
       
          <Typography variant="body1" color={'GrayText'} sx={{ width: { xs: "90%", sm: "400px" } }}>
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
          error={formik.errors.code && formik.touched.code  !== undefined}
          helperText={formik.errors.code&& formik.touched.code ? formik.errors.code : ""}
          name="code"
          sx={{ width: "100%" }}
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
            color:"white"
          }}
          endIcon={<SendIcon/>}
        >
          Send
        </LoadingButton>
      </Stack>
      </Stack>
    </AuthTemplate>
   
    </>
  );
}
