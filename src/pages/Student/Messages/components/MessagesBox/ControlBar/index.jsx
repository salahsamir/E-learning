import { Send } from "@mui/icons-material";
import {
  Box,
  IconButton,
  TextField,
  Typography,
  darken,
  lighten,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import EmojPicker from "./EmojPicker";
import { useSendMessage } from "api/global/messages.tsx";
import useGetParams from "hooks/useGetParams";
import AttachFile from "./AttachFile";
import VoiceRecorder from "./VoiceRecorder";
const initialRecordInfo = {
  isRecording: false,
  timer: { id: null, time: 0 },
  recordedFile: null,
  sendSignal: false,
};
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
const ControlBar = () => {
  const [message, setMessage] = useState("");
  const [recordInfo, setRecordInfo] = useState(initialRecordInfo);
  const recorderRef = useRef();
  const params = useGetParams();
  const { mutate: sendMessage, isPending: sending } = useSendMessage({
    onSuccess: () => {
      setMessage("");
    },
  });

  const resetRecordInfo = useCallback(() => {
    clearInterval(recordInfo.timer.id);
    setRecordInfo(initialRecordInfo);
  }, [recordInfo.timer.id]);

  useEffect(() => {
    if (recordInfo.sendSignal && recordInfo.recordedFile) {
      sendMessage({ chatId: params[0], media: recordInfo.recordedFile });
      resetRecordInfo();
    }
  }, [
    recordInfo.sendSignal,
    recordInfo.recordedFile,
    sendMessage,
    params,
    resetRecordInfo,
  ]);

  function handleSendMessage() {
    if (sending) return;
    if (recordInfo.isRecording) {
      recorderRef.current.stopRecording();
      setRecordInfo((old) => ({ ...old, sendSignal: true }));
    } else {
      if (message === "") return;
      sendMessage({ chatId: params[0], message });
    }
  }

  const handleAttachFile = (media) => {
    sendMessage({ chatId: params[0], media });
  };
  const insertEmoji = (emoji) => {
    setMessage((prev) => prev + emoji);
  };
  return (
    <Box
      sx={{
        display: "flex",
        height: "fit-content",
        padding: "16px",
        alignItems: "flex-end",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          flex: 1,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderTopLeftRadius: "4px",
          borderBottomLeftRadius: "4px",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? lighten(theme.palette.background.b1, 0.03)
              : darken(theme.palette.background.b1, 0.03),
          minHeight: "41px",
        }}
      >
        {/* **************** Textfied ***************** */}
        <TextField
          multiline
          fullWidth
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            display: recordInfo.isRecording ? "none" : "block",
            "& .MuiInputBase-root": {
              padding: "0.5em",
              fontSize: "1em",
              height: "100%",
              maxHeight: "100px",
              overflowY: "auto",
              py: "0.5em",
            },
            "& fieldset": {
              border: "0 !important",
            },
          }}
        />
        {/* **************** Record Info ***************** */}
        <Box
          sx={{
            flex: 1,
            display: recordInfo.isRecording ? "flex" : "none",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <Typography sx={{ color: "gray", fontSize: "0.8em", ml: "0.5em" }}>
            {formatTime(recordInfo.timer.time)}
          </Typography>
        </Box>

        {/* **************** Buttons Group ***************** */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "38px",
          }}
        >
          <VoiceRecorder
            setRecordInfo={setRecordInfo}
            recordInfo={recordInfo}
            resetRecordInfo={resetRecordInfo}
            ref={recorderRef}
          />
          <EmojPicker insertEmoji={insertEmoji} />
          <AttachFile attachFile={handleAttachFile} />
        </Box>
      </Box>
      {/* **************** Send Button ***************** */}
      <IconButton
        disableRipple
        onClick={handleSendMessage}
        sx={{
          height: "41px",
          backgroundColor: (theme) =>
            sending ? theme.palette.primary.dark : theme.palette.primary.main,
          borderRadius: "4px",
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
          overflow: "hidden",
          "&:hover": {
            bgcolor: (theme) => theme.palette.primary.dark,
          },
        }}
      >
        <Send
          sx={{
            height: "0.7em",
            color: "white",
            animation: sending ? "fly 0.5s ease-in-out infinite" : "",
            "@keyframes fly": {
              "0%": { transform: "rotate(-45deg) translate(0px,0px)" },
              "100%": { transform: "rotate(-45deg) translate(35px,0px)" },
            },
          }}
        />
      </IconButton>
    </Box>
  );
};

export default ControlBar;
