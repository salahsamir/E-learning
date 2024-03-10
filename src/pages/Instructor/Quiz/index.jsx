import { Box, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import { useGetQuiz } from "api/instructor/quiz.tsx";
import QuizSettings from "./components/QuizSettings/QuizSettings";
import QuizHeader from "./components/QuizHeader/QuizHeader";
import AddQuestion from "./components/AddQuestion/AddQuestion";
import QuestionsList from "./components/QuestionsList/QuestionsList";

function Quiz() {
  const { data: quiz, isLoading: quizLoading } = useGetQuiz();
  return (
    <>
      <Helmet>
        <title>{quiz?.title || "Edit quiz"} | Eduvation</title>
      </Helmet>
      <Box
        mb="1em"
        component="form"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          height: "36px",
        }}
      >
        <Typography variant="h5">Edit Quiz</Typography>
        <QuizSettings data={quiz} />
      </Box>
      <NavigationHeader data={quiz} />
      <QuizHeader quiz={quiz} />
      <QuestionsList />
      <AddQuestion />
    </>
  );
}

export default Quiz;
