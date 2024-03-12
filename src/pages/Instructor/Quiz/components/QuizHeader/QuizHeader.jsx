import { Box, Typography, alpha } from "@mui/material";
import { useUpdateQuiz } from "api/instructor/quiz.tsx";
import { useFormik } from "formik";
import React from "react";
import { get_obj_diff } from "util/common.ts";

const QuizHeader = ({ quiz }) => {
  const { mutate: updateQuiz } = useUpdateQuiz();
  const formik = useFormik({
    initialValues: {
      title: quiz?.title,
      description: quiz?.description,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const modifiedFields = get_obj_diff(values, quiz);
      if (Object.keys(modifiedFields).length === 0) return;
      updateQuiz(modifiedFields);
    },
  });
  return (
    <Box
      onBlur={formik.handleSubmit}
      sx={{
        padding: "1em",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: "8px",
        backgroundColor: (theme) => theme.palette.background.b1,
        "&:hover": {
          backgroundColor: (theme) => alpha(theme.palette.background.b1, 0.7),
        },
      }}
    >
      <Typography
        id="title"
        component={"div"}
        variant="h4"
        role="textbox"
        contentEditable="true"
        suppressContentEditableWarning={true}
        onBlur={(event) =>
          formik.setFieldValue("title", event.target.innerText)
        }
        sx={{
          "&:focus": {
            outline: "none",
          },
        }}
      >
        {formik.values.title || "Title"}
      </Typography>
      <Typography
        id="description"
        component={"div"}
        variant="body1"
        color="text.secondary"
        role="textbox"
        contentEditable="true"
        suppressContentEditableWarning={true}
        placeholder="Description"
        onBlur={(event) =>
          formik.setFieldValue("description", event.target.innerText)
        }
        sx={{
          "&:focus": {
            outline: "none",
          },
        }}
      >
        {formik.values.description || "Description"}
      </Typography>
    </Box>
  );
};

export default QuizHeader;
