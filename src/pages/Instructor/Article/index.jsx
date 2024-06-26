import { SaveOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import TextEditor from "features/TextEditor";
import { useGetArticle, useUpdateArticle } from "api/instructor/article.tsx";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import AttachedFiles from "../Video/Components/AttachedFiles";
import ErrorBox from "Components/ErrorBox";
import LoadingSpinner from "Components/LoadingSpinner";

function Article() {
  const { data: article, isLoading, isError } = useGetArticle();
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
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <ErrorBox />
      ) : (
        <Box>
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
            <Typography variant="h5">
              {article?.title || "Edit Article"}
            </Typography>
            <LoadingButton
              aria-label="save article"
              variant="contained"
              startIcon={<SaveOutlined />}
              loading={formLoading}
              type="submit"
            >
              Save
            </LoadingButton>
          </Box>
          <NavigationHeader data={article} />
          <Box
            sx={{
              // backgroundColor: (theme) => theme.palette.background.b1,
              padding: "1em",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
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
              sx={{
                backgroundColor: "background.b1",
              }}
            />
            <TextEditor
              sx={{ height: "500px" }}
              placeholder="Write article description..."
              id="quillContent"
              value={formik.values.quillContent}
              onChange={(value) => formik.setFieldValue("quillContent", value)}
            />
            <AttachedFiles
              attachedFiles={article.resources || []}
              sx={{
                backgroundColor: "background.b1",
                borderRadius: "16px",
                padding: "16px",
              }}
            />
          </Box>
        </Box>
      )}
    </>
  );
}

export default Article;
