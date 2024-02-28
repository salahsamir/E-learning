import React, { useState } from "react";
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Close, ExpandLess, ExpandMore } from "@mui/icons-material";
import UploadingItem from "./UploadingItem";
import CompletedItem from "./CompletedItem";
import ErrorItem from "./ErrorItem";
import { useUploadContext } from "../../context/upload-context.tsx";
import PendingItem from "./PendingItem.jsx";

function BackgroundUpload() {
  const { uploadList, checkVisibility, cancelAll } = useUploadContext();
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);
  const headerText =
    uploadList.pending.length > 0 || uploadList.current !== undefined
      ? `Uploading ${
          uploadList.pending.length + (uploadList.current !== undefined ? 1 : 0)
        } videos`
      : `${uploadList.completed.length} videos uploaded`;
  console.log("uploadList", uploadList);
  return (
    <Paper
      sx={{
        position: "fixed",
        right: "1em",
        bottom: "1em",
        backgroundColor: (theme) => theme.palette.background.b1,
        width: { xs: "290px", sm: "400px" },
        zIndex: 100,
        borderRadius: "8px",
        px: "1em",
        py: "0.5em",
        opacity: checkVisibility() ? 1 : 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" fontSize="1.2em">
          {headerText}
        </Typography>
        <Box>
          <IconButton
            sx={{ p: "0.25em" }}
            onClick={() => setMenuIsExpanded((prev) => !prev)}
          >
            {menuIsExpanded ? <ExpandMore /> : <ExpandLess />}
          </IconButton>
          <IconButton sx={{ p: "0.25em" }} onClick={() => cancelAll()}>
            <Close />
          </IconButton>
        </Box>
      </Box>
      {
        <Collapse in={menuIsExpanded} timeout="auto" unmountOnExit>
          <Box py="0.5em">
            <Divider flexItem />
            <Box maxHeight="130px" overflow="auto">
              {uploadList.error.map((item) => (
                <ErrorItem item={item} key={item.id} />
              ))}
              {uploadList.completed.map((item) => (
                <CompletedItem item={item} key={item.id} />
              ))}
              {uploadList.current && (
                <UploadingItem item={uploadList.current} />
              )}
              {uploadList.pending.map((item) => (
                <PendingItem item={item} key={item.id} />
              ))}
            </Box>
          </Box>
        </Collapse>
      }
    </Paper>
  );
}

export default BackgroundUpload;
