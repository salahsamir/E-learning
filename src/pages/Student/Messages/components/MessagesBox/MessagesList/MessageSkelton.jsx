import { Box, Skeleton } from "@mui/material";
import React from "react";

const MessageSkelton = ({ isLocal = false }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.5em",
        height: "fit-content",
        justifyContent: isLocal ? "flex-end" : "flex-start",
        alignItems: "flex-end",
      }}
    >
      {!isLocal && (
        <Skeleton
          variant="circular"
          sx={{
            width: "30px",
            height: "30px",
          }}
        />
      )}
      <Box
        sx={{
          borderRadius: "8px",
          borderBottomLeftRadius: isLocal ? "8px" : "0px",
          borderBottomRightRadius: isLocal ? "0px" : "8px",
          width: "80%",
          maxWidth: "300px",
          height: "50px",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>
    </Box>
  );
};

export default MessageSkelton;
