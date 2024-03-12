import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import React from "react";
import { Box } from "@mui/material";
import OptionItem from "./OptionItem/OptionItem";

function OptionsList({ items, questionId, isExpanded }) {
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    const activeIndex = items.findIndex((item) => item.id === active.id);
    const overIndex = items.findIndex((item) => item.id === over.id);
    if (activeIndex === overIndex) return;
  };
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items || []}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5em",
            my: "1em",
          }}
        >
          {items?.map((item, index) => (
            <OptionItem
              key={item.id}
              item={item}
              questionId={questionId}
              isExpanded={isExpanded}
            />
          ))}
        </Box>
      </SortableContext>
    </DndContext>
  );
}

export default OptionsList;
