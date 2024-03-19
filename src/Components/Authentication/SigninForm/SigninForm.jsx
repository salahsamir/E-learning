import React, { useState } from "react";
import { Form, Link as RouterLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { Link, Stack, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { BaseApi } from "../../../util/BaseApi.js";
import toast from "react-hot-toast";

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
        <TextField
          name="email"
          label="email"
          type="email"
          required
          error={formik.errors.email && formik.touched.email !== undefined}
          helperText={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : ""
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          autoComplete="email"
          variant="outlined"
          size="small"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        />

        <Box
          sx={{
            display: "flex",
            width: { xs: "90%", sm: "400px" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"} 
            autoComplete="current-password"
            required
            error={
              formik.errors.password &&
              formik.touched.password !== undefined
            }
            helperText={
              formik.errors.password && formik.touched.password
                ? formik.errors.password
                : ""
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            variant="outlined"
            size="small"
            sx={{ width: "calc(100%)" }}
          />
          {/* <IconButton
            onClick={() => setShowPassword(!showPassword)} 
            aria-label={showPassword ? "Hide password" : "Show password"}
            size="small"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton> */}
        </Box>

        {/* <FormControlLabel
          control={<Checkbox />}
          label="Remember me"
          name="rememberMe"
        /> */}
        <Typography py={2} variant="body2" sx={{ float: "right" }}>
          <Link to={"/sendEmail"} className="float-end" component={RouterLink}>
            Forget password?
          </Link>
        </Typography>

        <LoadingButton
          variant="contained"
          type="submit"
          size="small"
          loading={loading ? loading : ""}
          sx={{
            width: "200px",
            borderRadius: "25px",
            fontSize: "18px",
            marginBottom: "15px",
          }}
        >
          SIGN IN
        </LoadingButton>
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
