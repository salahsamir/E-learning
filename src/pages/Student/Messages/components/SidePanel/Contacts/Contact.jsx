import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useGetParams from "hooks/useGetParams";
import React from "react";
import { useNavigate } from "react-router";

const Contact = ({ chat }) => {
  const navigate = useNavigate();
  const params = useGetParams();
  const handleNavigation = () => {
    if (params[0] === chat._id) return;
    navigate(`/${params[params.length - 2]}/messages/${chat._id}`);
  };
  const isActive = params[0] === String(chat._id);
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        borderRadius: "8px",
        padding: "8px",
        backgroundColor: isActive
          ? (theme) => theme.palette.action.selected
          : "transparent",
        "&:hover": {
          backgroundColor: (theme) =>
            isActive
              ? theme.palette.action.selected
              : theme.palette.action.hover,
          cursor: "pointer",
        },
      }}
      onClick={handleNavigation}
    >
      <Avatar src={chat._img} />
      <Box>
        <Typography variant="body1" fontWeight="400">
          {chat.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {chat.messages?.[0]?.text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
