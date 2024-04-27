import { MoreHoriz } from "@mui/icons-material";
import { Avatar, IconButton, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useGetChat } from "api/global/messages.tsx";
import { useGetProfile } from "api/global/profile.tsx";
import useGetParams from "hooks/useGetParams";
import React from "react";

const Header = () => {
  const params = useGetParams();
  const { data: chat } = useGetChat({ id: params[0] });
  const { data: user } = useGetProfile();
  let chatName = chat?.name;
  let chatImage = chat?._img;
  if (chat?.type === "private") {
    chat.participants.forEach((participant) => {
      if (participant._id !== user?._id) {
        chatName = participant.userName;
        chatImage = participant?.profilePic?.url;
      }
    });
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        height: "75px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {chat ? (
          <Avatar src={chatImage} />
        ) : (
          <Skeleton variant="circular" width="40px" height="40px" />
        )}
        {chat ? (
          <Typography variant="body1" fontWeight="600">
            {chatName}
          </Typography>
        ) : (
          <Skeleton variant="text" width="150px" height="20px" />
        )}
      </Box>
      <Box>
        <IconButton
          sx={{
            padding: "4px",
          }}
        >
          <MoreHoriz />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
