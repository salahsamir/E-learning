import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { Add } from "@mui/icons-material";
import { useAddSession } from "api/instructor/sessions.tsx";
import useGetParams from "hooks/useGetParams";

export default function NewSession() {
  const [open, setOpen] = useState(false);
  const params = useGetParams();
  const { mutate: addSession, isPending: loading } = useAddSession({
    onSuccess: () => setOpen(false),
  });
  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      workshopId: params[0],
    },
    onSubmit: (values) => {
      addSession(values);
    },
  });

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={() => setOpen(true)}
        disableElevation
      >
        New Session
      </Button>
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
            borderBottom: (theme) =>
              `1px solid ${theme.palette.primary.border}`,
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
    </>
  );
}
