import { ImageOutlined } from "@mui/icons-material";
import { CircularProgress, IconButton } from "@mui/material";
import { useUploadQuestionImage } from "api/instructor/quiz.tsx";
import React, { useState } from "react";

const UploadImage = ({ questionId, isExpanded }) => {
  const [progress, setProgress] = useState(null);
  const { mutate: uploadImage } = useUploadQuestionImage({
    onSuccess: () => setProgress(null),
  });
  return (
    <IconButton
      component={"label"}
      htmlFor={`upload-image-${questionId}`}
      sx={{
        p: "0",
        transition: "ease 0.25s",
      }}
      disabled={!!progress}
      className="delete-option-button"
    >
      {progress ? (
        <CircularProgress
          value={progress * 100}
          variant="determinate"
          size={14}
        />
      ) : (
        <ImageOutlined
          sx={{
            height: "24px",
            width: "24px",
            color: "grey.500",
          }}
        />
      )}
      <input
        type="file"
        name=""
        id={`upload-image-${questionId}`}
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            uploadImage({
              questionId,
              image: file,
              getProgress: (progress) => setProgress(progress),
            });
          }
          e.target.value = "";
        }}
        style={{ display: "none" }}
      />
    </IconButton>
  );
};

export default UploadImage;
