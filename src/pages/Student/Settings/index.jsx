import { Box } from "@mui/material";
import React from "react";
import UserCard from "./components/UserCard/UserCard";
import UserInfo from "./components/UserInfo/UserInfo";
import Cover from "./components/Cover/Cover";
const Profile = () => {
  return (
    <Box
      sx={{
        position: "relative",
        pt: "120px",
        pb: "16px",
        px: "16px",
      }}
    >
      <Cover />
      <Box
        position="relative"
        zIndex={3}
        display="flex"
        gap="16px"
        flexDirection={{ xs: "column", md: "row" }}
      >
        <UserCard />
        <UserInfo />
      </Box>
    </Box>
  );
};

export default Profile;
