import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { useAddCourse } from "api/instructor/courses.tsx";

export default function NewCourse({ open, setOpen }) {
  const { mutate: addCourse, isPending: loading } = useAddCourse({
    onSuccess: () => {
      setOpen(false);
      formik.resetForm();
    },
  });

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      if (values.title.length === 0) return;
      addCourse(values);
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
        Create new course
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="title"
          label="Course Title"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.title}
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
