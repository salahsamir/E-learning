import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import ChaptersList from "./Components/ChaptersList/ChaptersList";
import NewChapter from "./Components/NewChapter/NewChapter";
import { Helmet } from "react-helmet";
import ErrorPage from "../Error";
import useGetParams from "hooks/useGetParams";
import EmptyState from "../shared/Components/EmptyState/EmptyState";
import useGetChapters from "api/instructor/chapters.tsx";
import NavigationHeader from "./Components/NavigationHeader/NavigationHeader";
function LoadingSkeleton() {
  return (
    <Box display="flex" flexDirection="column" gap="0.5em">
      {["s1", "s2", "s3"].map((id) => (
        <Skeleton
          height="50px"
          key={id}
          variant="rectangular"
          width="100%"
          animation="wave"
          sx={{
            backgroundColor: (theme) => theme.palette.background.b1,
            "::after": {
              animationDuration: "0.5s",
            },
          }}
        />
      ))}
    </Box>
  );
}
function Chapters() {
  const params = useGetParams();
  const {
    data,
    isLoading: chaptersLoading,
    error: chaptersError,
  } = useGetChapters(params[0]);
  const chaptersList = data?.chapters;
  if (chaptersError?.response?.status < 500) {
    return <ErrorPage error={chaptersError} redirectTo="/instructor/courses" />;
  }
  return (
    <Box>
      <Helmet>
        <title>{data?.course.title || "course"} | Eduvation</title>
      </Helmet>
      <Box
        mb="1em"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          height: "36px",
        }}
      >
        <Typography variant="h5">Chapters List</Typography>
        <NewChapter />
      </Box>
      <NavigationHeader data={data} />
      <Box>
        {chaptersLoading && <LoadingSkeleton />}
        {!chaptersLoading && chaptersList.length > 0 && (
          <ChaptersList items={chaptersList} />
        )}
        {!chaptersLoading && chaptersList.length === 0 && (
          <Box
            height="calc(100vh - 152px)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <EmptyState
              title="No Chapters Found"
              description="Create a new chapter to get started"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Chapters;
