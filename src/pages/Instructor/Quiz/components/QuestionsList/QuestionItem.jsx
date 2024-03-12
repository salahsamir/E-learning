import { useSortable } from "@dnd-kit/sortable";
import { Box, Button, Link, Typography } from "@mui/material";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { DragIndicator } from "@mui/icons-material";
import OptionsList from "../OptionsList/OptionsList";

function QuestionItem({ item }) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: item.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Box ref={setNodeRef} style={style}>
      <Box
        sx={{
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: "8px",
          padding: "0.5em 1em 1em",
          display: "flex",
          flexDirection: "column",
          backgroundColor: (theme) => theme.palette.background.b1,
        }}
      >
        <DragIndicator
          sx={{
            transform: "rotate(90deg)",
            "&:hover": { cursor: "grab" },
            "&:focus": {
              outline: "none",
            },
            alignSelf: "center",
          }}
          {...attributes}
          {...listeners}
        />
        <Box>
          <Typography variant="h6">{item.text}</Typography>
          <Box>
            <OptionsList items={item.options} />
          </Box>
          <Button variant="text">Add Option</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default QuestionItem;
