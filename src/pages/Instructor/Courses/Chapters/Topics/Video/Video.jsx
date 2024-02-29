import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import VideoForm from "./Components/VideoForm/VideoForm";
import { Helmet } from "react-helmet";
import useGetData from "hooks/useGetData";
import useGetParams from "hooks/useGetParams";
import { BaseApi } from "util/BaseApi";

function Video() {
  const params = useGetParams();
  const { data: topicResult, loading: loadingTopic } = useGetData(
    BaseApi +
      `/course/${params[3]}/chapter/${params[2]}/curriculum/${params[0]}`
  );
  const topicData = topicResult?.video;
  console.log(topicData);
  return (
    <>
      <Helmet>
        <title>{topicData?.title || "Edit Video"} | Eduvation</title>
      </Helmet>
      <Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          my="1em"
        >
          <Typography variant="h5" component="h2">
            Edit Video
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.background.b1,
            padding: "1em",
            borderRadius: "8px",
          }}
        >
          {loadingTopic ? (
            <CircularProgress />
          ) : (
            <VideoForm video={topicData} />
          )}
        </Box>
      </Box>
    </>
  );
}

export default Video;
