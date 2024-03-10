import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { useAddWorkshop } from "api/instructor/workshops.tsx";
import { Add } from "@mui/icons-material";

export default function NewWorkshop() {
  const [open, setOpen] = React.useState(false);
  const { mutate: addWorkshop, isPending: loading } = useAddWorkshop({
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
      addWorkshop(values);
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
        New Workshop
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
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
          Create new workshop
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="title"
            label="Workshop Title"
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
          <Button onClick={() => setOpen(false)}>Cancel</Button>
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
