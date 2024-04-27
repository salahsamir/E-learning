import { Box, Typography, alpha } from "@mui/material";
import React from "react";

const Attached = ({ item, isLocal }) => {
  const itemExtention = item.name?.split(".").pop();
  const itemSize = item.size / 1024 / 1024;
  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.5em",
        justifySelf: "flex-end",
      }}
    >
      <Box
        sx={{
          height: "50px",
          width: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: (theme) => alpha(theme.palette.text.primary, 0.1),
          borderRadius: "50%",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          color: (theme) =>
            isLocal
              ? "#c4edd4"
              : theme.palette.mode === "light"
              ? "grey.700"
              : "grey.400",
          textTransform: "uppercase",
        }}
      >
        {itemExtention || "nan"}
      </Box>
      <Box flex="1">
        <Typography
          component={"a"}
          href={item.url}
          target="_blank"
          sx={{
            transition: "color 0.3s",
            color: (theme) => (isLocal ? "white" : "text.primary"),
          }}
        >
          {item.name || "file"}
        </Typography>
        <Typography
          color={isLocal ? "#c4edd4" : "text.secondary"}
          variant="body2"
        >
          {itemSize.toFixed(2)} MB
        </Typography>
      </Box>
    </Box>
  );
};

export default Attached;
