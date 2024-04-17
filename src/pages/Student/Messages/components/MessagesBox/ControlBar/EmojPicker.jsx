import { SentimentSatisfiedOutlined } from "@mui/icons-material";
import { ClickAwayListener, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Picker from "emoji-picker-react";

const EmojPicker = ({ insertEmoji }) => {
  const [showEmojPicker, setShowEmojPicker] = useState(false);
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <IconButton
        onClick={() => setShowEmojPicker((prev) => !prev)}
        sx={{
          padding: "4px",
        }}
      >
        <SentimentSatisfiedOutlined fontSize="small" />
      </IconButton>
      {showEmojPicker && (
        <ClickAwayListener onClickAway={() => setShowEmojPicker(false)}>
          <Box
            sx={{
              position: "absolute",
              bottom: 40,
              right: { xs: -80, sm: 0 },
              backgroundColor: "background.b1",
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: "8px",
              height: "360px",
              width: "280px",
              " .epr-emoji-category-label": {
                color: "text.secondary",
                position: "relative",
                backgroundColor: "inherit",
                fontSize: "12px",
                fontWeight: "600",
              },
              " .epr-btn:hover": {
                backgroundColor: (theme) =>
                  theme.palette.action.hover + " !important",
              },
            }}
          >
            <Picker
              searchDisabled
              skinTonesDisabled
              previewConfig={{
                showPreview: false,
              }}
              width="100%"
              height="100%"
              style={{
                backgroundColor: "inherit",
                border: "none",
              }}
              onEmojiClick={(emoji) => insertEmoji(emoji.emoji)}
            />
          </Box>
        </ClickAwayListener>
      )}
    </Box>
  );
};

export default EmojPicker;
