import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LoadingButton } from "@mui/lab";
import { useDeleteTopic } from "api/instructor/topics.tsx";

export default function DeleteTopic({ open, setOpen, id: topicId }) {
  const { mutate: deleteTopic, isPending: loading } = useDeleteTopic({
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
        Delete Topic
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" pt="1em">
          Are you sure you want to delete this topic?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <LoadingButton
          onClick={() => deleteTopic(topicId)}
          color="error"
          loading={loading}
        >
          Delete
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
