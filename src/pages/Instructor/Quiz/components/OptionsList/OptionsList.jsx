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
import OptionItem from "./OptionItem/OptionItem";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
<<<<<<< HEAD
import { useReorderOptions } from "api/instructor/quiz.tsx";
=======
>>>>>>> 7910483 (finished basic quiz structure)

function OptionsList({ items, questionId, isExpanded }) {
  const { mutate: reorderOptions } = useReorderOptions();
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    const activeIndex = items.findIndex((item) => item.id === active.id);
    const overIndex = items.findIndex((item) => item.id === over.id);
    if (activeIndex === overIndex) return;
    reorderOptions({
      questionId,
      optionId: active.id,
      order: {
        startPosition: activeIndex + 1,
        endPosition: overIndex + 1,
      },
    });
  };
<<<<<<< HEAD
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);
=======
>>>>>>> 7910483 (finished basic quiz structure)
  const imgOptionsCount =
    items.reduce((acc, curr) => {
      return (acc += curr.imageUrl ? 1 : 0);
    }, 0) || 0;
  const gridColumns =
    isExpanded || imgOptionsCount < items.length / 2
      ? {
          xs: 12,
        }
      : {
          xs: 12,
          sm: 6,
          md: items.length === 3 ? 4 : 6,
        };
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext items={items || []}>
        <Grid2
          container
          spacing={isExpanded || imgOptionsCount < items.length / 2 ? 1 : 2}
          my="8px"
        >
          {items?.map((item, index) => (
            <Grid2 key={item.id} {...gridColumns}>
              <OptionItem
                item={item}
                questionId={questionId}
                isExpanded={isExpanded}
              />
            </Grid2>
          ))}
        </Grid2>
      </SortableContext>
    </DndContext>
  );
}

export default OptionsList;
