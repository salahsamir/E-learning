import { GitHub, LinkedIn } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useGetProfile, useUpdateProfile } from "api/global/profile.tsx";
import { useFormik } from "formik";
import React from "react";

const Account = () => {
  const { data: user } = useGetProfile();
  const { mutate: updateProfile, isPending: formLoading } = useUpdateProfile();
  const formik = useFormik({
    initialValues: {
      email: user.email || "",
      password: "",
      confirmPassword: "",
      gitHubLink: user.gitHubLink || "",
      linkedinLink: user.linkedinLink || "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const { confirmPassword, ...rest } = values;
      if (rest.password !== confirmPassword) {
        delete rest.password;
      }
      if (values.email === user.email) {
        delete rest.email;
      }
      updateProfile(rest);
    },
  });
  return (
    <Grid2
      component="form"
      container
      p="16px"
      spacing={2}
      onSubmit={formik.handleSubmit}
    >
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
          autoComplete="off"
          aria-autocomplete="none"
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
          type="password"
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
          id="gitHubLink"
          label="Github Profile"
          variant="outlined"
          InputProps={{ startAdornment: <GitHub sx={{ mr: 1 }} /> }}
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gitHubLink}
          error={
            formik.errors.gitHubLink !== undefined && formik.touched.gitHubLink
          }
          helperText={
            formik.errors.gitHubLink && formik.touched.gitHubLink
              ? formik.errors.gitHubLink
              : ""
          }
        />
      </Grid2>
      <Grid2 xs={12}>
        <TextField
          id="linkedinLink"
          label="Linkedin Profile"
          variant="outlined"
          InputProps={{ startAdornment: <LinkedIn sx={{ mr: 1 }} /> }}
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.linkedinLink}
          error={
            formik.errors.linkedinLink !== undefined &&
            formik.touched.linkedinLink
          }
          helperText={
            formik.errors.linkedinLink && formik.touched.linkedinLink
              ? formik.errors.linkedinLink
              : ""
          }
        />
      </Grid2>
      <Grid2 xs={12}>
        <LoadingButton variant="outlined" type="submit" loading={formLoading}>
          Save
        </LoadingButton>
      </Grid2>
    </Grid2>
  );
};

export default Account;
