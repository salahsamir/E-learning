import { PlayCircleOutline } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import useGetParams from "hooks/useGetParams";
import { useUploadContext } from "pages/Instructor/shared/context/upload-context.tsx";
import React from "react";

const NewVideoButton = () => {
  const params = useGetParams();
  const { addItems } = useUploadContext();
  const handleFileChange = (e) => {
    const uploadItems = [...e.target.files].map((file) => {
      const body = new FormData();
      body.append("title", file.name.split(".").slice(0, -1).join("."));
      body.append("video", file);
      return {
        id: Math.random().toString(36),
        name: file.name.split(".").slice(0, -1).join("."), // remove extension
        body: body,
        method: "POST",
        path: `/course/${params[1]}/chapter/${params[0]}/curriculum/video`,
      };
    });
    addItems(uploadItems);
    e.target.value = null;
  };
  return (
    <MenuItem>
      <label
        htmlFor="videos-input"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          cursor: "pointer",
        }}
      >
        <ListItemIcon>
          <PlayCircleOutline />
        </ListItemIcon>
        <ListItemText>New Video</ListItemText>
      </label>
      <input
        type="file"
        name="videos-input"
        id="videos-input"
        multiple
        hidden
        accept="video/*"
        onChange={handleFileChange}
      />
    </MenuItem>
  );
};

export default NewVideoButton;
