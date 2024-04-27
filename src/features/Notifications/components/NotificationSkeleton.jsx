import { Box, Skeleton } from "@mui/material";
import React from "react";

const NotificationSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1em",
        padding: "1em",
        color: "inherit",
        "&:hover": {
          color: "inherit",
        },
      }}
    >
      <Skeleton variant="circular" width={40} height={40} />
      <Box flex="1">
        <Skeleton variant="text" width="100px" />
        <Skeleton variant="text" width="50px" />
        <Skeleton variant="text" width="200px" />
      </Box>
    </Box>
  );
};

export default NotificationSkeleton;
