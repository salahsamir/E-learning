import { DragIndicator } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const DragButton = ({ position, setPosition }) => {
  return (
    <IconButton
      aria-label="move stream window"
      disableRipple
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setDragImage(new Image(), 0, 0);
        e.dataTransfer.effectAllowed = "move";
      }}
      onDrag={(e) => {
        if (e.clientX === position.x && e.clientY === position.y) return;
        if (e.clientX <= 0 || e.clientY <= 0) return;
        setPosition({ x: e.clientX - 24, y: e.clientY - 24 });
      }}
      onTouchStart={(e) => {
        // e.dataTransfer.setDragImage(new Image(), 0, 0);
        // e.dataTransfer.effectAllowed = "move";
      }}
      onTouchMove={(e) => {
        e.stopPropagation();
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;
        console.log(e);
        if (x === position.x && y === position.y) return;
        if (x <= 0 || y <= 0) return;
        setPosition({ x: x - 24, y: y - 24 });
      }}
      sx={{
        position: "absolute",
        top: "8px",
        left: "8px",
        padding: "0",
        transform: "rotate(90deg)",
        touchAction: "none",
        zIndex: 10001,
        backdropFilter: "blur(2px)",
        height: "24px",
        width: "24px",
        "&:hover": {
          cursor: "grab",
        },
      }}
    >
      <DragIndicator
        sx={{
          height: { xs: "18px", sm: "24px" },
          width: { xs: "18px", sm: "24px" },
        }}
      />
    </IconButton>
  );
};

export default DragButton;
