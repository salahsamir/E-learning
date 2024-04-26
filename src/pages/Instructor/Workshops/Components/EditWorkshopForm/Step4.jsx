import { Box, TextField } from "@mui/material";
import React from "react";

function Step4({ formik }) {
  return (
    <Box display="flex" flexDirection="column" gap="1em">
      <TextField
        id="price"
        label="Price"
        variant="outlined"
        sx={{ width: "100%" }}
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.price !== undefined && formik.touched.price}
        helperText={
          formik.errors.price && formik.touched.price ? formik.errors.price : ""
        }
      />
      <TextField
        id="discount"
        label="Discount"
        variant="outlined"
        sx={{ width: "100%" }}
        value={formik.values.discount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.discount !== undefined && formik.touched.discount}
        helperText={
          formik.errors.discount && formik.touched.discount
            ? formik.errors.discount
            : ""
        }
      />
    </Box>
  );
}

export default Step4;
