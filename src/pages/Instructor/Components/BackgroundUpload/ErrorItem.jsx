import {
  CancelOutlined,
  CheckCircleOutlined,
  Close,
  Refresh,
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

function ErrorItem({ item, setUploadingList, setErrorList, setCurrentUpload }) {
  function removeItem() {
    setErrorList((prev) => {
      const newArr = [...prev];
      return newArr.filter((i) => i.id !== item.id);
    });
  }
  function reupload() {
    setCurrentUpload((prev) => {
      if (prev.id === undefined) {
        return item;
      } else {
        setUploadingList((prev) => {
          return [...prev, item];
        });
        return prev;
      }
    });
    removeItem();
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
          <CancelOutlined color="error" />
          <Typography variant="body1" color="error">
            {item.name.length > 20
              ? item.name.substring(0, 20) + "..."
              : item.name.substring(0, 20)}
          </Typography>
        </Box>
        <Box display="flex" gap="0.5em" alignItems="center">
          <IconButton sx={{ p: "4px" }} onClick={reupload}>
            <Refresh />
          </IconButton>
          <IconButton sx={{ p: "4px" }} onClick={removeItem}>
            <Close />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ErrorItem;
