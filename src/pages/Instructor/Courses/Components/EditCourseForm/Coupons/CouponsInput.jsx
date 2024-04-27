import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useAddCoupon } from "api/instructor/courses.tsx";
import dayjs from "dayjs";
import { useFormik } from "formik";
import useGetParams from "hooks/useGetParams";
import React from "react";
import * as Yup from "yup";
const Coupons = () => {
  const { mutate: addCoupon, isPending: addingCoupon } = useAddCoupon();
  const params = useGetParams();
  const formik = useFormik({
    initialValues: {
      discount: 0,
      date: new Date(),
    },
    validationSchema: Yup.object({
      discount: Yup.number("Enter valid number").min(1).max(100),
      date: Yup.date("enter valid date").min(
        new Date(),
        "Date must be in the future"
      ),
    }),
    onSubmit: (values) => {
      if (!formik.values.date || formik.values.date === "") {
        formik.setFieldError("date", "Date is required");
        return;
      }
      if (!formik.values.discount || formik.values.discount === "") {
        formik.setFieldError("discount", "Discount is required");
        return;
      }
      addCoupon({
        discount: values.discount,
        expireAt: values.date,
        courseId: params[1],
      });
    },
  });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        <TextField
          id="discount"
          label="Discount %"
          variant="outlined"
          sx={{ width: "100%", minWidth: "200px", flex: 3 }}
          value={formik.values.discount}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.discount !== undefined && formik.touched.discount
          }
          helperText={
            formik.errors.discount && formik.touched.discount
              ? formik.errors.discount
              : ""
          }
        />
        <DatePicker
          value={dayjs(formik.values.date)}
          onChange={(newValue) => {
            formik.setFieldValue("date", newValue.toJSON());
          }}
          sx={{ flex: 3, minWidth: "250px" }}
          label="expiry date"
          openTo="year"
          slotProps={{
            textField: {
              helperText: formik.errors.date ? formik.errors.date : "",
              error: formik.errors.date !== undefined,
            },
          }}
        />
        <LoadingButton
          variant="contained"
          type="button"
          sx={{
            flex: 1,
            minWidth: "200px",
            height: "56px",
          }}
          onClick={formik.handleSubmit}
          loading={addingCoupon}
        >
          Add Coupon
        </LoadingButton>
      </Box>
    </LocalizationProvider>
  );
};

export default Coupons;
