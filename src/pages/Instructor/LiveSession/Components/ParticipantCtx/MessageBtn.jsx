import { Email } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { useGetChatByUser } from "api/global/messages.tsx";
import React from "react";

const MessageBtn = ({ userId }) => {
  const { mutate: getChat } = useGetChatByUser({
    onSuccess: (chat) => {
      window.open(
        window.location.protocol +
          "//" +
          window.location.host +
          "/student/messages/" +
          chat._id
      );
    },
  });
  return (
    <MenuItem
      onClick={() =>
        getChat({
          userId: userId,
        })
      }
    >
      <ListItemIcon>
        <Email />
      </ListItemIcon>
      <ListItemText>Message </ListItemText>
    </MenuItem>
  );
};

export default MessageBtn;
