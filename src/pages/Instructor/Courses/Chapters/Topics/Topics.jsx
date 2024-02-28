import { Box, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TopicsList from "./Components/TopicsList/TopicsList";
import NewTopic from "./Components/NewTopic/NewTopic";
import { Helmet } from "react-helmet";
import useGetParams from "../../../../../hooks/useGetParams";
import { BaseApi } from "../../../../../util/BaseApi";
import useGetData from "../../../../../hooks/useGetData";
import EmptyState from "../../../Components/EmptyState/EmptyState";
import ErrorPage from "../../../Error/ErrorPage";
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
    data: topicsData,
    loading: loadingTopicsData,
    error: errorTopicsData,
  } = useGetData(
    BaseApi + `/course/${params[1]}/chapter/${params[0]}/curriculum`
  );
  const [topicsList, setTopicsList] = useState([]);
  useEffect(() => {
    if (topicsData) {
      const modifiedList = [...topicsData.curriculum];
      modifiedList.map((topic) => {
        topic.id = topic._id;
        return topic;
      });
      setTopicsList(modifiedList);
    }
  }, [topicsData]);

  if (errorTopicsData?.response?.status < 500) {
    return (
      <ErrorPage error={errorTopicsData} redirectTo={`/instructor/courses`} />
    );
  }
  return (
    <Box>
      <Helmet>
        <title>Topics List | Eduvation</title>
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
        <NewTopic />
      </Box>
      <Box>
        {loadingTopicsData && <LoadingSkeleton />}
        {!loadingTopicsData && topicsList.length > 0 && (
          <TopicsList items={topicsList} setItems={setTopicsList} />
        )}
        {!loadingTopicsData && topicsList.length === 0 && (
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
