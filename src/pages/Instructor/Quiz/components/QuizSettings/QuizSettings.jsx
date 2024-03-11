import { Close, Settings } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useUpdateQuiz } from "api/instructor/quiz.tsx";
import { useFormik } from "formik";
import { useState } from "react";
const CustomInput = ({ formik, id, type, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
      }}
    >
      <Typography variant="body2" component="label" htmlFor={id}>
        {children}
      </Typography>
      {type === "number" ? (
        <TextField
          id={id}
          type="number"
          variant="outlined"
          sx={{ width: "80px" }}
          size="small"
          value={formik.values[id] || "0"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched[id] && Boolean(formik.errors[id])}
          helperText={formik.touched[id] && formik.errors[id]}
        />
      ) : (
        <Switch
          id={id}
          value={formik.values[id] || false}
          checked={formik.values[id] || false}
          onChange={formik.handleChange}
        />
      )}
    </Box>
  );
};
const QuizSettings = ({ data: quiz }) => {
  const [dialoagOpened, setDialogOpened] = useState(false);
  const { mutate: updateQuiz } = useUpdateQuiz({
    onSuccess: () => setDialogOpened(false),
  });
  const handleClose = () => {
    setDialogOpened(false);
  };
  const formik = useFormik({
    initialValues: {
      timeLimit: quiz?.timeLimit || 0,
      shuffleQuestions: quiz?.shuffleQuestions || false,
      shuffleAnswers: quiz?.shuffleAnswers || false,
      showCorrectAnswer: quiz?.showCorrectAnswer || false,
      maxAttempts: quiz?.maxAttempts || 0,
      maxQuestionsInPage: quiz?.maxQuestionsInPage || 0,
      lockdown: quiz?.lockdown || false,
      numberOfQuestions: quiz?.numberOfQuestions || 0,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      updateQuiz(values);
    },
  });
  return (
    <>
      <IconButton onClick={() => setDialogOpened(true)}>
        <Settings sx={{ color: "text.primary" }} />
      </IconButton>
      <Dialog
        open={dialoagOpened}
        onClose={handleClose}
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          "& .MuiDialog-paper": {
            width: "90%",
            maxWidth: "600px",
            borderRadius: "8px",
            backgroundImage: "none",
          },
        }}
      >
        <DialogTitle
          sx={{
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: (theme) =>
              `1px solid ${theme.palette.primary.border}`,
          }}
        >
          Quiz Settings
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        {!quiz && (
          <Box
            minHeight="300px"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        )}
        {quiz && (
          <>
            <DialogContent
              sx={{
                padding: "16px !important",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <CustomInput formik={formik} id="timeLimit" type="number">
                Time Limit (in minutes)
              </CustomInput>
              <CustomInput formik={formik} id="shuffleQuestions" type="switch">
                Shuffle Questions
              </CustomInput>
              <CustomInput formik={formik} id="shuffleAnswers" type="switch">
                Shuffle Answers
              </CustomInput>
              <CustomInput formik={formik} id="showCorrectAnswer" type="switch">
                Show Correct Answer
              </CustomInput>
              <CustomInput formik={formik} id="maxAttempts" type="number">
                Maximum quiz attempts
              </CustomInput>
              <CustomInput
                formik={formik}
                id="maxQuestionsInPage"
                type="number"
              >
                Maximum questions in one page
              </CustomInput>
              <CustomInput formik={formik} id="lockdown" type="switch">
                Enable browser lockdown
              </CustomInput>
              <CustomInput formik={formik} id="numberOfQuestions" type="number">
                Number of questions
              </CustomInput>
              <Typography variant="body2" color="text.secondary">
                Note: leave input zero to use default setting
              </Typography>
            </DialogContent>
            <DialogActions
              sx={{
                borderTop: (theme) =>
                  `1px solid ${theme.palette.primary.border}`,
              }}
            >
              <Button onClick={handleClose}>Cancel</Button>
              <LoadingButton type="submit">Save</LoadingButton>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default QuizSettings;
