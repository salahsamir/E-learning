import { CameraAltOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import CoverImage from "assets/images/cover.webp";
import React from "react";

const Cover = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        position: "absolute",
        top: "0",
        left: "0",
      }}
    >
      <img
        src={CoverImage}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <IconButton
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.7)",
          },
        }}
      >
        <CameraAltOutlined sx={{ height: "20px", width: "20px" }} />
      </IconButton>
    </Box>
  );
};

export default Cover;
