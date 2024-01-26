import {
  Box,
  Grid,
  Typography,
  LinearProgress,
  Button,
  alpha,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FileIcon from "@mui/icons-material/InsertDriveFileOutlined";
import useUpload from "../../../../../../../../hooks/useUpload";
function FileItemUploading({ file, name, size, setCompletedFiles }) {
  const { url, progress, error, abort } = useUpload(file);
  const [canceled, setCanceled] = useState(false);
  useEffect(() => {
    if (url) {
      setCompletedFiles((prev) => [...prev, { name, size, url }]);
    }
  }, [url]);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "1em",
        padding: "1em",
        borderRadius: "8px",
        border: (theme) => `1px solid ${theme.palette.primary.border2}`,
      }}
    >
      <FileIcon sx={{ fontSize: "2.5em", color: "text.secondary" }} />
      <Box flex="1">
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="body1"
            mb="0.5em"
            sx={{
              textDecoration: canceled ? "line-through" : "none",
              color: error ? "error.main" : "text.primary",
            }}
          >
            {name}{" "}
            {error &&
              error.message !== "canceled" &&
              "there was an error uploading this file"}
          </Typography>
          {canceled && (
            <Typography variant="body1" color="error">
              Canceled
            </Typography>
          )}
          {!canceled && (
            <Button
              onClick={() => {
                abort?.abort();
                setCanceled(true);
              }}
              color="error"
              disableElevation
              disableRipple
              disableFocusRipple
              disableTouchRipple
              sx={{
                padding: 0,
                pb: "0.5em",
                "&:hover": {
                  background: "transparent",
                  color: (theme) => alpha(theme.palette.error.main, 0.8),
                },
              }}
            >
              Cancel
            </Button>
          )}
        </Box>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Box>
  );
}

export default FileItemUploading;
