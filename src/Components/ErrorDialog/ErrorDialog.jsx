import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LoadingButton } from "@mui/lab";
import { SentimentDissatisfiedOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function ErrorDialog({ open, setOpen, title, description }) {
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
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: { xs: "auto", sm: "400px" },
          p: "2em",
        }}
      >
        <SentimentDissatisfiedOutlined
          sx={{ fontSize: "3.5em", color: "#F21E1E" }}
        />
        <Typography variant="body1" color="#F21E1E" fontWeight="600" mt="0.5em">
          ERROR!
        </Typography>
        <Typography pt="0.5em" mb="1em" fontWeight={"400"}>
          {title}
        </Typography>
        <Typography pt="0.5em" mb="1em">
          {description}
        </Typography>

        <Button
          variant="contained"
          onClick={() => setOpen(false)}
          color="error"
          disableElevation
          sx={{ px: "2em" }}
        >
          Try Again
        </Button>
      </DialogContent>
    </Dialog>
  );
}
