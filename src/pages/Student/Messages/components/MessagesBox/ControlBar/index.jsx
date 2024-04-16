import {
  ImageOutlined,
  MicOutlined,
  Send,
  SentimentSatisfiedOutlined,
} from "@mui/icons-material";
import { Box, IconButton, TextField, darken, lighten } from "@mui/material";
import { useEffect, useState } from "react";
const CustomIconButton = ({ children, ...props }) => {
  return (
    <IconButton
      sx={{
        padding: "4px",
      }}
      {...props}
    >
      {children}
    </IconButton>
  );
};
const ControlBar = () => {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  useEffect(() => {
    if (sending) {
      setTimeout(() => {
        setSending(false);
      }, 500);
    }
  }, [sending]);
  function handleSendMessage() {
    if (message === "") return;
    setSending(true);
    // sendMessage(message).then(() => {
    //   setMessage("");
    // });
  }
  return (
    <Box
      sx={{
        display: "flex",
        height: "fit-content",
        alignItems: "flex-end",
        padding: "16px",
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
          minHeight: "38px",
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
            "& .MuiInputBase-root": {
              padding: "0.5em",
              fontSize: "1em",
              maxHeight: "100px",
              overflowY: "auto",
              py: "0.5em",
            },
            "& fieldset": {
              border: "0 !important",
            },
          }}
        />
        {/* **************** Buttons Group ***************** */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "38px",
          }}
        >
          <CustomIconButton>
            <MicOutlined fontSize="small" />
          </CustomIconButton>
          <CustomIconButton>
            <SentimentSatisfiedOutlined fontSize="small" />
          </CustomIconButton>
          <CustomIconButton>
            <ImageOutlined fontSize="small" />
          </CustomIconButton>
        </Box>
      </Box>

      {/* **************** Send Button ***************** */}
      <IconButton
        disableRipple
        onClick={handleSendMessage}
        sx={{
          height: "40px",
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
