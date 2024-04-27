import { DeleteForeverOutlined, MicOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";

const VoiceRecorder = forwardRef(
  ({ recordInfo, setRecordInfo, resetRecordInfo }, ref) => {
    const { isRecording, timer } = recordInfo;
    const [currentMediaRecorder, setCurrentMediaRecorder] = useState(null);
    const [currentStream, setCurrentStream] = useState(null);
    const handleStartRecording = (stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (event) => {
        const fileName = `audio-${Date.now()}.mp3`;
        const file = new File([event.data], fileName, {
          type: "audio/mp3",
        });
        setRecordInfo((old) => ({ ...old, recordedFile: file }));
      };
      mediaRecorder.onstart = () => {
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
        .getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
          },
        })
        .then((stream) => {
          setCurrentStream(stream);
          handleStartRecording(stream);
        })
        .catch((err) => {
          if (err.name === "NotAllowedError") {
            console.error(
              "You need to grant this page permission to access your  microphone."
            );
          } else {
            console.error(err);
          }
        });
    };
    const handleStopRecording = useCallback(() => {
      currentMediaRecorder.stop();
      currentStream.getTracks().forEach((track) => track.stop());
      clearInterval(timer.id);
    }, [currentMediaRecorder, currentStream, timer.id]);

    if (timer.time / 60 >= 10) handleStopRecording();

    useImperativeHandle(
      ref,
      () => ({
        stopRecording: handleStopRecording,
      }),
      [handleStopRecording]
    );
    return (
      <IconButton
        onClick={() => {
          if (isRecording) {
            handleStopRecording();
            resetRecordInfo();
          } else handleStartMic();
        }}
        sx={{
          padding: "4px",
        }}
      >
        {isRecording ? (
          <DeleteForeverOutlined fontSize="small" color="error" />
        ) : (
          <MicOutlined fontSize="small" />
        )}
      </IconButton>
    );
  }
);

export default VoiceRecorder;
