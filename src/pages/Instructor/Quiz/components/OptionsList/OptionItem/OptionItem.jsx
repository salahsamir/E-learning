import { useSortable } from "@dnd-kit/sortable";
import { Box } from "@mui/material";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { DragIndicator } from "@mui/icons-material";
import OptionContent from "./OptionContent";
const OptionWrapper = ({ children, isExpanded }) => {
  return (
    <Box
      tabIndex={0}
      sx={{
        borderRadius: "8px",
        border: `1px solid transparent`,
        display: "flex",
        p: "0.5em",
        tabIndex: "0",
        backgroundColor: "transparent",
        transition: "ease 0.25s",
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
      {children}
    </Box>
  );
};
function OptionItem({ item, questionId, isExpanded }) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: item.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Box ref={setNodeRef} style={style}>
      <OptionWrapper isExpanded={isExpanded}>
        <DragIndicator
          className="drag-handle"
          sx={{
            opacity: "0",
            position: "relative",
            zIndex: isExpanded ? "1" : "-10",
            "&:hover": { cursor: "grab" },
            "&:focus": {
              outline: "none",
            },
          }}
          {...attributes}
          {...listeners}
        />
        <OptionContent
          item={item}
          questionId={questionId}
          isExpanded={isExpanded}
        />
      </OptionWrapper>
    </Box>
  );
}

export default OptionItem;
