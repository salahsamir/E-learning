import { AccountCircle } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import React from "react";

const ProfileBtn = ({ userInfo }) => {
  return (
    <MenuItem
      component={"a"}
      href={
        window.location.protocol +
        "//" +
        window.location.host +
        "/profile/" +
        userInfo?.userId
      }
      target="_blank"
    >
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
      <ListItemText>Profile</ListItemText>
    </MenuItem>
  );
};

export default ProfileBtn;
