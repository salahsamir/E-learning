import { Send } from "@mui/icons-material";
import { Box, IconButton, TextField, darken, lighten } from "@mui/material";
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
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderTopLeftRadius: "4px",
          borderBottomLeftRadius: "4px",
          "& .MuiInputBase-root": {
            padding: "0.5em",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? lighten(theme.palette.background.b1, 0.03)
                : darken(theme.palette.background.b1, 0.03),
            fontSize: "0.8em",
            minHeight: "32px",
            maxHeight: "100px",
            overflowY: "auto",
            py: "0.5em",
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
