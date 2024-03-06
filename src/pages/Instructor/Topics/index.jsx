import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import TopicsList from "./Components/TopicsList/TopicsList";
import { Helmet } from "react-helmet";
import NewTopicButton from "./Components/NewTopicButtom/NewTopicButton";
import useGetParams from "hooks/useGetParams";
import ErrorPage from "../Error";
import EmptyState from "../shared/Components/EmptyState/EmptyState";
import useGetTopics from "api/instructor/topics.tsx";
import NavigationHeader from "./Components/NavigationHeader/NavigationHeader";
function LoadingSkeleton() {
  return (
    <Box display="flex" flexDirection="column" gap="0.25em">
      {["s1", "s2", "s3", "s4", "s5"].map((id) => (
        <Skeleton
          height="40px"
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
function Topics() {
  const params = useGetParams();
  const {
    data,
    isLoading: topicsLoading,
    error: topicsError,
  } = useGetTopics(params[1], params[0]);
  const topicsList = data?.curriculum;
  if (topicsError?.response?.status < 500) {
    return <ErrorPage error={topicsError} redirectTo={`/instructor/courses`} />;
  }
  return (
    <Box>
      <Helmet>
        <title>{data?.chapter.title || "chapter"} | Eduvation</title>
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
        <Typography variant="h5">Topics List</Typography>
        <NewTopicButton />
      </Box>
      <NavigationHeader data={data} />
      <Box>
        {topicsLoading && <LoadingSkeleton />}
        {!topicsLoading && topicsList.length > 0 && (
          <TopicsList items={topicsList} />
        )}
        {!topicsLoading && topicsList.length === 0 && (
          <Box
            height="calc(100vh - 152px)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <EmptyState
              title="No Topics Found"
              description="Create a new topic to get started"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Topics;
