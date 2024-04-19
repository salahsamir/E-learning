import { Pause, PlayArrow } from "@mui/icons-material";
import { Box, IconButton, LinearProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";

const AudioPlayer = ({ item }) => {
  const [audioInfo, setAudioInfo] = React.useState({
    audio: new Audio(item.url),
    playing: false,
    currentTime: 0,
    duration: 0,
  });
  useEffect(() => {
    const audio = new Audio(item.url);
    audio.onloadedmetadata = (event) => {
      audio.currentTime = Number.MAX_SAFE_INTEGER;
      // listen to time position change
      audio.ontimeupdate = function () {
        audio.ontimeupdate = function () {};
        // setting player currentTime back to 0 can be buggy too, set it first to .1 sec
        audio.currentTime = 0.1;
        audio.currentTime = 0;
        setAudioInfo((old) => ({
          ...old,
          duration: audio.duration,
        }));
      };
      setAudioInfo((old) => ({
        ...old,
        currentTime: audio.currentTime,
      }));
    };
    audio.onended = () => {
      setAudioInfo((old) => ({
        ...old,
        playing: false,
        duration: audio.duration,
      }));
    };
    audio.onpause = () => {
      setAudioInfo((old) => ({ ...old, playing: false }));
    };
    audio.onplay = () => {
      setAudioInfo((old) => ({ ...old, playing: true }));
      audio.ontimeupdate = () => {
        setAudioInfo((old) => ({ ...old, currentTime: audio.currentTime }));
      };
    };
    audio.preload = "metadata";
    setAudioInfo((old) => ({ ...old, audio }));
  }, [item.url]);

  const handlePlayBtnClick = () => {
    if (audioInfo.playing) {
      audioInfo.audio.pause();
    } else {
      audioInfo.audio.play();
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.5em",
        alignItems: "center",
        width: "400px",
        minWidth: "200px",
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: "8px",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        padding: "0.5em",
      }}
    >
      <IconButton
        onClick={handlePlayBtnClick}
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        {audioInfo.playing ? (
          <Pause
            sx={{
              color: "white",
            }}
          />
        ) : (
          <PlayArrow
            sx={{
              color: "white",
            }}
          />
        )}
      </IconButton>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "0.5em",
        }}
      >
        <LinearProgress
          value={
            audioInfo.duration === Infinity
              ? audioInfo.playing
                ? 25
                : 0
              : (audioInfo.currentTime / audioInfo.duration) * 100
          }
          variant="determinate"
        />
        <Typography color="text.primary">
          {audioInfo.playing ||
          (audioInfo.currentTime > 0 &&
            audioInfo.currentTime < audioInfo.duration)
            ? audioInfo.currentTime.toFixed(2)
            : audioInfo.duration.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default AudioPlayer;
