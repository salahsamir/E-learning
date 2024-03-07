import { GitHub, LinkedIn } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useUpdateProfile } from "api/global/profile.tsx";
import { useFormik } from "formik";
import React from "react";

const Account = () => {
  const { mutate: updateProfile } = useUpdateProfile();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      github: "",
      linkedin: "",
    },
  });
  return (
    <Grid2 component="form" container p="16px" spacing={2}>
      <Grid2 xs={12}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.errors.email !== undefined && formik.touched.email}
          helperText={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : ""
          }
        />
      </Grid2>
      <Grid2 xs={12} md={6}>
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={
            formik.errors.password !== undefined && formik.touched.password
          }
          helperText={
            formik.errors.password && formik.touched.password
              ? formik.errors.password
              : ""
          }
        />
      </Grid2>
      <Grid2 xs={12} md={6}>
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          error={
            formik.errors.confirmPassword !== undefined &&
            formik.touched.confirmPassword
          }
          helperText={
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? formik.errors.confirmPassword
              : ""
          }
        />
      </Grid2>

      <Grid2 xs={12}>
        <TextField
          id="github"
          label="Github Profile"
          variant="outlined"
          InputProps={{ startAdornment: <GitHub sx={{ mr: 1 }} /> }}
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.github}
          error={formik.errors.github !== undefined && formik.touched.github}
          helperText={
            formik.errors.github && formik.touched.github
              ? formik.errors.github
              : ""
          }
        />
      </Grid2>
      <Grid2 xs={12}>
        <TextField
          id="linkedin"
          label="Linkedin Profile"
          variant="outlined"
          InputProps={{ startAdornment: <LinkedIn sx={{ mr: 1 }} /> }}
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.linkedin}
          error={
            formik.errors.linkedin !== undefined && formik.touched.linkedin
          }
          helperText={
            formik.errors.linkedin && formik.touched.linkedin
              ? formik.errors.linkedin
              : ""
          }
        />
      </Grid2>
      <Grid2 xs={12}>
        <LoadingButton variant="outlined">Save</LoadingButton>
      </Grid2>
    </Grid2>
  );
};

export default Account;
