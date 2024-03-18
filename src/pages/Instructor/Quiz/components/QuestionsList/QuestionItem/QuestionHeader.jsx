import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteQuestion from "./DeleteQuestion";
import UploadImage from "./UploadImage";
import { useFormik } from "formik";
import { useUpdateQuestion } from "api/instructor/quiz.tsx";
import { get_obj_diff } from "util/common.ts";
import { Close } from "@mui/icons-material";

const QuestionHeader = ({ item, isExpanded, questionIndex, dragging }) => {
  const { mutate: updateQuestion } = useUpdateQuestion();
  const formik = useFormik({
    initialValues: {
      text: item.text,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const modifiedValues = get_obj_diff(values, item);
      if (Object.keys(modifiedValues).length > 0) {
        updateQuestion({ questionId: item.id, data: modifiedValues });
      }
    },
  });
  const handleDeleteImage = () => {
    updateQuestion({
      questionId: item.id,
      data: { imageUrl: null, image: null },
    });
  };
  return (
    <Box display="flex" justifyContent="space-between" gap="4px">
      <Box flex="1">
        <Box display="flex" gap="4px" flex="1" mb="8px">
          <Typography
            variant="body1"
            component={"span"}
            pt={"4px"}
          >{`${questionIndex}. `}</Typography>
          <Typography
            variant="h6"
<<<<<<< HEAD
<<<<<<< HEAD
            contentEditable={isExpanded}
            suppressContentEditableWarning
            className="bottom-line-animation"
            tabIndex={0}
=======
            contentEditable
            suppressContentEditableWarning
            className="bottom-line-animation"
>>>>>>> 7910483 (finished basic quiz structure)
=======
            contentEditable={isExpanded}
            suppressContentEditableWarning
            className="bottom-line-animation"
            tabIndex={0}
>>>>>>> 60ca3d4 (added some inhancements to quiz)
            onBlur={(event) => {
              formik.setFieldValue("text", event.target.innerText);
              formik.handleSubmit();
            }}
            sx={{
              flex: 1,
              position: "relative",
              wordBreak: "break-all",
              "&::after": {
<<<<<<< HEAD
<<<<<<< HEAD
                backgroundColor: (theme) =>
                  isExpanded ? theme.palette.primary.main : "transparent",
=======
                backgroundColor: (theme) => theme.palette.primary.main,
>>>>>>> 7910483 (finished basic quiz structure)
=======
                backgroundColor: (theme) =>
                  isExpanded ? theme.palette.primary.main : "transparent",
>>>>>>> 60ca3d4 (added some inhancements to quiz)
              },
            }}
          >
            {item.text}
          </Typography>
        </Box>
        {item.imageUrl && !dragging && (
          <Box width="fit-content" position="relative" padding="0 20px">
            <img
              src={item.imageUrl}
              alt=""
              loading="lazy"
              style={{
                maxWidth: "100%",
                maxHeight: "250px",
              }}
            />
            {isExpanded && (
              <IconButton
                onClick={handleDeleteImage}
                sx={{
                  position: "absolute",
                  top: "4px",
                  right: "24px",
                  padding: "3px",
                  backgroundColor: "#0000004d",
                  "&:hover": {
                    backgroundColor: "#00000069",
                  },
                }}
              >
                <Close
                  sx={{
                    height: "16px",
                    width: "16px",
                    transition: "ease 0.25s",
                    color: "white",
                    "&:hover": { color: (theme) => theme.palette.error.main },
                  }}
                />
              </IconButton>
            )}
          </Box>
        )}
      </Box>

      {isExpanded && (
        <Box>
          <UploadImage questionId={item.id} isExpanded={isExpanded} />
          <DeleteQuestion questionId={item.id} isExpanded={isExpanded} />
        </Box>
      )}
    </Box>
  );
};

export default QuestionHeader;
