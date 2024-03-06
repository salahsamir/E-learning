import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LoadingButton } from "@mui/lab";
import { useDeleteChapter } from "api/instructor/chapters.tsx";
import { MenuItem, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function DeleteChapter({ chapterId }) {
  const [open, setOpen] = React.useState(false);
  const { mutate: deleteChapter, isPending: loading } = useDeleteChapter({
    onSuccess: () => setOpen(false),
  });
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuItem onClick={() => setOpen(true)} aria-label="delete">
        <Delete sx={{ fontSize: "1.3em" }} color="error" />
        <Typography
          variant="body2"
          sx={{ ml: "0.5em" }}
          color="error"
          fontSize="1em"
        >
          Delete
        </Typography>
      </MenuItem>
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
            borderBottom: (theme) =>
              `1px solid ${theme.palette.primary.border}`,
          }}
        >
          Delete Chapter
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" pt="1em">
            Are you sure you want to delete this chapter?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <LoadingButton
            onClick={() => deleteChapter(chapterId)}
            color="error"
            loading={loading}
          >
            Delete
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
