import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import React from "react";
import UploadImage from "./UploadImage";
import DeleteOption from "./DeleteOption";
import { useFormik } from "formik";
import { useUpdateOption } from "api/instructor/quiz.tsx";
import { get_obj_diff } from "util/common.ts";
import { Close } from "@mui/icons-material";
import OptionImage from "./OptionImage";

const OptionContent = ({ item, questionId, isExpanded }) => {
  const { mutate: updateOption } = useUpdateOption();
  const formik = useFormik({
    initialValues: {
      text: item.text,
      correctAnswer: item.correctAnswer,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const modifiedValues = get_obj_diff(values, item);
      if (Object.keys(modifiedValues).length === 0) return;
      updateOption({
        data: modifiedValues,
        questionId,
        optionId: item.id,
      });
    },
  });
  const handleDeleteImage = () => {
    updateOption({
      questionId,
      optionId: item.id,
      data: { imageUrl: null, image: null },
    });
  };
  return (
    <Box
      sx={{
        flex: 1,
        ml: "0.5em",
        display: "flex",
        flexDirection: isExpanded ? "column" : "column-reverse",
        gap: "8px",
      }}
    >
      <Box
        component={"form"}
        sx={{
          display: "flex",
          gap: "8px",
        }}
      >
        <Checkbox
          id="correctAnswer"
          onChange={(e) => {
            formik.handleChange(e);
            formik.handleSubmit();
          }}
          checked={formik.values.correctAnswer}
          sx={{
            p: 0,
          }}
        />
        <Typography
          variant="body1"
          flex={1}
          contentEditable
          suppressContentEditableWarning
          className="bottom-line-animation"
          onBlur={(event) => {
            formik.setFieldValue("text", event.target.innerText);
            formik.handleSubmit();
          }}
          sx={{
            position: "relative",
            wordBreak: "break-all",
            "&::after": {
              backgroundColor: (theme) => theme.palette.primary.main,
            },
          }}
        >
          {item.text}
        </Typography>

        {isExpanded && (
          <>
            <Box display="flex">
              <UploadImage questionId={questionId} optionId={item.id} />
              <DeleteOption questionId={questionId} optionId={item.id} />
            </Box>
          </>
        )}
      </Box>
      {item?.imageUrl && (
        <OptionImage
          isExpanded={isExpanded}
          item={item}
          questionId={questionId}
        />
      )}
    </Box>
  );
};

export default OptionContent;
