import { SaveOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import TextEditor from "features/TextEditor";
import { useGetArticle, useUpdateArticle } from "api/instructor/article.tsx";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";

function Article() {
  const { data: article, isLoading: articleLoading } = useGetArticle();
  const { mutate: updateArticle, isPending: formLoading } = useUpdateArticle();
  const formik = useFormik({
    initialValues: {
      title: article?.title || "",
      quillContent: article?.quillContent || "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      updateArticle(values);
    },
  });
  return (
    <>
      <Helmet>
        <title>{article?.title || "Edit Article"} | Eduvation</title>
      </Helmet>
      <Box
        mb="1em"
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          height: "36px",
        }}
      >
        <Typography variant="h5">{article?.title || "Edit Article"}</Typography>
        <LoadingButton
          variant="contained"
          startIcon={<SaveOutlined />}
          loading={formLoading || articleLoading}
          type="submit"
        >
          Save
        </LoadingButton>
      </Box>
      <NavigationHeader data={article} />
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.b1,
          padding: "1em",
          borderRadius: "8px",
        }}
      >
        <TextField
          label="Article Title"
          variant="outlined"
          fullWidth
          value={formik.values.title}
          id="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ mb: "1em" }}
        />
        <TextEditor
          sx={{ height: "500px" }}
          placeholder="Write article description..."
          id="quillContent"
          value={formik.values.quillContent}
          onChange={(value) => formik.setFieldValue("quillContent", value)}
        />
      </Box>
    </>
  );
}

export default Article;
