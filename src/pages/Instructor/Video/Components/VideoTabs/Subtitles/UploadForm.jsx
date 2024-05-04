import { Close } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Box,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useUploadSubtitle } from "api/instructor/video.tsx";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { languagesList } from "shared/data/languages";

const UploadForm = () => {
  const { mutate: uploadSubtitle, isPending } = useUploadSubtitle();
  const formik = useFormik({
    initialValues: {
      language: null,
      file: null,
    },
    onSubmit: (values) => {
      if (isPending) return;
      if (values.language === "" || values.language === null) return;
      if (!values.file) return;
      const formData = new FormData();
      formData.append("subtitles", values.file);
      formData.append("subtitleslanguage", values.language);
      uploadSubtitle({ data: formData });
    },
  });
  return (
    <Box
      component="form"
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      gap={{ xs: "8px", sm: 0 }}
      onSubmit={formik.handleSubmit}
    >
      {formik.values.file ? (
        <Typography
          component="div"
          noWrap
          sx={{
            flex: 1,
            display: "flex",
            minHeight: "56px",
            alignItems: "center",
            pl: "16px",
            pr: "30px",
            border: "1px solid",
            borderColor: "primary.main",
            userSelect: "none",
            position: "relative",
          }}
        >
          <Typography noWrap> {formik.values.file.name}</Typography>
          <IconButton
            onClick={() => formik.setFieldValue("file", null)}
            sx={{
              padding: "4px",
              color: "error.main",
              position: "absolute",
              top: "50%",
              right: "8px",
              transform: "translateY(-50%)",
            }}
          >
            <Close fontSize="small" />
          </IconButton>
        </Typography>
      ) : (
        <LoadingButton
          sx={{
            flex: 1,
            minHeight: "56px",
            borderColor: "primary.main",
            borderRadius: 0,
          }}
          variant="outlined"
          htmlFor="subtitleFile"
          component="label"
        >
          Select File
          <input
            type="file"
            name="subtitleFile"
            id="subtitleFile"
            hidden
            multiple={false}
            onChange={(e) => {
              const file = e.target.files[0];
              e.target.files = null;
              if (file.size / (1024 * 1024) > 10) {
                toast.error("Maximum file size is 10MB");
                return;
              }
              formik.setFieldValue("file", file);
            }}
          />
        </LoadingButton>
      )}
      <Autocomplete
        sx={{
          flex: 1,
          "& .MuiInputBase-root": {
            borderRadius: 0,
          },
          "& fieldset": {
            borderColor: "primary.main",
          },
          "& .MuiInputBase-root:hover fieldset": {
            borderColor: "primary.light",
          },
        }}
        multiple={false}
        id="language"
        options={languagesList.map((option) => option)}
        value={formik.values.language}
        onChange={(event, newValue) => {
          formik.setFieldValue("language", newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Language"
            onBlur={formik.handleBlur}
            error={
              formik.errors.language !== undefined && formik.touched.language
            }
            helperText={
              formik.errors.language && formik.touched.language
                ? formik.errors.language
                : ""
            }
          />
        )}
      />
      <LoadingButton
        variant="contained"
        type="submit"
        loading={isPending}
        sx={{ minHeight: "56px", borderRadius: 0 }}
      >
        Upload
      </LoadingButton>
    </Box>
  );
};

export default UploadForm;
