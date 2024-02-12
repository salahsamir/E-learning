import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { useState } from "react";
import { BaseApi } from "../../../../../../util/BaseApi";
import useGetParams from "../../../../../../hooks/useGetParams";

export default function NewSession({ open, setOpen, setItems }) {
  const [loading, setLoading] = useState(false);
  const params = useGetParams();
  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      workshopId: params[0],
    },
    onSubmit: (values) => {
      setLoading(true);
      axios
        .post(BaseApi + `/room/create`, values, {
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setLoading(false);
          setOpen(false);
          setItems((prev) => {
            const newSession = { ...res.data.results };
            console.log(newSession);
            return [...prev, newSession];
          });
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    },
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        ".MuiPaper-root": {
          width: "500px",
          backgroundColor: (theme) => theme.palette.background.b1,
          backgroundImage: "none",
        },
      }}
    >
      <DialogTitle
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.primary.border}`,
        }}
      >
        Create new Session
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="title"
          label="Session Title"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.courseTitle}
          onChange={formik.handleChange}
          autoFocus
          autoComplete="off"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <LoadingButton
          onClick={formik.handleSubmit}
          loading={loading}
          disabled={formik.values.title === ""}
        >
          Create
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
