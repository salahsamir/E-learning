import { TopicOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

function EmptyState({ title, description, icon }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
    >
      <Box>{icon ? icon : <TopicOutlined sx={{ fontSize: "50px" }} />}</Box>
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default EmptyState;
