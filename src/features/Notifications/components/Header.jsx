import { TaskAlt } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useMarkNotificationAsRead } from "api/global/notifications.tsx";
import { useGetProfile } from "api/global/profile.tsx";
import React from "react";

const MarkAllAsRead = () => {
  const { mutate: markNotification, isPending } = useMarkNotificationAsRead();
  const { data: user } = useGetProfile();
  const handleMarkAllAsRead = () => {
    if (user?.unreadNotifyCount === 0) return;
    if (isPending) return;
    markNotification();
  };
  return (
    <Button
      aria-label="Mark all notifications as read"
      variant="text"
      disableElevation
      disableFocusRipple
      disableRipple
      disableTouchRipple
      disabled={isPending}
      onClick={handleMarkAllAsRead}
      sx={{
        display: "flex",
        gap: "0.5em",
        color: "text.secondary",
        "&:hover": {
          backgroundColor: "transparent",
        },
        "&:hover:not(:disabled)": {
          color: "text.primary",
        },
      }}
    >
      <TaskAlt fontSize="small" />
      <Typography component="span" variant="subtitle2" noWrap>
        Mark all as read
      </Typography>
    </Button>
  );
};
const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1em",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="h6" component="h1">
        Notifications
      </Typography>
      <MarkAllAsRead />
    </Box>
  );
};

export default Header;
