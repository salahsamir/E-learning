import { Send } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export const ControlBar = ({ sendMessage }) => {
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
    sendMessage(message).then(() => {
      setMessage("");
    });
  }
  return (
    <Box
      sx={{
        display: "flex",
        height: "fit-content",
        alignItems: "flex-end",
        padding: "0.5em",
      }}
    >
      <TextField
        multiline
        fullWidth
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{
          "& .MuiInputBase-root": {
            padding: "0.5em",
            backgroundColor: (theme) => theme.palette.background.default,
            fontSize: "0.8em",
            minHeight: "34px",
          },
          "& fieldset": {
            border: "0 !important",
          },
        }}
      />
      <IconButton
        disableRipple
        onClick={handleSendMessage}
        sx={{
          height: "34px",
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
            color: sending ? "text.secondary" : "white",
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
