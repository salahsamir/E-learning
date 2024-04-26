import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { useAddChapter } from "api/instructor/chapters.tsx";
import { Add } from "@mui/icons-material";

export default function NewChapter() {
  const [open, setOpen] = React.useState(false);
  const { mutate: addChapter, isPending: loading } = useAddChapter({
    onSuccess: () => setOpen(false),
  });
  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      addChapter(values);
    },
  });

  return (
    <>
      <Button
        variant="contained"
        disableElevation
        startIcon={<Add />}
        onClick={() => setOpen(true)}
      >
        Add Chapter
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
          Create new chapter
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="title"
            label="Chapter Title"
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
