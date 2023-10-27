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
export default function SignupForm() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);
  const validationSchema = yup.object().shape({
    userName: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required").min(8,"Please: length greater than 8"),
    cPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });
  const handleSignup = async (values) => {
    setLoading(true);
    let { data } = await axios
    .post(`${BaseApi}/auth/SignUp`, values)
    .catch((err) => {
      toast.error(err.response.data.message,{ style: {
        borderRadius: '10px',
        background: 'green',
        color: '#fff',
      }},)
      setLoading(false);
    });
    if(data.message==="Done"){
      setLoading(false);
      toast.success('Successfully ! please check your Email',{
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
        <TextField
          name="userName"
          label="Username"
          type="text"
          
          error={formik.errors.userName !== undefined}
          helperText={formik.errors.userName ? formik.errors.userName : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
          autoComplete="userName"
          variant="outlined"
          size="small"
          sx={{ width: { xs: "90%", sm: "400px" }}}
        />
        <TextField
          name="email"
          label="email"
          type="email"
          
          error={formik.errors.email !== undefined}
          helperText={formik.errors.email ? formik.errors.email : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          autoComplete="email"
          variant="outlined"
          size="small"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          
          error={formik.errors.password !== undefined}
          helperText={formik.errors.password ? formik.errors.password : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          variant="outlined"
            size="small"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        />
        <TextField
          name="cPassword"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          
          error={formik.errors.cPassword !== undefined}
          helperText={formik.errors.cPassword ? formik.errors.cPassword : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cPassword}
          variant="outlined"
            size="small"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        />

        <Box
          sx={{
            width: { xs: "90%", sm: "400px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
         
        >
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to the terms and conditions"
            name="terms"
            variant="body2"
            required
          />
        </Box>

        <LoadingButton
          variant="contained"
          type="submit"
          size="small"
          loading={loading?loading:''}
          sx={{
            width: "200px",
            
            borderRadius: "25px",
           
            fontSize: "18px",
            marginBottom: "15px",
          }}
        >
          SIGN UP
        </LoadingButton>
        <Divider  sx={{ width: { xs: "90%", sm: "400px" } }}>OR</Divider>
    
        <Typography variant="body2" color='gray' marginY={"5px !important"}>
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
