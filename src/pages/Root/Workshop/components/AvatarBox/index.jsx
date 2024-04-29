import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const AvatarBox = () => {
  return (
    <Box display="flex" gap="8px" alignItems="center">
      <Avatar
        sx={{
          height: "48px",
          width: "50px",
        }}
      />
      <Box display="flex" flexDirection="column" gap="2px">
        <Typography variant="body2" color="text.primary" fontWeight="600">
          Osama Safwat
        </Typography>
        <Typography variant="caption">Software Engineer</Typography>
      </Box>
    </Box>
  );
};

export default AvatarBox;
