import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import { BaseApi } from "../../../../../../../util/BaseApi";
import useGetParams from "../../../../../../../hooks/useGetParams";

export default function DeleteTopic({
  open,
  setOpen,
  id: topicId,
  setItems,
  topicType,
}) {
  const params = useGetParams();
  const [loading, setLoading] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(
        BaseApi +
          `/course/${params[1]}/chapter/${params[0]}/curriculum/${topicId}`,
        {
          headers: {
            "Application-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setItems((prev) => {
          const newList = [...prev];
          return newList.filter((topic) => topic.id !== topicId);
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
        Delete Topic
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" pt="1em">
          Are you sure you want to delete this topic?
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
