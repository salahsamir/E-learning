import React from "react";
import ReactQuill from "react-quill";
import "./TextEditor.css";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }, { size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [
      { align: [] },
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ color: [] }, { background: [] }],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "align",
  "list",
  "bullet",
  "indent",
  "link",
  "background",
  "color",
];

const Wrapper = styled(Box)(({ theme }) => ({
  "& .quill": {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  "& .ql-editor": {
    height: "100%",
    overflow: "auto",
  },
  "& .ql-container.ql-snow": {
    backgroundColor: theme.palette.background.b1,
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    borderColor: "rgba(145, 158, 171, 0.2)",
    overflow: "auto",
    flexGrow: 1,
  },
  "& .ql-snow.ql-toolbar": {
    backgroundColor: theme.palette.background.b1,
    borderColor: "rgba(145, 158, 171, 0.2)",
  },
  "& .ql-snow .ql-stroke": {
    stroke: theme.palette.text.primary,
  },
  "& .ql-snow .ql-fill": {
    fill: theme.palette.text.primary,
  },
  "& .ql-snow .ql-picker": {
    color: theme.palette.text.primary,
  },
  ".ql-snow .ql-picker-options": {
    backgroundColor: theme.palette.background.b1,
  },
  "& .ql-snow.ql-toolbar button:hover .ql-stroke, & .ql-snow .ql-toolbar button:hover .ql-stroke, & .ql-snow.ql-toolbar button:focus .ql-stroke, & .ql-snow .ql-toolbar button:focus .ql-stroke, & .ql-snow.ql-toolbar button.ql-active .ql-stroke, & .ql-snow .ql-toolbar button.ql-active .ql-stroke, & .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, & .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, & .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, & .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, & .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, & .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, & .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, & .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, & .ql-snow.ql-toolbar button:hover .ql-stroke-miter, & .ql-snow .ql-toolbar button:hover .ql-stroke-miter, & .ql-snow.ql-toolbar button:focus .ql-stroke-miter, & .ql-snow .ql-toolbar button:focus .ql-stroke-miter, & .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, & .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, & .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, & .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, & .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, & .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, & .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, & .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, & .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, & .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter":
    {
      stroke: theme.palette.primary.main,
    },
  "& .ql-snow.ql-toolbar button:hover .ql-fill, & .ql-snow .ql-toolbar button:hover .ql-fill, & .ql-snow.ql-toolbar button:focus .ql-fill, & .ql-snow .ql-toolbar button:focus .ql-fill, & .ql-snow.ql-toolbar button.ql-active .ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-fill, & .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill, & .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill, & .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill, & .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill, & .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill, & .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill, & .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill, & .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill, & .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill, & .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill, & .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill, & .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill, & .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill, & .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill, & .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, & .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, & .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, & .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, & .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, & .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, & .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill, & .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill":
    {
      fill: theme.palette.primary.main,
    },
  " & .ql-snow.ql-toolbar button:hover, & .ql-snow .ql-toolbar button:hover, & .ql-snow.ql-toolbar button:focus, & .ql-snow .ql-toolbar button:focus, & .ql-snow.ql-toolbar button.ql-active, & .ql-snow .ql-toolbar button.ql-active, & .ql-snow.ql-toolbar .ql-picker-label:hover, & .ql-snow .ql-toolbar .ql-picker-label:hover, & .ql-snow.ql-toolbar .ql-picker-label.ql-active, & .ql-snow .ql-toolbar .ql-picker-label.ql-active, & .ql-snow.ql-toolbar .ql-picker-item:hover, & .ql-snow .ql-toolbar .ql-picker-item:hover, & .ql-snow.ql-toolbar .ql-picker-item.ql-selected, & .ql-snow .ql-toolbar .ql-picker-item.ql-selected":
    {
      color: theme.palette.primary.main,
    },
  "& .ql-editor.ql-blank::before": {
    color: theme.palette.text.secondary,
  },
}));
function TextEditor({ id, value, placeholder, onChange, onBlur, sx }) {
  return (
    <Wrapper sx={sx}>
      <ReactQuill
        value={value}
        modules={modules}
        formats={formats}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        placeholder={placeholder}
      />
    </Wrapper>
  );
}

export default TextEditor;
