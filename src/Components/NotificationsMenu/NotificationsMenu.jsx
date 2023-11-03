import { Divider, List, Paper } from "@mui/material";
import React from "react";
import NotficationItem from "./NotficationItem";

function NotificationsMenu() {
  const notifications = [
    {
      id: 1,
      avatar: "https://i.pravatar.cc/300",
      title: "New message",
      description: "Hey! How is it going?",
      url: "/profile/messages",
    },
    {
      id: 2,
      avatar: "https://i.pravatar.cc/400",
      title: "New Comment",
      description: "I really like this post!",
      url: "/profile/comments",
    },
    {
      id: 3,
      avatar: "https://i.pravatar.cc/500",
      title: "New message",
      description:
        "Hey! How is it going? I really like this post! Hey! How is it going? I really like this post!",
      url: "/profile/messages",
    },
    {
      id: 4,
      avatar: "https://i.pravatar.cc/600",
      title: "New Comment",
      description: "I really like this post!",
      url: "/profile/comments",
    },
    {
      id: 5,
      avatar: "https://i.pravatar.cc/500",
      title: "New message",
      description:
        "Hey! How is it going? I really like this post! Hey! How is it going? I really like this post!",
      url: "/profile/messages",
    },
    {
      id: 6,
      avatar: "https://i.pravatar.cc/600",
      title: "New Comment",
      description: "I really like this post!",
      url: "/profile/comments",
    },
  ];
  return (
    <Paper
      sx={{
        width: "320px",
        maxHeight: "350px",
        maxWidth: "100%",
        backgroundColor: (theme) => theme.palette.background.b1,
        borderRadius: 0,
        overflowY: "auto",
      }}
    >
      <List>
        {notifications.map((notification, index) => (
          <>
            <NotficationItem
              key={index + Math.random() * 10}
              avatar={notification.avatar}
              title={notification.title}
              description={notification.description}
              url={notification.url}
            />
            {index !== notifications.length - 1 && <Divider variant="inset" />}
          </>
        ))}
      </List>
    </Paper>
  );
}

export default NotificationsMenu;
