import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { BaseApi } from "../../../../../util/BaseApi";
import { LoadingButton } from "@mui/lab";

export default function DeleteCourse({ open, setOpen, id, setWorkshopsList }) {
  const [loading, setLoading] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(BaseApi + `/workshop/${id}`, {
        headers: {
          "Application-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("deleted");
        setLoading(false);
        setWorkshopsList((prev) =>
          prev.filter((workshop) => workshop._id !== id)
        );
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
        Delete Workshop
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" pt="1em">
          Are you sure you want to delete this workshop?
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
