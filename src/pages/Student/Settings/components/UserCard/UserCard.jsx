import { Box, Button, Divider, Typography, alpha } from "@mui/material";
import React from "react";
import ProfileImage from "./ProfileImage/ProfileImage";

const UserCard = () => {
  return (
    <Box
      sx={{
        width: "350px",
        height: "fit-content",
        borderRadius: "4px",
        backgroundColor: (theme) =>
          alpha(theme.palette.background.default, 0.8),
        border: (theme) => `1px solid ${theme.palette.primary.border}`,
      }}
    >
      <Box p="20px" display="flex" alignItems="center" flexDirection="column">
        <ProfileImage />
        <Typography variant="body1" fontWeight="600" mt="16px">
          Osama Safwat
        </Typography>
        <Typography variant="body2" color="textSecondary" mt="8px">
          student
        </Typography>
      </Box>
      <Divider />
      <Box px="16px">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py="16px"
        >
          <Typography variant="body2">Personal Information</Typography>
          <Typography variant="body2">16</Typography>
        </Box>
        <Divider />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py="16px"
        >
          <Typography variant="body2">Personal Information</Typography>
          <Typography variant="body2">16</Typography>
        </Box>
        <Divider />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py="16px"
        >
          <Typography variant="body2">Personal Information</Typography>
          <Typography variant="body2">16</Typography>
        </Box>
      </Box>
      <Divider />
      <Box display="flex" justifyContent="center" p="16px">
        <Button variant="outlined">View Public Profile</Button>
      </Box>
    </Box>
  );
};

export default UserCard;
