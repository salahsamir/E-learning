import { Close, UploadFileOutlined } from "@mui/icons-material";
import { Box, IconButton, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CancelDialog from "./CancelDialog";
function UploadingItem({
  item,
  setUploadingList,
  setCurrentUpload,
  progress,
  abortUpload,
}) {
  const [cancelDialogOpened, setCancelDialogOpened] = useState(false);
  function handleCancel() {
    abortUpload.abort();
    setUploadingList((prev) => {
      if (prev.length === 0) {
        setCurrentUpload({});
        return prev;
      }
      const newArr = [...prev];
      setCurrentUpload(newArr[0]);
      return newArr.filter((_, index) => index !== 0);
    });
  }
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
            {item.name.length > 20
              ? item.name.substring(0, 20) + "..."
              : item.name.substring(0, 20)}
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
