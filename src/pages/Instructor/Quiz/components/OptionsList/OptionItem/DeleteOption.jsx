import React from "react";
import { useDeleteOption } from "api/instructor/quiz.tsx";
import { CircularProgress, IconButton } from "@mui/material";
import { DeleteForeverOutlined } from "@mui/icons-material";

const DeleteOption = ({ questionId, optionId }) => {
  const { mutate: deleteOption, isPending: deleting } = useDeleteOption();

  return (
    <IconButton
      sx={{
        p: "0",
        opacity: 0,
        transition: "ease 0.25s",
        "&:hover": { color: "error.main" },
      }}
      disabled={deleting}
      onClick={() => deleteOption({ questionId, optionId })}
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

export default DeleteOption;
