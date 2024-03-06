import React, { useEffect, useState } from "react";
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
import useUpload from "hooks/useUpload";
import CancelDialog from "./CancelDialog";
import { useQueryClient } from "@tanstack/react-query";
import useGetParams from "hooks/useGetParams";

function BackgroundUpload() {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const {
    uploadList,
    checkVisibility,
    cancelAll,
    handleErroredUpload,
    handleUploadComplete,
  } = useUploadContext();
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);
  const [waringDialogOpened, setWarningDialogOpened] = useState(false);
  const {
    data: uploadedData,
    progress: uploadProgress,
    state: uploadState,
    upload: startUploading,
    abort: abortUpload,
    error: uploadError,
  } = useUpload();

  // handle the upload state
  useEffect(() => {
    if (uploadState === "completed") {
      handleUploadComplete();
      console.log("uploadedData: ", uploadedData.createdVideo);
      queryClient.setQueryData(["topics", params[0]], (oldData) => {
        return [
          ...oldData,
          { ...uploadedData.createdVideo, id: uploadedData.createdVideo._id },
        ];
      });
    }
    if (uploadState === "error" && uploadError?.message !== "canceled") {
      handleErroredUpload();
    }
    console.log("error: ", uploadError);
  }, [uploadState]);

  // start uploading the next video in the list if there is any
  useEffect(() => {
    if (uploadList.current) {
      startUploading(
        uploadList.current.path,
        uploadList.current.method,
        uploadList.current.body
      );
    }
  }, [uploadList.current?.id]);

  // show warning before leaving the page if there are pending uploads
  useEffect(() => {
    window.onbeforeunload = () => {
      if (uploadList.pending.length > 0) {
        return true;
      }
    };
    return () => {
      window.onbeforeunload = null;
    };
  }, [uploadList.pending.length]);

  // cancel all uploads
  const handleCancelAll = () => {
    if (uploadList.current) {
      abortUpload.abort();
    }
    cancelAll();
  };

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
        display: checkVisibility() ? "block" : "none",
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
          <IconButton
            sx={{ p: "0.25em" }}
            onClick={() =>
              uploadList.current
                ? setWarningDialogOpened(true)
                : handleCancelAll()
            }
          >
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
                <UploadingItem
                  item={uploadList.current}
                  abort={abortUpload}
                  progress={uploadProgress}
                />
              )}
              {uploadList.pending.map((item) => (
                <PendingItem item={item} key={item.id} />
              ))}
            </Box>
          </Box>
        </Collapse>
      }
      <CancelDialog
        open={waringDialogOpened}
        setOpen={setWarningDialogOpened}
        canceUpload={handleCancelAll}
      />
    </Paper>
  );
}

export default BackgroundUpload;
