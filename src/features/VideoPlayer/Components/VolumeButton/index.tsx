import { VolumeOff, VolumeUp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import {
  MediaRemoteControl,
  VolumeSlider,
  VolumeSliderInstance,
  useMediaPlayer,
  useStore,
} from "@vidstack/react";
import React, { useRef } from "react";

const VolumeButton = () => {
  const player = useMediaPlayer();
  const ref = useRef<VolumeSliderInstance>(null),
    { value } = useStore(VolumeSliderInstance, ref);
  const remote = new MediaRemoteControl();
  remote.setPlayer(player);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      className="plyr__controls__item plyr__control"
      zIndex={5}
      sx={{
        "&:hover": {
          ".vds-volume-slider-container": {
            display: "block",
          },
        },
      }}
    >
      <Box
        onClick={() => {
          value === 0 ? remote.unmute() : remote.mute();
        }}
      >
        {value > 0 ? <VolumeUp /> : <VolumeOff />}
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "24px",
          width: "36px",
          padding: "4px",
          pb: "12px",
          display: "none",
        }}
        className="vds-volume-slider-container"
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "4px",
            pb: "0",
            borderRadius: "4px",
          }}
        >
          <Typography fontSize="10px" textAlign="center">
            {value.toFixed(0)}
          </Typography>
          <VolumeSlider.Root
            className="vds-slider vds-volume-slider"
            orientation="vertical"
            ref={ref}
          >
            <VolumeSlider.Track className="vds-slider-track" />
            <VolumeSlider.TrackFill className="vds-slider-track-fill vds-slider-track" />
            <VolumeSlider.Thumb className="vds-slider-thumb" />
          </VolumeSlider.Root>
        </Box>
      </Box>
    </Box>
  );
};

export default VolumeButton;
