import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useGetParams from "hooks/useGetParams";
import React from "react";
import { useNavigate } from "react-router";

const Contact = ({ id, name, message, avatar }) => {
  const navigate = useNavigate();
  const params = useGetParams();
  console.log(params);
  const handleNavigation = () => {
    if (params[0] === id) return;
    navigate(`/${params[params.length - 2]}/messages/${id}`);
  };
  const isActive = params[0] === String(id);
  console.log(isActive);
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
      <Avatar src={avatar} />
      <Box>
        <Typography variant="body1" fontWeight="400">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
