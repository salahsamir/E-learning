import { CameraAltOutlined } from "@mui/icons-material";
import { Avatar, Box, CircularProgress, IconButton } from "@mui/material";
import { useGetProfile, useUploadProfileImage } from "api/global/profile.tsx";
import React, { useState } from "react";

const ProfileImage = () => {
  const { mutate: uploadImg } = useUploadProfileImage({
    onSuccess: () => setProgress(null),
  });
  const { data: user } = useGetProfile();
  const [progress, setProgress] = useState(null);
  return (
    <Box position="relative">
      <Avatar
        src={user?.profilePic?.url || ""}
        alt="Profile Image"
        sx={{
          width: "128px",
          height: "128px",
        }}
      />
      {progress && (
        <CircularProgress
          value={progress * 100}
          variant="determinate"
          size={128}
          sx={{ position: "absolute", top: 0, left: 0 }}
        />
      )}
      {!progress && (
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
            onChange={(e) => {
              const file = e.target.files[0];
              uploadImg({
                file,
                getProgress: (progress) => setProgress(progress),
              });
              e.target.value = "";
            }}
          />
        </IconButton>
      )}
    </Box>
  );
};

export default ProfileImage;
