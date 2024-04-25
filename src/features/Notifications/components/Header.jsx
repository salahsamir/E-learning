import { TaskAlt } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const MarkAllAsRead = () => {
  const handleMarkAllAsRead = () => {};
  return (
    <Button
      aria-label="Mark all notifications as read"
      variant="text"
      disableElevation
      disableFocusRipple
      disableRipple
      disableTouchRipple
      onClick={handleMarkAllAsRead}
      sx={{
        display: "flex",
        gap: "0.5em",
        color: "text.secondary",
        "&:hover": {
          color: "text.primary",
          backgroundColor: "transparent",
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
