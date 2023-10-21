import React, { useState } from "react";
import { Form, Link as RouterLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";

import {
  Button,
  FormControlLabel,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Google } from "@mui/icons-material";

export default function SigninForm() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const handleSignin = async (values) => {
    setLoading(true);
    let { data } = await axios
      .post(`https://task2-three-lemon.vercel.app/auth/signin`, values)
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });

    if (data.message === "success") {
      setLoading(false);
      nav("/home");
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
      <Stack spacing={2} direction="column" alignItems="center">
        <TextField
          name="email"
          label="email"
          type="email"
          required
          error={formik.errors.email !== undefined}
          helperText={formik.errors.email ? formik.errors.email : ""}
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
          helperText={formik.errors.password ? formik.errors.password : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          variant="outlined"
          sx={{ width: { xs: "90%", sm: "400px" } }}
        />
        <Box
          sx={{
            width: { xs: "90%", sm: "400px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            name="rememberMe"
          />
          <Typography variant="body2" sx={{ float: "right" }}>
            <Link
              to={"/forget-password"}
              className="float-end"
              component={RouterLink}
            >
              Forget password?
            </Link>
          </Typography>
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
          SIGN IN
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
        <Typography variant="body1" marginY={"20px !important"}>
          Still without account?{" "}
          <Link component={RouterLink} to={"/signup"}>
            Create one
          </Link>
        </Typography>
      </Stack>
    </Form>
  );
}
