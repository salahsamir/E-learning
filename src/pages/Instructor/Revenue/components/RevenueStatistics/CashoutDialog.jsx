import { LoadingButton } from "@mui/lab";
import {
  Box,
  Dialog,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import { useWithdrawRevenue } from "api/instructor/revenue.tsx";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";

const ModifiedInput = ({ label, id, formik }) => {
  return (
    <Box>
      <Typography component="label" htmlFor={id} display="block" mb="8px">
        {label}
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        id={id}
        value={formik.values[id]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[id] && Boolean(formik.errors[id])}
        helperText={formik.touched[id] && formik.errors[id]}
      />
    </Box>
  );
};
const CashoutDialog = ({ open, setOpen, balance }) => {
  const { mutate: withdrawRevenue, isPending: loadingWithdraw } =
    useWithdrawRevenue({
      onSuccess: () => {
        setOpen(false);
      },
    });
  const formik = useFormik({
    initialValues: {
      paypalEmail: "",
      confirmPaypalEmail: "",
    },
    onSubmit: (values) => {
      if (+balance < 200) {
        toast.error("Minimum amount to withdraw is 200 EGP");
        return;
      }
      withdrawRevenue(values.paypalEmail);
    },
    validationSchema: Yup.object().shape({
      paypalEmail: Yup.string().email("Invalid email").required("Required"),
      confirmPaypalEmail: Yup.string()
        .oneOf([Yup.ref("paypalEmail"), null], "Emails must match")
        .required("Required"),
    }),
  });
  const handleDialogClose = () => {
    setOpen(false);
    formik.resetForm();
  };
  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      PaperProps={{
        elevation: 3,
      }}
    >
      <DialogContent
        sx={{
          maxWidth: "420px",
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h6">Paypal</Typography>
            <Typography variant="body2">Paypal Transfer </Typography>
          </Box>
          <Typography variant="h6">£{balance} EGP</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="16px"
          mt="24px"
          component="form"
          onSubmit={formik.handleSubmit}
        >
          <ModifiedInput
            label="Paypal Account Email"
            id="paypalEmail"
            formik={formik}
          />
          <ModifiedInput
            label="Confirm Paypal Account Email"
            id="confirmPaypalEmail"
            formik={formik}
          />
          <LoadingButton
            variant="contained"
            type="submit"
            loading={loadingWithdraw}
          >
            Transfer {balance} EGP
          </LoadingButton>
          <Typography variant="body2" color="text.secondary">
            Once you transfer the amount, it will be reflected in your Paypal
            account within 24 hours.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You can't cancel the transfer once you initiate it.
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CashoutDialog;
