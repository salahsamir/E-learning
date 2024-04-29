import { Avatar, Box, Button, Link, Typography } from "@mui/material";
import { useMarkNotificationAsRead } from "api/global/notifications.tsx";
import React from "react";
import { formatTime } from "util/formatTime.ts";

const MarkReadBtn = ({ isRead, _id, markNotification, isPending }) => {
  return (
    <Button
      aria-label="Mark notification as read"
      variant="contained"
      disableElevation
      onClick={(e) => {
        e.preventDefault();
        if (isPending) return;
        markNotification(_id);
      }}
      sx={{
        position: "relative",
        height: "10px",
        width: "10px",
        minWidth: "10px",
        borderRadius: "50%",
        padding: "0",
        display: isRead ? "none" : "block",
        zIndex: 100000,
      }}
    />
  );
};
const NotificationItem = ({ _id, image, title, time, body, isRead, url }) => {
  const { mutate: markNotification, isPending } = useMarkNotificationAsRead();
  const handleNotificationClick = () => {
    if (isPending) return;
    if (!isRead) markNotification(_id);
  };
  return (
    <Box
      component={Link}
      to={url}
      width="100%"
      onClick={handleNotificationClick}
      target="_blank"
      sx={{
        display: "flex",
        gap: "1em",
        padding: "1em",
        color: "inherit",
        "&:hover": {
          color: "inherit",
          cursor: "pointer",
          backgroundColor: (theme) => theme.palette.action.hover,
        },
      }}
    >
      <Avatar src={image} />
      <Box flex="1">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">{title}</Typography>
          <MarkReadBtn
            isRead={isRead}
            _id={_id}
            isPending={isPending}
            markNotification={markNotification}
          />
        </Box>
        <Typography variant="caption" color="text.secondary" display="block">
          {formatTime(new Date(time), "time passed")}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {body}
        </Typography>
      </Box>
    </Box>
  );
};

export default NotificationItem;
