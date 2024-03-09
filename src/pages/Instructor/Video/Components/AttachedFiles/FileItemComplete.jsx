import { Box, Typography, Link } from "@mui/material";
import React from "react";
import FileIcon from "@mui/icons-material/InsertDriveFileOutlined";
function FileItemComplete({ name, size, url }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "1em",
        padding: "1em",
        borderRadius: "8px",
        border: (theme) => `1px solid ${theme.palette.primary.border2}`,
      }}
    >
      <FileIcon sx={{ fontSize: "2.5em", color: "text.secondary" }} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flex={1}
      >
        <Link to={url} target="_blank">
          <Typography variant="body1">{name}</Typography>
        </Link>
        <Typography variant="body1">Completed</Typography>
      </Box>
    </Box>
  );
}

export default FileItemComplete;
