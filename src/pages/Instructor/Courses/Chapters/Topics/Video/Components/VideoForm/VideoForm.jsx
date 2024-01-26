import { Box, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import TextEditor from "../../../../../../../../Components/TextEditor/TextEditor";
import UploadBox from "../../../../../../Components/UploadBox/UploadBox";
import AttachedFiles from "../AttachedFiles/AttachedFiles";

function VideoForm() {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      url: "",
      attached: [
        { name: "file1.pdf", size: "1.2MB", url: " " },
        { name: "file2.rar", size: "8MB", url: " " },
        { name: "file3.zip", size: "20MB", url: " " },
      ],
    },
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          label="Video Title"
          variant="outlined"
          id="title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          fullWidth
        />
        <TextEditor
          sx={{ height: "300px", mt: "1em" }}
          placeholder="Video Description"
          onChange={(value) => formik.setFieldValue("description", value)}
          value={formik.values.description}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <UploadBox
          progress={null}
          sx={{ height: "100%", minHeight: "360px" }}
        />
        {/* <video src="" height="360px"></video> */}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Attachecd Files</Typography>
        <Typography variant="body2" color="text.secondary" mb="1em">
          Upload files you want to share with your students
        </Typography>
        <AttachedFiles formik={formik} />
      </Grid>
    </Grid>
  );
}

export default VideoForm;
