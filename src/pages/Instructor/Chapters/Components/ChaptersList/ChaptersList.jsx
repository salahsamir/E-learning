import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import React from "react";
import ChapterItem from "./ChapterItem";
import { Box } from "@mui/material";
import axios from "axios";
import useGetParams from "hooks/useGetParams";
import { BaseApi } from "util/BaseApi";

function ChaptersList({ items, setItems }) {
  const params = useGetParams();
  const sensors = [
    useSensor(PointerSensor, {
      activationConstraint: { delay: 150, tolerance: 5 },
    }),
  ];
  console.log("items: ", items);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log(active, over);
    if (!over) return;
    const activeIndex = items.findIndex((item) => item.id === active.id);
    const overIndex = items.findIndex((item) => item.id === over.id);
    if (activeIndex === overIndex) return;
    setItems((items) => {
      return arrayMove(items, activeIndex, overIndex);
    });
    axios
      .patch(
        BaseApi + `/course/${params[0]}/chapter/${active.id}?change_order=true`,
        {
          startPosition: String(activeIndex + 1),
          endPosition: String(overIndex + 1),
        },
        {
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {})
      .catch((err) => {});
  };
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext items={items}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5em" }}>
          {items.map((item) => (
            <ChapterItem key={item.id} item={item} setItems={setItems} />
          ))}
        </Box>
      </SortableContext>
    </DndContext>
  );
}

export default ChaptersList;
