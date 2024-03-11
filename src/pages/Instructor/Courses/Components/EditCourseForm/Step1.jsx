import { Box, TextField } from "@mui/material";
import React from "react";
import TextEditor from "../../../../../features/TextEditor";
import InstructorsInput from "./InstructorsInput";

function Step1({ formik }) {
  return (
    <Box display="flex" flexDirection="column" gap="1em">
      <TextField
        id="title"
        label="Title"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        error={formik.errors.title !== undefined && formik.touched.title}
        helperText={
          formik.errors.title && formik.touched.title ? formik.errors.title : ""
        }
      />
      <InstructorsInput formik={formik} />
      <TextField
        id="subtitle"
        label="Subtitle"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subtitle}
        error={formik.errors.subtitle && formik.touched.subtitle !== undefined}
        helperText={
          formik.errors.subtitle && formik.touched.subtitle
            ? formik.errors.subtitle
            : ""
        }
      />
      <TextEditor
        id="description"
        label="Description"
        sx={{ width: "100%", height: "450px" }}
        onBlur={() => {
          formik.setFieldTouched("description");
        }}
        onChange={(value) => {
          formik.setFieldValue("description", value);
        }}
        value={formik.values.description}
        placeholder="Write a description for your course..."
      />
    </Box>
  );
}

export default Step1;
