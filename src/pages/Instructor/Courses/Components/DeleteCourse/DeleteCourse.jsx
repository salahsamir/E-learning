import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LoadingButton } from "@mui/lab";
import { useDeleteCourse } from "api/instructor/courses.tsx";

export default function DeleteCourse({ open, setOpen, id }) {
  const { mutate: deleteCourse, isPending: loading } = useDeleteCourse({
    onSuccess: () => setOpen(false),
  });
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    deleteCourse(id);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: (theme) => theme.palette.background.b1,
          backgroundImage: "none",
        },
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.primary.border}`,
        }}
      >
        Delete Course
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" pt="1em">
          Are you sure you want to delete this course?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button aria-label="Cancel" onClick={handleClose}>
          Cancel
        </Button>
        <LoadingButton
          aria-label="Delete course"
          onClick={handleDelete}
          color="error"
          loading={loading}
        >
          Delete
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
