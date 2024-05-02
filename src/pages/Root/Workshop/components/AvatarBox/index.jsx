import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const AvatarBox = ({ name, occupation, image }) => {
  return (
    <Box display="flex" gap="8px" alignItems="center">
      <Avatar
        src={image}
        sx={{
          height: "48px",
          width: "50px",
        }}
      />
      <Box display="flex" flexDirection="column" gap="2px">
        <Typography variant="body2" color="text.primary" fontWeight="600">
          {name}
        </Typography>
        <Typography variant="caption">{occupation}</Typography>
      </Box>
    </Box>
  );
};

export default AvatarBox;
