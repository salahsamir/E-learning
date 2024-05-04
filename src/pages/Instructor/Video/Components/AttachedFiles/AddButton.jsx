import { Add } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useAttachFile } from "api/instructor/topics.tsx";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddButton = () => {
  const { isPending, mutate: attachFile } = useAttachFile();
  const [progress, setProgress] = useState(0);
  return (
    <Box display="flex" gap="8px" alignItems="center">
      {isPending && (
        <Typography variant="body2" color="primary.main">
          {(progress * 100).toFixed(0)}%
        </Typography>
      )}
      <IconButton
        component="label"
        htmlFor="attachedFile"
        disabled={isPending}
        sx={{
          padding: "4px",
          color: "text.primary",
          transition: "color 0.3s",
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        <Add />
        <input
          type="file"
          name="attachedFile"
          id="attachedFile"
          hidden
          multiple={false}
          onChange={(e) => {
            const file = e.target.files[0];
            e.target.files = null;
            if (isPending) return;
            if (file.size / (1024 * 1024) > 100) {
              toast.error("File Size must be lower than 100MB");
              return;
            }
            attachFile({
              file,
              getProgress: (prog) => setProgress(prog),
            });
          }}
        />
      </IconButton>
    </Box>
  );
};

export default AddButton;
