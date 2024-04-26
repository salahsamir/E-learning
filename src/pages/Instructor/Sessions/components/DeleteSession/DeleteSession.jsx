import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LoadingButton } from "@mui/lab";
import { useDeleteSession } from "api/instructor/sessions.tsx";

export default function DeleteSession({ open, setOpen, sessionId }) {
  const { mutate: deleteSession, isPending: loading } = useDeleteSession({
    onSuccess: () => setOpen(false),
  });
  const handleClose = () => {
    setOpen(false);
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
        Delete Session
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" pt="1em">
          Are you sure you want to delete this session?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <LoadingButton
          onClick={() => deleteSession(sessionId)}
          color="error"
          loading={loading}
        >
          Delete
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
