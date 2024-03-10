import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography/Typography";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { useUpdateSession } from "api/instructor/sessions.tsx";

export default function EditSession({ open, setOpen, sessionId, title }) {
  const {
    mutate: updateSession,
    isError: submittingError,
    isPending: saving,
  } = useUpdateSession({
    onSuccess: () => setOpen(false),
  });
  const formik = useFormik({
    initialValues: {
      title,
    },
    onSubmit: (values) => {
      updateSession({ sessionId, data: values });
    },
  });
  const handleClose = () => {
    setOpen(false);
  };
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
        Update Session
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="title"
          label="Session Title"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.title}
          onChange={formik.handleChange}
          autoFocus
          autoComplete="off"
        />
        {submittingError && (
          <Typography color="error" pt="0.5em">
            Something went wrong.
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <LoadingButton
          onClick={formik.handleSubmit}
          loading={saving}
          disabled={formik.values.chapterTitle === ""}
        >
          Save
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
