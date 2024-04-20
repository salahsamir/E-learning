import { MoreHoriz } from "@mui/icons-material";
import { Avatar, IconButton, Typography } from "@mui/material";
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
      if (participant._id !== user._id) {
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
        <Avatar src={chatImage} />
        <Typography variant="body1" fontWeight="600">
          {chatName}
        </Typography>
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
