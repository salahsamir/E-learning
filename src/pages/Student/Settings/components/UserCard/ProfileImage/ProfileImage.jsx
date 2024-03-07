import { CameraAltOutlined } from "@mui/icons-material";
import { Avatar, Box, IconButton } from "@mui/material";
import React from "react";

const ProfileImage = () => {
  return (
    <Box position="relative">
      <Avatar
        src=""
        alt="Profile Image"
        sx={{
          width: "128px",
          height: "128px",
        }}
      />
      <IconButton
        component={"label"}
        htmlFor={"profileImage"}
        sx={{
          position: "absolute",
          right: 0,
          bottom: 4,
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.7)",
          },
        }}
      >
        <CameraAltOutlined sx={{ height: "20px", width: "20px" }} />
        <input
          type="file"
          name="profileImage"
          id="profileImage"
          hidden
          accept="image/*"
        />
      </IconButton>
    </Box>
  );
};

export default ProfileImage;
