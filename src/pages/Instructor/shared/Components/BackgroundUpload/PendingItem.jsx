import { Close, UploadFileOutlined } from "@mui/icons-material";
import { Box, IconButton, LinearProgress, Typography } from "@mui/material";
import React from "react";
import { useUploadContext } from "../../context/upload-context.tsx";

function PendingItem({ item }) {
  const { removeItem } = useUploadContext();
  return (
    <Box mt="0.5em">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="40px"
      >
        <Box display="flex" gap="0.5em" alignItems="center">
          <UploadFileOutlined />
          <Typography variant="body1">
            {item?.name?.length > 20
              ? item?.name.substring(0, 20) + "..."
              : item?.name.substring(0, 20)}
          </Typography>
        </Box>
        <Box display="flex" gap="0.5em" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            pending
          </Typography>
          <IconButton
            sx={{ p: "4px" }}
            onClick={() => removeItem(item.id, "pending")}
          >
            <Close />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <LinearProgress value={0} variant="determinate" />
      </Box>
    </Box>
  );
}

export default PendingItem;
