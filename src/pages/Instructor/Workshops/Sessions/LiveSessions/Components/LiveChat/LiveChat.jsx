import { useChat } from "@livekit/components-react";
import { AttachFile, Send } from "@mui/icons-material";
import { Box, IconButton, InputBase } from "@mui/material";
import React from "react";

function LiveChat() {
  const { send: sendMessage, chatMessages } = useChat();
  function handleSendMessage() {
    sendMessage("Hello World");
  }
  console.log("chatMessages:", chatMessages);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflow: "auto",
          px: "1em",
        }}
      ></Box>
      <Box
        sx={{
          height: "50px",
          padding: "0.5em 1em",
        }}
      >
        <Box
          sx={{
            height: "100%",
            borderRadius: "2em",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
            backdropFilter: "blur(3px)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <IconButton
            disableRipple
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "0px",
              zIndex: 1,
            }}
          >
            <AttachFile
              sx={{
                height: "0.7em",
              }}
            />
          </IconButton>
          <InputBase
            fullWidth
            sx={{
              pl: "1.8em",
              pr: "1.9em",
            }}
          />
          <IconButton
            disableRipple
            onClick={handleSendMessage}
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: "0px",
              zIndex: 1,
            }}
          >
            <Send
              sx={{
                height: "0.7em",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default LiveChat;
