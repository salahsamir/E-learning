import { Avatar, Box, Typography } from "@mui/material";
import { useGetChat } from "api/global/messages.tsx";
import { useGetProfile } from "api/global/profile.tsx";
import VideoPlayer from "features/VideoPlayer/index.tsx";
import useGetParams from "hooks/useGetParams";
import React, { forwardRef } from "react";
import Attached from "./Attached";
import AudioPlayer from "./AudioPlayer";
let timeOutId = 0;
const Message = forwardRef(({ message }, ref) => {
  const { data: currentUser } = useGetProfile();
  const isLocal = currentUser?._id === message.from;
  const params = useGetParams();
  const { data: chat } = useGetChat({ id: params[0] });
  const sender = chat?.participants.find(
    (participant) => participant._id === message.from
  );
  let mediaType = message.media?.typeOfMedia;
  let messageDate = new Date(+message.time);
  const getMedia = () => {
    if (!message.media) return null;
    switch (mediaType) {
      case "audio":
        return <AudioPlayer item={message.media} isLocal={isLocal} />;
      case "video":
        const mediaUrl = message.media.url;
        return (
          <Box
            sx={{
              maxHeight: "300px",
              width: "100%",
              maxWidth: "400px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <VideoPlayer src={mediaUrl} />
          </Box>
        );
      case "image":
        return (
          <img
            src={message.media.url}
            alt="media"
            style={{ maxHeight: "200px", maxWidth: "80%" }}
            onError={(e) => {
              console.log("error");
              clearTimeout(timeOutId);
              timeOutId = setTimeout(() => {
                e.target.src = e.target.src + "?t=" + new Date().getTime();
              }, 1000);
            }}
          />
        );
      default:
        mediaType = "document";
        return <Attached item={message.media} isLocal={isLocal} />;
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.5em",
        height: "fit-content",
        justifyContent: isLocal ? "flex-end" : "flex-start",
        alignItems: "flex-end",
      }}
      ref={ref}
    >
      {!isLocal && (
        <Avatar
          sx={{ height: "30px", width: "30px" }}
          src={sender?.profilePic?.url}
        ></Avatar>
      )}
      <Box
        sx={{
          padding: "0.5em",
          borderRadius: "8px",
          borderBottomLeftRadius: isLocal ? "8px" : "0px",
          borderBottomRightRadius: isLocal ? "0px" : "8px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          alignItems: isLocal ? "flex-end" : "flex-start",
          color: (theme) =>
            isLocal
              ? "white"
              : theme.palette.mode === "light"
              ? "black"
              : "text.primary",
          backgroundColor: (theme) =>
            !message.text && mediaType !== "document" && mediaType !== "audio"
              ? "transparent"
              : isLocal
              ? theme.palette.mode === "light"
                ? "primary.700"
                : "primary.700"
              : theme.palette.mode === "light"
              ? "rgba(0,0,0,0.1)"
              : "rgba(255,255,255,0.1)",
        }}
      >
        {getMedia()}
        <Typography
          variant="body1"
          sx={{
            wordBreak: "break-word",
          }}
        >
          {message.text}
        </Typography>
        <Typography
          variant="caption"
          color={
            isLocal &&
            (message.text || mediaType === "document" || mediaType === "audio")
              ? "#c4edd4"
              : "text.secondary"
          }
        >
          {!isLocal && sender?.userName + " - "}
          {messageDate.getDay() - new Date().getDay() > 1
            ? messageDate.toLocaleDateString()
            : messageDate.toLocaleTimeString()}
        </Typography>
      </Box>
    </Box>
  );
});

export default Message;
