import { Box, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import { useGetVideo } from "api/instructor/video.tsx";
import NavigationHeader from "./Components/NavigationHeader/NavigationHeader";
import VideoPlayer from "features/VideoPlayer/index.tsx";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import VideoTabs from "./Components/VideoTabs";
import LoadingSpinner from "Components/LoadingSpinner";
import ErrorBox from "Components/ErrorBox";

function Video() {
  const { data: video, isLoading: loadingVideo, isError } = useGetVideo();
  return (
    <>
      <Helmet>
        <title>{video?.title || "Edit Video"} | Eduvation</title>
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
        <NavigationHeader data={video} />
        <Box
          sx={{
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            mb: "1em",
          }}
        >
          {loadingVideo ? (
            <LoadingSpinner />
          ) : isError ? (
            <ErrorBox />
          ) : (
            <Grid2 container width={{ xs: "100%", md: "70%" }}>
              <Grid2
                xs={12}
                sx={{
                  borderTopRightRadius: "8px",
                  borderTopLeftRadius: "8px",
                  overflow: "hidden",
                  display: "flex",
                }}
              >
                <VideoPlayer src={video.url} />
              </Grid2>
              <Grid2 xs={12}>
                <VideoTabs video={video} />
              </Grid2>
            </Grid2>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Video;
