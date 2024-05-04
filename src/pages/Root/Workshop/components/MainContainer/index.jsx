import { Box, Button, Typography } from "@mui/material";
import VideoPlayer from "features/VideoPlayer/index.tsx";
import React from "react";
import AvatarBox from "../AvatarBox";
import styled from "@emotion/styled";
import { FavoriteBorderOutlined, ShareOutlined } from "@mui/icons-material";
import WorkshopFeatures from "./WorkshopFeatures";
import Requirements from "./Requirements";
import toast from "react-hot-toast";

const TextButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  gap: "4px",
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.light,
  },
}));
const MainContainer = ({ workshop }) => {
  const instructor = workshop.instructor;
  const handleShare = () => {
    navigator.clipboard.writeText([window.location.href]);
    toast.success("Link copied to clipboard successfully");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box borderRadius="16px" overflow="hidden">
        <VideoPlayer src={workshop.promotionVideo?.url} />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        my="16px"
      >
        <AvatarBox
          name={instructor?.userName}
          image={instructor?.profilePic?.url}
          occupation={instructor?.occupation}
        />
        <Box display="flex" alignItems="center" gap="4px">
          <TextButton variant="text">
            <FavoriteBorderOutlined /> {workshop.likes || "unknown"}
          </TextButton>
          <TextButton variant="text" onClick={handleShare}>
            <ShareOutlined /> Share
          </TextButton>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" color="text.primary" my="8px">
          Description
        </Typography>
        <Typography
          variant="bod2"
          color="text.secondary"
          component={"div"}
          dangerouslySetInnerHTML={{ __html: workshop.description }}
        />
      </Box>
      <WorkshopFeatures workshop={workshop} />
      <Requirements requirements={workshop.requirements || []} />
    </Box>
  );
};

export default MainContainer;
