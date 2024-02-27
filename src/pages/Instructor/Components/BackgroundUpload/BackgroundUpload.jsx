import React, { useContext, useEffect, useState } from "react";
import { UploadContext } from "../../context/upload-context";
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Close, ExpandLess, ExpandMore } from "@mui/icons-material";
import CancelDialog from "./CancelDialog";
import UploadingItem from "./UploadingItem";
import CompletedItem from "./CompletedItem";
import useUpload from "../../../../hooks/useUpload";
import ErrorItem from "./ErrorItem";
import { BaseApi } from "../../../../util/BaseApi";
function generateId(name) {
  return name.substring(0, 10) + Math.floor(Math.random() * 100000);
}
function BackgroundUpload() {
  const { uploadList, setUploadList, setCheckCompleted } =
    useContext(UploadContext);
  const [uploadingList, setUploadingList] = useState([]);
  const [errorList, setErrorList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [currentUpload, setCurrentUpload] = useState({});
  const [cancelDialogOpened, setCancelDialogOpened] = useState(false);
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);

  const {
    progress: currentUploadProgress,
    abort: abortCurrentUpload,
    upload: startUploading,
    error: currentUploadError,
    state: currentUploadState,
  } = useUpload(
    BaseApi +
      `/course/65de21089e0ac35fea31c79f/chapter/65de24029e0ac35fea31c839/curriculum/video`,
    "post"
  );

  const backgroundUploadIsShown =
    uploadingList.length > 0 ||
    completedList.length > 0 ||
    errorList.length > 0 ||
    currentUpload.id !== undefined;

  // add files to uploading list
  useEffect(() => {
    if (uploadList.length > 0) {
      const waitingList = [];
      uploadList.forEach((item) => {
        const newItem = {
          id: generateId(item.name),
          name: item.name.replace(/\.\w*$/, ""),
          file: item,
        };
        waitingList.push(newItem);
      });
      setUploadingList((prev) => [...prev, ...waitingList]);
      setUploadList([]);
      if (currentUpload.id === undefined) {
        setCurrentUpload(waitingList[0]);
        setUploadingList((prev) => {
          const newArr = [...prev];
          return newArr.filter((item, index) => index !== 0);
        });
      }
    }
  }, [uploadList.length]);
  // start uploading current file
  useEffect(() => {
    if (currentUpload.id !== undefined) {
      const formData = new FormData();
      formData.append("video", currentUpload.file);
      formData.append("title", currentUpload.name);
      startUploading(formData);
    }
  }, [currentUpload.id]);
  // if upload is completed, remove it from uploading list and add it to completed list
  // if there are still files in uploading list, set the first file as current upload
  useEffect(() => {
    if (currentUploadState === "completed") {
      setCompletedList((prev) => [currentUpload, ...prev]);
      setCheckCompleted(true);
      if (uploadingList.length > 0) {
        setCurrentUpload(uploadingList[0]);
        setUploadingList((prev) => {
          const newArr = [...prev];
          return newArr.filter((item, index) => index !== 0);
        });
      } else {
        setCurrentUpload({});
      }
    }
  }, [currentUploadState]);
  // check if threre is an error in current upload
  useEffect(() => {
    if (currentUploadError && currentUploadError.message !== "canceled") {
      setErrorList((prev) => [...prev, currentUpload]);
      if (uploadingList.length > 0) {
        setCurrentUpload(uploadingList[0]);
        setUploadingList((prev) => {
          const newArr = [...prev];
          return newArr.filter((item, index) => index !== 0);
        });
      } else {
        setCurrentUpload({});
      }
    }
  }, [currentUploadError]);

  function handleClose() {
    if (uploadingList.length === 0 && currentUpload.id === undefined) {
      setCompletedList([]); // clear completed list to hide the background upload
      setErrorList([]); // clear error list to hide the background upload
    } else {
      setCancelDialogOpened(true);
    }
  }
  function cancelUpload() {
    abortCurrentUpload.abort();
    setCurrentUpload({});
    setUploadingList([]);
    setCompletedList([]);
    setErrorList([]);
  }
  window.onbeforeunload = (event) => {
    if (uploadingList.length > 0) {
      event.preventDefault();
      return (event.returnValue = "there are some files uploading");
    }
  };
  return (
    <>
      {backgroundUploadIsShown && (
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
              {uploadingList.length > 0 || currentUpload.id !== undefined
                ? `Uploading ${
                    uploadingList.length +
                    (currentUpload.id !== undefined ? 1 : 0)
                  } videos`
                : `${completedList.length} videos uploaded`}
            </Typography>
            <Box>
              <IconButton
                sx={{ p: "0.25em" }}
                onClick={() => setMenuIsExpanded((prev) => !prev)}
              >
                {menuIsExpanded ? <ExpandMore /> : <ExpandLess />}
              </IconButton>
              <IconButton sx={{ p: "0.25em" }} onClick={handleClose}>
                <Close />
              </IconButton>
            </Box>
          </Box>
          {
            <Collapse in={menuIsExpanded} timeout="auto" unmountOnExit>
              <Box py="0.5em">
                <Divider flexItem />
                <Box maxHeight="130px" overflow="auto">
                  {errorList.map((item) => (
                    <ErrorItem
                      item={item}
                      key={item.id}
                      setErrorList={setErrorList}
                      setUploadingList={setUploadingList}
                      setCurrentUpload={setCurrentUpload}
                    />
                  ))}
                  {completedList.map((item) => (
                    <CompletedItem
                      item={item}
                      key={item.id}
                      setCompletedList={setCompletedList}
                    />
                  ))}
                  {currentUpload.id !== undefined && (
                    <UploadingItem
                      item={currentUpload}
                      key={currentUpload.id}
                      progress={currentUploadProgress}
                      abortUpload={abortCurrentUpload}
                      setUploadingList={setUploadingList}
                      setCurrentUpload={setCurrentUpload}
                    />
                  )}
                  {uploadingList.map((item) => (
                    <UploadingItem
                      item={item}
                      key={item.id}
                      progress={0}
                      setUploadingList={setUploadingList}
                      setCompletedList={setCompletedList}
                    />
                  ))}
                </Box>
              </Box>
            </Collapse>
          }
          <CancelDialog
            open={cancelDialogOpened}
            setOpen={setCancelDialogOpened}
            canceUpload={cancelUpload}
          />
        </Paper>
      )}
    </>
  );
}

export default BackgroundUpload;
