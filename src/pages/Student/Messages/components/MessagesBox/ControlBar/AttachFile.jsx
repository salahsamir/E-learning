import { AttachFile as AttachFileIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";

const AttachFile = ({ attachFile }) => {
  const handleAttachFile = (file) => {
    if (file.size > 1024 * 1024 * 100) {
      toast.error("File size should be less than 100MB");
      return;
    }
    attachFile(file);
  };
  return (
    <IconButton
      component={"label"}
      htmlFor={"attachFileChat"}
      sx={{
        padding: "4px",
      }}
    >
      <AttachFileIcon fontSize="small" />
      <input
        type="file"
        name="attachFileChat"
        id="attachFileChat"
        hidden
        accept="image/*,audio/*,video/*,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.zip,.rar,.7z"
        onChange={(e) => {
          const file = e.target.files[0];
          handleAttachFile(file);
          e.target.value = "";
        }}
      />
    </IconButton>
  );
};

export default AttachFile;
