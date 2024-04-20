import { Box, Skeleton } from "@mui/material";
import React from "react";

const ContactSkeleton = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px",
      }}
    >
      <Skeleton
        variant="circular"
        sx={{
          width: "50px",
          height: "50px",
          borderRadius: "8px",
        }}
      />
      <Box
        flex={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <Skeleton
          variant="text"
          sx={{
            width: "70%",
            maxWidth: "150px",
            height: "18px",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            width: "90%",
            maxWidth: "250px",
            height: "18px",
          }}
        />
      </Box>
    </Box>
  );
};

export default ContactSkeleton;
