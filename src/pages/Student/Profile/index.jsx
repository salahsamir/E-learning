import { Box } from "@mui/material";
import React from "react";
import CoverImage from "assets/images/cover.webp";
const Profile = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <img
        src={CoverImage}
        alt=""
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
    </Box>
  );
};

export default Profile;
