import styled from "@emotion/styled";
import { NotificationsNoneOutlined } from "@mui/icons-material";
import { Badge, IconButton, Popover } from "@mui/material";
import NotificationsMenu from "Components/NotificationsMenu/NotificationsMenu";
import React, { useState } from "react";
const CustomBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 2,
    fontSize: "0.5em",
    height: "16px",
    width: "16px",
    lineHeight: "16px",
    minWidth: "16px",
    padding: 0,
  },
}));
const NotificationButton = () => {
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
        sx={{ p: "4px" }}
      >
        <CustomBadge badgeContent={1} color="error">
          <NotificationsNoneOutlined
            sx={{
              fontSize: "24px",
              color: (theme) => theme.palette.primary.svg,
            }}
          />
        </CustomBadge>
      </IconButton>
      <Popover
        open={notifiMenuIsOpen}
        anchorEl={notifiEl}
        sx={{ top: 12 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={() => setNotifiMenuIsOpen(false)}
      >
        <NotificationsMenu />
      </Popover>
    </>
  );
};

export default NotificationButton;
