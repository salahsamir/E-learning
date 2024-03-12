import { useSortable } from "@dnd-kit/sortable";
import { Box, Typography } from "@mui/material";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { CheckBox, DragIndicator } from "@mui/icons-material";
import DeleteOption from "./DeleteOption";
import UploadImage from "./UploadImage";

function OptionItem({ item, questionId, isExpanded }) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: item.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Box ref={setNodeRef} style={style}>
      <Box
        tabIndex={0}
        sx={{
          borderRadius: "8px",
          border: `1px solid transparent`,
          display: "flex",
          pr: "0.5em",
          alignItems: "center",
          tabIndex: "0",
          "&:focus": {
            outline: "none",
            borderColor: (theme) => theme.palette.divider,
          },
          "&:hover, &:focus": isExpanded
            ? {
                borderColor: (theme) => theme.palette.divider,
                "& .drag-handle": {
                  opacity: "1",
                },
                "& .delete-option-button": {
                  opacity: "1",
                },
              }
            : null,
        }}
      >
        <DragIndicator
          className="drag-handle"
          sx={{
            opacity: "0",
            "&:hover": { cursor: "grab" },
            "&:focus": {
              outline: "none",
            },
          }}
          {...attributes}
          {...listeners}
        />
        <CheckBox color="primary" />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flex={1}
          ml="0.5em"
        >
          <Typography variant="body1">{item.text}</Typography>
          <Box display="flex" alignItems="center">
            <UploadImage questionId={questionId} optionId={item.id} />
            <DeleteOption questionId={questionId} optionId={item.id} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OptionItem;
