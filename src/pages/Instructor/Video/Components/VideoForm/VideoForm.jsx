import { Box, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import AttachedFiles from "../AttachedFiles/AttachedFiles";
import axios from "axios";
import { BaseApi } from "util/BaseApi";
import useGetParams from "hooks/useGetParams";
import { LoadingButton } from "@mui/lab";
import TextEditor from "features/TextEditor";
import { MediaPlayer } from "@vidstack/react";
import VideoPlayer from "features/VideoPlayer";

function VideoForm({ video }) {
  const params = useGetParams();
  const formik = useFormik({
    initialValues: {
      title: video.title,
      description: video.description || "",
      // attached: [
      //   { name: "file1.pdf", size: "1.2MB", url: " " },
      //   { name: "file2.rar", size: "8MB", url: " " },
      //   { name: "file3.zip", size: "20MB", url: " " },
      // ],
    },
    onSubmit: (values) => {
      axios
        .patch(
          BaseApi +
            `/course/${params[3]}/chapter/${params[2]}/curriculum/${params[0]}/video`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
              token: `${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
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
        {/* <UploadBox
          progress={null}
          sx={{ height: "100%", minHeight: "360px" }}
        /> */}
        <VideoPlayer
          src={video.url}
          // controls
          // style={{
          //   width: "100%",
          //   height: "100%",
          //   objectFit: "cover",
          //   borderRadius: "8px",
          // }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Attachecd Files</Typography>
        <Typography variant="body2" color="text.secondary" mb="1em">
          Upload files you want to share with your students
        </Typography>
        <AttachedFiles formik={formik} />
      </Grid>
      <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
        <LoadingButton variant="outlined" onClick={formik.handleSubmit}>
          Save
        </LoadingButton>
      </Grid>
    </Grid>
  );
}

export default VideoForm;
