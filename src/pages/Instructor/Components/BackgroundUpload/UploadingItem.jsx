import { Close, UploadFileOutlined } from "@mui/icons-material";
import { Box, IconButton, LinearProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import CancelDialog from "./CancelDialog";
import { useUploadContext } from "../../context/upload-context.tsx";

function UploadingItem({ item: currentUpload }) {
  const [cancelDialogOpened, setCancelDialogOpened] = useState(false);
  const { progress, cancelCurrentUpload } = useUploadContext();
  function handleCancel() {
    cancelCurrentUpload();
  }

  if (!currentUpload) return null;
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
            {currentUpload?.name?.length > 20
              ? currentUpload?.name.substring(0, 20) + "..."
              : currentUpload?.name.substring(0, 20)}
          </Typography>
        </Box>
        <Box display="flex" gap="0.5em" alignItems="center">
          <Typography variant="body1">{progress}%</Typography>
          <IconButton
            sx={{ p: "4px" }}
            onClick={() => setCancelDialogOpened(true)}
          >
            <Close />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <LinearProgress value={progress || 0} variant="determinate" />
      </Box>
      <CancelDialog
        open={cancelDialogOpened}
        setOpen={setCancelDialogOpened}
        canceUpload={handleCancel}
      />
    </Box>
  );
}

export default UploadingItem;
