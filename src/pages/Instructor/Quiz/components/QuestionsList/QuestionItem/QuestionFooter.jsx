import { Box, FormControlLabel, Switch, TextField } from "@mui/material";
import { useUpdateQuestion } from "api/instructor/quiz.tsx";
import { useFormik } from "formik";
import React from "react";
import { get_obj_diff } from "util/common.ts";
import * as Yup from "yup";
const QuestionFooter = ({ item }) => {
  const { mutate: updateQuestion } = useUpdateQuestion();
  console.log("item: ", item);
  const formik = useFormik({
    initialValues: {
      points: item?.points,
      multiple: item?.multiple,
      required: item?.required,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("values", values);
      const modifiedValues = get_obj_diff(values, item);
      if (Object.keys(modifiedValues).length === 0) return;
      updateQuestion({ questionId: item.id, data: modifiedValues });
    },
    validationSchema: Yup.object().shape({
      points: Yup.number(),
      multiple: Yup.boolean(),
      required: Yup.boolean(),
    }),
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        gap: "1em",
        alignItems: "center",
        marginTop: "1em",
        paddingTop: "1em",
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <TextField
        id="points"
        value={formik.values.points || ""}
        placeholder="points"
        size="small"
        sx={{
          width: { xs: "100%", sm: "100px" },
        }}
        onChange={formik.handleChange}
        onBlur={formik.handleSubmit}
        error={formik.touched.points && Boolean(formik.errors.points)}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <FormControlLabel
          control={
            <Switch
              id="multiple"
              onChange={(event) => {
                formik.handleChange(event);
                formik.handleSubmit();
              }}
              checked={formik.values.multiple || false}
              value={formik.values.multiple || false}
            />
          }
          label="Multiple Choice"
        />
        <FormControlLabel
          control={
            <Switch
              id="required"
              checked={formik.values.required || false}
              value={formik.values.required || false}
              onChange={(event) => {
                formik.handleChange(event);
                formik.handleSubmit();
              }}
            />
          }
          label="Required"
        />
      </Box>
    </Box>
  );
};

export default QuestionFooter;
