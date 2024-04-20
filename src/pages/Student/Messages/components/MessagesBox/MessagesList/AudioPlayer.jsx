import { Pause, PlayArrow } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Typography,
  alpha,
  darken,
  useTheme,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useWavesurfer } from "@wavesurfer/react";
const formatTime = (time) => {
  return new Date(time * 1000).toISOString().substr(14, 5);
};
const AudioPlayer = ({ item, isLocal }) => {
  const audioRef = useRef(null);
  const theme = useTheme();
  const [currentSpeed, setCurrentSpeed] = useState(1);

  const { currentTime, wavesurfer, isPlaying, isReady } = useWavesurfer({
    url: item.url,
    container: audioRef,
    height: 30,
    width: "100%",
    waveColor: isLocal ? "white" : theme.palette.primary.main,
    progressColor: isLocal
      ? theme.palette.grey[400]
      : theme.palette.mode === "light"
      ? theme.palette.primary[500]
      : theme.palette.primary[700],
  });

  const handleSpeedChange = () => {
    setCurrentSpeed((prev) => {
      let newSpeed = prev + 0.25;
      if (newSpeed > 2) {
        newSpeed = 1;
      }
      wavesurfer?.setPlaybackRate(newSpeed);
      return newSpeed;
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.5em",
        alignItems: "center",
        width: {
          xs: "220px",
          sm: "300px",
          md: "350px",
        },
        borderRadius: "8px",
        padding: "0.5em",
        overflow: "hidden",
      }}
    >
      <IconButton
        onClick={() => {
          wavesurfer?.playPause();
        }}
        sx={{
          backgroundColor: isLocal ? "white" : "primary.main",
          "&:hover": {
            backgroundColor: isLocal ? "grey.200" : "primary.dark",
          },
        }}
      >
        {isPlaying ? (
          <Pause
            sx={{
              color: isLocal ? "primary.main" : "white",
            }}
          />
        ) : (
          <PlayArrow
            sx={{
              color: isLocal ? "primary.main" : "white",
            }}
          />
        )}
      </IconButton>
      <Box
        ref={audioRef}
        sx={{
          width: "100%",
          height: "100%",
          flex: 1,
          flexShrink: 1,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5em",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: (theme) =>
              isLocal
                ? "white"
                : theme.palette.mode === "light"
                ? "black"
                : "text.primary",
          }}
        >
          {isPlaying ||
          (currentTime > 0 && currentTime < wavesurfer?.getDuration())
            ? formatTime(currentTime)
            : formatTime(wavesurfer?.getDuration() || 0)}
        </Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{
          minWidth: "auto",
          padding: "2px 8px",
          borderRadius: "2px",
          fontSize: "0.75em",
          borderWidth: "1.5px",
          borderColor: isLocal && "white",
          color: isLocal && "white",
          "&:hover": {
            backgroundColor: isLocal && alpha("#fff", 0.1),
            borderColor: isLocal && darken("#fff", 0.2),
          },
        }}
        onClick={handleSpeedChange}
      >
        {`${currentSpeed}x`}
      </Button>
    </Box>
  );
};

export default AudioPlayer;
