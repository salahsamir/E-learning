import { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { UploadFile } from "@mui/icons-material";
import FileItemComplete from "./FileItemComplete";
import FileItemUploading from "./FileItemUploading";
function AttachedFiles({ formik }) {
  const [files, setFiles] = useState([]);
  const [pendingFiles, setPendingFiles] = useState([]);
  const [completedFiles, setCompletedFiles] = useState([]);
  const [fileExist, setFileExist] = useState(false);
  const fileInput = useRef(null);
  console.log(formik.values.attached);
  useEffect(() => {
    if (files) {
      const newFiles = [];
      Array.from(files).forEach((file) => {
        const fileExist = formik.values.attached.find(
          (val) => val.name === file.name
        );
        if (!fileExist) {
          newFiles.push({
            name: file.name,
            size: file.size,
            file: file,
            setCompletedFiles,
          });
        } else {
          console.log("file exist");
          setFileExist(file.name);
        }
      });
      if (newFiles.length > 0) {
        setPendingFiles((prev) => [...prev, ...newFiles]);
      }
    }
  }, [files]);
  useEffect(() => {
    if (completedFiles.length === 0) return;
    formik.setFieldValue("attached", [
      ...completedFiles,
      ...formik.values.attached,
    ]);
    const newPendingFiles = [...pendingFiles].filter(
      (val) => !completedFiles.find((val2) => val.name === val2.name)
    );
    setPendingFiles(newPendingFiles);
    setCompletedFiles([]);
  }, [completedFiles]);
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <label
            htmlFor="attached-files-element"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              height="100%"
              minHeight="300px"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1px dashed rgba(169, 169, 169, 0.23)`,
                borderRadius: "8px",
                "&:hover": {
                  border: `1px dashed rgba(169, 169, 169, 0.53)`,
                  cursor: "pointer",
                },
              }}
            >
              <input
                type="file"
                multiple
                ref={fileInput}
                style={{ display: "none" }}
                id="attached-files-element"
                onChange={(e) => {
                  setFiles(e.target.files);
                }}
              />
              <UploadFile
                sx={{ fontSize: "4em", color: "rgba(169, 169, 169, 0.3)" }}
              />
            </Box>
          </label>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h6" mb="1em">
            Uploaded Files
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            gap="1em"
            maxHeight="255px"
            overflow="auto"
          >
            {pendingFiles.map((file, index) => {
              return <FileItemUploading {...file} key={file.name} />;
            })}
            {formik.values.attached.map((file, index) => {
              return <FileItemComplete {...file} key={file.name} />;
            })}
          </Box>
        </Grid>
      </Grid>
      <Dialog
        open={fileExist !== false}
        onClose={() => setFileExist(false)}
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
          color="error"
          sx={{
            borderBottom: (theme) =>
              `1px solid ${theme.palette.primary.border}`,
          }}
        >
          Error
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" pt="1em">
            the file {fileExist} you are trying to upload already exists.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFileExist(false)}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AttachedFiles;
