import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React, { useState } from "react";
import { Box } from "@mui/material";
import QuestionItem from "./QuestionItem/QuestionItem";
import { useReorderQuestions } from "api/instructor/quiz.tsx";

function QuestionsList({ items }) {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
<<<<<<< HEAD
  const { mutate: reorderQuestions } = useReorderQuestions();
=======
>>>>>>> 7910483 (finished basic quiz structure)
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    const activeIndex = items.findIndex((item) => item.id === active.id);
    const overIndex = items.findIndex((item) => item.id === over.id);
    if (activeIndex === overIndex) return;
    reorderQuestions({
      questionId: active.id,
      order: {
        startPosition: activeIndex + 1,
        endPosition: overIndex + 1,
      },
    });
  };
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1em",
            my: "1em",
          }}
        >
          {items?.map((item, index) => (
            <QuestionItem
              key={item.id}
              item={item}
              questionIndex={index}
              expandedQuestion={expandedQuestion}
              setExpandedQuestion={setExpandedQuestion}
            />
          ))}
        </Box>
      </SortableContext>
    </DndContext>
  );
}

export default QuestionsList;
