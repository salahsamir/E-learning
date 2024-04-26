import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import React from "react";
import { Box } from "@mui/material";
import TopicItem from "./TopicItem";
import { useReorderTopic } from "api/instructor/topics.tsx";

function TopicsList({ items }) {
  const { mutate: reorderTopic } = useReorderTopic();
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    const activeIndex = items.findIndex((item) => item.id === active.id);
    const overIndex = items.findIndex((item) => item.id === over.id);
    if (activeIndex === overIndex) return;
    reorderTopic({
      topicId: active.id,
      order: {
        startPosition: activeIndex + 1,
        endPosition: overIndex + 1,
      },
    });
  };
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext items={items}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.25em",
          }}
        >
          {items.map((item) => (
            <TopicItem key={item.id} item={item} />
          ))}
        </Box>
      </SortableContext>
    </DndContext>
  );
}

export default TopicsList;
