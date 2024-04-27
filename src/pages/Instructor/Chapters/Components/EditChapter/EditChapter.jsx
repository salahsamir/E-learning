import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography/Typography";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { useUpdateChapter } from "api/instructor/chapters.tsx";
import { MenuItem } from "@mui/material";
import { Edit } from "@mui/icons-material";

export default function EditChapter({ chapterId, title, closeParentMenu }) {
  const [open, setOpen] = React.useState(false);
  const {
    mutate: updateChapter,
    isError: submittingError,
    isPending: saving,
  } = useUpdateChapter({
    onSuccess: () => setOpen(false),
  });
  const formik = useFormik({
    initialValues: {
      title,
    },
    onSubmit: (values) => {
      updateChapter({ chapterId, data: values });
    },
  });
  const handleClose = () => {
    setOpen(false);
    closeParentMenu();
  };
  return (
    <>
      <MenuItem onClick={() => setOpen(true)} aria-label="edit">
        <Edit sx={{ fontSize: "1.3em" }} />
        <Typography variant="body2" sx={{ ml: "0.5em" }} fontSize="1em">
          Edit
        </Typography>
      </MenuItem>
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
          Update Chapter
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="title"
            name="title"
            label="Chapter Title"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.title}
            onChange={formik.handleChange}
            autoFocus
            autoComplete="off"
          />
          {submittingError && (
            <Typography color="error" pt="0.5em">
              Something went wrong.
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button aria-label="Cancel" onClick={handleClose}>
            Cancel
          </Button>
          <LoadingButton
            aria-label="save chapter"
            onClick={formik.handleSubmit}
            loading={saving}
            disabled={formik.values.chapterTitle === ""}
          >
            Save
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
