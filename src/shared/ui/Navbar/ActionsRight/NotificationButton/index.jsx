import styled from "@emotion/styled";
import { NotificationsNoneOutlined } from "@mui/icons-material";
import { Badge, IconButton, Popover } from "@mui/material";
import { useGetProfile } from "api/global/profile.tsx";
import Notifications from "features/Notifications";
import React, { useState } from "react";
const CustomBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 4,
    top: 3,
    fontSize: "10px",
    height: "16px",
    width: "16px",
    lineHeight: "16px",
    minWidth: "16px",
    padding: 0,
    color: "white",
  },
}));
const NotificationButton = () => {
  const { data: user } = useGetProfile();
  const [notifiMenuIsOpen, setNotifiMenuIsOpen] = useState(false);
  const [notifiEl, setNotifiEl] = useState(null);
  function notifiClickHandler(event) {
    setNotifiEl(event.currentTarget);
    setNotifiMenuIsOpen(true);
  }
  return (
    <>
      <IconButton
        aria-label="notifications"
        onClick={notifiClickHandler}
        sx={{
          p: "4px",
        }}
      >
        <CustomBadge
          badgeContent={user?.unreadNotifyCount || 0}
          color="primary"
        >
          <NotificationsNoneOutlined
            sx={{
              fontSize: "24px",
              color: (theme) =>
                notifiMenuIsOpen ? "primary.main" : theme.palette.primary.svg,
              transition: "color 0.3s",
            }}
          />
        </CustomBadge>
      </IconButton>
      <Popover
        open={notifiMenuIsOpen}
        anchorEl={notifiEl}
        slotProps={{
          paper: {
            sx: {
              borderRadius: "12px",
              overflow: "hidden",
              backgroundImage: "none",
              backgroundColor: "transparent",
            },
          },
        }}
        sx={{
          top: 20,
          overflow: "hidden",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={() => setNotifiMenuIsOpen(false)}
      >
        <Notifications />
      </Popover>
    </>
  );
};

export default NotificationButton;
