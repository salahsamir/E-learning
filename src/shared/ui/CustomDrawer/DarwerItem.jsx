import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
function DarwerItem({ text, url, icon, open }) {
  const currentPath = useLocation().pathname;
  const itemIsActive = currentPath.endsWith(url);
  const navigate = useNavigate();
  return (
    <ListItem
      key={text}
      disablePadding
      sx={{ display: "block", overflow: "hidden" }}
    >
      <ListItemButton
        selected={itemIsActive}
        onClick={() => navigate(url)}
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
          color: itemIsActive ? "primary.main" : "inherit",
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
            color: itemIsActive ? "primary.main" : "inherit",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{
            opacity: open ? 1 : 0,
            "& span": {
              fontWeight: itemIsActive ? "600" : "400",
            },
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default DarwerItem;
