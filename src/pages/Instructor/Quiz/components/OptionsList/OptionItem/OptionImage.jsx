import { Close } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useUpdateOption } from "api/instructor/quiz.tsx";
import React from "react";

const OptionImage = ({ isExpanded, item, questionId }) => {
  const { mutate: updateOption } = useUpdateOption();
  const handleDeleteImage = () => {
    updateOption({
      questionId,
      optionId: item.id,
      data: { imageUrl: null, image: "" },
    });
  };
  return (
    <Box
      ml={isExpanded ? "32px" : "4px"}
      position="relative"
      width="fit-content"
    >
      <img
        src={item.imageUrl}
        alt="option"
        loading="lazy"
        style={{
          height: isExpanded ? "250px" : "150px",
          maxWidth: "100%",
        }}
      />
      {isExpanded && (
        <IconButton
          onClick={handleDeleteImage}
          sx={{
            position: "absolute",

            top: "4px",
            right: "4px",
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
  );
};

export default OptionImage;
