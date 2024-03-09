import { Box, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import { useGetQuiz } from "api/instructor/quiz.tsx";
import QuizSettings from "./components/QuizSettings/QuizSettings";

function Quiz() {
  const { data: quiz, isLoading: quizLoading } = useGetQuiz();
  console.log(quiz);
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
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.b1,
          padding: "1em",
          borderRadius: "8px",
        }}
      ></Box>
    </>
  );
}

export default Quiz;
