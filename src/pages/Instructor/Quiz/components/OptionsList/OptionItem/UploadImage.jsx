import { ImageOutlined } from "@mui/icons-material";
import { CircularProgress, IconButton } from "@mui/material";
import { useUploadOptionImage } from "api/instructor/quiz.tsx";
import React, { useState } from "react";

const UploadImage = ({ questionId, optionId }) => {
  const [progress, setProgress] = useState(null);
  const { mutate: uploadImage } = useUploadOptionImage({
    onSuccess: () => setProgress(null),
  });
  return (
    <IconButton
      component={"label"}
      htmlFor={`upload-image-${optionId}`}
      sx={{
        p: "0",
        opacity: 0,
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
        id={`upload-image-${optionId}`}
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            uploadImage({
              questionId,
              optionId,
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
