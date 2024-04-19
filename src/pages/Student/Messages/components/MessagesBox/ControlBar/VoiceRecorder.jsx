import { MicOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";

const VoiceRecorder = ({ recordInfo, setRecordInfo }) => {
  const { isRecording, timer } = recordInfo;
  const [currentMediaRecorder, setCurrentMediaRecorder] = useState(null);
  const [currentStream, setCurrentStream] = useState(null);
  const handleStartRecording = (stream) => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (event) => {
      console.log(event);
      const fileName = `audio-${Date.now()}.mp3`;
      const file = new File([event.data], fileName, {
        type: "audio/mp3",
      });
      setRecordInfo((old) => ({ ...old, recordedFile: file }));
    };
    mediaRecorder.onstart = (event) => {
      setRecordInfo((old) => ({ ...old, isRecording: true }));
      const interval = setInterval(() => {
        setRecordInfo((old) => ({
          ...old,
          timer: { id: interval, time: old.timer.time + 1 },
        }));
      }, 1000);
    };
    mediaRecorder.onstop = () => {
      setRecordInfo((old) => ({ ...old, isRecording: false }));
    };
    mediaRecorder.onerror = (e) => {
      console.log(e);
    };
    mediaRecorder.start();
    setCurrentMediaRecorder(mediaRecorder);
  };
  const handleStartMic = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        setCurrentStream(stream);
        handleStartRecording(stream);
      })
      .catch((err) => {
        if (err.name === "NotAllowedError") {
          console.error(
            "You need to grant this page permission to access your camera and microphone."
          );
        } else {
          console.error(err);
        }
      });
  };
  const handleStopRecording = () => {
    currentMediaRecorder.stop();
    currentStream.getTracks().forEach((track) => track.stop());
    clearInterval(timer.id);
  };
  if (timer.time / 60 >= 1) handleStopRecording();
  return (
    <IconButton
      onClick={isRecording ? handleStopRecording : handleStartMic}
      sx={{
        padding: "4px",
      }}
    >
      <MicOutlined
        fontSize="small"
        color={isRecording ? "primary" : "inherit"}
      />
    </IconButton>
  );
};

export default VoiceRecorder;
