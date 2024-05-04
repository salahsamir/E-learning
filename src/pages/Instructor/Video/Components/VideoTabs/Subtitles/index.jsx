import { Box, Typography } from "@mui/material";
import React from "react";
import UploadForm from "./UploadForm";
import SubtitlesList from "./SubtitlesList";

const Subtitles = ({ subtitles }) => {
  return (
    <Box>
      <Typography variant="h6" color="text.primary" mb="16px">
        Subtitles
      </Typography>
      <UploadForm />
      <SubtitlesList subtitles={subtitles} />
    </Box>
  );
};

export default Subtitles;
