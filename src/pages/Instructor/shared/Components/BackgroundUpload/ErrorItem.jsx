import { CancelOutlined, Close, Refresh } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useUploadContext } from "../../context/upload-context.tsx";

function ErrorItem({ item }) {
  const { removeItem, reupload } = useUploadContext();
  return (
    <Box mt="0.5em">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="40px"
      >
        <Box display="flex" gap="0.5em" alignItems="center">
          <CancelOutlined color="error" />
          <Typography variant="body1" color="error">
            {item.name.length > 20
              ? item.name.substring(0, 20) + "..."
              : item.name.substring(0, 20)}
          </Typography>
        </Box>
        <Box display="flex" gap="0.5em" alignItems="center">
          <IconButton sx={{ p: "4px" }} onClick={() => reupload(item.id)}>
            <Refresh />
          </IconButton>
          <IconButton
            sx={{ p: "4px" }}
            onClick={() => removeItem(item.id, "error")}
          >
            <Close />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ErrorItem;
