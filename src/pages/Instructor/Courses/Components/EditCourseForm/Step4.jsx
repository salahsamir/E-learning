import { Box, TextField } from "@mui/material";
import React from "react";
import CouponsInput from "./Coupons/CouponsInput";
import CouponsList from "./Coupons/CouponsList";

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
      <CouponsInput coupons={formik.values.coupons} />
      <CouponsList coupons={formik.values.coupons} />
    </Box>
  );
}

export default Step4;
