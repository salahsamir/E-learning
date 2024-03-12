import { useSortable } from "@dnd-kit/sortable";
import {
  Box,
  ClickAwayListener,
  Typography,
  darken,
  lighten,
} from "@mui/material";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { DragIndicator } from "@mui/icons-material";
import OptionsList from "../../OptionsList/OptionsList";
import { useAddOption } from "api/instructor/quiz.tsx";
import { LoadingButton } from "@mui/lab";
import DeleteQuestion from "./DeleteQuestion";

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
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">
                <Typography
                  variant="body1"
                  component={"span"}
                >{`${questionIndex}. `}</Typography>
                {item.text}
              </Typography>
              <DeleteQuestion questionId={item.id} isExpanded={isExpanded} />
            </Box>

            <Box>
              <OptionsList
                items={item.options}
                questionId={item.id}
                isExpanded={isExpanded}
              />
            </Box>
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
          </Box>
        </Box>
      </Box>
    </ClickAwayListener>
  );
}

export default QuestionItem;
