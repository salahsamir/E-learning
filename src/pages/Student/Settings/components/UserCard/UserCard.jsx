import { Box, Button, Divider, Link, Typography, alpha } from "@mui/material";
import React from "react";
import ProfileImage from "./ProfileImage/ProfileImage";
import { useGetProfile } from "api/global/profile.tsx";

const UserCard = () => {
  const { data: user } = useGetProfile();
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "350px" },
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
          {user?.firstName || "first"} {user?.lastName || "last"}
        </Typography>
        <Typography variant="body2" color="textSecondary" mt="8px">
          {user?.occupation || "Student"}
        </Typography>
      </Box>
      <Divider />
      <Box px={{ xs: "16px", sm: "120px", md: "16px" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py="16px"
        >
          <Typography variant="body2">Finished Courses</Typography>
          <Typography variant="body2">4</Typography>
        </Box>
        <Divider />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py="16px"
        >
          <Typography variant="body2">Reward Points</Typography>
          <Typography variant="body2">100</Typography>
        </Box>
        <Divider />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py="16px"
        >
          <Typography variant="body2">badges earned</Typography>
          <Typography variant="body2">5</Typography>
        </Box>
      </Box>
      <Divider />
      <Box display="flex" justifyContent="center" p="16px">
        <Link to="/profile">
          <Button variant="outlined">View Public Profile</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default UserCard;
