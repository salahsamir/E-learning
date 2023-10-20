import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Google } from "@mui/icons-material";
export default function SignupForm() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  // Define the validation schema
  const validationSchema = yup.object().shape({
    userName: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
    cpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    // age: yup
    //   .number()
    //   .positive("Age must be a positive number")
    //   .required("Age is required"),
  });

  const handleSignup = async (values) => {
    setLoading(true);
    let { data } = await axios
      .post(`https://task2-three-lemon.vercel.app/auth/signup`, values)
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
    if (data.message === "success") {
      setLoading(false);
      nav("/login");
    }
  };
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      cpassword: "",
      // age: "",
    },

    validationSchema,
    onSubmit: handleSignup,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Stack spacing={2} direction="column" alignItems="center">
        <TextField
          name="userName"
          label="Username"
          type="text"
          required
          error={formik.errors.userName !== undefined}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
          autoComplete="userName"
          variant="outlined"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        />
        <TextField
          name="email"
          label="email"
          type="email"
          required
          error={formik.errors.email !== undefined}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          autoComplete="email"
          variant="outlined"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          required
          error={formik.errors.password !== undefined}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          variant="outlined"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        />
        <TextField
          name="cpassword"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          required
          error={formik.errors.cpassword !== undefined}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cpassword}
          variant="outlined"
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
            required
          />
        </Box>

        <LoadingButton
          variant="contained"
          type="submit"
          loading={loading}
          sx={{
            width: "250px",
            height: "56px",
            borderRadius: "25px",
            fontSize: "20px",
            marginBottom: "80px",
          }}
        >
          SIGN UP
        </LoadingButton>
        <Divider sx={{ width: { xs: "90%", sm: "400px" } }}>OR</Divider>
        <Button
          startIcon={<Google />}
          sx={{
            height: "56px",
            fontSize: "1em",
            fontWeight: 600,
            color: (theme) =>
              theme.palette.mode === "dark"
                ? "white"
                : theme.palette.primary.main,
          }}
        >
          Sign in with Google
        </Button>
        <Typography variant="body1" my={5}>
          Already have an account? <Link to={"/signin"}> Sign in</Link>
        </Typography>
      </Stack>
    </Form>
  );
}
