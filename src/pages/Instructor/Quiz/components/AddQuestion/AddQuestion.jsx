import {
  Add,
  ArticleOutlined,
  AttachFileOutlined,
  RadioButtonCheckedOutlined,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
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
  const { mutate: addQuestion, isPending: loadingQuestion } = useAddQuestion();
  const handleAddQuestion = (type) => {
    addQuestion({ type });
    setMenuOpened(false);
  };
  return (
    <ClickAwayListener onClickAway={() => setMenuOpened(false)}>
      <Box my="1em">
        <LoadingButton
          variant="outlined"
          startIcon={<Add />}
          loading={loadingQuestion}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          Add Question
        </LoadingButton>
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
            onClick={() => handleAddQuestion("mcq")}
          >
            MCQ
          </Button>
          <HorizontalDivider />
          <Button
            variant="text"
            startIcon={<ArticleOutlined />}
            onClick={() => handleAddQuestion("text")}
          >
            Text
          </Button>
          <HorizontalDivider />
          <Button
            variant="text"
            startIcon={<AttachFileOutlined />}
            onClick={() => handleAddQuestion("file")}
          >
            File
          </Button>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default AddQuestion;
