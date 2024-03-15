import { useSortable } from "@dnd-kit/sortable";
import { Box, ClickAwayListener, darken, lighten } from "@mui/material";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";
import { DragIndicator } from "@mui/icons-material";
import OptionsList from "../../OptionsList/OptionsList";
import { useAddOption } from "api/instructor/quiz.tsx";
import { LoadingButton } from "@mui/lab";
import { useDndMonitor } from "@dnd-kit/core";
import QuestionHeader from "./QuestionHeader";

function QuestionItem({
  item,
  questionIndex,
  expandedQuestion,
  setExpandedQuestion,
}) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: item.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const { mutate: addOption, isPending: loadingOption } = useAddOption();
  const [dragging, setDragging] = useState(false);
  useDndMonitor({
    // onDragStart: (e) => setDragging(true),
    onDragMove: (e) => setDragging(true),
    onDragEnd: (e) => setDragging(false),
  });
  const isExpanded = expandedQuestion === item.id;
  const handleClickAway = () => {
    if (isExpanded) {
      setExpandedQuestion(null);
    }
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box ref={setNodeRef} style={style}>
        <Box
          sx={{
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: "8px",
            padding: "0.5em 1em 1em",
            display: "flex",
            flexDirection: "column",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? lighten(theme.palette.background.b1, isExpanded ? 0.02 : 0)
                : darken(theme.palette.background.b1, isExpanded ? 0.04 : 0),
            transition: "ease 0.25s",
            "&:hover": {
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? lighten(theme.palette.background.b1, 0.02)
                  : darken(theme.palette.background.b1, 0.04),
              cursor: isExpanded ? "auto" : "pointer",
            },
          }}
          onClick={() => setExpandedQuestion(item.id)}
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
            <QuestionHeader
              isExpanded={isExpanded}
              item={item}
              questionIndex={questionIndex}
              dragging={dragging}
            />
            {!dragging && (
              <>
                <OptionsList
                  items={item.options || []}
                  questionId={item.id}
                  isExpanded={isExpanded}
                />
                <LoadingButton
                  variant="text"
                  loading={loadingOption}
                  onClick={() => addOption(item.id)}
                  className="add-option-button"
                  sx={{
                    display: isExpanded ? "block" : "none",
                  }}
                >
                  Add Option
                </LoadingButton>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </ClickAwayListener>
  );
}

export default QuestionItem;
