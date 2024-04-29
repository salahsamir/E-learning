import { Box, Button, Typography } from "@mui/material";
import VideoPlayer from "features/VideoPlayer/index.tsx";
import React from "react";
import AvatarBox from "../AvatarBox";
import styled from "@emotion/styled";
import { FavoriteBorderOutlined, ShareOutlined } from "@mui/icons-material";
import WorkshopFeatures from "./WorkshopFeatures";

const TextButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  gap: "4px",
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.light,
  },
}));
const MainContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box borderRadius="16px" overflow="hidden">
        <VideoPlayer src="https://www.youtube.com/watch?v=cljOD7vb2lk&ab_channel=Afforestt" />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        my="16px"
      >
        <AvatarBox />
        <Box display="flex" alignItems="center" gap="4px">
          <TextButton variant="text">
            <FavoriteBorderOutlined /> 982
          </TextButton>
          <TextButton variant="text">
            <ShareOutlined /> Share
          </TextButton>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" color="text.primary" my="8px">
          Description
        </Typography>
        <Typography variant="bod2" color="text.secondary">
          Join this bestselling MongoDB course to learn all about this extremely
          popular database and query language from the ground up, in great
          detail and with many practical examples! - MongoDB is one of the most
          important NoSQL databases you can work with. It's extremely popular
          and MongoDB developers are in high demand! No matter if you're
          building web applications, mobile applications or any other kind of
          application or if you're a data scientist - you'll need to work with
          data. Storing data, querying it efficiently and minimizing
          complexities whilst optimizing performance are crucial tasks. MongoDB
          makes working with data simple - it's built on a philosophy that
          prioritizes performance and efficiency. In this course, you learn all
          about MongoDB from scratch. No prior MongoDB or database experience is
          required!
        </Typography>
      </Box>
      <WorkshopFeatures />
    </Box>
  );
};

export default MainContainer;
