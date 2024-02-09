import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { BaseApi } from "../../../../../../util/BaseApi";
import { LoadingButton } from "@mui/lab";
import useGetParams from "../../../../../../hooks/useGetParams";

export default function DeleteSession({ open, setOpen, sessionId, setItems }) {
  const [loading, setLoading] = React.useState(false);
  const params = useGetParams();
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(BaseApi + `/workshop/${params[0]}/room/${sessionId}`, {
        headers: {
          "Application-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setLoading(false);
        setItems((prev) => {
          const newList = [...prev];
          return newList.filter((session) => session.id !== sessionId);
        });
        handleClose();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
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
        <LoadingButton onClick={handleDelete} color="error" loading={loading}>
          Delete
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
