import { Done, DoneAll } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useGetProfile } from "api/global/profile.tsx";
import useGetParams from "hooks/useGetParams";
import React from "react";
import { useNavigate } from "react-router";

const Contact = ({ chat }) => {
  const navigate = useNavigate();
  const params = useGetParams();
  const { data: user } = useGetProfile();
  const handleNavigation = () => {
    if (params[0] === chat._id) return;
    navigate(`/${params[params.length - 2]}/messages/${chat._id}`);
  };

  const isActive = params[0] === String(chat._id);
  const isLocalMessage =
    chat.messages[chat.messages.length - 1]?.from === user?._id;
  const isLastMessageRead = chat.messages[chat.messages.length - 1]?.read;
  let chatImage = chat._img;
  let chatName = chat.name;
  if (chat.type === "private") {
    chat.participants.forEach((participant) => {
      if (participant._id !== user?._id) {
        chatImage = participant?.profilePic?.url;
        chatName = participant.userName;
      }
    });
  }
  const getLastMessage = () => {
    if (!chat.messages || chat?.messages?.length === 0) return null;
    const lastMessage = chat.messages[chat.messages.length - 1];
    if (lastMessage.text === undefined && lastMessage.media === undefined)
      return null;
    if (lastMessage.text) return lastMessage.text;
    if (lastMessage.media) return "sent media file";
  };
  const getLastMessageTime = () => {
    if (!chat.messages || chat?.messages?.length === 0) return null;
    const lastMessage = chat.messages[chat.messages.length - 1];
    const timePassed = Math.round(
      (new Date().getTime() - +lastMessage.time) / 1000 / 60
    );
    if (timePassed < 1) return "Just now";
    if (timePassed < 60) return `${timePassed} min`;
    if (timePassed < 1440) return `${Math.round(timePassed / 60)} h`;
    if (timePassed < 10080) return `${Math.round(timePassed / 1440)} days`;
    if (timePassed < 43800) return `${Math.round(timePassed / 10080)} weeks`;
    if (timePassed < 525600) return `${Math.round(timePassed / 43800)} months`;
    if (timePassed >= 525600) return `${Math.round(timePassed / 525600)} years`;
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "16px",
        borderRadius: "8px",
        padding: "8px",
        maxWidth: "100%",
        backgroundColor: isActive
          ? (theme) => theme.palette.action.selected
          : "transparent",
        "&:hover": {
          backgroundColor: (theme) =>
            isActive
              ? theme.palette.action.selected
              : theme.palette.action.hover,
          cursor: "pointer",
        },
      }}
      onClick={handleNavigation}
    >
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          overflow: "clip",
          flexShrink: 10,
          flexGrow: 10,
          maxWidth: "100%",
          textOverflow: "ellipsis",
          minWidth: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            src={chatImage}
            variant="rounded"
            sx={{
              borderRadius: "8px",
              height: "50px",
              width: "50px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "4px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Typography variant="body1" fontWeight="400" noWrap>
            {chatName}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
          >
            {isLocalMessage && (
              <>
                <Done
                  sx={{
                    color: "text.secondary",
                    fontSize: "16px",
                    display: isLastMessageRead ? "block" : "none",
                  }}
                />
                <DoneAll
                  sx={{
                    color: "primary.main",
                    fontSize: "16px",
                    display: isLastMessageRead ? "none" : "block",
                  }}
                />
              </>
            )}

            <Typography variant="body2" color="text.secondary" noWrap>
              {getLastMessage()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Typography variant="body2" color="text.secondary" noWrap>
          {getLastMessageTime()}
        </Typography>
        <Box
          sx={{
            height: "8px",
            width: "8px",
            borderRadius: "50%",
            backgroundColor: "primary.main",
            opacity: chat.unread ? 1 : 0,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Contact;
