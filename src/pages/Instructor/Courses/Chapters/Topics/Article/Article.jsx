import { SaveOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import TextEditor from "../../../../../../Components/TextEditor/TextEditor";
import { useFormik } from "formik";
import axios from "axios";
import { BaseApi } from "../../../../../../util/BaseApi";
import useGetParams from "../../../../../../hooks/useGetParams";
import { useNavigate } from "react-router-dom";

function Article() {
  const [loading, setLoading] = React.useState(false);
  const params = useGetParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      quillContent: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      const pathName = params[0] === "new" ? "" : params[0];
      axios(
        BaseApi +
          `/course/${params[3]}/chapter/${params[2]}/curriculum/article/${pathName}`,
        {
          method: params[0] === "new" ? "post" : "patch",
          data: values,
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
        .then((res) => {
          setLoading(false);
          if (params[0] === "new") {
            navigate(`/instructor/courses/${params[3]}/${params[2]}`);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    },
  });
  return (
    <Box>
      <Helmet>
        <title>
          {params[0] === "new" ? "New Article" : "Article Name"} | Eduvation
        </title>
      </Helmet>
      <Box
        mb="1em"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          height: "36px",
        }}
      >
        <Typography variant="h5">
          {params[0] === "new" ? "NewArticle" : "Article Name"}
        </Typography>
        <LoadingButton
          variant="contained"
          startIcon={<SaveOutlined />}
          onClick={formik.handleSubmit}
          loading={loading}
        >
          {params[0] === "new" ? "Create" : "Save"}
        </LoadingButton>
      </Box>
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
    </Box>
  );
}

export default Article;
