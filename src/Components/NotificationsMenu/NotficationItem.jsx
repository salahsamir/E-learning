import { Notifications } from "@mui/icons-material";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function NotficationItem({ avatar, title, description, url }) {
  const navigate = useNavigate();
  return (
    <ListItemButton sx={{ p: 0 }}>
      <ListItem onClick={() => navigate(url)}>
        <ListItemAvatar>
          {avatar ? <Avatar src={avatar} /> : <Notifications />}
        </ListItemAvatar>
        <ListItemText>
          <Typography
            aria-label="title"
            variant="body1"
            component="h3"
            fontWeight="600"
          >
            {title}
          </Typography>
          <Typography aria-label="description" variant="body2" component="p">
            {description.trim().length > 50
              ? description.trim().substring(0, 50) + "..."
              : description}
          </Typography>
        </ListItemText>
      </ListItem>
    </ListItemButton>
  );
}

export default NotficationItem;
