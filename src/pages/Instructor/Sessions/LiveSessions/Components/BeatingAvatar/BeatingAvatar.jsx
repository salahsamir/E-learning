import { Avatar, Box } from "@mui/material";
import React from "react";

function BeatingAvatar({ beating, children, ...other }) {
  return (
    <Avatar
      sx={{ position: "relative", overflow: "visible", zIndex: "10" }}
      {...other}
    >
      {children ? children : ""}
      {beating && (
        <Box
          sx={{
            zIndex: "1",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: `5px solid rgba(255,255,255,0.3)`,
            animation: "pulse 1.1s infinite",
            "@keyframes pulse": {
              "0%": {
                transform: "scale(1)",
              },
              "25%": {
                transform: "scale(1.1)",
              },
              "50%": {
                transform: "scale(1.2)",
                opacity: 0.5,
              },
              "75%": {
                transform: "scale(1.1)",
              },
              "100%": {
                transform: "scale(1)",
              },
            },
          }}
        ></Box>
      )}
    </Avatar>
  );
}

export default BeatingAvatar;
