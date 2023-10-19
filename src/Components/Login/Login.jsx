import React, { useState } from "react";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  Button} from "@mui/material";

export default function Login() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);
  let[error,setError]=useState('')

  const validationSchema = yup.object().shape({
 
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
 

  });

  const HandelRegistar = async (values) => {
     setLoading(true);
    let { data } = await axios.post(
      `https://task2-three-lemon.vercel.app/auth/signin`,
      values
    ).catch(err=>{
      setError(err.response.data.message)
      setLoading(false)
      
    })
    if (data.message === "success") {
    
         setLoading(false);
       
      nav("/home");
    }
  };
  const formik = useFormik({
    initialValues: {
     
      email: "",
      password: ""
     
    },

    validationSchema,
    onSubmit: HandelRegistar,
  });

  return (
    <>
      <div className={`w-50 m-auto  mb-5 text-white border ${style.shadow} p-3 rounded-4 `}>
         {error?<div className="alert alert-danger"> {error}</div>:''}
        <h1 style={{'color':'#6C733D'}}>Login Now .....</h1>

      
        <Box
        
        onSubmit={formik.handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          required
          id="outlined-required"
          label="email"
          defaultValue="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          name="email"
          className="form-control "
        />
           {formik.errors.email && formik.touched.email ? (
            <div className=" alert alert-danger p-2">{formik.errors.email}</div>
          ) : null}
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          name="password"
          className="form-control "
        />
         {formik.errors.password && formik.touched.password ? (
            <div className=" alert alert-danger p-2">
              {formik.errors.password}
            </div>
          ) : null}
           {!loading ? (
            <Button variant="contained" type="submit"
            className={` btn ${style.button}`}>Login</Button>
        
          ) : (
            
            <button
              type="submit"
              className={` btn ${style.button}`}
            >
              <i class="fa-regular text-white fa-hourglass-half fa-spin"></i>
            </button>
          )}
    
    </Box>
        
        
      
        
         
     
      </div>
    </>
  );
}
