import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { UploadFile, Warning } from "@mui/icons-material";
import styled from "@emotion/styled";
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const UploadBoxWrapper = styled(Box)(({ theme }) => ({
  border: `1px dashed rgba(169, 169, 169, 0.23)`,
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const UploadBox = ({ id, onChange, progress, error, sx, accept }) => {
  const showUpload = progress === 100 || progress === null;
  return (
    <UploadBoxWrapper sx={sx}>
      {showUpload && !error && (
        <label
          htmlFor={id}
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <input
            type="file"
            id={id}
            hidden
            onChange={onChange}
            accept={accept}
          />
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <UploadFile
              sx={{ fontSize: "4em", color: "rgba(169, 169, 169, 0.3)" }}
            />
          </Box>
        </label>
      )}
      {error && <Warning sx={{ fontSize: "4em" }} color="error" />}
      {!showUpload && !error && <CircularProgressWithLabel value={progress} />}
    </UploadBoxWrapper>
  );
};
export default UploadBox;
