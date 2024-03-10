import {
  Add,
  ArticleOutlined,
  AttachFileOutlined,
  RadioButtonCheckedOutlined,
} from "@mui/icons-material";
import { Box, Button, ClickAwayListener, Divider, alpha } from "@mui/material";
import { useAddQuestion } from "api/instructor/quiz.tsx";
import React, { useState } from "react";
const HorizontalDivider = () => {
  return (
    <Divider
      orientation="vertical"
      flexItem
      sx={{
        opacity: 0.5,
        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.5),
      }}
    />
  );
};
const AddQuestion = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { mutate: addQuestion } = useAddQuestion();
  return (
    <ClickAwayListener onClickAway={() => setMenuOpened(false)}>
      <Box my="1em">
        <Button
          variant="outlined"
          startIcon={<Add />}
          onClick={() => setMenuOpened((old) => !old)}
        >
          Add Question
        </Button>
        <Box
          sx={{
            display: menuOpened ? "flex" : "none",
            width: "fit-content",
            my: "0.5em",
            borderRadius: "4px",
            border: (theme) =>
              `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
          }}
        >
          <Button
            variant="text"
            startIcon={<RadioButtonCheckedOutlined />}
            onClick={() => addQuestion({ type: "mcq" })}
          >
            MCQ
          </Button>
          <HorizontalDivider />
          <Button
            variant="text"
            startIcon={<ArticleOutlined />}
            onClick={() => addQuestion({ type: "text" })}
          >
            Text
          </Button>
          <HorizontalDivider />
          <Button
            variant="text"
            startIcon={<AttachFileOutlined />}
            onClick={() => addQuestion({ type: "file" })}
          >
            File
          </Button>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default AddQuestion;
