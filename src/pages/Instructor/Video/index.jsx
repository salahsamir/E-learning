import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import VideoForm from "./Components/VideoForm/VideoForm";
import { Helmet } from "react-helmet";
import useGetParams from "hooks/useGetParams";
import useGetVideo from "api/instructor/video.tsx";
import NavigationHeader from "./Components/NavigationHeader/NavigationHeader";

function Video() {
  const params = useGetParams();
  const { data: topicData, isLoading: loadingTopic } = useGetVideo(
    params[3],
    params[2],
    params[0]
  );
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
        <NavigationHeader data={topicData} />
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