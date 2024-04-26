import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import { useUpdateVideo } from "api/instructor/video.tsx";
import { useFormik } from "formik";
import React from "react";

const DetailsTab = ({ video }) => {
  const { mutate: updateVideo, isPending: isUpdating } = useUpdateVideo();
  const formik = useFormik({
    initialValues: {
      title: video.title,
      description: video.description,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      updateVideo(values);
    },
  });
  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      gap="16px"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        id="title"
        label="Title"
        fullWidth
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      <TextField
        id="description"
        label="Description"
        fullWidth
        multiline
        rows={4}
        value={formik.values.description}
        onChange={formik.handleChange}
      />
      <Box display="flex" justifyContent="flex-end">
        <LoadingButton
          variant="outlined"
          color="primary"
          type="submit"
          loading={isUpdating}
        >
          Save
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default DetailsTab;
