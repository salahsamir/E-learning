import React, { useState } from "react";
import style from "./SendCod2.module.css"
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  Button} from "@mui/material";




export default function SendCode2() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);
  let[error,setError]=useState('')
  const validationSchema = yup.object().shape({
 
    code: yup
      .number()
      .required("Email is required"),

 

  });
  
  const HandelRegistar = async (values) => {
     setLoading(true);
     nav("/update");
    // let { data } = await axios.post(
    //   `https://task2-three-lemon.vercel.app/auth/signin`,
    //   values
    // ).catch(err=>{
    //   setError(err.response.data.message)
    //   setLoading(false)
      
    // })
   
    // if (data.message === "success") {
    
    //      setLoading(false);
    //   nav("/home");
    // }
  };
  const formik = useFormik({
    initialValues: {
    code:""
    },

    // validationSchema,
    onSubmit: HandelRegistar,
  });

  return (
    <>
      <div className={`w-50 m-auto  mb-5 text-white border ${style.shadow} p-3 rounded-4 `}>
         {error?<div className="alert alert-danger"> {error}</div>:''}
        <h1 style={{'color':'#6C733D'}}>write Code.....</h1>
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
          label="Code"
          defaultValue="Code..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.code}
          name="code"
          className="form-control "
        />
           {formik.errors.code && formik.touched.code ? (
            <div className=" alert alert-danger p-2">{formik.errors.code}</div>
          ) : null}
    
           {!loading ? (
          <>
            <Button variant="contained" type="submit"
            className={` btn ${style.button}`}>Submit</Button>
          </>
        
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
