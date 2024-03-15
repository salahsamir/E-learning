import React from "react";
import { useDeleteQuestion } from "api/instructor/quiz.tsx";
import { CircularProgress, IconButton } from "@mui/material";
import { DeleteForeverOutlined } from "@mui/icons-material";

const DeleteQuestion = ({ questionId, isExpanded }) => {
  const { mutate: deleteQuestion, isPending: deleting } = useDeleteQuestion();

  return (
    <IconButton
      sx={{
        p: "0",
        transition: "ease 0.25s",
      }}
      disabled={deleting}
      onClick={() => deleteQuestion(questionId)}
      className="delete-option-button"
    >
      {deleting ? (
        <CircularProgress
          size={14}
          sx={{
            color: "text.secondary",
          }}
        />
      ) : (
        <DeleteForeverOutlined
          sx={{
            height: "24px",
            width: "24px",
            color: "grey.500",
            "&:hover": { color: "error.main" },
          }}
        />
      )}
    </IconButton>
  );
};

export default DeleteQuestion;
