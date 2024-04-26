import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LoadingButton } from "@mui/lab";
import { useDeleteWorkshop } from "api/instructor/workshops.tsx";

export default function DeleteCourse({ open, setOpen, id: workshopId }) {
  const { mutate: deleteWorkshop, isPending: loading } = useDeleteWorkshop({
    onSuccess: () => setOpen(false),
  });

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
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
        Delete Workshop
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" pt="1em">
          Are you sure you want to delete this workshop?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <LoadingButton
          onClick={() => deleteWorkshop(workshopId)}
          color="error"
          loading={loading}
        >
          Delete
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
