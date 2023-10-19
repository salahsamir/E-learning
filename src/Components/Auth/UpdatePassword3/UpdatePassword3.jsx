import React, { useState } from "react";
import style from "./UpdatePassword3.module.css";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
export default function UpdatePassword3() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);
  let[error,setError]=useState('')
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
     nav("/login");
  //   let { data } = await axios.post(
  //     `https://task2-three-lemon.vercel.app/auth/signup`,
  //     values
  //   ).catch(err=>{
  //     setError(err.response.data.message)
  //     setLoading(false)
      
  //   })
  //   if (data.message === "success") {
  //      setLoading(false);
  //     nav("/login");
  //   }
  };
  const formik = useFormik({
    initialValues: {
     
      password: "",
      cpassword: "",
    
    },

    // validationSchema,
    onSubmit: HandelRegistar,
  });

  return (
    <>
      <div className={`w-50 m-auto  mb-5 text-white border ${style.shadow} p-3 rounded-4 `}>
         {error?<div className="alert alert-danger"> {error}</div>:''}
        <h1 style={{'color':'#6C733D'}}>Update .....</h1>
      
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
             <TextField
          id="outlined-password-input"
          label="cPassword"
          type="password"
          autoComplete="current-password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cpassword}
          name="cpassword"
          className="form-control "
        />
         {formik.errors.cpassword && formik.touched.cpassword ? (
            <div className=" alert alert-danger p-2">
              {formik.errors.cpassword}
            </div>
          ) : null}
            
            {!loading ? (
            <Button variant="contained" type="submit"
            className={` btn ${style.button}`}>Update</Button>
        
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
